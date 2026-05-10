import { motion } from "motion/react";
import { Calculator, Package, FileText, ArrowRight } from "lucide-react";
import { useState } from "react";

interface OnboardingScreensProps {
  onComplete: () => void;
}

const slides = [
  {
    icon: Calculator,
    title: "Estimate House Cost",
    description: "Get accurate cost estimates for your construction project in minutes"
  },
  {
    icon: Package,
    title: "Select Materials",
    description: "Choose from a wide range of quality construction materials"
  },
  {
    icon: FileText,
    title: "Get Accurate Budget",
    description: "Download detailed reports and manage your construction budget"
  }
];

export function OnboardingScreens({ onComplete }: OnboardingScreensProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      onComplete();
    }
  };

  const handleSkip = () => {
    onComplete();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FAF8F5] to-[#F0EDE8] flex flex-col">
      <div className="flex justify-end p-6">
        <button
          onClick={handleSkip}
          className="text-[#7A7A7A] px-4 py-2 rounded-full hover:bg-white/50 transition-all"
          style={{ fontWeight: 500 }}
        >
          Skip
        </button>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center px-6 pb-20">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.3 }}
          className="flex flex-col items-center text-center max-w-md"
        >
          <div className="w-32 h-32 rounded-3xl bg-gradient-to-br from-white to-[#F0EDE8] flex items-center justify-center mb-8 shadow-xl shadow-orange-500/10">
            {(() => {
              const Icon = slides[currentSlide].icon;
              return <Icon className="w-16 h-16 text-[#E87722]" />;
            })()}
          </div>

          <h2 className="text-3xl text-[#3A3A3A] mb-4" style={{ fontWeight: 600 }}>
            {slides[currentSlide].title}
          </h2>
          <p className="text-[#7A7A7A] text-lg leading-relaxed" style={{ fontWeight: 300 }}>
            {slides[currentSlide].description}
          </p>
        </motion.div>
      </div>

      <div className="pb-12 px-6">
        <div className="flex justify-center gap-2 mb-8">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "w-8 bg-[#E87722]"
                  : "w-2 bg-[#E0DDD8]"
              }`}
            />
          ))}
        </div>

        <div className="max-w-md mx-auto">
          <button
            onClick={handleNext}
            className="w-full bg-gradient-to-r from-[#E87722] to-[#D4AF37] text-white py-4 rounded-2xl shadow-lg shadow-orange-500/30 hover:shadow-xl hover:shadow-orange-500/40 transition-all flex items-center justify-center gap-2"
            style={{ fontWeight: 600 }}
          >
            {currentSlide < slides.length - 1 ? "Next" : "Get Started"}
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
