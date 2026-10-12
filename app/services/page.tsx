"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import * as Icons from "lucide-react";
import AmbientBlobs from "@/components/tiva/ui/AmbientBlobs";
import Tilt3DCard from "@/components/tiva/ui/Tilt3DCard";
import { SERVICES } from "@/lib/data";

export default function ServicesPage() {
  const getIcon = (iconName: string) => {
    const Icon = (Icons as any)[iconName] || Icons.Code2;
    return Icon;
  };

  return (
    <div className="relative min-h-screen bg-[var(--color-bg-main)] pt-32 pb-24 overflow-hidden">
      <AmbientBlobs variant="dark" />
      
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs bg-[#168BFF]/10 text-[#168BFF] border border-[#168BFF]/20 mb-6">
            خدمات ما
          </span>
          <h1 className="text-5xl font-bold text-[var(--color-text-main)] mb-4">
            حوضه فعالیت TivaSystem
          </h1>
          <p className="text-lg text-[var(--color-text-muted)] max-w-2xl mx-auto">
            ما در تمام حوزه‌های دیجیتال، خدمات حرفه‌ای ارائه می‌دهیم
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, index) => {
            const Icon = getIcon(service.icon);
            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <Tilt3DCard intensity={6}>
                  <div className="bg-[var(--color-bg-card)] p-8 rounded-2xl border border-[var(--color-border)] hover:border-[#168BFF]/40 transition-all group h-full">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#168BFF]/20 to-[#7C3AED]/20 rounded-xl flex items-center justify-center mb-6 text-[#168BFF] group-hover:scale-110 transition-transform">
                      <Icon size={26} />
                    </div>
                    <h3 className="text-xl font-bold text-[var(--color-text-main)] mb-3">{service.title}</h3>
                    <p className="text-sm text-[var(--color-text-muted)] mb-4 leading-relaxed">{service.description}</p>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-xs text-[var(--color-text-muted)]">
                          <span className="text-[#168BFF]">✓</span> {feature}
                        </li>
                      ))}
                    </ul>
                    <Link 
                      href={`/services/${service.slug}`}
                      className="text-sm font-medium text-[#168BFF] hover:text-[#38BDF8] inline-flex items-center gap-1"
                    >
                      بیشتر بدانید ←
                    </Link>
                  </div>
                </Tilt3DCard>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <Link
            href="/start-project"
            className="inline-block bg-[#168BFF] hover:bg-[#2196FF] text-white px-10 py-4 rounded-xl font-bold text-lg transition-all hover:shadow-xl hover:shadow-[#168BFF]/30 hover:-translate-y-1"
          >
            پروژه خود را شروع کنید
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
