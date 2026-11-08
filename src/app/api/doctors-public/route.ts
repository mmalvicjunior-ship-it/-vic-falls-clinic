import { NextResponse } from "next/server"; import { getPublishedDoctors } from "@/lib/doctors";
export async function GET(){ const {doctors,source}=await getPublishedDoctors(); return NextResponse.json({doctors,source}); }
