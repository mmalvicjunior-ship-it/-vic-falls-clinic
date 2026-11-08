import { getDb } from "./db";
export type Doctor={id:string;slug:string;full_name:string;photo_path:string|null;speciality:string|null;qualifications:string|null;years_experience:number|null;biography:string|null;expertise:string[];languages:string[];consultation_info:string|null;status:string;sample:boolean};
export const sampleDoctors:Doctor[]=[
 {id:"sample-1",slug:"dr-james-smith",full_name:"Dr. James Smith",photo_path:"https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=60",speciality:"Chief of ENT Surgery",qualifications:"ENT Surgery",years_experience:20,biography:"Board-certified ENT surgeon specializing in complex head and neck procedures.",expertise:[],languages:[],consultation_info:null,status:"published",sample:true},
 {id:"sample-2",slug:"dr-sarah-johnson",full_name:"Dr. Sarah Johnson",photo_path:"https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=800&q=60",speciality:"Pediatric ENT",qualifications:"Pediatric ENT",years_experience:15,biography:"Expert in treating ENT conditions in children of all ages.",expertise:[],languages:[],consultation_info:null,status:"published",sample:true},
 {id:"sample-3",slug:"dr-michael-chen",full_name:"Dr. Michael Chen",photo_path:"https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=800&q=60",speciality:"Head & Neck Surgery",qualifications:"Head & Neck Surgery",years_experience:18,biography:"Specialized in complex head and neck surgical procedures.",expertise:[],languages:[],consultation_info:null,status:"published",sample:true},
 {id:"sample-4",slug:"dr-emily-davis",full_name:"Dr. Emily Davis",photo_path:"https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=60",speciality:"Audiology",qualifications:"Audiology",years_experience:12,biography:"Expert in hearing assessment and rehabilitation.",expertise:[],languages:[],consultation_info:null,status:"published",sample:true},
 {id:"sample-5",slug:"dr-robert-wilson",full_name:"Dr. Robert Wilson",photo_path:"https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=800&q=60",speciality:"Sinus & Allergy",qualifications:"Sinus & Allergy",years_experience:14,biography:"Pioneer in balloon sinuplasty and minimally invasive sinus surgery.",expertise:[],languages:[],consultation_info:null,status:"published",sample:true},
 {id:"sample-6",slug:"dr-lisa-anderson",full_name:"Dr. Lisa Anderson",photo_path:"https://images.unsplash.com/photo-1651008376811-b90baee60c1f?auto=format&fit=crop&w=800&q=60",speciality:"Voice Disorders",qualifications:"Voice Disorders",years_experience:10,biography:"Specialist in voice disorders, swallowing difficulties, and laryngology.",expertise:[],languages:[],consultation_info:null,status:"published",sample:true},
];
export async function getPublishedDoctors():Promise<{doctors:Doctor[];source:"db"|"sample"}>{
 try{ const sql=getDb(); if(!sql) return {doctors:sampleDoctors,source:"sample"};
  const rows=await sql`SELECT * FROM doctor_profiles WHERE status='published' ORDER BY full_name`;
  await sql.end(); if(rows.length===0) return {doctors:sampleDoctors,source:"sample"};
  return {doctors:rows as unknown as Doctor[],source:"db"}; }catch{ return {doctors:sampleDoctors,source:"sample"}; }
}
export async function getDoctorBySlug(slug:string):Promise<{doctor:Doctor|null;source:"db"|"sample"}>{
 try{ const sql=getDb(); if(!sql) return {doctor:sampleDoctors.find(d=>d.slug===slug)??null,source:"sample"};
  const rows=await sql`SELECT * FROM doctor_profiles WHERE slug=${slug} AND status='published'`; await sql.end();
  if(rows[0]) return {doctor:rows[0] as unknown as Doctor,source:"db"};
  return {doctor:sampleDoctors.find(d=>d.slug===slug)??null,source:"sample"}; }catch{ return {doctor:sampleDoctors.find(d=>d.slug===slug)??null,source:"sample"}; }
}
