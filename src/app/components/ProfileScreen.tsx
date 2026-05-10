import { motion } from "motion/react";
import { ArrowLeft, User, FileText, Settings, LogOut, ChevronRight } from "lucide-react";
import { formatPKR } from "../lib/currency";

interface ProfileScreenProps {
  onBack: () => void;
}

export function ProfileScreen({ onBack }: ProfileScreenProps) {
  const menuItems = [
    { icon: User, label: "Edit Profile", color: "from-[#E87722] to-[#D4AF37]" },
    { icon: FileText, label: "Saved Reports", color: "from-[#8AB68D] to-[#A8C5AA]", badge: "3" },
    { icon: Settings, label: "Settings", color: "from-[#C89F7B] to-[#D4AF37]" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FAF8F5] to-[#F0EDE8]">
      <div className="p-6">
        <div className="flex items-center gap-4 mb-8">
          <button
            onClick={onBack}
            className="w-10 h-10 rounded-full bg-white/70 backdrop-blur-xl flex items-center justify-center shadow-lg"
          >
            <ArrowLeft className="w-5 h-5 text-[#3A3A3A]" />
          </button>
          <h1 className="text-2xl text-[#3A3A3A]" style={{ fontWeight: 600 }}>Profile</h1>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/70 backdrop-blur-xl rounded-3xl p-6 shadow-xl shadow-orange-500/10 mb-6"
        >
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#E87722] to-[#D4AF37] flex items-center justify-center text-white text-3xl shadow-xl shadow-orange-500/30 mb-4" style={{ fontWeight: 600 }}>
              JD
            </div>
            <h2 className="text-2xl text-[#3A3A3A] mb-1" style={{ fontWeight: 600 }}>John Doe</h2>
            <p className="text-[#7A7A7A] mb-4" style={{ fontWeight: 300 }}>john.doe@example.com</p>

            <div className="flex gap-4 w-full">
              <div className="flex-1 bg-gradient-to-br from-[#F0EDE8] to-white rounded-2xl p-4 text-center">
                <p className="text-2xl text-[#E87722] mb-1" style={{ fontWeight: 700 }}>12</p>
                <p className="text-sm text-[#7A7A7A]" style={{ fontWeight: 300 }}>Projects</p>
              </div>
              <div className="flex-1 bg-gradient-to-br from-[#F0EDE8] to-white rounded-2xl p-4 text-center">
                <p className="text-2xl text-[#8AB68D] mb-1" style={{ fontWeight: 700 }}>{formatPKR(485000)}</p>
                <p className="text-sm text-[#7A7A7A]" style={{ fontWeight: 300 }}>Total Est.</p>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="space-y-3 mb-6">
          {menuItems.map((item, index) => (
            <motion.button
              key={item.label}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-white/70 backdrop-blur-xl rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all flex items-center justify-between"
            >
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-md`}>
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <span className="text-[#3A3A3A]" style={{ fontWeight: 500 }}>{item.label}</span>
              </div>
              <div className="flex items-center gap-2">
                {item.badge && (
                  <span className="px-2 py-1 bg-[#E87722] text-white text-xs rounded-full" style={{ fontWeight: 600 }}>
                    {item.badge}
                  </span>
                )}
                <ChevronRight className="w-5 h-5 text-[#7A7A7A]" />
              </div>
            </motion.button>
          ))}
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full bg-white/70 backdrop-blur-xl rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-3 text-[#E85D75]"
          style={{ fontWeight: 600 }}
        >
          <LogOut className="w-5 h-5" />
          Log Out
        </motion.button>
      </div>
    </div>
  );
}
