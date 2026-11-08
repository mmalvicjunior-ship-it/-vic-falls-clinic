import { getFreshSession, destFor } from "@/lib/auth"; import { redirect } from "next/navigation"; import AdminDashboard from "./AdminDashboard";
export const dynamic="force-dynamic";
export default async function Page(){ const s=await getFreshSession(); if(!s) redirect("/login"); if(s.status!=="approved") redirect("/login"); if(s.role!=="admin") redirect(destFor(s.role)); return <AdminDashboard/>; }
