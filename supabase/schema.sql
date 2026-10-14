-- Run this once in Supabase → SQL Editor → New query → Run

create table if not exists public.atw_store (
  id int primary key default 1,
  data jsonb not null default '{}'::jsonb,
  updated_at timestamptz default now()
);

insert into public.atw_store (id, data)
values (1, '{
  "registrations": [],
  "messages": [],
  "otps": {},
  "content": { "registrationOpen": true, "noticeFa": "", "noticeEn": "" },
  "seq": 1
}'::jsonb)
on conflict (id) do nothing;

alter table public.atw_store enable row level security;

-- Anon/authenticated have no policy → no public access.
-- The server uses the service_role key, which bypasses RLS.
