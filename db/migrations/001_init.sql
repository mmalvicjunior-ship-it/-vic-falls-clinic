CREATE EXTENSION IF NOT EXISTS pgcrypto;
CREATE TYPE user_role AS ENUM ('client','doctor','nurse','staff','admin');
CREATE TYPE account_status AS ENUM ('pending','approved','rejected','suspended');
CREATE TYPE profile_status AS ENUM ('draft','pending_approval','approved','rejected','published');
CREATE TYPE appointment_status AS ENUM ('requested','confirmed','cancelled','completed');
CREATE TABLE users(
 id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
 full_name TEXT NOT NULL,
 email TEXT NOT NULL UNIQUE,
 phone TEXT,
 password_hash TEXT NOT NULL,
 role user_role NOT NULL DEFAULT 'client',
 status account_status NOT NULL DEFAULT 'pending',
 provider_type TEXT,
 registration_ref TEXT,
 photo_path TEXT,
 created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
 updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
CREATE TABLE client_profiles(user_id UUID PRIMARY KEY REFERENCES users(id) ON DELETE CASCADE, date_of_birth DATE, address TEXT, emergency_contact TEXT);
CREATE TABLE provider_profiles(user_id UUID PRIMARY KEY REFERENCES users(id) ON DELETE CASCADE, department TEXT, title TEXT);
CREATE TABLE doctor_profiles(
 id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
 user_id UUID UNIQUE REFERENCES users(id) ON DELETE CASCADE,
 slug TEXT UNIQUE NOT NULL,
 full_name TEXT NOT NULL, photo_path TEXT, speciality TEXT, qualifications TEXT,
 years_experience INT, biography TEXT, expertise TEXT[], languages TEXT[],
 consultation_info TEXT, status profile_status NOT NULL DEFAULT 'draft',
 sample BOOLEAN NOT NULL DEFAULT false,
 created_at TIMESTAMPTZ NOT NULL DEFAULT now(), updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
CREATE INDEX ON doctor_profiles(status, slug);
CREATE TABLE appointments(
 id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
 client_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
 doctor_id UUID REFERENCES doctor_profiles(id) ON DELETE SET NULL,
 patient_name TEXT, email TEXT, phone TEXT, date DATE, time TEXT, department TEXT, message TEXT,
 status appointment_status NOT NULL DEFAULT 'requested', created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
CREATE INDEX ON appointments(client_id, created_at DESC);
CREATE TABLE notifications(id UUID PRIMARY KEY DEFAULT gen_random_uuid(), user_id UUID REFERENCES users(id) ON DELETE CASCADE, title TEXT, body TEXT, is_read BOOLEAN DEFAULT false, created_at TIMESTAMPTZ DEFAULT now());
CREATE TABLE messages(id UUID PRIMARY KEY DEFAULT gen_random_uuid(), sender_id UUID REFERENCES users(id), receiver_id UUID REFERENCES users(id), subject TEXT, body TEXT, created_at TIMESTAMPTZ DEFAULT now());
CREATE TABLE audit_logs(id UUID PRIMARY KEY DEFAULT gen_random_uuid(), admin_id UUID REFERENCES users(id), action TEXT, target_type TEXT, target_id TEXT, details TEXT, created_at TIMESTAMPTZ DEFAULT now());
