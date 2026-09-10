# 🎨 UI/UX Design System — MERC Journals Portal
# راهنمای جامع طراحی رابط کاربری و تجربه کاربری

> **هدف این فایل**: ارائه تمام قواعد، رنگ‌ها، فونت‌ها، افکت‌ها، الگوها و موشن‌گرافیک‌های این سایت به‌گونه‌ای که بتوان در هر گفت‌وگوی دیگری، سایتی با همین ظاهر و کیفیت ساخت.

---

## 📌 ۱. هویت بصری (Visual Identity)

### ۱.۱ پالت رنگی

#### رنگ اصلی: Persian Blue (آبی سورمه‌ای)
```css
/* Persian Blue */
'persian-blue': {
  50:  '#e6f0ff',
  100: '#b3d1ff',
  200: '#80b3ff',
  300: '#4d94ff',
  400: '#1a75ff',
  500: '#0055FF',  /* رنگ اصلی */
  600: '#0044CC',
  700: '#003399',
  800: '#002266',
  900: '#001133',
}

/* Persian Navy (تیره / سورمه‌ای) */
'persian-navy': {
  50:  '#f2f5f9',
  100: '#d4e0ed',
  200: '#a8c1db',
  300: '#7ca2c9',
  400: '#5083b7',
  500: '#2464a5',
  600: '#1d5084',
  700: '#163c63',
  800: '#0f2842',
  900: '#081421',
}

/* Gold Accent */
'gold-accent': {
  400: '#fbbf24',
  500: '#f59e0b',
  600: '#d97706',
}
```

#### رنگ‌های پس‌زمینه
| لایه | رنگ | کاربرد |
|------|------|--------|
| Hero فضایی | `#020810` → `#041529` → `#081421` | پس‌زمینه صفحه اصلی |
| پنل ادمین | `persian-navy-900` (`#081421`) | پس‌زمینه تیره |
| کارت‌های تیره | `persian-navy-800/60` | کارت‌ها روی بک‌گراند تیره |
| بخش‌های روشن | `persian-navy-50` (`#f2f5f9`) | پس‌زمینه نشریات |
| کارت روشن | `white` | کارت‌ها روی بک‌گراند روشن |
| بوردر تیره | `persian-navy-700/50` | حاشیه کارت‌های تیره |
| بوردر روشن | `persian-navy-100` | حاشیه کارت‌های روشن |

#### گرادیانت‌ها
```css
/* گرادیانت Hero */
background: linear-gradient(135deg, #0f2842 0%, #1d5084 50%, #003399 100%);

/* گرادیانت متحرک */
background: linear-gradient(-45deg, #081421, #1d5084, #003399, #0f2842);
background-size: 400% 400%;
animation: gradient 15s ease infinite;
```

---

### ۱.۲ فونت‌ها

| زبان | فونت اصلی | فونت فرعی | CSS |
|------|-----------|-----------|-----|
| **فارسی** | `Modam` (اگر در دسترس) | `Vazirmatn` | `font-family: 'Modam', 'Vazirmatn', sans-serif` |
| **انگلیسی** | `Plus Jakarta Sans` | `Vazirmatn` | `font-family: 'Plus Jakarta Sans', 'Vazirmatn', sans-serif` |
| **آلمانی** | `Plus Jakarta Sans` | `Vazirmatn` | `font-family: 'Plus Jakarta Sans', 'Vazirmatn', sans-serif` |

#### لینک فونت‌ها
```css
/* Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,400&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Vazirmatn:wght@100;200;300;400;500;600;700;800;900&display=swap');

/* فونت Modam (محلی) — فایل‌های woff2 در public/fonts/Modam/ */
@font-face {
  font-family: 'Modam';
  src: url('/fonts/Modam/Modam-Regular.woff2') format('woff2');
  font-weight: 400;
  font-display: swap;
}
/* وزن‌های: 400, 500, 600, 700, 800, 900 */
```

#### قاعده فونت RTL
```css
[dir="rtl"], [lang="fa"], .persian, .font-persian {
  font-family: 'Modam', 'Vazirmatn', 'Plus Jakarta Sans', sans-serif !important;
}
```

---

## 📌 ۲. ساختار و لایه‌بندی (Layout)

