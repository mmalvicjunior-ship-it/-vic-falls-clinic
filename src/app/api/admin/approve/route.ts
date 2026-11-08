import { NextResponse } from "next/server"; import { z } from "zod"; import { getDb } from "@/lib/db"; import { requireRole } from "@/lib/auth";
const S=z.object({type:z.enum(["user","doctor"]),id:z.string().uuid(),decision:z.enum(["approved","rejected"])});
export async function POST(r:Request){ const a=await requireRole(["admin"]); if(!a) return NextResponse.json({error:"Admin only."},{status:403});
 const p=S.safeParse(await r.json()); if(!p.success) return NextResponse.json({error:"Invalid approval request."},{status:400});
 const {type,id,decision}=p.data; const ok=decision==="approved";
 const sql=getDb(); if(!sql) return NextResponse.json({error:"Admin action unavailable."},{status:503});
 try{ let res; if(type==="user") res=await sql`UPDATE users SET status=${ok?"approved":"rejected"} WHERE id=${id}`;
  else res=await sql`UPDATE doctor_profiles SET status=${ok?"published":"rejected"} WHERE id=${id}`;
  if(res.count===0){ await sql.end(); return NextResponse.json({error:"Record not found."},{status:404}); }
  await sql`INSERT INTO audit_logs(admin_id,action,target_type,target_id,details) VALUES(${a.id},${decision},${type},${id},'admin action')`; await sql.end(); return NextResponse.json({ok:true}); }catch(e){ console.error("approve error",e); try{await sql.end();}catch{} return NextResponse.json({error:"Action failed. Please try again."},{status:500}); } }
