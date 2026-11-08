import { describe, it, expect, vi, beforeAll } from "vitest";
import { createTestDb } from "./helpers/pgmem";
import bcrypt from "bcryptjs";
// --- in-memory cookie store shared between auth lib and tests ---
const jar = new Map<string, any>();
vi.mock("next/headers", () => ({
  cookies: () => ({
    get: (n: string) => (jar.has(n) ? { value: jar.get(n) } : undefined),
    set: (n: string, v: string) => jar.set(n, v),
    delete: (n: string) => jar.delete(n),
  }),
}));
let sql: any;
vi.mock("@/lib/db", () => ({ getDb: () => sql }));
import { POST as register } from "@/app/api/auth/register/route";
import { POST as login } from "@/app/api/auth/login/route";
import { POST as approve } from "@/app/api/admin/approve/route";
import { POST as profile } from "@/app/api/doctor-profile/route";
import { POST as book } from "@/app/api/appointments/route";
import { GET as pubDoctors } from "@/app/api/doctors-public/route";
const req = (body: any) => new Request("http://test.local/api", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) });
let doctorId = "", publishedId = "";
beforeAll(async () => {
  process.env.SESSION_SECRET = "test-secret-for-unit-tests-only-0123456789";
  const t = await createTestDb(); sql = t.sql;
  // seed an approved admin (test-only, never production)
  const hash = await bcrypt.hash("admin-pass-123", 4);
  await sql`INSERT INTO users(full_name,email,password_hash,role,status) VALUES('Test Admin','admin@test.local',${hash},'admin','approved')`;
});
it("registers a client (auto-approved) and a provider (pending)", async () => {
  const c = await register(req({ full_name: "C One", email: "client@test.local", phone: "12345", password: "password123", confirm: "password123", provider_type: "client" }));
  expect((await c.json()).status).toBe("approved");
  const d = await register(req({ full_name: "Dr Test", email: "doc@test.local", phone: "12345", password: "password123", confirm: "password123", provider_type: "doctor" }));
  expect((await d.json()).status).toBe("pending");
});
it("rejects login with wrong password (no enumeration)", async () => {
  const r = await login(req({ email: "client@test.local", password: "wrong" }));
  expect(r.status).toBe(401);
  expect((await r.json()).error).toMatch(/Invalid email or password/);
});
it("pending provider cannot log in", async () => {
  const r = await login(req({ email: "doc@test.local", password: "password123" }));
  expect(r.status).toBe(403);
});
it("admin login + approves provider account", async () => {
  const l = await login(req({ email: "admin@test.local", password: "admin-pass-123" }));
  expect((await l.json()).ok).toBe(true);
  const rows = await sql`SELECT id FROM users WHERE email='doc@test.local'`;
  doctorId = rows[0].id;
  const a = await approve(req({ type: "user", id: doctorId, decision: "approved" }));
  expect((await a.json()).ok).toBe(true);
  const logs = await sql`SELECT * FROM audit_logs`;
  expect(logs.length).toBeGreaterThan(0);
});
it("doctor logs in, submits profile (pending_approval, hidden publicly)", async () => {
  jar.clear();
  const l = await login(req({ email: "doc@test.local", password: "password123" }));
  expect((await l.json()).ok).toBe(true);
  const s = await profile(req({ full_name: "Dr Test", speciality: "ENT", qualifications: "MBBS", years_experience: 5, biography: "Test bio", expertise: ["Ear"], languages: ["English"], consultation_info: "Mon-Fri", submit: true }));
  expect((await s.json()).status).toBe("pending_approval");
  const pub = await pubDoctors();
  const j = await pub.json();
  expect(j.doctors.some((d: any) => d.full_name === "Dr Test")).toBe(false); // not yet published (samples only)
});
it("admin publishes doctor profile; appears in public listing", async () => {
  jar.clear();
  await login(req({ email: "admin@test.local", password: "admin-pass-123" }));
  const rows = await sql`SELECT id FROM doctor_profiles WHERE user_id=${doctorId}`;
  publishedId = rows[0].id;
  const a = await approve(req({ type: "doctor", id: publishedId, decision: "approved" }));
  expect((await a.json()).ok).toBe(true);
  const j = await (await pubDoctors()).json();
  expect(j.source).toBe("db");
  expect(j.doctors.some((d: any) => d.id === publishedId)).toBe(true);
});
it("editing a published profile triggers reapproval (hidden until re-approved)", async () => {
  jar.clear();
  await login(req({ email: "doc@test.local", password: "password123" }));
  const s = await profile(req({ full_name: "Dr Test", speciality: "ENT Updated", qualifications: "MBBS", years_experience: 6, biography: "Updated", submit: true }));
  expect((await s.json()).status).toBe("pending_approval");
  const j = await (await pubDoctors()).json();
  expect(j.doctors.some((d: any) => d.id === publishedId)).toBe(false);
});
it("authenticated client books with real doctor ID; unauthenticated rejected", async () => {
  // re-publish first
  jar.clear();
  await login(req({ email: "admin@test.local", password: "admin-pass-123" }));
  await approve(req({ type: "doctor", id: publishedId, decision: "approved" }));
  jar.clear();
  const unauth = await book(req({ name: "C One", email: "client@test.local", phone: "12345", date: "2026-01-01", department: "ear", doctor_id: publishedId }));
  expect(unauth.status).toBe(401);
  await login(req({ email: "client@test.local", password: "password123" }));
  const ok = await book(req({ name: "C One", email: "client@test.local", phone: "12345", date: "2026-01-01", department: "ear", doctor_id: publishedId }));
  expect((await ok.json()).ok).toBe(true);
  const appts = await sql`SELECT doctor_id FROM appointments`;
  expect(appts[0].doctor_id).toBe(publishedId);
});
it("rejects booking with unpublished/invalid doctor ID", async () => {
  const r = await book(req({ name: "C One", email: "client@test.local", phone: "12345", date: "2026-01-01", department: "ear", doctor_id: "00000000-0000-0000-0000-000000000000" }));
  expect(r.status).toBe(400);
});
