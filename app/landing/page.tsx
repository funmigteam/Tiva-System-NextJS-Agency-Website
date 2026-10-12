"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Check, Zap, Target, TrendingUp } from "lucide-react";
import AmbientBlobs from "@/components/tiva/ui/AmbientBlobs";

export default function LandingPage() {
  return (
    <div className="relative min-h-screen bg-[var(--color-bg-main)] overflow-hidden">
      <AmbientBlobs variant="dark" />
      
      <section className="relative pt-32 pb-20">
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-xs bg-[#168BFF]/10 text-[#168BFF] border border-[#168BFF]/20 mb-6">
              🚀 لندینگ پیج حرفه‌ای
            </span>
            <h1 className="text-5xl lg:text-6xl font-bold text-[var(--color-text-main)] mb-6 leading-tight">
              صفحات فرود با <span className="text-[#168BFF]">نرخ تبدیل بالا</span>
            </h1>
            <p className="text-lg text-[var(--color-text-muted)] mb-10 max-w-2xl mx-auto">
              طراحی صفحات فرود اختصاصی برای کمپین‌های تبلیغاتی، معرفی محصول و جذب مشتری
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#168BFF] hover:bg-[#2196FF] text-white px-10 py-4 rounded-xl font-bold text-lg transition-all hover:shadow-xl hover:shadow-[#168BFF]/30 hover:-translate-y-1"
            >
              درخواست مشاوره <ArrowLeft size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Target, title: "نرخ تبدیل بالا", desc: "طراحی با تمرکز بر تبدیل بازدیدکننده به مشتری" },
              { icon: Zap, title: "سرعت بارگذاری", desc: "بهینه‌سازی شده برای سریع‌ترین بارگذاری" },
              { icon: TrendingUp, title: "قابل اندازه‌گیری", desc: "اتصال به Google Analytics و ابزارهای تحلیلی" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-[var(--color-bg-card)] p-8 rounded-2xl border border-[var(--color-border)]"
              >
                <div className="w-14 h-14 bg-[#168BFF]/10 rounded-xl flex items-center justify-center mb-6 text-[#168BFF]">
                  <item.icon size={26} />
                </div>
                <h3 className="text-xl font-bold text-[var(--color-text-main)] mb-3">{item.title}</h3>
                <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
