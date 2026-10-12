import { Headphones, Monitor, Zap, ShieldCheck } from "lucide-react";

const features = [
  { 
    icon: Headphones, 
    title: "پشتیبانی حرفه‌ای", 
    desc: "ارائه پشتیبانی ۲۴ ساعته و پاسخگویی سریع به نیازهای شما." 
  },
  { 
    icon: Monitor, 
    title: "طراحی واکنش‌گرا", 
    desc: "نمایش بهینه سایت در تمامی دستگاه‌ها و اندازه‌های صفحه نمایش." 
  },
  { 
    icon: Zap, 
    title: "عملکرد سریع", 
    desc: "بهینه‌سازی سرعت بارگذاری و افزایش کارایی وب‌سایت‌ها." 
  },
  { 
    icon: ShieldCheck, 
    title: "کیفیت بالا", 
    desc: "تضمین کیفیت با استفاده از استانداردهای مدرن و کدینگ تمیز." 
  },
];

export default function WhyTivaSection() {
  return (
    <section id="about" className="py-24 bg-[#0a1f38]">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-3">چرا TivaSystem؟</h2>
          <p className="text-gray-400 text-base">ارزش‌هایی که در هر پروژه، رعایت می‌کنیم</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, index) => (
            <div 
              key={index} 
              className="text-center p-8 rounded-2xl bg-[#061426] border border-[#168BFF]/10 hover:border-[#168BFF]/30 transition-all duration-300 card-hover"
            >
              <div className="w-16 h-16 mx-auto bg-[#168BFF]/10 rounded-full flex items-center justify-center mb-4 text-[#168BFF] group-hover:bg-[#168BFF] group-hover:text-white transition-all">
                <item.icon size={32} />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}