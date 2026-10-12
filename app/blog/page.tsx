"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import AmbientBlobs from "@/components/tiva/ui/AmbientBlobs";
import Tilt3DCard from "@/components/tiva/ui/Tilt3DCard";
import { BLOG_POSTS } from "@/lib/data";

export default function BlogPage() {
  return (
    <div className="relative min-h-screen bg-[var(--color-bg-main)] pt-32 pb-24 overflow-hidden">
      <AmbientBlobs variant="dark" />
      
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-[var(--color-text-main)] mb-4">وبلاگ</h1>
          <p className="text-lg text-[var(--color-text-muted)] max-w-2xl mx-auto">
            مقالات و آموزش‌های مفید در زمینه توسعه وب و طراحی
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BLOG_POSTS.map((post, index) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <Tilt3DCard intensity={5}>
                <Link href={`/blog/${post.slug}`} className="block bg-[var(--color-bg-card)] rounded-2xl overflow-hidden border border-[var(--color-border)] hover:border-[#168BFF]/30 transition-all group h-full">
                  <div className="h-48 bg-gradient-to-br from-[#168BFF]/20 to-[#7C3AED]/20 flex items-center justify-center">
                    <span className="text-4xl font-bold text-[var(--color-text-main)] opacity-20">
                      {post.title.charAt(0)}
                    </span>
                  </div>
                  <div className="p-6">
                    <span className="text-xs bg-[#168BFF]/10 text-[#168BFF] px-2.5 py-1 rounded-full">
                      {post.category}
                    </span>
                    <h3 className="text-lg font-bold text-[var(--color-text-main)] mt-3 mb-2 group-hover:text-[#168BFF] transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-sm text-[var(--color-text-muted)] mb-4 leading-relaxed line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-[var(--color-text-muted)]">
                      <span className="flex items-center gap-1">
                        <Calendar size={12} /> {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={12} /> {post.readTime}
                      </span>
                    </div>
                  </div>
                </Link>
              </Tilt3DCard>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
