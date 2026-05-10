import { motion } from "motion/react";
import { Calculator, Package, FileText, User, ArrowRight } from "lucide-react";
import { useState } from "react";

interface HomeDashboardProps {
  onStartEstimation: (area: number) => void;
  onNavigate: (screen: string) => void;
}

export function HomeDashboard({ onStartEstimation, onNavigate }: HomeDashboardProps) {
  const [area, setArea] = useState("");

  const handleStart = () => {
    if (area && parseFloat(area) > 0) {
      onStartEstimation(parseFloat(area));
    }
  };

  const quickActions = [
    { icon: Calculator, label: "Start Estimation", color: "from-[#E87722] to-[#D4AF37]" },
    { icon: Package, label: "Material Prices", color: "from-[#8AB68D] to-[#A8C5AA]" },
    { icon: FileText, label: "Previous Reports", color: "from-[#C89F7B] to-[#D4AF37]" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FAF8F5] to-[#F0EDE8]">
      <div className="p-6">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl text-[#3A3A3A] mb-1" style={{ fontWeight: 600 }}>Welcome Back!</h1>
            <p className="text-[#7A7A7A]" style={{ fontWeight: 300 }}>Let's build something great</p>
          </div>
          <button
            onClick={() => onNavigate("profile")}
            className="w-12 h-12 rounded-full bg-gradient-to-br from-[#E87722] to-[#D4AF37] flex items-center justify-center shadow-lg shadow-orange-500/20"
          >
            <User className="w-6 h-6 text-white" />
          </button>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/70 backdrop-blur-xl rounded-3xl p-6 shadow-xl shadow-orange-500/10 mb-6"
        >
          <h3 className="text-xl text-[#3A3A3A] mb-4" style={{ fontWeight: 600 }}>Start New Estimation</h3>

          <div className="mb-4">
            <label className="block text-[#7A7A7A] mb-2" style={{ fontWeight: 500 }}>House Area (sq ft)</label>
            <input
              type="number"
              value={area}
              onChange={(e) => setArea(e.target.value)}
              placeholder="Enter area in square feet"
              className="w-full px-4 py-4 bg-white rounded-2xl border-2 border-transparent focus:border-[#E87722] outline-none transition-all"
              style={{ fontWeight: 400 }}
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleStart}
            disabled={!area || parseFloat(area) <= 0}
            className="w-full bg-gradient-to-r from-[#E87722] to-[#D4AF37] text-white py-4 rounded-2xl shadow-lg shadow-orange-500/30 hover:shadow-xl hover:shadow-orange-500/40 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            style={{ fontWeight: 600 }}
          >
            Start Estimation
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>

        <div className="space-y-3">
          <h4 className="text-lg text-[#3A3A3A] mb-3" style={{ fontWeight: 600 }}>Quick Actions</h4>
          {quickActions.map((action, index) => (
            <motion.button
              key={action.label}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-white/70 backdrop-blur-xl rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all flex items-center gap-4"
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${action.color} flex items-center justify-center shadow-lg`}>
                <action.icon className="w-7 h-7 text-white" />
              </div>
              <span className="text-[#3A3A3A]" style={{ fontWeight: 500 }}>{action.label}</span>
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
}
