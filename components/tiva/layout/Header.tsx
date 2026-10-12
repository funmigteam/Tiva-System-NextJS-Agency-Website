"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Moon, Sun, User } from "lucide-react";
import { useTheme } from "@/components/tiva/providers/ThemeProvider";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const navLinks = [
    { name: "خانه", href: "/" },
    { name: "خدمات", href: "/services" },
    { name: "نمونه کارها", href: "/projects" },
    { name: "فرآیند ما", href: "/process" },
    { name: "درباره ما", href: "/about" },
    { name: "وبلاگ", href: "/blog" },
    { name: "تماس با ما", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-[var(--color-bg-header)] backdrop-blur-md border-b border-[var(--color-border)]">
      <div className="container-custom h-20 flex items-center justify-between">
        
        <Link href="/" className="flex items-center gap-2 select-none group">
          <span className="text-2xl font-bold text-[var(--color-text-main)] tracking-tighter transition-transform group-hover:scale-110">&lt;/&gt;</span>
          <span className="text-xl font-bold text-[var(--color-text-main)]">TivaSystem</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text-main)] transition-colors relative group"
            >
              {link.name}
              <span className="absolute bottom-0 right-0 w-0 h-0.5 bg-[#168BFF] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-full hover:bg-[var(--color-bg-card)] transition-all duration-300 text-[var(--color-text-main)]"
            aria-label="تغییر تم"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <Link
            href="/login"
            className="flex items-center gap-2 px-4 py-2.5 border border-[var(--color-border)] rounded-xl text-sm text-[var(--color-text-main)] hover:bg-[var(--color-bg-card)] transition-all"
          >
            <User size={16} />
            ورود
          </Link>

          <Link
            href="/start-project"
            className="bg-[#168BFF] hover:bg-[#2196FF] text-white px-5 py-2.5 rounded-xl text-sm font-semibold transition-all shadow-lg shadow-[#168BFF]/20"
          >
            مشاوره رایگان
          </Link>
        </div>

        <button 
          className="lg:hidden p-2 text-[var(--color-text-main)]" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-[var(--color-bg-main)] border-b border-[var(--color-border)] p-4 absolute top-20 left-0 w-full shadow-xl">
          <nav className="flex flex-col space-y-3 text-right">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text-main)] hover:bg-[var(--color-bg-card)] px-4 py-3 rounded-lg transition-all" 
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            
            <div className="flex items-center justify-between pt-4 border-t border-[var(--color-border)]">
              <Link href="/login" className="flex items-center gap-2 text-sm text-[var(--color-text-main)]">
                <User size={16} /> ورود
              </Link>
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-[var(--color-bg-card)] transition-all text-[var(--color-text-main)]"
              >
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>
            
            <Link 
              href="/start-project" 
              className="bg-[#168BFF] hover:bg-[#2196FF] text-white text-center px-4 py-3 rounded-xl text-sm font-semibold" 
              onClick={() => setIsOpen(false)}
            >
              مشاوره رایگان
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
