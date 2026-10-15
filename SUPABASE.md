# دیتابیس روی Supabase

ثبت‌نام‌ها، OTP، پیام‌ها، دبیرخانه و QR روی سوپابیس ذخیره می‌شوند. کلید را در سورس نگذارید.

## به‌روزرسانی پروژهٔ موجود (لازم برای QR و دبیرخانه)

در داشبورد سوپابیس: **SQL Editor → New query**، کل فایل

`supabase/migrate-2026-10-15.sql`

را Paste و **Run** کنید. جدول `atw_store` دست نمی‌خورد؛ جدول‌های `atw_registrations`، `atw_secretariat` و `atw_files` اضافه می‌شوند.

## ۱) پروژه

1. به [supabase.com](https://supabase.com) بروید و **New project** بسازید.
2. رمز دیتابیس را جایی امن نگه دارید.

## ۲) جدول

در داشبورد: **SQL Editor → New query**، محتوای فایل `supabase/schema.sql` را Paste و **Run** کنید.

باید جدول `public.atw_store` ساخته شود.

## ۳) کلیدها

**Project Settings → API:**

| در Vercel بگذارید | از کجا بردارید |
|---|---|
| `SUPABASE_URL` | Project URL — مثل `https://abcdxyz.supabase.co` |
| `SUPABASE_SERVICE_ROLE_KEY` | `service_role` **secret** — نه `anon` |

`service_role` فقط سمت سرور است و RLS را دور می‌زند. هرگز در فرانت یا گیت‌هاب عمومی نگذارید.

## ۴) Vercel

1. پروژه → **Settings → Environment Variables**
2. برای **Production** و **Preview**:
   - `SUPABASE_URL`
   - `SUPABASE_SERVICE_ROLE_KEY`
   - `JWT_SECRET` (یک رشته تصادفی بلند)
   - `PUBLIC_URL` = `https://www.alborz-digitex.ir`
3. **Redeploy** کنید.

لوکال: همین دو متغیر را در `.env` بگذارید.

## ۵) تست

بعد از دیپلوی:

- `https://www.alborz-digitex.ir/api/health` باید `"persistence":"supabase"` باشد.
- پنل: `/admin` با `admin` / `Digitex@123456`

اگر persistence هنوز `ephemeral` است، نام متغیرها یا Redeploy اشتباه است.
