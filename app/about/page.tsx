"use client";

import { motion } from "framer-motion";
import { Code2, Palette, Rocket, Heart, MapPin, Phone, Send } from "lucide-react";
import AmbientBlobs from "@/components/tiva/ui/AmbientBlobs";
import { TIVA_INFO } from "@/lib/data";

export default function AboutPage() {
  return (
    <div className="relative min-h-screen bg-[var(--color-bg-main)] pt-32 pb-24 overflow-hidden">
      <AmbientBlobs variant="dark" />
      
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs bg-[#168BFF]/10 text-[#168BFF] border border-[#168BFF]/20 mb-6">
            درباره ما
          </span>
          <h1 className="text-5xl lg:text-6xl font-bold text-[var(--color-text-main)] mb-6 leading-tight">
            ما <span className="text-[#168BFF]">TivaSystem</span> هستیم
          </h1>
          <p className="text-lg text-[var(--color-text-muted)] max-w-3xl mx-auto leading-relaxed">
            یک استودیوی دیجیتال مستقل که با ترکیب طراحی خلاقانه و مهندسی دقیق، تجربه‌های وب مدرن و ماندگار می‌سازد.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-[var(--color-text-main)] mb-6">
              داستان ما
            </h2>
            <div className="space-y-4 text-[var(--color-text-muted)] leading-relaxed">
              <p>
                TivaSystem از یک ایده ساده شکل گرفت: <strong className="text-[var(--color-text-main)]">"چرا وب‌سایت‌های فارسی نباید به زیبایی و کیفیت نمونه‌های جهانی باشند؟"</strong>
              </p>
              <p>
                ما با تکیه بر دانش فنی و علاقه به طراحی، مسیری را آغاز کردیم که در آن هر پروژه، فرصتی برای خلق یک تجربه دیجیتال بی‌نقص است.
              </p>
              <p>
                تمرکز ما بر <strong className="text-[var(--color-text-main)]">کیفیت کد، سرعت بارگذاری، طراحی واکنش‌گرا و تجربه کاربری</strong> است.
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { icon: Code2, title: "مهندسی دقیق", desc: "کد تمیز و مقیاس‌پذیر" },
              { icon: Palette, title: "طراحی خلاقانه", desc: "زیبایی‌شناسی مدرن" },
              { icon: Rocket, title: "عملکرد بالا", desc: "سرعت فوق‌العاده" },
              { icon: Heart, title: "علاقه به کار", desc: "عشق به جزئیات" },
            ].map((item, i) => (
              <div key={i} className="bg-[var(--color-bg-card)] p-6 rounded-2xl border border-[var(--color-border)] hover:border-[#168BFF]/30 transition-all">
                <div className="w-12 h-12 bg-[#168BFF]/10 rounded-xl flex items-center justify-center mb-4 text-[#168BFF]">
                  <item.icon size={22} />
                </div>
                <h3 className="font-bold text-[var(--color-text-main)] mb-1">{item.title}</h3>
                <p className="text-xs text-[var(--color-text-muted)]">{item.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-[#168BFF] to-[#3B82F6] rounded-3xl p-12 text-center"
        >
          <h2 className="text-3xl font-bold text-white mb-4">آماده همکاری با ما هستید؟</h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            برای دریافت مشاوره رایگان و بررسی پروژه‌تان، همین حالا با ما تماس بگیرید.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-white">
            <div className="flex items-center gap-2">
              <MapPin size={20} />
              <span className="text-sm">{TIVA_INFO.contact.address}</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={20} />
              <span className="text-sm" dir="ltr">{TIVA_INFO.contact.phoneFormatted}</span>
            </div>
            <div className="flex items-center gap-2">
              <Send size={20} />
              <span className="text-sm">{TIVA_INFO.contact.telegram}@</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
