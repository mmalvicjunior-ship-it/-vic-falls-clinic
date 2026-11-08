import { describe, it, expect, vi } from "vitest";
vi.mock("@/lib/db", () => ({ getDb: () => null }));
vi.mock("next/headers", () => ({ cookies: () => ({ get: () => ({ value: undefined }), set: vi.fn(), delete: vi.fn() }) }));
import { rateLimited } from "@/lib/ratelimit";
import { sampleDoctors, getPublishedDoctors } from "@/lib/doctors";
describe("rate limiting", () => { it("blocks after limit", () => { for (let i=0;i<5;i++) rateLimited("t1",5); expect(rateLimited("t1",5)).toBe(true); }); it("allows separate keys", () => { expect(rateLimited("t2",5)).toBe(false); }); });
describe("doctors fallback", () => { it("returns labeled samples without DB", async () => { const r = await getPublishedDoctors(); expect(r.source).toBe("sample"); expect(r.doctors.every(d=>d.sample)).toBe(true); }); it("only published samples", () => { expect(sampleDoctors.every(d=>d.status==="published")).toBe(true); }); });
describe("slug uniqueness", () => { it("slugs differ per doctor", () => { const s = sampleDoctors.map(d=>d.slug); expect(new Set(s).size).toBe(s.length); }); });
