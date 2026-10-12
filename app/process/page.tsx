"use client";

import { motion } from "framer-motion";
import { Search, Lightbulb, PenTool, Code2, Bug, Rocket } from "lucide-react";
import AmbientBlobs from "@/components/tiva/ui/AmbientBlobs";

const STEPS = [
  { id: 1, title: "Discovery", icon: Search, desc: "بررسی نیازها و تعیین اهداف پروژه", deliverables: ["نیازسنجی", "تعیین اهداف", "تحلیل بازار"] },
  { id: 2, title: "Strategy", icon: Lightbulb, desc: "تعیین استراتژی و نقشه راه", deliverables: ["نقشه راه", "معماری سیستم", "زمان‌بندی"] },
  { id: 3, title: "UI/UX", icon: PenTool, desc: "طراحی رابط و تجربه کاربری", deliverables: ["Wireframe", "Design System", "Prototype"] },
  { id: 4, title: "Development", icon: Code2, desc: "پیاده‌سازی کد و توسعه", deliverables: ["کد تمیز", "توسعه فرانت‌اند", "تست واحد"] },
  { id: 5, title: "Testing", icon: Bug, desc: "تست و رفع باگ", deliverables: ["تست عملکرد", "تست امنیت", "رفع باگ"] },
  { id: 6, title: "Launch", icon: Rocket, desc: "راه‌اندازی و تحویل", deliverables: ["استقرار", "آموزش", "مستندات"] },
];

export default function ProcessPage() {
  return (
    <div className="relative min-h-screen bg-[var(--color-bg-main)] pt-32 pb-24 overflow-hidden">
      <AmbientBlobs variant="dark" />
      
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-[var(--color-text-main)] mb-4">فرآیند کار ما</h1>
          <p className="text-lg text-[var(--color-text-muted)] max-w-2xl mx-auto">
            یک مسیر شفاف و مرحله‌به‌مرحله برای خلق محصولات دیجیتال
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {STEPS.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[var(--color-bg-card)] p-8 rounded-2xl border border-[var(--color-border)] hover:border-[#168BFF]/30 transition-all"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-[#168BFF]/10 rounded-xl flex items-center justify-center text-[#168BFF]">
                  <step.icon size={24} />
                </div>
                <div>
                  <span className="text-xs text-[#168BFF] font-bold">مرحله {step.id}</span>
                  <h3 className="text-xl font-bold text-[var(--color-text-main)]">{step.title}</h3>
                </div>
              </div>
              <p className="text-sm text-[var(--color-text-muted)] mb-4 leading-relaxed">{step.desc}</p>
              <div className="space-y-2">
                {step.deliverables.map((d, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-[var(--color-text-muted)]">
                    <span className="text-[#168BFF]">✓</span> {d}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
