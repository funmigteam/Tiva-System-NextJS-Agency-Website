"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Send, Clock } from "lucide-react";
import AmbientBlobs from "@/components/tiva/ui/AmbientBlobs";
import { TIVA_INFO } from "@/lib/data";

export default function ContactPage() {
  return (
    <div className="relative min-h-screen bg-[var(--color-bg-main)] pt-32 pb-24 overflow-hidden">
      <AmbientBlobs variant="dark" />
      
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-[var(--color-text-main)] mb-4">تماس با ما</h1>
          <p className="text-lg text-[var(--color-text-muted)] max-w-2xl mx-auto">
            برای مشاوره رایگان و بررسی پروژه‌تان با ما در تماس باشید
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[
            { 
              icon: Phone, 
              title: "شماره تماس", 
              value: TIVA_INFO.contact.phoneFormatted,
              link: `tel:${TIVA_INFO.contact.phone}`,
              ltr: true 
            },
            { 
              icon: Send, 
              title: "تلگرام", 
              value: `${TIVA_INFO.contact.telegram}@`,
              link: TIVA_INFO.contact.telegramUrl,
              ltr: false 
            },
            { 
              icon: MapPin, 
              title: "آدرس", 
              value: TIVA_INFO.contact.address,
              link: "#",
              ltr: false 
            },
          ].map((item, i) => (
            <motion.a
              key={i}
              href={item.link}
              target={item.link.startsWith("http") ? "_blank" : undefined}
              rel={item.link.startsWith("http") ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-[var(--color-bg-card)] p-8 rounded-2xl border border-[var(--color-border)] hover:border-[#168BFF]/40 transition-all hover:shadow-xl hover:-translate-y-1 group"
            >
              <div className="w-14 h-14 bg-[#168BFF]/10 rounded-xl flex items-center justify-center mb-6 text-[#168BFF] group-hover:bg-[#168BFF] group-hover:text-white transition-all">
                <item.icon size={26} />
              </div>
              <h3 className="font-bold text-[var(--color-text-main)] mb-2">{item.title}</h3>
              <p className={`text-sm text-[var(--color-text-muted)] leading-relaxed ${item.ltr ? 'text-left' : 'text-right'}`} dir={item.ltr ? 'ltr' : 'rtl'}>
                {item.value}
              </p>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[var(--color-bg-card)] rounded-3xl p-8 border border-[var(--color-border)] max-w-2xl mx-auto"
        >
          <div className="flex items-center gap-3 mb-6 justify-center">
            <Clock size={24} className="text-[#168BFF]" />
            <h2 className="text-2xl font-bold text-[var(--color-text-main)]">ساعات پاسخگویی</h2>
          </div>
          <div className="space-y-3 text-center">
            <div className="flex justify-between items-center py-3 border-b border-[var(--color-border)]">
              <span className="text-[var(--color-text-muted)]">شنبه تا چهارشنبه</span>
              <span className="text-[var(--color-text-main)] font-semibold">۹:۰۰ - ۱۸:۰۰</span>
            </div>
            <div className="flex justify-between items-center py-3 border-b border-[var(--color-border)]">
              <span className="text-[var(--color-text-muted)]">پنجشنبه</span>
              <span className="text-[var(--color-text-main)] font-semibold">۹:۰۰ - ۱۳:۰۰</span>
            </div>
            <div className="flex justify-between items-center py-3">
              <span className="text-[var(--color-text-muted)]">جمعه</span>
              <span className="text-[#168BFF] font-semibold">تعطیل</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
