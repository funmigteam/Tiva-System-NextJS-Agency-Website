"use client";

import { Quote, Star } from "lucide-react";
import { motion } from "framer-motion";
import Tilt3DCard from "@/components/tiva/ui/Tilt3DCard";
import AmbientBlobs from "@/components/tiva/ui/AmbientBlobs";

const testimonials = [
  { 
    name: "احمد رضایی", 
    role: "مدیرعامل شرکت آریا", 
    text: "همکاری با TivaSystem یکی از بهترین تصمیم‌های ما بود. تیم آنها بسیار حرفه‌ای و دقیق کار می‌کنند.",
    avatar: "https://i.pravatar.cc/150?img=11"
  },
  { 
    name: "سارا محمدی", 
    role: "مدیر مارکتینگ", 
    text: "طراحی و توسعه سایت ما توسط TivaSystem انجام شد. نتیجه نهایی فراتر از انتظارات ما بود.",
    avatar: "https://i.pravatar.cc/150?img=5"
  },
  { 
    name: "رضا کریمی", 
    role: "بنیانگذار استارتاپ", 
    text: "پشتیبانی و کیفیت کار تیم TivaSystem فوق‌العاده است. پروژه را در زمان مقرر تحویل دادند.",
    avatar: "https://i.pravatar.cc/150?img=33"
  },
];

export default function TestimonialsSection() {
  return (
    <section className="relative py-24 bg-[var(--color-bg-main)] overflow-hidden">
      <AmbientBlobs variant="dark" />
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[var(--color-text-main)] mb-3">نظرات مشتریان</h2>
          <p className="text-[var(--color-text-muted)] text-base">آنچه مشتریان درباره همکاری با ما می‌گویند</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Tilt3DCard intensity={5}>
                <div className="bg-[var(--color-bg-card)]/80 backdrop-blur-xl p-8 rounded-2xl relative border border-[var(--color-border)] transition-all duration-300 hover:shadow-2xl">
                  <Quote className="absolute top-6 left-6 text-[#168BFF]/10 w-12 h-12" />
                  
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} className="text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-6 relative z-10">"{item.text}"</p>
                  
                  <div className="flex items-center gap-4">
                    <img 
                      src={item.avatar} 
                      alt={item.name} 
                      className="w-12 h-12 rounded-full border-2 border-[#168BFF]/30 shadow-lg"
                    />
                    <div>
                      <h4 className="font-semibold text-[var(--color-text-main)] text-sm">{item.name}</h4>
                      <p className="text-xs text-[var(--color-text-muted)]">{item.role}</p>
                    </div>
                  </div>
                </div>
              </Tilt3DCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}