### ۲.۱ قاب پیکربندی (Grid/Flex)
```css
/* کانتینر اصلی */
.container { max-width: 1280px; margin: 0 auto; padding: 0 1.5rem; }

/* گرید کارت‌ها */
grid-cols-1 md:grid-cols-2 lg:grid-cols-4

/* گرید ادمین */
grid-cols-1 lg:grid-cols-5
/* Sidebar: 1 col | Content: 4 cols */
```

### ۲.۲ بریک‌پوینت‌ها
| بریک‌پوینت | عرض | کاربرد |
|------------|-----|--------|
| `sm` | 640px | موبایل بزرگ |
| `md` | 768px | تبلت |
| `lg` | 1024px | دسکتاپ کوچک |
| `xl` | 1280px | دسکتاپ بزرگ |

### ۲.۳ گوشه‌ها و سایه‌ها
```css
/* گوشه‌های کارت‌ها */
rounded-2xl    /* کارت‌های اصلی */
rounded-xl     /* کارت‌های فرعی */
rounded-full   /* دکمه‌ها، آواتارها */

/* سایه‌ها */
shadow-lg              /* کارت‌های روشن */
shadow-[0_10px_40px_-15px_rgba(0,48,102,0.15)]  /* کارت فیچر */
shadow-[0_20px_60px_-15px_rgba(0,85,255,0.2)]   /* کارت فیچر hover */
shadow-[0_0_30px_rgba(255,255,255,0.3)]         /* دکمه سفید */
shadow-[0_0_30px_rgba(0,85,255,0.3)]            /* دکمه آبی */
```

---

## 📌 ۳. هدر (Header)

### ۳.۱ رفتار اسکرول
```css
/* هدر ثابت بالای صفحه */
position: fixed; top: 0; width: 100%; z-index: 50;

/* وقتی اسکرول کنید */
bg-persian-navy-900/95 backdrop-blur-md shadow-2xl py-3

/* وقتی بالای صفحه‌اید */
bg-transparent py-4
```

### ۳.۲ ساختار هدر
```
┌──────────────────────────────────────────────────────────┐
│ [لوگو] [MERC Journals] │ [خانه] [نشریات] [اخبار] [تماس] │ [🌍] [🔍] [ورود] [☰] │
└──────────────────────────────────────────────────────────┘
```

### ۳.۳ سوئیچر زبان
```jsx
// درون یک group با hover
<button>🌐 EN</button>
<div class="opacity-0 invisible group-hover:opacity-100 group-hover:visible">
  <button>🇺🇸 English</button>
  <button>🇮🇷 فارسی</button>
  <button>🇩🇪 Deutsch</button>
</div>
```

### ۳.۴ اندیکاتور ناوبری فعال
```jsx
// motion.div با layoutId برای انیمیشن بین تب‌ها
<motion.div layoutId="navIndicator" className="absolute -bottom-2 left-0 right-0 h-0.5 bg-persian-blue-400 rounded-full" />
```

---

## 📌 ۴. Hero Section — صفحه اول

### ۴.۱ ساختار لایه‌ها
```
┌─────────────────────────────────┐
│  Layer 0: پس‌زمینه فضایی تاریک   │ bg-[#020810]
│  Layer 1: ستاره‌ها (twinkle)     │ 120 ستاره با opacity متحرک
│  Layer 2: کره زمین (چرخان)      │ 120 ثانیه یک دور
│  Layer 3: هاله آبی (atmosphere) │ radial-gradient blur
│  Layer 4: سحابی‌های رنگی         │ blur-[120px] purple/blue
│  Layer 5: گرادیانت خوانایی متن  │ gradient overlays
│  Layer 6: ذرات معلق              │ 25 ذره آبی
│  Layer 7: محتوای متنی            │ z-10 relative
│  Layer 8: اسکرول ایندیکاتور      │ bottom-8
└─────────────────────────────────┘
```

### ۴.۲ کره زمین — جلوه فضایی
```jsx
// ۱. تصویر با پس‌زمینه مشکی
// ۲. rounded-full برای کلیپ دایره‌ای
// ۳. mix-blend-mode: screen برای شفاف‌سازی مشکی
// ۴. maskImage برای محو لبه‌ها
// ۵. انیمیشن چرخش آهسته

<img
  src="/earth-globe.png"
  className="rounded-full animate-earth-spin"
  style={{
    filter: 'brightness(1.2) saturate(1.4)',
    mixBlendMode: 'screen',
    maskImage: 'radial-gradient(circle, white 65%, transparent 72%)',
    WebkitMaskImage: 'radial-gradient(circle, white 65%, transparent 72%)',
  }}
/>

/* هاله اتمسفر */
<div style={{
  background: 'radial-gradient(circle, rgba(0,85,255,0.15) 0%, rgba(0,85,255,0.04) 50%, transparent 70%)'
}} />
```

