export const TIVA_INFO = {
  name: "TivaSystem",
  tagline: "استودیوی دیجیتال و توسعه فرانت‌اند",
  description: "ارائه‌دهنده خدمات طراحی و توسعه وب‌سایت‌های مدرن، اپلیکیشن‌های موبایل و راهکارهای هوشمند دیجیتال",
  contact: {
    address: "مشهد، چهارراه ابوطالب، پاساژ جام جم، کلاهدوز ۵۴",
    phone: "09304548195",
    phoneFormatted: "۰۹۳۰ ۴۵۴ ۸۱۹۵",
    telegram: "Ali_akbarq",
    telegramUrl: "https://t.me/Ali_akbarq",
    email: "tivasystemapp@gmail.com",
  },
  developer: {
    github: "mjfrontdev",
    githubUrl: "https://github.com/mjfrontdev",
    telegram: "mmd500220",
    telegramUrl: "https://t.me/mmd500220",
  },
  social: {
    instagram: "https://instagram.com/tivasystem",
    linkedin: "https://linkedin.com/company/tivasystem",
  },
  stats: { projects: 100, clients: 50, hours: 1200, years: 3 }
};

export const SERVICES = [
  { slug: "landing-page", title: "لندینگ پیج", description: "طراحی صفحات فرود حرفه‌ای برای کمپین‌های تبلیغاتی", icon: "Rocket", features: ["طراحی واکنش‌گرا", "بهینه برای تبدیل", "سرعت بالا", "SEO Friendly"] },
  { slug: "seo", title: "سئو (SEO)", description: "بهینه‌سازی سایت برای موتورهای جستجو", icon: "Search", features: ["تحلیل کلمات کلیدی", "بهینه‌سازی فنی", "لینک‌سازی", "گزارش ماهانه"] },
  { slug: "content", title: "تولید محتوا", description: "تولید محتوای متنی و تصویری جذاب", icon: "PenTool", features: ["مقاله نویسی", "کپی‌رایتینگ", "طراحی گرافیک", "ویدیو سازی"] },
  { slug: "instagram", title: "ادمین اینستاگرام", description: "مدیریت حرفه‌ای پیج اینستاگرام", icon: "Instagram", features: ["تقویم محتوا", "پست و استوری", "پاسخ به دایرکت", "تحلیل رشد"] },
  { slug: "youtube", title: "ادمین یوتیوب", description: "مدیریت کانال یوتیوب و بهینه‌سازی ویدیو", icon: "Youtube", features: ["آپلود ویدیو", "سئو یوتیوب", "تولید تامبنیل", "تحلیل بازدید"] },
  { slug: "web-design", title: "طراحی سایت", description: "طراحی و توسعه وب‌سایت‌های مدرن", icon: "Globe", features: ["Next.js / React", "طراحی واکنش‌گرا", "سرعت بالا", "پنل مدیریت"] },
  { slug: "mobile-app", title: "اپلیکیشن موبایل", description: "طراحی و توسعه اپلیکیشن iOS و Android", icon: "Smartphone", features: ["Flutter", "React Native", "طراحی UI/UX", "انتشار در استور"] },
  { slug: "windows-software", title: "نرم‌افزارهای ویندوزی", description: "توسعه نرم‌افزارهای دسکتاپ", icon: "Monitor", features: ["Electron", "C# / .NET", "رابط کاربری مدرن", "نصب آسان"] },
  { slug: "pwa", title: "PWA", description: "تبدیل وب‌سایت به اپلیکیشن قابل نصب", icon: "Zap", features: ["نصب روی موبایل", "کار آفلاین", "Push Notification", "سرعت بالا"] },
  { slug: "web-application", title: "Web Application", description: "توسعه وب‌اپلیکیشن‌های پیچیده", icon: "Code2", features: ["داشبورد مدیریتی", "احراز هویت", "API اختصاصی", "مقیاس‌پذیر"] }
];

