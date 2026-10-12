"use client";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center bg-[var(--color-bg-main)] overflow-hidden">
      <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10 pt-32 pb-16">
        
        <div className="flex flex-col items-start text-right space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs bg-[var(--color-bg-card)] border border-[var(--color-border)] text-[var(--color-text-muted)]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#168BFF] animate-pulse"></span>
            راهکارهای دیجیتال، آینده‌ای بهتر
          </div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl lg:text-7xl font-bold text-[var(--color-text-main)] leading-[1.15] tracking-tight"
          >
            توسعه‌دهنده فرانت‌اند<br />
            و <span className="text-[#168BFF]">طراح تجربه کاربری</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base lg:text-lg text-[var(--color-text-muted)] max-w-md leading-relaxed"
          >
            TivaSystem ارائه‌دهنده خدمات طراحی و توسعه وب‌سایت‌های مدرن، اپلیکیشن‌های موبایل و راهکارهای هوشمند دیجیتال با تمرکز بر کیفیت و تجربه کاربری می‌باشد.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-4 pt-2"
          >
            <Link href="#portfolio" className="group flex items-center justify-center gap-2 bg-[#168BFF] hover:bg-[#2196FF] text-white px-8 py-3.5 rounded-xl font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-[#168BFF]/30 hover:-translate-y-0.5 active:translate-y-0.5 active:shadow-md">
              مشاهده نمونه کارها <ArrowLeft size={18} className="transition-transform group-hover:-translate-x-1" />
            </Link>
            <Link href="#about" className="flex items-center justify-center px-8 py-3.5 rounded-xl border border-[var(--color-border)] text-[var(--color-text-main)] hover:bg-[var(--color-bg-card)] hover:border-[#168BFF]/30 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0.5">
              درباره من بیشتر بدانید
            </Link>
          </motion.div>
        </div>

        <div className="relative lg:order-2">
          <div className="bg-[var(--color-bg-card)] border border-[var(--color-border)] rounded-xl shadow-2xl overflow-hidden">
            <div className="flex items-center justify-between px-4 py-2 bg-[var(--color-bg-main)] border-b border-[var(--color-border)]">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <span className="text-xs text-[var(--color-text-muted)] font-mono">tivasystem.tsx</span>
            </div>
            <div className="p-6 font-mono text-sm leading-relaxed" style={{ direction: 'ltr', textAlign: 'left' }}>
              <span className="text-purple-600 dark:text-purple-400">const</span> <span className="text-blue-600 dark:text-blue-400">TivaSystem</span> <span className="text-[var(--color-text-muted)]">=</span> {'{'}<br />
              &nbsp;&nbsp;<span className="text-[var(--color-text-muted)]">design:</span> <span className="text-green-600 dark:text-green-400">true</span>,<br />
              &nbsp;&nbsp;<span className="text-[var(--color-text-muted)]">performance:</span> <span className="text-green-600 dark:text-green-400">100</span>,<br />
              &nbsp;&nbsp;<span className="text-[var(--color-text-muted)]">scalable:</span> <span className="text-green-600 dark:text-green-400">true</span>,<br />
              &nbsp;&nbsp;<span className="text-[var(--color-text-muted)]">experience:</span> <span className="text-green-600 dark:text-green-400">"premium"</span><br />
              {'}'};
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}