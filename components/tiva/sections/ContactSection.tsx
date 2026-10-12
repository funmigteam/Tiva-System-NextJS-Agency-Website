import { Phone, MessageCircle } from "lucide-react";
import Link from "next/link";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-[#0f172a] text-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="relative bg-gradient-to-r from-[#2563EB] to-[#7C3AED] rounded-3xl p-12 md:p-16 overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/5 rounded-full blur-3xl"></div>

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-right md:w-2/3">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">پروژه بعدی خود را با هم شروع کنیم!</h2>
              <p className="text-white/80 text-lg">ما مشتاقیم تا در مورد نیازهای شما صحبت کنیم و راهکارهای مناسب را ارائه دهیم.</p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Link href="tel:09123456789" className="flex items-center gap-2 bg-white text-[#2563EB] px-8 py-3 rounded-xl font-bold hover:shadow-lg hover:scale-105 transition-all">
                <Phone size={20} />
                تماس با ما
              </Link>
              <Link href="https://wa.me/989123456789" className="flex items-center gap-2 bg-[#25D366] text-white px-8 py-3 rounded-xl font-bold hover:shadow-lg hover:scale-105 transition-all">
                <MessageCircle size={20} />
                واتساپ
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}