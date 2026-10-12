"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Lightbulb, PenTool, Code2, Bug, Rocket } from "lucide-react";

const processSteps = [
  {
    id: 1,
    title: "Discovery",
    icon: Search,
    desc: "در این مرحله، نیازهای شما را به دقت بررسی می‌کنیم و اهداف پروژه را مشخص می‌سازیم.",
    deliverables: ["نیازسنجی کامل", "تعیین اهداف", "تحلیل بازار", "تعیین بودجه و زمان"]
  },
  {
    id: 2,
    title: "Strategy",
    icon: Lightbulb,
    desc: "بر اساس اطلاعات مرحله قبل، استراتژی مناسب برای دستیابی به اهداف تعیین می‌شود.",
    deliverables: ["نقشه راه", "معماری سیستم", "برنامه زمان‌بندی", "استراتژی محتوا"]
  },
  {
    id: 3,
    title: "UI/UX",
    icon: PenTool,
    desc: "طراحی رابط کاربری و تجربه کاربری با تمرکز بر زیبایی و کارایی.",
    deliverables: ["Wireframe", "Design System", "طراحی واکنش‌گرا", "Prototype", "صفحات UI"]
  },
  {
    id: 4,
    title: "Development",
    icon: Code2,
    desc: "پیاده‌سازی کد با استفاده از بهترین تکنولوژی‌های روز و استانداردهای کدنویسی.",
    deliverables: ["کد تمیز", "توسعه فرانت‌اند", "توسعه بک‌اند", "تست‌های واحد"]
  },
  {
    id: 5,
    title: "Testing",
    icon: Bug,
    desc: "مرحله تست و رفع باگ برای اطمینان از عملکرد صحیح و بدون خطای پروژه.",
    deliverables: ["تست عملکرد", "تست امنیت", "تست سرعت", "رفع باگ‌ها"]
  },
  {
    id: 6,
    title: "Launch",
    icon: Rocket,
    desc: "راه‌اندازی نهایی پروژه، استقرار روی سرور و تحویل به شما.",
    deliverables: ["استقرار نهایی", "آموزش کاربران", "مستندات کامل", "پشتیبانی اولیه"]
  }
];

export default function InteractiveProcess() {
  const [activeStep, setActiveStep] = useState(1);
  const currentStep = processSteps.find(s => s.id === activeStep)!;

  return (
    <section id="process" className="py-24 bg-[var(--color-bg-main)] border-t border-[var(--color-border)]">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[var(--color-text-main)] mb-3">چگونه کار می‌کنیم</h2>
          <p className="text-[var(--color-text-muted)] text-base">فرآیندی شفاف و مرحله‌به‌مرحله برای خلق محصولات دیجیتال</p>
        </div>

        <div className="flex flex-col-reverse lg:flex-row-reverse gap-12">
          
          <div className="lg:w-1/2 space-y-4">
            {processSteps.map((step) => (
              <button
                key={step.id}
                onClick={() => setActiveStep(step.id)}
                className={`w-full flex items-center justify-between gap-4 p-4 rounded-xl border transition-all text-right group ${
                  activeStep === step.id
                    ? "border-[#168BFF] bg-[var(--color-bg-card)] text-[var(--color-text-main)] shadow-lg shadow-[#168BFF]/10"
                    : "border-[var(--color-border)] bg-[var(--color-bg-card)]/50 text-[var(--color-text-muted)] hover:border-[#168BFF]/50"
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                    activeStep === step.id ? "bg-[#168BFF] text-white" : "bg-[var(--color-bg-main)] text-[var(--color-text-muted)]"
                  }`}>
                    <step.icon size={18} />
                  </div>
                  <div className="text-right">
                    <span className="text-sm font-semibold block">{step.title}</span>
                    <span className="text-xs text-[var(--color-text-muted)]">مرحله {step.id} از ۶</span>
                  </div>
                </div>
                {activeStep === step.id && <div className="w-1.5 h-8 bg-[#168BFF] rounded-full"></div>}
              </button>
            ))}
          </div>

          <div className="lg:w-1/2 bg-[var(--color-bg-card)] rounded-3xl p-8 border border-[var(--color-border)] shadow-xl min-h-[350px] flex flex-col justify-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-[#168BFF]"></div>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#168BFF]/10 flex items-center justify-center text-[#168BFF]">
                    <currentStep.icon size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-[var(--color-text-main)]">{currentStep.title}</h3>
                </div>
                
                <p className="text-[var(--color-text-muted)] text-lg mb-6 leading-relaxed">{currentStep.desc}</p>
                
                <div className="border-t border-[var(--color-border)] pt-6">
                  <h4 className="text-sm font-bold text-[var(--color-text-main)] mb-3">خروجی این مرحله:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {currentStep.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-[var(--color-text-muted)]">
                        <span className="text-[#168BFF]">✓</span> {item}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}