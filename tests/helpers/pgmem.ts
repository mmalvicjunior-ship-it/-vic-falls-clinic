import { newDb, DataType } from "pg-mem";
import fs from "fs"; import path from "path";
// Test-only adapter: emulates the postgres.js template-literal API used by the app,
// backed by an in-process pg-mem database. Never touches a real server or credentials.
export async function createTestDb() {
  const db = newDb({ autoCreateForeignKeyIndices: true });
  // pg-mem lacks these Postgres built-ins; register test-only equivalents.
  let __id = 0; const __uuid = () => `00000000-0000-4000-8000-${String(++__id).padStart(12, "0")}`;
  db.public.registerFunction({ name: "gen_random_uuid", returns: DataType.uuid, args: [], impure: true, implementation: () => __uuid() });
  db.public.registerFunction({ name: "now", returns: DataType.timestamp, args: [], implementation: () => new Date().toISOString() });
  const migration = fs.readFileSync(path.resolve(__dirname, "../../db/migrations/001_init.sql"), "utf8");
  // pg-mem does not support CREATE EXTENSION or CREATE TYPE ... AS ENUM.
  // Test-only transforms: drop both, map enum columns to TEXT (values remain the same strings).
  const compat = migration
    .replace(/CREATE EXTENSION[^\n]*\n?/g, "")
    .replace(/CREATE TYPE[^\n]*\n?/g, "")
    .replace(/\buser_role\b/g, "TEXT")
    .replace(/\baccount_status\b/g, "TEXT")
    .replace(/\bprofile_status\b/g, "TEXT")
    .replace(/\bappointment_status\b/g, "TEXT");
  db.public.none(compat);
  const { Client } = db.adapters.createPg();
  const client = new Client();
  await client.connect();
  const sql: any = async (strings: TemplateStringsArray, ...values: any[]) => {
    let text = strings[0];
    for (let i = 1; i < strings.length; i++) text += "$" + i + strings[i];
    // pg-mem returns arrays for TEXT[] columns; postgres.js does too — pass through.
    const res = await client.query({ text, values });
    const rows: any = res.rows;
    rows.count = res.rowCount ?? rows.length;
    return rows;
  };
  sql.end = async () => {};
  sql.begin = async (fn: any) => fn(sql);
  return { sql, db, client };
}
