"use client";

import { useState } from "react";
import { Code2, MousePointer2, Cpu, Zap } from "lucide-react";

export default function TivaLab() {
  const [hoverPos, setHoverPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setHoverPos({
      x: ((e.clientX - rect.left) / rect.width - 0.5) * 20,
      y: ((e.clientY - rect.top) / rect.height - 0.5) * 20,
    });
  };

  return (
    <section className="py-24 bg-[#0a1f38] border-t border-[#168BFF]/5">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-3">TivaSystem Lab</h2>
          <p className="text-gray-400 text-lg">چیزی که می‌بینی فقط طراحی نیست.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div 
            className="bg-[#061426] p-8 rounded-2xl border border-[#168BFF]/10 hover:border-[#168BFF]/30 transition-all duration-300 relative overflow-hidden cursor-default"
            onMouseMove={handleMouseMove}
            style={{
              transform: `perspective(600px) rotateY(${hoverPos.x}deg) rotateX(${-hoverPos.y}deg)`,
              transition: 'transform 0.1s ease-out'
            }}
          >
            <div className="flex flex-col items-center text-center">
              <MousePointer2 className="text-[#168BFF] w-12 h-12 mb-4" />
              <h4 className="text-lg font-bold text-white mb-2">Perspective Card</h4>
              <p className="text-sm text-gray-400">کارت با حرکت ماوس، پرسپکتیو می‌گیرد.</p>
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-[#168BFF]/5 to-transparent opacity-0 hover:opacity-100 transition-opacity pointer-events-none"></div>
          </div>

          <div className="bg-[#061426] p-6 rounded-2xl border border-[#168BFF]/10 hover:border-[#168BFF]/30 transition-all duration-300 relative overflow-hidden group">
            <div className="absolute top-4 left-4 flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
            </div>
            <div className="mt-6 font-mono text-xs text-gray-300 leading-relaxed">
              <span className="text-[#168BFF]">const</span> <span className="text-yellow-400">TivaSystem</span> = {'{'}<br />
              &nbsp;&nbsp;design: <span className="text-emerald-400">true</span>,<br />
              &nbsp;&nbsp;performance: <span className="text-emerald-400">true</span>,<br />
              &nbsp;&nbsp;scalable: <span className="text-emerald-400">true</span><br />
              {'}'};
            </div>
            <div className="absolute bottom-4 right-4 text-[#168BFF]/50 text-xs">React • Next.js</div>
          </div>

          <div className="bg-[#061426] p-8 rounded-2xl border border-[#168BFF]/10 hover:border-[#168BFF]/30 transition-all duration-300 flex flex-col items-center justify-center group">
            <Cpu className="text-[#38BDF8] w-12 h-12 mb-4" />
            <h4 className="text-lg font-bold text-white mb-4">Magnetic Button</h4>
            <button className="relative px-8 py-3 bg-[#168BFF] text-white rounded-lg transition-all hover:shadow-lg hover:shadow-[#168BFF]/20 group-hover:scale-110 duration-300">
              Hover Me
            </button>
          </div>

          <div className="bg-[#061426] p-8 rounded-2xl border border-[#168BFF]/10 hover:border-[#168BFF]/30 transition-all duration-300 flex flex-col items-center justify-center text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[#168BFF]/5 blur-3xl animate-pulse"></div>
            <Zap className="text-yellow-400 w-12 h-12 mb-4 relative z-10 animate-pulse" />
            <h4 className="text-lg font-bold text-white mb-2 relative z-10">Micro Interaction</h4>
            <p className="text-sm text-gray-400 relative z-10">انیمیشن‌های ظریف و هدفمند</p>
          </div>

        </div>
      </div>
    </section>
  );
}