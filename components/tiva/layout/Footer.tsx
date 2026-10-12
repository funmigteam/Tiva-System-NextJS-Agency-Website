"use client";

import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { FaGithub, FaLinkedin, FaTelegramPlane, FaInstagram } from "react-icons/fa";
import { TIVA_INFO } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-[var(--color-bg-card)] border-t border-[var(--color-border)] pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 text-right">
          
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl font-bold text-[var(--color-text-main)] tracking-tighter">&lt;/&gt;</span>
              <span className="text-xl font-bold text-[var(--color-text-main)]">TivaSystem</span>
            </div>
            <p className="text-sm text-[var(--color-text-muted)] leading-relaxed mb-6">
              توسعه‌دهنده فرانت‌اند و طراح تجربه کاربری با بیش از ۳ سال سابقه درخشان در زمینه طراحی و توسعه وب‌سایت‌های مدرن.
            </p>
            <div className="flex gap-4">
              <Link href={TIVA_INFO.developer.githubUrl} target="_blank" rel="noopener noreferrer" className="text-[var(--color-text-muted)] hover:text-[var(--color-text-main)] transition-colors" aria-label="GitHub">
                <FaGithub size={20} />
              </Link>
              <Link href={TIVA_INFO.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-[var(--color-text-muted)] hover:text-[var(--color-text-main)] transition-colors" aria-label="LinkedIn">
                <FaLinkedin size={20} />
              </Link>
              <Link href={TIVA_INFO.contact.telegramUrl} target="_blank" rel="noopener noreferrer" className="text-[var(--color-text-muted)] hover:text-[var(--color-text-main)] transition-colors" aria-label="Telegram">
                <FaTelegramPlane size={20} />
              </Link>
              <Link href={TIVA_INFO.social.instagram} target="_blank" rel="noopener noreferrer" className="text-[var(--color-text-muted)] hover:text-[var(--color-text-main)] transition-colors" aria-label="Instagram">
                <FaInstagram size={20} />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg text-[var(--color-text-main)] mb-6">دسترسی سریع</h4>
            <ul className="space-y-3 text-sm text-[var(--color-text-muted)]">
              <li><Link href="/" className="hover:text-[#168BFF] transition-colors">خانه</Link></li>
              <li><Link href="/services" className="hover:text-[#168BFF] transition-colors">خدمات</Link></li>
              <li><Link href="/projects" className="hover:text-[#168BFF] transition-colors">نمونه کارها</Link></li>
              <li><Link href="/process" className="hover:text-[#168BFF] transition-colors">فرآیند ما</Link></li>
              <li><Link href="/about" className="hover:text-[#168BFF] transition-colors">درباره ما</Link></li>
              <li><Link href="/blog" className="hover:text-[#168BFF] transition-colors">وبلاگ</Link></li>
              <li><Link href="/contact" className="hover:text-[#168BFF] transition-colors">تماس با ما</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg text-[var(--color-text-main)] mb-6">خدمات</h4>
            <ul className="space-y-3 text-sm text-[var(--color-text-muted)]">
              <li><Link href="/services/landing-page" className="hover:text-[#168BFF] transition-colors">لندینگ پیج</Link></li>
              <li><Link href="/services/web-design" className="hover:text-[#168BFF] transition-colors">طراحی سایت</Link></li>
              <li><Link href="/services/mobile-app" className="hover:text-[#168BFF] transition-colors">اپلیکیشن موبایل</Link></li>
              <li><Link href="/services/web-application" className="hover:text-[#168BFF] transition-colors">Web Application</Link></li>
              <li><Link href="/services/seo" className="hover:text-[#168BFF] transition-colors">سئو و بهینه‌سازی</Link></li>
              <li><Link href="/services/content" className="hover:text-[#168BFF] transition-colors">تولید محتوا</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg text-[var(--color-text-main)] mb-6">اطلاعات تماس</h4>
            <ul className="space-y-4 text-sm text-[var(--color-text-muted)]">
              <li className="flex items-center gap-3 justify-end">
                <a href={`mailto:${TIVA_INFO.contact.email}`} className="hover:text-[#168BFF] transition-colors" dir="ltr">
                  {TIVA_INFO.contact.email}
                </a>
                <Mail size={18} className="text-[#168BFF] flex-shrink-0" />
              </li>
              <li className="flex items-center gap-3 justify-end">
                <a href={`tel:${TIVA_INFO.contact.phone}`} className="hover:text-[#168BFF] transition-colors" dir="ltr">
                  {TIVA_INFO.contact.phoneFormatted}
                </a>
                <Phone size={18} className="text-[#168BFF] flex-shrink-0" />
              </li>
              <li className="flex items-center gap-3 justify-end">
                <a href={TIVA_INFO.contact.telegramUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[#168BFF] transition-colors" dir="ltr">
                  {TIVA_INFO.contact.telegram}@
                </a>
                <FaTelegramPlane size={16} className="text-[#168BFF] flex-shrink-0" />
              </li>
              <li className="flex items-start gap-3 justify-end">
                <span className="text-right leading-relaxed">{TIVA_INFO.contact.address}</span>
                <MapPin size={18} className="text-[#168BFF] flex-shrink-0 mt-1" />
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[var(--color-border)] pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-[var(--color-text-muted)]">
            <p>© ۲۰۲۴ TivaSystem - تمامی حقوق محفوظ است.</p>
            <p className="flex items-center gap-2">
              توسعه‌یافته با <span className="text-red-500">❤</span> توسط تیم TivaSystem
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
