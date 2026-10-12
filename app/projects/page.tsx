"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { FaGithub, FaTelegramPlane } from "react-icons/fa";
import AmbientBlobs from "@/components/tiva/ui/AmbientBlobs";
import Tilt3DCard from "@/components/tiva/ui/Tilt3DCard";
import { PORTFOLIO_PROJECTS, TIVA_INFO } from "@/lib/data";

export default function ProjectsPage() {
  return (
    <div className="relative min-h-screen bg-[var(--color-bg-main)] pt-32 pb-24 overflow-hidden">
      <AmbientBlobs variant="dark" />
      
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-[var(--color-text-main)] mb-4">نمونه کارها</h1>
          <p className="text-lg text-[var(--color-text-muted)] max-w-2xl mx-auto">
            برخی از پروژه‌هایی که با عشق و توجه ساخته‌ایم
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PORTFOLIO_PROJECTS.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Tilt3DCard>
                <div className="bg-[var(--color-bg-card)] rounded-2xl overflow-hidden border border-[var(--color-border)] hover:border-[#168BFF]/30 transition-all group">
                  <div className="h-48 bg-gradient-to-br from-[#168BFF]/20 to-[#7C3AED]/20 flex items-center justify-center">
                    <div className="text-6xl opacity-30 font-bold text-[var(--color-text-main)]">
                      {project.title.charAt(0)}
                    </div>
                  </div>
                  <div className="p-6">
                    <span className="text-xs text-[#168BFF] font-medium">{project.category}</span>
                    <h3 className="text-xl font-bold text-[var(--color-text-main)] mt-2 mb-2">{project.title}</h3>
                    <p className="text-sm text-[var(--color-text-muted)] mb-4 leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map(tag => (
                        <span key={tag} className="text-xs bg-[#168BFF]/10 text-[#168BFF] px-2.5 py-1 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Link 
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-semibold text-[#168BFF] hover:gap-3 transition-all"
                    >
                      مشاهده پروژه <ExternalLink size={14} />
                    </Link>
                  </div>
                </div>
              </Tilt3DCard>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 p-8 bg-[var(--color-bg-card)] rounded-3xl border border-[var(--color-border)] text-center"
        >
          <h2 className="text-2xl font-bold text-[var(--color-text-main)] mb-4">
            کدهای ما را در گیت‌هاب دنبال کنید
          </h2>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link
              href={TIVA_INFO.developer.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#168BFF] hover:bg-[#2196FF] text-white px-6 py-3 rounded-xl font-semibold transition-all"
            >
              <FaGithub size={20} />
              {TIVA_INFO.developer.github}
            </Link>
            <Link
              href={TIVA_INFO.developer.telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-[var(--color-border)] px-6 py-3 rounded-xl font-semibold text-[var(--color-text-main)] hover:bg-[var(--color-bg-main)] transition-all"
            >
              <FaTelegramPlane size={18} />
              {TIVA_INFO.developer.telegram}@
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}