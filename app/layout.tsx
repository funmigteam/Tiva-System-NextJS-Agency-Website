import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/tiva/providers/ThemeProvider";
import Header from "@/components/tiva/layout/Header";
import Footer from "@/components/tiva/layout/Footer";

export const metadata: Metadata = {
  title: "TivaSystem | توسعه‌دهنده فرانت‌اند و طراح تجربه کاربری",
  description: "TivaSystem ارائه‌دهنده خدمات طراحی و توسعه وب‌سایت‌های مدرن و راهکارهای هوشمند دیجیتال.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" className="dark" suppressHydrationWarning>
      <head>
        <link
          href="https://cdn.jsdelivr.net/gh/rastikerdar/vazirmatn@v33.003/Vazirmatn-font-face.css"
          rel="stylesheet"
          type="text/css"
        />
      </head>
      <body className="antialiased font-[Vazirmatn] min-h-screen flex flex-col">
        <ThemeProvider>
          <Header />
          <main className="flex-1 bg-[var(--color-bg-main)] text-[var(--color-text-main)] transition-colors duration-300">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
