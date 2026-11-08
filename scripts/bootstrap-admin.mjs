// Env-based admin bootstrap. No hardcoded credentials.
// Usage: set DATABASE_URL, ADMIN_EMAIL, ADMIN_PASSWORD, ADMIN_NAME in env, then: node scripts/bootstrap-admin.mjs
import postgres from "postgres"; import bcrypt from "bcryptjs";
const {DATABASE_URL,ADMIN_EMAIL,ADMIN_PASSWORD,ADMIN_NAME}=process.env;
if(!DATABASE_URL||!ADMIN_EMAIL||!ADMIN_PASSWORD){ console.error("Set DATABASE_URL, ADMIN_EMAIL, ADMIN_PASSWORD"); process.exit(1); }
const sql=postgres(DATABASE_URL,{prepare:false}); const hash=await bcrypt.hash(ADMIN_PASSWORD,12);
await sql`INSERT INTO users(full_name,email,password_hash,role,status) VALUES(${ADMIN_NAME||"Clinic Administrator"},${ADMIN_EMAIL},${hash},'admin','approved') ON CONFLICT(email) DO UPDATE SET password_hash=EXCLUDED.password_hash, role='admin', status='approved'`;
await sql.end(); console.log("Admin bootstrapped:",ADMIN_EMAIL);
