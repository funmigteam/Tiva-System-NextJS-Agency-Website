"use client";

import { MessageCircle, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section id="contact" className="relative py-24 bg-[var(--color-bg-main)] overflow-hidden">
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="relative bg-gradient-to-r from-[#168BFF] to-[#3B82F6] rounded-3xl p-12 md:p-16 overflow-hidden shadow-2xl"
        >
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-black/10 rounded-full blur-3xl"></div>
          
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            backgroundSize: '32px 32px'
          }}></div>

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-right lg:w-2/3">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                پروژه بعدی خود را با هم شروع کنیم!
              </h2>
              <p className="text-white/90 text-lg leading-relaxed">
                برای مشاوره رایگان و بررسی پروژه‌تان با ما تماس بگیرید. تیم TivaSystem آماده است تا ایده‌های شما را به واقعیت تبدیل کند.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="tel:09123456789"
                className="group relative flex items-center justify-center gap-2 bg-white text-[#168BFF] px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-white/20 hover:-translate-y-1 active:translate-y-1 active:shadow-md"
              >
                <MessageCircle size={24} className="transition-transform group-hover:scale-110" />
                تماس با ما
              </Link>
              
              <Link
                href="/start-project"
                className="group relative flex items-center justify-center gap-2 bg-[#168BFF] text-white px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:bg-[#2196FF] hover:shadow-2xl hover:shadow-[#168BFF]/30 hover:-translate-y-1 active:translate-y-1 active:shadow-md"
              >
                شروع پروژه
                <ArrowLeft size={20} className="transition-transform group-hover:-translate-x-1" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}