```css
/* انیمیشن چرخش */
@keyframes earth-spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
.animate-earth-spin { animation: earth-spin 120s linear infinite; }
```

### ۴.۳ ستاره‌ها (Star Field)
```jsx
// 120 ستاره با opacity متحرک
{stars.map((_, i) => (
  <motion.div
    className="absolute bg-white rounded-full"
    style={{ width: Math.random() * 2.5 + 0.5, height: ... }}
    animate={{ opacity: [0.2, 0.8, 0.2], scale: [0.8, 1.2, 0.8] }}
    transition={{ duration: Math.random() * 4 + 2, repeat: Infinity }}
  />
))}
```

### ۴.۴ متن Hero — افکت درخشش
```jsx
// هر کلمه جداگانه با انیمیشن ورود
{titleWords.map((word, i) => (
  <motion.span
    initial={{ opacity: 0, y: 40, rotateX: -30 }}
    animate={{ opacity: 1, y: 0, rotateX: 0 }}
    transition={{ duration: 0.8, delay: 0.6 + i * 0.15 }}
    className="inline-block mx-2 text-shimmer hero-glow"
  >{word}</motion.span>
))}
```

```css
/* افکت درخشش نئونی آبی */
.hero-glow {
  text-shadow:
    0 0 20px rgba(0, 85, 255, 0.6),
    0 0 40px rgba(0, 85, 255, 0.4),
    0 0 80px rgba(0, 85, 255, 0.2);
}

/* افکت shimmer رنگین‌کمانی */
.text-shimmer {
  background: linear-gradient(90deg, #fff 0%, #b3d1ff 25%, #fff 50%, #b3d1ff 75%, #fff 100%);
  background-size: 200% auto;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: text-shimmer 4s linear infinite;
}

@keyframes text-shimmer {
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
}
```

### ۴.۵ سایزهای متن Hero
```
text-5xl md:text-7xl lg:text-8xl xl:text-9xl  — عنوان اصلی
text-xl md:text-2xl lg:text-3xl                — زیرعنوان
text-base md:text-lg                           — توضیحات
text-base                                      — دکمه‌ها
```

### ۴.۶ دکمه‌های CTA
```jsx
// دکمه اصلی (آبی پر)
<button className="px-8 py-3.5 bg-persian-blue-600 text-white rounded-full font-bold text-base shadow-[0_0_30px_rgba(0,85,255,0.3)]">
  Explore Journals
</button>

// دکمه فرعی (شفاف با حاشیه)
<button className="px-8 py-3.5 bg-transparent border-2 border-persian-blue-400/30 text-persian-blue-200 rounded-full font-bold text-base">
  Register
</button>
```

---

## 📌 ۵. کارت‌های فیچر (Feature Cards)

### ۵.۱ کارت بلوری با تصویر پس‌زمینه
```jsx
// کانتینر کارت با overflow-hidden و rounded-2xl
<motion.div whileHover={{ y: -8, scale: 1.02 }} className="relative group cursor-pointer rounded-2xl overflow-hidden">

  {/* تصویر پس‌زمینه بلوری */}
  <div className="absolute inset-0">
    <img src={feature.img} className="w-full h-full object-cover" />
    <div className="absolute inset-0 bg-persian-navy-900/70 backdrop-blur-sm group-hover:backdrop-blur-md transition-all duration-500" />
  </div>

  {/* محتوا روی بلور */}
  <div className="relative z-10 p-6 min-h-[200px] flex flex-col justify-between">
    <icon />
    <h3>{feature.title}</h3>
    <p>{feature.desc}</p>
    <span>Read More →</span>
  </div>
</motion.div>
```

### ۵.۲ مودال توضیحات
```jsx
// با کلیک روی کارت → مودال با تصویر بزرگ + توضیحات کامل
<AnimatePresence>
  <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} exit={{ scale: 0.9 }}>
    <div className="bg-persian-navy-800/80 backdrop-blur-xl rounded-2xl">
      {/* تصویر بالا + گرادیانت */}
      {/* محتوا: آیکون + عنوان + توضیحات */}
    </div>
  </motion.div>
</AnimatePresence>
```

