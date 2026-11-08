import { getFreshSession, destFor } from "@/lib/auth"; import { redirect } from "next/navigation"; import ProviderDashboard from "./ProviderDashboard";
export const dynamic="force-dynamic";
export default async function Page(){ const s=await getFreshSession(); if(!s) redirect("/login"); if(s.status!=="approved") redirect("/login"); if(!["doctor","nurse","staff"].includes(s.role)) redirect(destFor(s.role)); return <ProviderDashboard role={s.role}/>; }
