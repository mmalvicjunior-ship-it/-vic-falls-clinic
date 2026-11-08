import { NextResponse } from "next/server"; import { requireRole } from "@/lib/auth"; import { getDb } from "@/lib/db";
export async function GET(){ const a=await requireRole(["admin"]); if(!a) return NextResponse.json({error:"Admin only"},{status:403});
 const sql=getDb(); if(!sql) return NextResponse.json({error:"Database not configured."},{status:503});
 const stats=await sql`SELECT COUNT(*) FILTER (WHERE role='client')::int AS clients, COUNT(*) FILTER (WHERE role='doctor')::int AS doctors, COUNT(*) FILTER (WHERE role='nurse')::int AS nurses, COUNT(*) FILTER (WHERE role='staff')::int AS staff FROM users`;
 const users=await sql`SELECT id,full_name,email,status FROM users WHERE status='pending' AND role!='client'`;
 const doctors=await sql`SELECT id,full_name,status FROM doctor_profiles WHERE status='pending_approval'`;
 const logs=await sql`SELECT * FROM audit_logs ORDER BY created_at DESC LIMIT 20`; await sql.end();
 return NextResponse.json({stats:stats[0],users,doctors,logs}); }
