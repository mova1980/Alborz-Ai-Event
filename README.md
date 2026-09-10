# هفته تکنولوژی البرز ۱۴۰۵ — اجرای کامل لوکال

سایت دوزبانه رویداد (فارسی پیش‌فرض، انگلیسی `/en`) با همهٔ افکت‌ها، صفحات و دارایی‌ها.

باز کردن `index.html` به‌صورت فایل کار نمی‌کند. باید با Node اجرا شود.

## پیش‌نیاز

- **Node.js ۱۸ یا جدیدتر** — [nodejs.org](https://nodejs.org)
- npm همراه Node است

بررسی:

```bash
node -v
npm -v
```

## اجرا در ۳۰ ثانیه

### ویندوز

1. پوشه را از زیپ بیرون بکش.
2. روی `start-local.bat` دوبار کلیک کن  
   یا در PowerShell داخل پوشه:

```bat
npm install
npm run dev
```

مرورگر: [http://localhost:5173](http://localhost:5173)

### مک / لینوکس

```bash
chmod +x start-local.sh
./start-local.sh
```

یا:

```bash
npm install
npm run dev
```

همان آدرس: [http://localhost:5173](http://localhost:5173)

- فارسی: `/`
- انگلیسی: `/en`
- برنامه: `/program` — غرفه: `/exhibit` — بازدید: `/visit` — مسائل: `/problems` — مکان: `/venue`

سرور روی `0.0.0.0:5173` است؛ از دستگاه‌های دیگر شبکه با `http://IP-سیستم:5173` هم باز می‌شود.

توقف: در ترمینال `Ctrl+C`.

## ساخت نسخهٔ ثابت (مثل سرور واقعی)

```bash
npm install
npm run build
npm run preview
```

خروجی در `dist/` است. برای nginx/Apache کل `dist` را سرو کن و همهٔ مسیرها را به `index.html` بفرست (SPA).

نمونه nginx:

```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

## محتویات بسته

| مسیر | چیست |
|------|------|
| `src/` | کل رابط، صفحات، افکت‌ها |
| `public/images/` | لوگو، زمین، عکس بخش‌ها |
| `public/fonts/` | جای Modam و IRANSans (اختیاری) |
| `package.json` + `package-lock.json` | وابستگی‌های قفل‌شده |
| `vite.config.js` | میزبان لوکال و SPA |
| `vercel.json` | rewrite برای دیپلوی |

`node_modules` داخل زیپ نیست؛ با `npm install` روی سیستم خودت ساخته می‌شود. بعد از نصب، **اینترنت لازم نیست** — فونت Outfit/Syne/Vazirmatn، Three.js، کره و تصاویر همه محلی‌اند.

## فونت فارسی (اختیاری)

اگر فایل داری در این پوشه‌ها بگذار؛ بدون تغییر کد خوانده می‌شوند:

1. `public/fonts/Modam/` — `Modam-Regular.woff2` و وزن‌های 500–900
2. `public/fonts/IRANSans/` — Regular / Medium / Bold

بدون این فایل‌ها Vazirmatn استفاده می‌شود.

## اگر اجرا نشد

- نسخه Node پایین است → ۱۸+ نصب کن
- پورت ۵۱۷۳ اشغال است → همان پورت را آزاد کن (`vite.config.js` روی ۵۱۷۳ قفل است)
- `npm install` خطا داد → داخل پوشه پروژه هستی؟ `package.json` باید دیده شود
- صفحه سفید → آدرس باید `http://localhost:5173` باشد نه فایل HTML
