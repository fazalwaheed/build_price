import { motion } from "motion/react";
import { ArrowLeft, Check, Crown, Lock } from "lucide-react";
import { formatPKR } from "../lib/currency";

interface SubscriptionScreenProps {
  onBack: () => void;
  onSubscribe: () => void;
}

const monthlyPrice = 2450;

const benefits = [
  "Unlimited cost calculations",
  "Detailed construction reports",
  "Business-ready entrepreneur pricing model",
  "Priority access for future premium features",
];

export function SubscriptionScreen({ onBack, onSubscribe }: SubscriptionScreenProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FAF8F5] via-[#F6F1EA] to-[#F0EDE8]">
      <div className="p-6 pb-10">
        <div className="flex items-center gap-4 mb-8">
          <button
            onClick={onBack}
            className="w-10 h-10 rounded-full bg-white/70 backdrop-blur-xl flex items-center justify-center shadow-lg"
          >
            <ArrowLeft className="w-5 h-5 text-[#3A3A3A]" />
          </button>
          <div>
            <h1 className="text-2xl text-[#3A3A3A]" style={{ fontWeight: 600 }}>Subscribe To Continue</h1>
            <p className="text-[#7A7A7A]" style={{ fontWeight: 300 }}>Your first estimate was free</p>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-br from-[#E87722] to-[#D4AF37] rounded-[2rem] p-6 text-white shadow-2xl shadow-orange-500/30 mb-6"
        >
          <div className="flex items-start justify-between mb-6">
            <div>
              <p className="uppercase tracking-[0.25em] text-xs opacity-80 mb-2" style={{ fontWeight: 600 }}>
                Premium Plan
              </p>
              <h2 className="text-3xl mb-2" style={{ fontWeight: 700 }}>Build Price Pro</h2>
              <p className="opacity-85 max-w-xs" style={{ fontWeight: 300 }}>
                Designed as a paid construction-estimation service for entrepreneurs and clients.
              </p>
            </div>
            <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center">
              <Crown className="w-7 h-7" />
            </div>
          </div>

          <div className="bg-white/15 rounded-2xl p-4 backdrop-blur-sm">
            <p className="text-sm opacity-80 mb-1" style={{ fontWeight: 300 }}>Subscription Price</p>
            <p className="text-4xl" style={{ fontWeight: 700 }}>
              {formatPKR(monthlyPrice)}
            </p>
            <p className="text-sm opacity-80 mt-1" style={{ fontWeight: 300 }}>per month</p>
          </div>
        </motion.div>

        <div className="bg-white/75 backdrop-blur-xl rounded-[2rem] p-6 shadow-xl shadow-orange-500/10 mb-6">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-12 h-12 rounded-2xl bg-[#F9E6D8] flex items-center justify-center">
              <Lock className="w-6 h-6 text-[#E87722]" />
            </div>
            <div>
              <h3 className="text-xl text-[#3A3A3A]" style={{ fontWeight: 600 }}>Why subscribe?</h3>
              <p className="text-[#7A7A7A]" style={{ fontWeight: 300 }}>
                This makes the prototype feel like a real business product.
              </p>
            </div>
          </div>

          <div className="space-y-3">
            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="flex items-center gap-3 py-3 px-4 bg-[#F7F3EE] rounded-2xl"
              >
                <div className="w-8 h-8 rounded-full bg-[#8AB68D]/20 flex items-center justify-center">
                  <Check className="w-4 h-4 text-[#628E65]" />
                </div>
                <p className="text-[#3A3A3A]" style={{ fontWeight: 400 }}>{benefit}</p>
              </div>
            ))}
          </div>
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={onSubscribe}
          className="w-full bg-gradient-to-r from-[#8AB68D] to-[#A8C5AA] text-white py-4 rounded-2xl shadow-xl shadow-green-500/30 hover:shadow-2xl hover:shadow-green-500/40 transition-all"
          style={{ fontWeight: 600 }}
        >
          Activate Subscription
        </motion.button>

        <p className="text-center text-sm text-[#7A7A7A] mt-4" style={{ fontWeight: 300 }}>
          Prototype flow: this button simulates a successful subscription purchase.
        </p>
      </div>
    </div>
  );
}
