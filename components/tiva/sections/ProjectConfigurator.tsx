"use client";

import { useState } from "react";
import { ArrowLeft, Check, ChevronRight } from "lucide-react";
import Link from "next/link";

type Step = 1 | 2 | 3 | 4;

const projectTypes = ["وب‌سایت شرکتی", "فروشگاه اینترنتی", "وب‌اپلیکیشن", "داشبورد مدیریتی", "Landing Page", "PWA", "اپلیکیشن موبایل", "سیستم اختصاصی"];
const projectLevels = ["MVP", "Professional", "Advanced", "Enterprise"];
const features = ["پنل مدیریت", "احراز هویت", "پرداخت آنلاین", "API", "Realtime", "Notification", "SEO", "PWA", "Multi Language", "Dark Mode", "AI", "Analytics"];
const timelines = ["فوری", "1-2 ماه", "2-4 ماه", "4+ ماه"];

export default function ProjectConfigurator() {
  const [step, setStep] = useState<Step>(1);
  const [selectedType, setSelectedType] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("");
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [selectedTimeline, setSelectedTimeline] = useState("");

  const toggleFeature = (feature: string) => {
    if (selectedFeatures.includes(feature)) {
      setSelectedFeatures(selectedFeatures.filter(f => f !== feature));
    } else {
      setSelectedFeatures([...selectedFeatures, feature]);
    }
  };

  const handleNext = () => {
    if (step < 4) setStep((step + 1) as Step);
  };

  const handlePrev = () => {
    if (step > 1) setStep((step - 1) as Step);
  };

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white">نوع پروژه‌ت رو انتخاب کن</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {projectTypes.map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedType(type)}
                  className={`p-4 rounded-xl border transition-all text-right ${
                    selectedType === type
                      ? "border-[#168BFF] bg-[#168BFF]/10 text-white"
                      : "border-[#0a1f38] bg-[#0a1f38] text-gray-400 hover:border-[#168BFF]/50"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white">سطح پروژه رو مشخص کن</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {projectLevels.map((level) => (
                <button
                  key={level}
                  onClick={() => setSelectedLevel(level)}
                  className={`p-4 rounded-xl border transition-all text-right ${
                    selectedLevel === level
                      ? "border-[#168BFF] bg-[#168BFF]/10 text-white"
                      : "border-[#0a1f38] bg-[#0a1f38] text-gray-400 hover:border-[#168BFF]/50"
                  }`}
                >
                  {level}
                </button>
              ))}
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white">چه قابلیت‌هایی نیاز داری؟</h3>
            <p className="text-gray-400 text-sm">هر تعداد که نیاز داری می‌تونی انتخاب کنی</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {features.map((feature) => (
                <button
                  key={feature}
                  onClick={() => toggleFeature(feature)}
                  className={`flex items-center gap-2 p-3 rounded-xl border transition-all text-right ${
                    selectedFeatures.includes(feature)
                      ? "border-[#168BFF] bg-[#168BFF]/10 text-white"
                      : "border-[#0a1f38] bg-[#0a1f38] text-gray-400 hover:border-[#168BFF]/50"
                  }`}
                >
                  {selectedFeatures.includes(feature) && <Check size={16} className="text-[#168BFF]" />}
                  {feature}
                </button>
              ))}
            </div>
          </div>
        );
      case 4:
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white">زمان تقریبی مدنظرت چیه؟</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {timelines.map((time) => (
                <button
                  key={time}
                  onClick={() => setSelectedTimeline(time)}
                  className={`p-4 rounded-xl border transition-all text-center ${
                    selectedTimeline === time
                      ? "border-[#168BFF] bg-[#168BFF]/10 text-white"
                      : "border-[#0a1f38] bg-[#0a1f38] text-gray-400 hover:border-[#168BFF]/50"
                  }`}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>
        );
    }
  };

  const isNextDisabled = () => {
    if (step === 1 && !selectedType) return true;
    if (step === 2 && !selectedLevel) return true;
    if (step === 3 && selectedFeatures.length === 0) return true;
    if (step === 4 && !selectedTimeline) return true;
    return false;
  };

  return (
    <section id="configurator" className="py-24 bg-[#061426] border-t border-[#0a1f38]">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-3">پروژه‌ات رو با هم بسازیم</h2>
          <p className="text-gray-400 text-base">نیازهای پروژه‌ت رو انتخاب کن تا برآورد اولیه‌ای ازش داشته باشیم</p>
        </div>

        <div className="max-w-4xl mx-auto bg-[#0a1f38] rounded-3xl p-8 border border-[#168BFF]/10 glow-subtle">
          
          <div className="flex justify-between mb-8 relative">
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-[#168BFF]/20 -translate-y-1/2 z-0"></div>
            <div 
              className="absolute top-1/2 left-0 h-0.5 bg-[#168BFF] -translate-y-1/2 z-0 transition-all duration-500"
              style={{ width: `${((step - 1) / 3) * 100}%` }}
            ></div>
            {[1, 2, 3, 4].map((s) => (
              <div 
                key={s} 
                className={`relative z-10 w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all ${
                  s <= step ? "border-[#168BFF] bg-[#168BFF] text-white" : "border-[#168BFF]/20 bg-[#0a1f38] text-gray-500"
                }`}
              >
                {s}
              </div>
            ))}
          </div>

          <div className="min-h-[300px] mb-8">
            {renderStepContent()}
          </div>

          <div className="flex justify-between items-center border-t border-[#168BFF]/10 pt-6">
            <button 
              onClick={handlePrev} 
              disabled={step === 1}
              className="px-6 py-2 rounded-lg border border-gray-600 text-gray-400 disabled:opacity-50 hover:bg-[#0a1f38] transition-all"
            >
              مرحله قبل
            </button>
            
            {step < 4 ? (
              <button 
                onClick={handleNext} 
                disabled={isNextDisabled()}
                className="flex items-center gap-2 px-6 py-2 bg-[#168BFF] text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#2196FF] transition-all"
              >
                مرحله بعد <ChevronRight size={18} />
              </button>
            ) : (
              <button 
                disabled={isNextDisabled()}
                className="flex items-center gap-2 px-8 py-2 bg-gradient-to-r from-[#168BFF] to-[#3B82F6] text-white rounded-lg font-semibold disabled:opacity-50 hover:shadow-lg hover:shadow-[#168BFF]/20 transition-all"
              >
                دریافت مشاوره تخصصی
              </button>
            )}
          </div>
        </div>

        {step === 4 && selectedTimeline && (
          <div className="max-w-4xl mx-auto mt-12 p-6 rounded-2xl bg-[#0a1f38] border border-[#168BFF]/30">
            <h4 className="text-lg font-bold text-white mb-4">خلاصه پروژه شما:</h4>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div><span className="text-gray-400">نوع پروژه:</span> <span className="text-white font-medium">{selectedType}</span></div>
              <div><span className="text-gray-400">سطح:</span> <span className="text-white font-medium">{selectedLevel}</span></div>
              <div className="col-span-2"><span className="text-gray-400">قابلیت‌ها:</span> <span className="text-white font-medium">{selectedFeatures.join(" - ")}</span></div>
              <div><span className="text-gray-400">زمان:</span> <span className="text-white font-medium">{selectedTimeline}</span></div>
            </div>
            <div className="mt-4 p-4 bg-[#168BFF]/5 rounded-lg border border-[#168BFF]/10 text-center">
              <p className="text-gray-300 text-sm">برآورد قیمت: <span className="text-[#168BFF] font-bold">نیازمند بررسی تخصصی</span></p>
              <Link href="#contact" className="inline-block mt-3 px-6 py-2 bg-[#168BFF] text-white rounded-lg hover:bg-[#2196FF] transition-all">
                دریافت مشاوره تخصصی
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}