---

## 📌 ۶. قفسه نشریات (Journal Shelf)

### ۶.۱ کارت مجله — افکت ۳بعدی
```jsx
<motion.div
  whileHover={{ y: -15, scale: 1.05, zIndex: 10 }}
  className="relative group cursor-pointer w-48"
>
  {/* اسپاین کتاب (لبه چپ) */}
  <div className="absolute left-0 top-0 bottom-0 w-3 bg-gradient-to-b from-persian-navy-700 to-persian-navy-800 transform -skew-y-2" />

  {/* جلد کتاب با افکت ۳بعدی */}
  <motion.div whileHover={{ rotateY: -15, rotateX: 5 }}>
    <img src={cover} />
    <div className="absolute inset-0 bg-gradient-to-t ..." />
    {/* هاور اوورلی */}
    <div className="opacity-0 group-hover:opacity-100 bg-persian-blue-600/90">
      <BookOpen /> {description}
    </div>
  </motion.div>
</motion.div>
```

### ۶.۲ تاقچه چوبی
```jsx
// تاقچه چوبی با gradient
<div className="absolute bottom-0 h-8 bg-gradient-to-b from-[#8B5A2B] to-[#654321] rounded-b-lg shadow-2xl" />
  {/* پنل پشتی */}
  <div className="absolute -top-8 bg-gradient-to-b from-persian-navy-50 to-white border-x border-persian-navy-100" />
  {/* پایه‌های تاقچه */}
  <div className="absolute -bottom-10 w-4 h-10 bg-gradient-to-b from-[#654321] to-[#4A3215] rounded-b-full" />
</div>
```

### ۶.۳ قفسه‌بندی بر اساس زبان
```js
// نشریات بر اساس lang دسته‌بندی می‌شوند
const groupedJournals = journals.reduce((acc, journal) => {
  const key = journal.lang || 'en';
  if (!acc[key]) acc[key] = [];
  acc[key].push(journal);
  return acc;
}, {});
```

---

## 📌 ۷. آیکون‌ها (Icons)

### ۷.۱ کتابخانه: `lucide-react`
```jsx
import { Shield, Users, BookOpen, Zap, Globe, Search, X, Menu, ... } from 'lucide-react';
```

### ۷.۲ آیکون‌های مجاز حذف شده از lucide-react
```
Twitter    → Globe / Share2
Linkedin   → Globe / Share2
Youtube    → Play / Globe
Github     → GitBranch
Chrome     → Globe
```

### ۷.۳ اندازه آیکون‌ها
```css
size={22}  // آیکون‌های اصلی Hero
size={18}  // آیکون‌های هدر/فوتر
size={16}  // آیکون‌های داخل کارت
size={14}  // آیکون‌های جدول ادمین
size={12}  // آیکون‌های ریز
```

---

## 📌 ۸. پنل ادمین — تم تیره

### ۸.۱ رنگ‌بندی
```css
/* پس‌زمینه‌ها */
bg-persian-navy-900           /* صفحه اصلی */
bg-persian-navy-800/60        /* کارت‌ها */
bg-persian-navy-700/50        /* حاشیه و border */

/* متن */
text-white                    /* عنوان اصلی */
text-white/70                 /* متن معمولی */
text-white/40                 /* متن فرعی */
text-white/30                 /* متن ضعیف */

/* اینپوت‌ها */
bg-persian-navy-800 border-persian-navy-600 text-white
focus:border-persian-blue-400 focus:ring-persian-blue-400/30

/* تب فعال */
bg-persian-blue-600/20 text-persian-blue-300 border border-persian-blue-500/20

/* تب غیرفعال */
text-white/40 hover:text-white/60 hover:bg-persian-navy-700/50
```

### ۸.۲ ساختار ادمین
```
┌─────────────────────────────────────────────┐
│ Title + Subtitle                             │
├────────┬────────────────────────────────────│
│ Sidebar │ Content Area                       │
│ ────── │ ─────────────────────────────────  │
│ Dashboard│ (cards + chart + activity)        │
│ Journals │ (search + table + add form)       │
│ Users   │ (add user + table)                │
│ Requests│ (pending + approve/reject)        │
│ Reports │ (traffic + stats)                 │
│ Settings│ (toggles + options)               │
└────────┴────────────────────────────────────┘
```

