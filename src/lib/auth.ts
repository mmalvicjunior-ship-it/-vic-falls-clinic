import { cookies } from "next/headers";
import { SignJWT, jwtVerify } from "jose";
import { getDb } from "./db";
export type Role="client"|"doctor"|"nurse"|"staff"|"admin";
export type Session={id:string;email:string;role:Role;status:string};
function secret(){ const s=process.env.SESSION_SECRET; if(!s) throw new Error("SESSION_SECRET missing"); return new TextEncoder().encode(s); }
export async function createSession(u:Session){ const t=await new SignJWT({...u}).setProtectedHeader({alg:"HS256"}).setExpirationTime("12h").sign(secret()); cookies().set("vfc_session",t,{httpOnly:true,secure:process.env.NODE_ENV==="production",sameSite:"lax",path:"/",maxAge:60*60*12}); }
export async function getSession():Promise<Session|null>{ const t=cookies().get("vfc_session")?.value; if(!t) return null; try{ const {payload}=await jwtVerify(t,secret()); return payload as unknown as Session; }catch{ return null; } }
export async function getFreshSession():Promise<Session|null>{ const s=await getSession(); if(!s) return null; const sql=getDb(); if(!sql) return null; try{ const rows=await sql`SELECT id,email,role,status FROM users WHERE id=${s.id}`; await sql.end(); const u=rows[0]; if(!u) return null; return {id:u.id,email:u.email,role:u.role,status:u.status}; }catch{ try{await sql.end();}catch{} return null; } }
export async function requireRole(roles:Role[]){ const s=await getFreshSession(); if(!s||!roles.includes(s.role)||s.status!=="approved") return null; return s; }
export function destFor(role:Role){ return role==="admin"?"/dashboard/admin":role==="client"?"/dashboard/client":"/dashboard/provider"; }
export function clearSession(){ cookies().delete("vfc_session"); }
