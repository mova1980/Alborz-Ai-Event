-- =====================================================================
-- هفته تکنولوژی البرز — یک فایل برای سوپابیس آنلاین
-- SQL Editor → New query → Paste همهٔ فایل → Run
-- تکرار اجرا امن است (IF NOT EXISTS). دادهٔ atw_store پاک نمی‌شود.
-- =====================================================================

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

-- ثبت‌نام + بارکد خطی Code 128 (کد بدون خط‌تیره، مثلاً ATW000000042)
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
  updated_at timestamptz default now(),
  first_checked_in_at timestamptz
);

alter table public.atw_registrations
  add column if not exists first_checked_in_at timestamptz;

create unique index if not exists atw_registrations_code_uq on public.atw_registrations (code);
create unique index if not exists atw_registrations_nid_uq on public.atw_registrations (national_id) where national_id <> '';
create unique index if not exists atw_registrations_mobile_uq on public.atw_registrations (mobile) where mobile <> '';
create index if not exists atw_registrations_status_idx on public.atw_registrations (status);
create index if not exists atw_registrations_created_idx on public.atw_registrations (created_at desc);

-- حضور روزانه (ورود / خروج)
create table if not exists public.atw_checkins (
  id text primary key,
  registration_id text not null,
  code text not null default '',
  day date not null,
  checked_in_at timestamptz not null default now(),
  checked_out_at timestamptz,
  checked_in_by text not null default '',
  inside boolean not null default true,
  last_dir text not null default 'in',
  last_at timestamptz,
  scan_count int not null default 1,
  scans jsonb not null default '[]'::jsonb
);

alter table public.atw_checkins
  add column if not exists checked_out_at timestamptz,
  add column if not exists inside boolean not null default true,
  add column if not exists last_dir text not null default 'in',
  add column if not exists last_at timestamptz,
  add column if not exists scan_count int not null default 1,
  add column if not exists scans jsonb not null default '[]'::jsonb;

create unique index if not exists atw_checkins_reg_day_uq on public.atw_checkins (registration_id, day);
create index if not exists atw_checkins_day_idx on public.atw_checkins (day);
create index if not exists atw_checkins_at_idx on public.atw_checkins (checked_in_at desc);

-- هر اسکن گیت (مجاز / غیرمجاز)
create table if not exists public.atw_scans (
  id text primary key,
  registration_id text,
  code text not null default '',
  raw text not null default '',
  day date not null,
  dir text not null default 'in',
  allowed boolean not null default true,
  at timestamptz not null default now(),
  checked_in_by text not null default '',
  payload jsonb not null default '{}'::jsonb
);

create index if not exists atw_scans_day_idx on public.atw_scans (day);
create index if not exists atw_scans_at_idx on public.atw_scans (at desc);
create index if not exists atw_scans_reg_idx on public.atw_scans (registration_id);

-- دبیرخانه
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

create index if not exists atw_secretariat_status_idx on public.atw_secretariat (status);
create index if not exists atw_secretariat_created_idx on public.atw_secretariat (created_at desc);

-- پیوست دبیرخانه
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
alter table public.atw_checkins enable row level security;
alter table public.atw_scans enable row level security;
alter table public.atw_secretariat enable row level security;
alter table public.atw_files enable row level security;

comment on table public.atw_registrations is 'ثبت‌نام ورود — کد بلیط خطی بدون علامت (ATW000000042)';
comment on table public.atw_checkins is 'حضور روزانه — ورود و خروج هر روز رویداد';
comment on table public.atw_scans is 'هر اسکن گیت — ورود، خروج یا غیرمجاز';
comment on table public.atw_secretariat is 'پیام و نامه دبیرخانه';
comment on table public.atw_files is 'پیوست دبیرخانه';