### ۸.۳ استایل جدول ادمین
```css
/* هدر جدول */
bg-persian-navy-800/80 text-persian-blue-200/70 text-xs uppercase tracking-wider

/* ردیف جدول */
border-b border-persian-navy-700/50 hover:bg-persian-navy-700/30

/* آیکون‌های اکشن */
text-persian-blue-400 hover:text-persian-blue-300   /* ویرایش */
text-emerald-400 hover:text-emerald-300              /* مشاهده */
text-red-400/60 hover:text-red-400                   /* حذف */
```

---

## 📌 ۹. فرم‌ها (Forms)

### ۹.۱ استایل اینپوت
```css
/* اینپوت روشن */
w-full px-4 py-3 rounded-xl border-2 border-persian-navy-100 focus:border-persian-blue-500 focus:outline-none transition-colors bg-white/50

/* اینپوت تیره */
w-full px-3 py-2 rounded-lg bg-persian-navy-800 border border-persian-navy-600 text-white text-sm focus:border-persian-blue-400

/* آیکون داخل اینپوت */
<Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-persian-navy-400" />
```

---

## 📌 ۱۰. مودال‌ها (Modals)

### ۱۰.۱ الگوی مودال
```jsx
<AnimatePresence>
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 z-[100] bg-persian-navy-900/80 backdrop-blur-md flex items-center justify-center"
    onClick={onClose}
  >
    <motion.div
      initial={{ scale: 0.9, opacity: 0, y: 20 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      exit={{ scale: 0.9, opacity: 0, y: 20 }}
      onClick={(e) => e.stopPropagation()}
      className="bg-white rounded-2xl shadow-2xl max-w-md overflow-hidden"
    >
      {/* header */}
      {/* content */}
    </motion.div>
  </motion.div>
</AnimatePresence>
```

### ۱۰.۲ z-index‌ها
| لایه | z-index | کاربرد |
|------|---------|--------|
| هدر | 50 | هدر ثابت |
| مودال Auth | 100 | مودال ورود/ثبت‌نام |
| مودال Search | 90 | جستجوی پیشرفته |
| مودال فیچر | 80 | توضیحات فیچر کارت |
| منوی موبایل | 40+ | منوی پایین هدر |

---

## 📌 ۱۱. موشن‌گرافیک و انیمیشن‌ها

### ۱۱.۱ Framer Motion — الگوهای پایه
```jsx
// ورود با opacity + y
initial={{ opacity: 0, y: 30 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.8, delay: 0.2 }}

// هاور با scale + y
whileHover={{ y: -8, scale: 1.02 }}

// تاپ با scale
whileTap={{ scale: 0.98 }}

// انیمیشن تکرارشونده (.float)
animate={{ y: [0, -10, 0] }}
transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.3 }}

// layout animation (تب‌ها)
layoutId="navIndicator"
```

### ۱۱.۲ CSS Animations
```css
/* float */
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}

/* shimmer */
@keyframes shimmer {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}

/* earth spin */
@keyframes earth-spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* gradient animation */
@keyframes gradient {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
```

### ۱۱.۳ افکت‌های ویژه
| افکت | CSS/JS | کاربرد |
|------|--------|--------|
| `hero-glow` | `text-shadow` آبی نئونی | عنوان Hero |
| `text-shimmer` | `background-clip: text` متحرک | عنوان Hero |
| `logo-glow` | `drop-shadow` آبی | لوگو |
| `backdrop-blur` | `backdrop-filter: blur()` | کارت‌های بلوری |
| `mix-blend-mode: screen` | `mixBlendMode` | کره زمین |
| `maskImage: radial-gradient` | CSS Mask | محو لبه زمین |
| `perspective-1000` | `perspective: 1000px` | کارت‌های ۳بعدی |
| `transform-style-3d` | `transform-style: preserve-3d` | کارت‌های ۳بعدی |

---

## 📌 ۱۲. RTL و چندزبانگی

### ۱۲.۱ تنظیم RTL در App.jsx
```jsx
useEffect(() => {
  const dir = i18n.language === 'fa' ? 'rtl' : 'ltr';
  document.documentElement.dir = dir;
  document.documentElement.lang = i18n.language;
}, [i18n.language]);
```

### ۱۲.۲ جهت‌دهی در کامپوننت‌ها
```jsx
<div dir={isRTL ? 'rtl' : 'ltr'}>
  {/* همه محتوا با جهت صحیح */}
</div>
```

