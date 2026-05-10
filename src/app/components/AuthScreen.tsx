import { motion } from "motion/react";
import { Mail, Lock, User } from "lucide-react";
import { useState } from "react";

interface AuthScreenProps {
  onComplete: () => void;
}

export function AuthScreen({ onComplete }: AuthScreenProps) {
  const [isSignUp, setIsSignUp] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onComplete();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FAF8F5] to-[#F0EDE8] flex items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        <div className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-2xl shadow-orange-500/10 p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl text-[#3A3A3A] mb-2" style={{ fontWeight: 600 }}>
              {isSignUp ? "Create Account" : "Welcome Back"}
            </h2>
            <p className="text-[#7A7A7A]" style={{ fontWeight: 300 }}>
              {isSignUp ? "Sign up to get started" : "Sign in to continue"}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {isSignUp && (
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#7A7A7A]" />
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full pl-12 pr-4 py-4 bg-white rounded-2xl border-2 border-transparent focus:border-[#E87722] outline-none transition-all"
                  style={{ fontWeight: 400 }}
                />
              </div>
            )}

            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#7A7A7A]" />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full pl-12 pr-4 py-4 bg-white rounded-2xl border-2 border-transparent focus:border-[#E87722] outline-none transition-all"
                style={{ fontWeight: 400 }}
              />
            </div>

            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#7A7A7A]" />
              <input
                type="password"
                placeholder="Password"
                className="w-full pl-12 pr-4 py-4 bg-white rounded-2xl border-2 border-transparent focus:border-[#E87722] outline-none transition-all"
                style={{ fontWeight: 400 }}
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full bg-gradient-to-r from-[#E87722] to-[#D4AF37] text-white py-4 rounded-2xl shadow-lg shadow-orange-500/30 hover:shadow-xl hover:shadow-orange-500/40 transition-all mt-6"
              style={{ fontWeight: 600 }}
            >
              {isSignUp ? "Sign Up" : "Sign In"}
            </motion.button>
          </form>

          <div className="mt-6 text-center">
            <button
              onClick={() => setIsSignUp(!isSignUp)}
              className="text-[#E87722]"
              style={{ fontWeight: 500 }}
            >
              {isSignUp ? "Already have an account? Sign In" : "Don't have an account? Sign Up"}
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
