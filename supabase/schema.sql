-- Run this once in Supabase → SQL Editor → New query → Run
-- For existing projects that already have atw_store, run migrate-2026-10-15.sql instead.

create table if not exists public.atw_store (
  id int primary key default 1,
  data jsonb not null default '{}'::jsonb,
  updated_at timestamptz default now()
);

insert into public.atw_store (id, data)
values (1, '{
  "registrations": [],
  "messages": [],
  "secretariat": [],
  "files": {},
  "limits": {},
  "otps": {},
  "content": { "registrationOpen": true, "noticeFa": "", "noticeEn": "" },
  "seq": 1
}'::jsonb)
on conflict (id) do nothing;

create table if not exists public.atw_registrations (
  id text primary key,
  code text not null,
  first_name text not null default '',
  last_name text not null default '',
  mobile text not null default '',
  national_id text not null default '',
  company_name text not null default '',
  status text not null default 'submitted',
  payload jsonb not null default '{}'::jsonb,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create unique index if not exists atw_registrations_code_uq on public.atw_registrations (code);
create unique index if not exists atw_registrations_nid_uq on public.atw_registrations (national_id) where national_id <> '';
create unique index if not exists atw_registrations_mobile_uq on public.atw_registrations (mobile) where mobile <> '';

create table if not exists public.atw_secretariat (
  id text primary key,
  actor_type text not null default '',
  name text not null default '',
  org text not null default '',
  email text not null default '',
  phone text not null default '',
  subject text not null default '',
  message text not null default '',
  file_id text,
  status text not null default 'new',
  payload jsonb not null default '{}'::jsonb,
  created_at timestamptz default now()
);

create table if not exists public.atw_files (
  id text primary key,
  name text not null default '',
  mime text not null default '',
  size int not null default 0,
  data text not null default '',
  created_at timestamptz default now()
);

alter table public.atw_store enable row level security;
alter table public.atw_registrations enable row level security;
alter table public.atw_secretariat enable row level security;
alter table public.atw_files enable row level security;