export const PORTFOLIO_PROJECTS = [
  {
    slug: "doctor-aval",
    title: "دکتر اول",
    description: "پلتفرم جامع سلامت با امکان رزرو نوبت آنلاین، مشاوره پزشکی و خدمات درمانی در محل",
    url: "https://doctoraval.com/",
    tags: ["Next.js", "React", "Tailwind", "API"],
    category: "پلتفرم سلامت",
    metrics: [
      { value: "+10,000", label: "مشاوره" },
      { value: "+1,000", label: "ویزیت" },
      { value: "+500", label: "پزشک" }
    ]
  },
  { slug: "coffee-ui", title: "وب‌سایت کافه", description: "طراحی مدرن وب‌سایت کافه با منوی تعاملی و گالری تصاویر", url: "https://coffeuisite.netlify.app/", tags: ["React", "Tailwind", "Framer Motion"], category: "وب‌سایت" },
  { slug: "napta-taban", title: "وب‌سایت نپتا تابان", description: "طراحی وب‌سایت شرکتی با پنل مدیریت اختصاصی", url: "https://naptatabanweb.netlify.app/", tags: ["Next.js", "TypeScript", "Tailwind"], category: "وب‌سایت شرکتی" },
  { slug: "panel-store-mj", title: "پنل مدیریت فروشگاه", description: "داشبورد مدیریت سفارشات با نمودارهای تحلیلی", url: "https://panelstoremj.netlify.app/", tags: ["React", "Chart.js", "Tailwind"], category: "داشبورد" },
  { slug: "nft-project-ui", title: "پلتفرم NFT", description: "رابط کاربری مدرن برای بازارچه NFT با کیف پول تعاملی", url: "https://nftprojectui.netlify.app/", tags: ["React", "Web3", "Tailwind"], category: "وب‌اپلیکیشن" }
];

export const BLOG_POSTS = [
  { slug: "what-is-javascript-project", title: "پروژه جاوااسکریپت چیست؟", excerpt: "آشنایی با ساختار پروژه‌های جاوااسکریپت", category: "فرانت‌اند", date: "۱۴۰۳/۰۸/۱۲", readTime: "۵ دقیقه", content: "جاوااسکریپت یکی از محبوب‌ترین زبان‌های برنامه‌نویسی است..." },
  { slug: "css-tailwind-tricks", title: "ترفندهای CSS و Tailwind", excerpt: "بهترین تکنیک‌ها برای طراحی سریع‌تر", category: "طراحی", date: "۱۴۰۳/۰۸/۰۵", readTime: "۷ دقیقه", content: "Tailwind CSS یک فریم‌ورک Utility-First است..." },
  { slug: "nodejs-performance", title: "بهینه‌سازی Node.js", excerpt: "راهکارهای عملی برای افزایش سرعت", category: "بک‌اند", date: "۱۴۰۳/۰۷/۲۸", readTime: "۸ دقیقه", content: "Node.js به دلیل ماهیت غیرهمزمان خود..." },
  { slug: "react-complete-guide", title: "راهنمای کامل React", excerpt: "از مفاهیم پایه تا مباحث پیشرفته", category: "فرانت‌اند", date: "۱۴۰۳/۰۷/۲۰", readTime: "۱۲ دقیقه", content: "React یک کتابخانه جاوااسکریپت برای ساخت رابط‌هاست..." },
  { slug: "nextjs-16-features", title: "ویژگی‌های Next.js 16", excerpt: "بررسی امکانات نسخه جدید", category: "فرانت‌اند", date: "۱۴۰۳/۰۷/۱۵", readTime: "۶ دقیقه", content: "Next.js 16 با Turbopack و React 19..." },
  { slug: "ui-ux-principles", title: "اصول طراحی UI/UX", excerpt: "مهم‌ترین اصول طراحی رابط کاربری", category: "طراحی", date: "۱۴۰۳/۰۷/۱۰", readTime: "۹ دقیقه", content: "طراحی UI/UX فقط زیبایی بصری نیست..." }
];
