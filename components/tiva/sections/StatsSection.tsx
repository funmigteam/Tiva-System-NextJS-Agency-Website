"use client";

import { CheckCircle, Users, Clock, Award } from "lucide-react";

const statsData = [
  { icon: CheckCircle, count: 100, suffix: "+", label: "پروژه موفق", color: "text-emerald-400", bg: "bg-emerald-400/10" },
  { icon: Users, count: 50, suffix: "+", label: "مشتری راضی", color: "text-blue-400", bg: "bg-blue-400/10" },
  { icon: Clock, count: 1200, suffix: "+", label: "ساعت کار", color: "text-indigo-400", bg: "bg-indigo-400/10" },
  { icon: Award, count: 3, suffix: "+", label: "سال تجربه", color: "text-amber-400", bg: "bg-amber-400/10" },
];

export default function StatsSection() {
  return (
    <section className="py-16 bg-[#0a1f38] border-y border-[#168BFF]/5">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {statsData.map((stat, index) => (
            <div key={index} className="flex flex-col items-center text-center group">
              <div className={`w-14 h-14 ${stat.bg} rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <stat.icon className={`${stat.color}`} size={28} />
              </div>
              <div className={`text-4xl font-bold text-white ${stat.color}`}>
                {stat.count}{stat.suffix}
              </div>
              <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}