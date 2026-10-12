"use client";

import { useState } from "react";
import { Code2, Database, Smartphone, Wrench } from "lucide-react";
import { motion } from "framer-motion";

const techStacks = [
  {
    category: "Frontend",
    icon: Code2,
    items: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind"]
  },
  {
    category: "Backend",
    icon: Database,
    items: ["Node.js", "Python", "Django", "PHP"]
  },
  {
    category: "Mobile",
    icon: Smartphone,
    items: ["Flutter", "React Native"]
  },
  {
    category: "Tools",
    icon: Wrench,
    items: ["Git", "GitHub", "Docker", "Figma"]
  }
];

export default function TechStack() {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  return (
    <section className="py-24 bg-[var(--color-bg-main)] border-t border-[var(--color-border)]">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[var(--color-text-main)] mb-3">تکنولوژی‌های ما</h2>
          <p className="text-[var(--color-text-muted)] text-base">ابزارها و فریم‌ورک‌هایی که برای ساخت محصولات باکیفیت استفاده می‌کنیم</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {techStacks.map((stack, index) => (
            <motion.div 
              key={index} 
              whileHover={{ y: -5 }}
              className="bg-[var(--color-bg-card)] p-6 rounded-2xl border border-[var(--color-border)] hover:border-[#168BFF]/30 transition-all duration-300 shadow-sm hover:shadow-lg"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-[#168BFF]/10 rounded-lg flex items-center justify-center text-[#168BFF]">
                  <stack.icon size={20} />
                </div>
                <h3 className="text-lg font-bold text-[var(--color-text-main)]">{stack.category}</h3>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {stack.items.map((tech) => (
                  <div
                    key={tech}
                    onMouseEnter={() => setHoveredTech(tech)}
                    onMouseLeave={() => setHoveredTech(null)}
                    className="relative px-4 py-2 bg-[var(--color-bg-main)] rounded-lg border border-[var(--color-border)] hover:border-[#168BFF]/20 transition-all cursor-default group"
                  >
                    <span className="text-sm text-[var(--color-text-muted)] group-hover:text-[var(--color-text-main)] transition-colors">{tech}</span>
                    {hoveredTech === tech && (
                      <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-[#168BFF] text-white text-[10px] px-3 py-1 rounded-full whitespace-nowrap shadow-lg">
                        استفاده در پروژه‌های واقعی
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}