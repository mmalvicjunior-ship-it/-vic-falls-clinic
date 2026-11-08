import postgres from "postgres";
export function getDb(){ if(!process.env.DATABASE_URL) return null; return postgres(process.env.DATABASE_URL,{prepare:false}); }
