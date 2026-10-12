import { Zap, Heart, Users, Target } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-[#0b1320] text-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">چرا TivaSystem؟</h2>
          <p className="text-gray-400">ارزش‌هایی که در هر پروژه، رعایت می‌کنیم</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center p-6 rounded-xl bg-[#1e293b]/50 backdrop-blur-sm border border-white/5 hover:border-[#7C3AED]/30 transition-all">
            <div className="w-16 h-16 mx-auto bg-[#7C3AED]/20 rounded-full flex items-center justify-center mb-4 text-[#7C3AED]">
              <Zap size={32} />
            </div>
            <h3 className="text-lg font-bold mb-2">کیفیت بالا</h3>
            <p className="text-sm text-gray-400">استفاده از بهترین استانداردها و تکنولوژی‌های روز</p>
          </div>

          <div className="text-center p-6 rounded-xl bg-[#1e293b]/50 backdrop-blur-sm border border-white/5 hover:border-[#2563EB]/30 transition-all">
            <div className="w-16 h-16 mx-auto bg-[#2563EB]/20 rounded-full flex items-center justify-center mb-4 text-[#2563EB]">
              <Heart size={32} />
            </div>
            <h3 className="text-lg font-bold mb-2">مشتری مداری</h3>
            <p className="text-sm text-gray-400">ارتباط مستمر و شفاف در تمام مراحل پروژه</p>
          </div>

          <div className="text-center p-6 rounded-xl bg-[#1e293b]/50 backdrop-blur-sm border border-white/5 hover:border-[#06B6D4]/30 transition-all">
            <div className="w-16 h-16 mx-auto bg-[#06B6D4]/20 rounded-full flex items-center justify-center mb-4 text-[#06B6D4]">
              <Users size={32} />
            </div>
            <h3 className="text-lg font-bold mb-2">تیم حرفه‌ای</h3>
            <p className="text-sm text-gray-400">تیمی متخصص با تجربه در حوزه‌های مختلف برنامه‌نویسی</p>
          </div>

          <div className="text-center p-6 rounded-xl bg-[#1e293b]/50 backdrop-blur-sm border border-white/5 hover:border-[#3B82F6]/30 transition-all">
            <div className="w-16 h-16 mx-auto bg-[#3B82F6]/20 rounded-full flex items-center justify-center mb-4 text-[#3B82F6]">
              <Target size={32} />
            </div>
            <h3 className="text-lg font-bold mb-2">نوآوری مستمر</h3>
            <p className="text-sm text-gray-400">پذیرش چالش‌های جدید و خلق ایده‌های بدیع</p>
          </div>
        </div>
      </div>
    </section>
  );
}