### ۱۲.۳ ساختار فایل‌های ترجمه
```json
{
  "header": { "home": "...", "journals": "...", ... },
  "hero": { "title": "...", "subtitle": "...", ... },
  "journals": { "filter_all": "...", ... },
  "features": { "peer_review": "...", ... },
  "auth": { "login_title": "...", ... },
  "admin": { "dashboard": "...", ... },
  "contact": { "title": "...", ... },
  "news": { "title": "...", ... },
  "footer": { "copyright": "...", ... }
}
// هر ۳ فایل (en, fa, de) باید دقیقاً یکسان باشند
```

---

## 📌 ۱۳. احراز هویت (Auth)

### ۱۳.۱ ساختار AuthContext
```jsx
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState([...]);
  const [requests, setRequests] = useState([]);

  const login = (username, password) => { ... };
  const googleLogin = () => { ... };
  const register = (username, password, name) => { ... };
  const logout = () => { ... };
  const addUser = (userData) => { ... };
  const deleteUser = (id) => { ... };
  const addRequest = (req) => { ... };
  const updateRequest = (id, status) => { ... };

  return <AuthContext.Provider value={{ ... }}>{children}</AuthContext.Provider>;
};
```

### ۱۳.۲ کاربر پیش‌فرض
```js
{ id: 1, username: 'admin', password: 'Merc@123456', role: 'admin', name: 'Administrator' }
{ id: 2, username: 'guest', password: 'guest123', role: 'user', name: 'Guest User' }
```

---

## 📌 ۱۴. RTL — ساختار هدر و ناوبری

### ۱۴.۱ قاعده اصلی
```jsx
// هدر همیشه dir={isRTL ? 'rtl' : 'ltr'} داشته باشه
// سوئیچر زبان: در RTL سمت چپ، در LTR سمت راست
// منوی موبایل: در RTL سمت راست باز بشه
// لوگو: همیشه سمت راست در RTL و سمت چپ در LTR
```

### ۱۴.۲ قاعده جدول‌ها در RTL
```jsx
// در جدول‌ها از me/ms استفاده کن، نه ml/mr
// یا از dir={isRTL ? 'rtl' : 'ltr'} استفاده کن
```

---

## 📌 ۱۵. ساختار داده نشریات

### ۱۵.۱ آبجکت نشریه
```js
{
  id: 1,
  title: "International Journal of Engineering",
  titleFa: "مجله بین‌المللی مهندسی",
  abbr: "IJE",
  lang: "en",            // en | fa | de
  cover: "https://...",  // URL تصویر جلد
  url: "https://...",    // لینک مجله
  publisher: "MERC",
  description: "...",
  descriptionFa: "...",
  category: "Engineering",  // Energy, Materials Science, Ceramics, etc.
  type: "journal",          // journal | book
  frequency: "Bimonthly",
  impactFactor: "0.78",
  indexed: ["Scopus", "DOAJ", "ISC"],
}
```

### ۱۵.۲ فیلتر و مرتب‌سازی
```js
// مرتب‌سازی الفبایی
allPublications.sort((a, b) => a.title.localeCompare(b.title));

// فیلتر بر اساس زبان و نوع
filtered = publications.filter(j => j.lang === filter || j.type === filter);
```

---

## 📌 ۱۶. صفحه تماس با ما

### ۱۶.۱ اطلاعات پیش‌فرض
```js
{
  address: 'کرج – مشکین دشت – بلوار امام خمینی',
  phone: '026-36201888',
  email: 'info@merc.ac.ir',
  editor: { name: 'خانم فولادیان', phone: '09128899588' },
  librarian: { name: 'خانم فولادیان', phone: '09128899588' },
}
```

### ۱۶.۲ فرم
```jsx
// فیلدها: name, email, phone, subject (dropdown), message
// subject options: journal_sub, collab, lib, other
// ارسال → addRequest → updateRequest
```

---

## 📌 ۱۷. قوانین کلی طراحی

### ۱۷.۱ قاعده رنگی
- **تم تیره** (hero, admin, contact, news): `persian-navy-900` بک‌گراند
- **تم روشن** (home journals, features): `persian-navy-50` بک‌گراند
- **رنگ اکشن**: `persian-blue-500`/`600`
- **رنگ موفقیت**: `emerald-500`
- **رنگ خطا**: `red-400`/`500`
- **رنگ هشدار**: `amber-500`

