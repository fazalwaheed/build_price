import { motion } from "motion/react";
import { ArrowLeft, Download, Share2, Home } from "lucide-react";
import { formatPKR } from "../lib/currency";
import { formatPakistanDate } from "../lib/date";

interface Material {
  id: string;
  name: string;
  icon: string;
  pricePerUnit: number;
  unit: string;
  quantity: number;
}

interface ReportScreenProps {
  materials: Material[];
  onBack: () => void;
  onHome: () => void;
}

export function ReportScreen({ materials, onBack, onHome }: ReportScreenProps) {
  const totalCost = materials.reduce((sum, m) => sum + (m.pricePerUnit * m.quantity), 0);
  const currentDate = formatPakistanDate(new Date());

  const handleDownload = () => {
    alert("PDF report would be generated here");
  };

  const handleShare = () => {
    alert("Share functionality would open here");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FAF8F5] to-[#F0EDE8]">
      <div className="p-6 pb-32">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <button
              onClick={onBack}
              className="w-10 h-10 rounded-full bg-white/70 backdrop-blur-xl flex items-center justify-center shadow-lg"
            >
              <ArrowLeft className="w-5 h-5 text-[#3A3A3A]" />
            </button>
            <h1 className="text-2xl text-[#3A3A3A]" style={{ fontWeight: 600 }}>Cost Report</h1>
          </div>
          <button
            onClick={handleShare}
            className="w-10 h-10 rounded-full bg-white/70 backdrop-blur-xl flex items-center justify-center shadow-lg"
          >
            <Share2 className="w-5 h-5 text-[#3A3A3A]" />
          </button>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/70 backdrop-blur-xl rounded-3xl p-6 shadow-xl shadow-orange-500/10 mb-6"
        >
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#E0DDD8]">
            <div>
              <h2 className="text-2xl text-[#3A3A3A] mb-1" style={{ fontWeight: 700 }}>Price Build</h2>
              <p className="text-[#7A7A7A]" style={{ fontWeight: 300 }}>Construction Estimate</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-[#7A7A7A]" style={{ fontWeight: 300 }}>Report Date</p>
              <p className="text-[#3A3A3A]" style={{ fontWeight: 500 }}>{currentDate}</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#E87722] to-[#D4AF37] rounded-2xl p-6 text-white mb-6">
            <p className="opacity-90 mb-2" style={{ fontWeight: 300 }}>Total Estimated Cost</p>
            <h3 className="text-4xl mb-1" style={{ fontWeight: 700 }}>{formatPKR(totalCost)}</h3>
            <p className="opacity-75 text-sm" style={{ fontWeight: 300 }}>Including materials and labour</p>
          </div>

          <div className="space-y-3">
            <h4 className="text-lg text-[#3A3A3A] mb-3" style={{ fontWeight: 600 }}>Detailed Breakdown</h4>
            {materials.map((material) => {
              const subtotal = material.pricePerUnit * material.quantity;

              return (
                <div
                  key={material.id}
                  className="flex items-center justify-between py-3 px-4 bg-[#F0EDE8] rounded-xl"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{material.icon}</span>
                    <div>
                      <p className="text-[#3A3A3A]" style={{ fontWeight: 500 }}>{material.name}</p>
                      <p className="text-sm text-[#7A7A7A]" style={{ fontWeight: 300 }}>
                        {material.quantity} {material.unit} x {formatPKR(material.pricePerUnit)}
                      </p>
                    </div>
                  </div>
                  <p className="text-lg text-[#3A3A3A]" style={{ fontWeight: 600 }}>
                    {formatPKR(subtotal)}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-6 pt-6 border-t border-[#E0DDD8]">
            <div className="flex justify-between items-center mb-2">
              <p className="text-[#7A7A7A]" style={{ fontWeight: 300 }}>Subtotal</p>
              <p className="text-[#3A3A3A]" style={{ fontWeight: 500 }}>{formatPKR(totalCost)}</p>
            </div>
            <div className="flex justify-between items-center mb-2">
              <p className="text-[#7A7A7A]" style={{ fontWeight: 300 }}>Tax (10%)</p>
              <p className="text-[#3A3A3A]" style={{ fontWeight: 500 }}>{formatPKR(totalCost * 0.1)}</p>
            </div>
            <div className="flex justify-between items-center pt-3 border-t border-[#E0DDD8]">
              <p className="text-lg text-[#3A3A3A]" style={{ fontWeight: 600 }}>Grand Total</p>
              <p className="text-2xl text-[#E87722]" style={{ fontWeight: 700 }}>
                {formatPKR(totalCost * 1.1)}
              </p>
            </div>
          </div>
        </motion.div>

        <p className="text-center text-sm text-[#7A7A7A]" style={{ fontWeight: 300 }}>
          This is an estimated cost. Actual costs may vary based on market conditions.
        </p>
      </div>

      <div className="fixed bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[#FAF8F5] via-[#FAF8F5] to-transparent space-y-3">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleDownload}
          className="w-full bg-gradient-to-r from-[#E87722] to-[#D4AF37] text-white py-4 rounded-2xl shadow-xl shadow-orange-500/40 hover:shadow-2xl hover:shadow-orange-500/50 transition-all flex items-center justify-center gap-2"
          style={{ fontWeight: 600 }}
        >
          <Download className="w-5 h-5" />
          Download PDF Report
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={onHome}
          className="w-full bg-white/70 backdrop-blur-xl text-[#3A3A3A] py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
          style={{ fontWeight: 600 }}
        >
          <Home className="w-5 h-5" />
          Back to Home
        </motion.button>
      </div>
    </div>
  );
}
