"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Tilt3DCard from "@/components/tiva/ui/Tilt3DCard";
import AmbientBlobs from "@/components/tiva/ui/AmbientBlobs";

const projects = [
  { 
    title: "وب‌سایت تحلیل دیتابیس", 
    tags: ["Next.js", "TypeScript", "Tailwind"], 
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
  },
  { 
    title: "فروشگاه اینترنتی هدفون", 
    tags: ["React", "Redux", "Tailwind"], 
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
  },
  { 
    title: "پنل مدیریت سفارشات", 
    tags: ["Vue.js", "Pinia", "Tailwind"], 
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
  },
  { 
    title: "وب‌سایت شرکت نرم‌افزاری", 
    tags: ["HTML", "CSS", "JavaScript"], 
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
  },
];

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="relative py-24 bg-[var(--color-bg-main)] overflow-hidden">
      <AmbientBlobs variant="dark" />
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[var(--color-text-main)] mb-3">نمونه کارها</h2>
          <p className="text-[var(--color-text-muted)] text-base">برخی از پروژه‌هایی که با عشق و توجه ساخته‌ایم</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Tilt3DCard intensity={6}>
                <div className="group bg-[var(--color-bg-card)]/80 backdrop-blur-xl rounded-2xl overflow-hidden border border-[var(--color-border)] transition-all duration-300 hover:shadow-2xl">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-[var(--color-text-main)] mb-2">{project.title}</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map(tag => (
                        <span key={tag} className="bg-[#168BFF]/10 text-[#168BFF] text-xs px-2.5 py-1 rounded-full backdrop-blur-sm">{tag}</span>
                      ))}
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