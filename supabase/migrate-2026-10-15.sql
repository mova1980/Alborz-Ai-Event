-- هفته تکنولوژی البرز — به‌روزرسانی سوپابیس
-- SQL Editor → New query → Run
-- بی‌خطر برای اجرای دوباره (IF NOT EXISTS)
-- دادهٔ قبلی داخل atw_store.data باقی می‌ماند.

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

-- جدول ثبت‌نام ورود (QR + کد رهگیری)
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
create index if not exists atw_registrations_status_idx on public.atw_registrations (status);
create index if not exists atw_registrations_created_idx on public.atw_registrations (created_at desc);

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

-- پیوست‌ها
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

-- هیچ policy برای anon/authenticated نیست.
-- سرور فقط با SUPABASE_SERVICE_ROLE_KEY می‌نویسد.

comment on table public.atw_registrations is 'ثبت‌نام ورود رویداد — QR و کد رهگیری یکتا';
comment on table public.atw_secretariat is 'پیام‌ها و نامه‌های دبیرخانه رویداد';
comment on table public.atw_files is 'پیوست دبیرخانه (base64)';
