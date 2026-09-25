# اتصال پیامک — Alborz Digitex

سایت روی دامنه **https://www.alborz-digitex.ir/** است. کلید را در خود سورس نگذارید.

## کجا وارد کنم؟

### تولید (Vercel + Cloudflare)

1. [vercel.com](https://vercel.com) → پروژه → **Settings** → **Environment Variables**
2. متغیرها را برای **Production** و **Preview** اضافه کنید.
3. **Redeploy** کنید تا خوانده شوند.

بدون این مرحله پیامک ارسال نمی‌شود؛ در محیط توسعه کد OTP در پاسخ API می‌آید تا بتوانید تست کنید.

### محلی

فایل `.env` در ریشه پروژه (از روی `.env.example`). بعد `npm run dev`.

## متغیرها

| کلید | توضیح |
|---|---|
| `SMS_PROVIDER` | `kavenegar` یا `smsir` یا `melipayamak` یا `ghasedak` یا `webhook` |
| `SMS_API_KEY` | کلید کاوه‌نگار / sms.ir / قاصدک |
| `SMS_SENDER` / `SMS_FROM` / `SMS_LINE` | شماره خط ارسال |
| `SMS_OTP_TEMPLATE` | نام پترن Lookup کاوه‌نگار (پیشنهادی برای OTP) |
| `SMS_OTP_TEMPLATE_ID` | شناسه قالب sms.ir |
| `SMS_USERNAME` + `SMS_PASSWORD` | ملی‌پیامک |
| `SMS_WEBHOOK_URL` | اگر پنل سفارشی دارید؛ `POST { to, text, code }` |
| `DATABASE_URL` | Postgres (Neon رایگان) — **برای ماندگاری ثبت‌نام روی Vercel لازم است** |
| `JWT_SECRET` | رشته تصادفی بلند |
| `PUBLIC_URL` | `https://www.alborz-digitex.ir` |

## کاوه‌نگار (رایج)

1. پترن OTP بسازید با توکن `token` = کد.
2. در Vercel:
   - `SMS_PROVIDER=kavenegar`
   - `SMS_API_KEY=...`
   - `SMS_OTP_TEMPLATE=نام‌پترن`

کد در `server/sms.js` است.

## پنل مدیریت

- مدیرکل: `admin` / `Digitex@123456` — همه بخش‌ها
- ناظر: `supervisor` / `123456` — فقط ثبت‌نام‌ها و پیام‌ها
- آدرس: `https://www.alborz-digitex.ir/admin`
