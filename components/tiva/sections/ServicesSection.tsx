"use client";

import { Code2, Smartphone, Globe, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Tilt3DCard from "@/components/tiva/ui/Tilt3DCard";
import AmbientBlobs from "@/components/tiva/ui/AmbientBlobs";

const services = [
  { 
    icon: Code2, 
    title: "طراحی رابط کاربری (UI/UX)", 
    desc: "طراحی تجربه کاربری حرفه‌ای و جذاب برای وب‌سایت‌ها و اپلیکیشن‌های شما.",
    color: "#168BFF",
    glowColor: "rgba(22, 139, 255, 0.3)"
  },
  { 
    icon: Smartphone, 
    title: "توسعه فرانت‌اند", 
    desc: "پیاده‌سازی رابط کاربری با استفاده از React, Next.js و تایپ‌اسکریپت.",
    color: "#7C3AED",
    glowColor: "rgba(124, 58, 237, 0.3)"
  },
  { 
    icon: Globe, 
    title: "طراحی وب‌سایت", 
    desc: "طراحی و توسعه وب‌سایت‌های مدرن، واکنش‌گرا و بهینه شده برای سئو.",
    color: "#06B6D4",
    glowColor: "rgba(6, 182, 212, 0.3)"
  },
  { 
    icon: ShoppingCart, 
    title: "طراحی فروشگاه اینترنتی", 
    desc: "ایجاد فروشگاه‌های آنلاین حرفه‌ای با قابلیت مدیریت کامل محصولات و سفارشات.",
    color: "#F59E0B",
    glowColor: "rgba(245, 158, 11, 0.3)"
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="relative py-24 bg-[var(--color-bg-main)] overflow-hidden">
      <AmbientBlobs variant="dark" />
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[var(--color-text-main)] mb-3">خدمات ما</h2>
          <p className="text-[var(--color-text-muted)] text-base">راهکارهای حرفه‌ای برای نیازهای دیجیتال شما</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Tilt3DCard intensity={8}>
                <div 
                  className="group bg-[var(--color-bg-card)]/80 backdrop-blur-xl p-8 rounded-2xl border border-[var(--color-border)] transition-all duration-300 hover:shadow-2xl"
                  style={{ 
                    boxShadow: `0 4px 12px rgba(0,0,0,0.1), 0 8px 24px ${service.glowColor}`
                  }}
                >
                  <div 
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
                    style={{
                      background: `linear-gradient(135deg, ${service.color}20, ${service.color}10)`,
                      boxShadow: `0 4px 12px ${service.glowColor}, inset 0 1px 0 rgba(255,255,255,0.1)`,
                      transform: "perspective(800px) rotateX(5deg)"
                    }}
                  >
                    <service.icon size={26} style={{ color: service.color }} />
                  </div>
                  
                  <h3 className="text-xl font-bold text-[var(--color-text-main)] mb-3">{service.title}</h3>
                  <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-6">{service.desc}</p>
                  <Link href="#" className="text-sm font-medium text-[#168BFF] hover:text-[#38BDF8] inline-flex items-center gap-1">
                    بیشتر بدانید ←
                  </Link>
                </div>
              </Tilt3DCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}