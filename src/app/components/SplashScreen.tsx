import { motion } from "motion/react";
import { Hammer } from "lucide-react";
import { useEffect } from "react";

interface SplashScreenProps {
  onComplete: () => void;
}

export function SplashScreen({ onComplete }: SplashScreenProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 2500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-[#FAF8F5] via-[#F0EDE8] to-[#E8E4DF] flex flex-col items-center justify-center">
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="flex flex-col items-center gap-4"
      >
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: [0, -10, 10, -10, 0] }}
          transition={{ duration: 1, delay: 0.5 }}
          className="w-24 h-24 rounded-3xl bg-gradient-to-br from-[#E87722] to-[#D4AF37] flex items-center justify-center shadow-2xl shadow-orange-500/30"
        >
          <Hammer className="w-12 h-12 text-white" />
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl text-[#3A3A3A] mb-2" style={{ fontWeight: 700 }}>Price Build</h1>
          <p className="text-[#7A7A7A]" style={{ fontWeight: 300 }}>Build Smart, Estimate Right</p>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.5 }}
        className="absolute bottom-12"
      >
        <div className="flex gap-2">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-2 h-2 rounded-full bg-[#E87722]"
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}