### ۱۷.۲ قاعده تایپوگرافی
- **عناوین اصلی**: `font-bold text-2xl md:text-4xl` (روشن) / `text-white` (تیره)
- **زیرعنوان**: `text-white/40 text-sm` (تیره) / `text-persian-navy-500 text-sm` (روشن)
- **متن**: `text-sm leading-relaxed`
- **لیبل فرم**: `text-xs font-bold text-persian-blue-200/70`

### ۱۷.۳ قاعده اندازه
- **کارت‌ها**: `p-5` تا `p-8`
- **دکمه‌ها**: `px-4 py-2` تا `px-8 py-4`
- **فاصله بخش‌ها**: `py-20` تا `py-24`
- **کانتینر**: `container mx-auto px-6`

### ۱۷.۴ قاعده استاندارد (Standard Patterns)
1. همه کارت‌ها `rounded-2xl` دارند
2. همه دکمه‌ها `rounded-full` یا `rounded-xl` دارند
3. همه اینپوت‌ها `rounded-xl` یا `rounded-lg` دارند
4. همه افکت‌ها با `transition-all duration-500` یا `300`
5. همه متن‌ها `antialiased` هستند
6. همه تصاویر `object-cover` یا `object-contain` دارند

---

## 📌 ۱۸. دستور اجرایی (Prompt for AI)

### برای ساخت سایت جدید با همین ظاهر:
```
یک سایت با تم سورمه‌ای و آبی بساز با این قواعد:

۱. پالت رنگی: Persian Blue (#0055FF) + Persian Navy (#081421)
۲. فونت فارسی: Vazirmatn یا Modam (اگر woff2 در دسترس)
۳. فونت انگلیسی: Plus Jakarta Sans
۴. Hero: پس‌زمینه فضایی تاریک + کره زمین چرخان با mix-blend-mode: screen
۵. ستاره‌ها: ۱۲۰ ستاره با opacity متحرک
۶. عنوان: افکت text-shimmer (درخشش رنگین‌کمانی) + hero-glow (هاله آبی نئونی)
۷. کارت‌ها: rounded-2xl + backdrop-blur-sm + تصویر پس‌زمینه
۸. هدر: fixed + backdrop-blur-md + z-50
۹. فوتر: bg-persian-navy-900 + gradient بالا
۱۰. ادمین: تم تیره کامل با sidebar + content grid
۱۱. RTL: dir="rtl" برای فارسی + Vazirmatn فونت
۱۲. انیمیشن: Framer Motion + CSS keyframes
۱۳. ایکون: lucide-react (بدون Twitter/Linkedin/Youtube/Github/Chrome)
۱۴. ریسپانسیو: sm/md/lg/xl breakpoints
۱۵. ترجمه: i18next با ۳ زبان (en/fa/de) با کلیدهای یکسان
۱۶. احراز هویت: React Context با login/register/google
۱۷. دکمه‌ها: rounded-full + shadow-[0_0_30px_rgba(...,0.3)]
۱۸. مودال‌ها: AnimatePresence + backdrop-blur-md
۱۹. جدول ادمین: bg-persian-navy-800/80 + border-persian-navy-700/50
۲۰. فرم‌ها: rounded-xl + border-2 + focus:border-persian-blue-500
```

---

## 📌 ۱۹. فایل‌های ضروری پروژه

```
merc-journals/
├── public/
│   ├── earth-globe.png          # تصویر کره زمین
│   ├── logo-merc2.png           # لوگوی پژوهشگاه
│   ├── fonts/Modam/             # فایل‌های فونت مدام
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── JournalShelf.jsx
│   │   ├── AuthModal.jsx
│   │   └── SearchModal.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Admin.jsx
│   │   ├── Contact.jsx
│   │   └── News.jsx
│   ├── data/
│   │   ├── journals.js
│   │   └── news.js
│   ├── context/
│   │   └── AuthContext.jsx
│   ├── i18n/
│   │   ├── index.js
│   │   ├── en.json
│   │   ├── fa.json
│   │   └── de.json
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── vite.config.js
├── tailwind.config.js
└── package.json
```

---

**این فایل راهنمای کامل UI/UX این سایت است. هر سایتی که بر اساس این قواعد ساخته بشه، همین ظاهر، افکت‌ها، و کیفیت رو خواهد داشت.** 🎯
