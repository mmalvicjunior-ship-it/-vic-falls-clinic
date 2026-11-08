import { NextResponse } from "next/server"; import bcrypt from "bcryptjs"; import { getDb } from "@/lib/db"; import { createSession, destFor } from "@/lib/auth"; import { rateLimited } from "@/lib/ratelimit";
export async function POST(r:Request){ if(rateLimited("login:"+(r.headers.get("x-forwarded-for")||"anon"),10)) return NextResponse.json({error:"Too many attempts. Try again later."},{status:429});
 const sql=getDb(); if(!sql) return NextResponse.json({error:"Sign-in is temporarily unavailable."},{status:503});
 const {email,password}=await r.json(); let u; try{ const rows=await sql`SELECT * FROM users WHERE email=${email||""}`; u=rows[0]; await sql.end(); }catch(e){ console.error("login error",e); try{await sql.end();}catch{} return NextResponse.json({error:"Sign-in is temporarily unavailable."},{status:500}); }
 if(!u||!await bcrypt.compare(password||"",u.password_hash)) return NextResponse.json({error:"Invalid email or password."},{status:401});
 if(u.status==="pending") return NextResponse.json({error:"Account pending admin approval."},{status:403});
 if(u.status!=="approved") return NextResponse.json({error:"Account is not active."},{status:403});
 await createSession({id:u.id,email:u.email,role:u.role,status:u.status});
 return NextResponse.json({ok:true,dest:destFor(u.role)}); }
