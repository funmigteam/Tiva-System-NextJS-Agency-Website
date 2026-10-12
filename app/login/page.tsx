"use client";

import { Mail, Lock } from "lucide-react";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--color-bg-main)] pt-20 pb-20">
      <div className="w-full max-w-md p-8 rounded-3xl bg-[var(--color-bg-card)] border border-[var(--color-border)] shadow-xl">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-[var(--color-text-main)]">ورود به پنل کارفرمایان</h2>
          <p className="text-sm text-[var(--color-text-muted)] mt-2">وضعیت پروژه‌های خود را پیگیری کنید</p>
        </div>

        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-[var(--color-text-muted)] mb-2">ایمیل</label>
            <div className="relative">
              <Mail className="absolute right-3 top-3 text-[var(--color-text-muted)]" size={18} />
              <input type="email" className="w-full bg-[var(--color-bg-main)] border border-[var(--color-border)] text-[var(--color-text-main)] rounded-lg px-4 py-3 pr-10 focus:outline-none focus:border-[#168BFF]" placeholder="info@example.com" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-[var(--color-text-muted)] mb-2">رمز عبور</label>
            <div className="relative">
              <Lock className="absolute right-3 top-3 text-[var(--color-text-muted)]" size={18} />
              <input type="password" className="w-full bg-[var(--color-bg-main)] border border-[var(--color-border)] text-[var(--color-text-main)] rounded-lg px-4 py-3 pr-10 focus:outline-none focus:border-[#168BFF]" placeholder="••••••••" />
            </div>
          </div>

          <button className="w-full bg-[#168BFF] hover:bg-[#2196FF] text-white py-3 rounded-lg font-semibold transition-all shadow-lg shadow-[#168BFF]/20">
            ورود به پنل
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-[var(--color-text-muted)]">
          حساب کاربری ندارید؟ <Link href="#" className="text-[#168BFF] hover:underline">ثبت‌نام کنید</Link>
        </div>
      </div>
    </div>
  );
}
