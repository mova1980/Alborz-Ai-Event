-- =====================================================================
-- هفته تکنولوژی البرز — فقط تغییرات گیت / ورود-خروج / بارکد خطی
-- SQL Editor → New query → همهٔ این فایل را Paste کنید → Run
-- دادهٔ atw_store و ثبت‌نام‌های قبلی پاک نمی‌شود. تکرار اجرا امن است.
-- =====================================================================

alter table public.atw_registrations
  add column if not exists first_checked_in_at timestamptz;

comment on column public.atw_registrations.first_checked_in_at is 'اولین ورود به مجموعه';

alter table public.atw_checkins
  add column if not exists checked_out_at timestamptz,
  add column if not exists inside boolean not null default true,
  add column if not exists last_dir text not null default 'in',
  add column if not exists last_at timestamptz,
  add column if not exists scan_count int not null default 1,
  add column if not exists scans jsonb not null default '[]'::jsonb;

comment on table public.atw_checkins is 'حضور روزانه — ورود و خروج هر روز رویداد';

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
create index if not exists atw_scans_allowed_idx on public.atw_scans (allowed);

alter table public.atw_scans enable row level security;

comment on table public.atw_scans is 'هر اسکن گیت Cbon N-200 — ورود، خروج یا غیرمجاز';
