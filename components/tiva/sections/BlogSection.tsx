import Link from "next/link";

const posts = [
  { 
    title: "پروژه جاوااسکریپت چیست؟", 
    category: "فرانت‌اند", 
    date: "۱۴۰۳/۰۸/۱۲", 
    color: "from-blue-900 to-blue-800" 
  },
  { 
    title: "ترفندهای کاربردی در CSS و Tailwind", 
    category: "طراحی", 
    date: "۱۴۰۳/۰۸/۰۵", 
    color: "from-emerald-900 to-emerald-800" 
  },
  { 
    title: "بهینه‌سازی عملکرد در Node.js", 
    category: "بک‌اند", 
    date: "۱۴۰۳/۰۷/۲۸", 
    color: "from-green-900 to-green-800" 
  },
  { 
    title: "راهنمای کامل React", 
    category: "فرانت‌اند", 
    date: "۱۴۰۳/۰۷/۲۰", 
    color: "from-amber-900 to-amber-800" 
  },
];

export default function BlogSection() {
  return (
    <section id="blog" className="py-24 bg-[#0a1f38]">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-3">آخرین مقالات</h2>
          <p className="text-gray-400 text-base">مطالب و آموزش‌های مفید در زمینه توسعه وب</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {posts.map((post, index) => (
            <div 
              key={index} 
              className={`bg-gradient-to-br ${post.color} rounded-2xl p-6 relative overflow-hidden border border-white/5 hover:border-[#168BFF]/30 transition-all duration-300 card-hover`}
            >
              <div className="relative z-10 h-full flex flex-col justify-between min-h-[200px]">
                <div>
                  <span className="inline-block bg-white/10 text-white/90 text-xs px-3 py-1 rounded-full mb-4 backdrop-blur-sm">
                    {post.category}
                  </span>
                  <h3 className="text-lg font-bold text-white leading-snug">{post.title}</h3>
                </div>
                <div className="flex items-center justify-between text-xs text-white/80 mt-6">
                  <span>{post.date}</span>
                  <Link href="#" className="hover:text-white">مشاهده مقاله ←</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}