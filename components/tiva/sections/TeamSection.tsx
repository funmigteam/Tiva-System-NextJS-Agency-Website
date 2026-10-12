"use client";

const team = [
  {
    name: "علی رضایی",
    role: "مدیرعامل و بنیان‌گذار",
    image: "https://ui-avatars.com/api/?name=Ali+Rezaei&background=2563EB&color=fff&size=128&bold=true",
    expertise: ["استراتژی دیجیتال", "رهبری تیم"],
  },
  {
    name: "سارا محمدی",
    role: "مدیر فنی",
    image: "https://ui-avatars.com/api/?name=Sara+Mohammadi&background=7C3AED&color=fff&size=128&bold=true",
    expertise: ["معماری نرم‌افزار", "Cloud"],
  },
  {
    name: "رضا کریمی",
    role: "توسعه‌دهنده ارشد",
    image: "https://ui-avatars.com/api/?name=Reza+Karimi&background=06B6D4&color=fff&size=128&bold=true",
    expertise: ["React", "Next.js", "Node.js"],
  },
  {
    name: "مریم حسینی",
    role: "طراح UI/UX",
    image: "https://ui-avatars.com/api/?name=Maryam+Hosseini&background=8B5CF6&color=fff&size=128&bold=true",
    expertise: ["طراحی تجربه کاربری", "تحقیق کاربر"],
  },
];

export default function TeamSection() {
  return (
    <section id="team" className="py-24 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 bg-purple-50 dark:bg-purple-900/30 rounded-full text-sm font-medium text-purple-700 dark:text-purple-300 mb-4 border border-purple-200 dark:border-purple-800">
            تیم ما
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              متخصصان TivaSystem
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            ترکیبی از تخصص، خلاقیت و تعهد برای ارائه بهترین راهکارها
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <div key={index} className="group text-center p-6 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 hover:border-blue-200 dark:hover:border-blue-800 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
              <div className="relative mx-auto w-32 h-32 rounded-full overflow-hidden mb-4 ring-4 ring-blue-100 dark:ring-blue-900/30 group-hover:ring-blue-500 transition-all duration-300">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              </div>
              <h3 className="font-bold text-lg text-gray-800 dark:text-white">{member.name}</h3>
              <p className="text-sm text-blue-600 dark:text-blue-400 mb-3">{member.role}</p>
              <div className="flex flex-wrap gap-1 justify-center">
                {member.expertise.map((exp, i) => (
                  <span key={i} className="text-xs px-2 py-0.5 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-full">
                    {exp}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}