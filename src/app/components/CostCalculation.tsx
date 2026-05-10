import { motion } from "motion/react";
import { ArrowLeft, Download } from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";
import { formatPKR } from "../lib/currency";

interface Material {
  id: string;
  name: string;
  icon: string;
  pricePerUnit: number;
  unit: string;
  quantity: number;
}

interface CostCalculationProps {
  materials: Material[];
  onBack: () => void;
  onViewReport: () => void;
}

export function CostCalculation({ materials, onBack, onViewReport }: CostCalculationProps) {
  const chartData = materials.map(m => ({
    name: m.name,
    value: m.pricePerUnit * m.quantity
  }));

  const COLORS = ["#E87722", "#8AB68D", "#D4AF37", "#C89F7B", "#A8C5AA", "#E0B589"];

  const totalCost = materials.reduce((sum, m) => sum + (m.pricePerUnit * m.quantity), 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FAF8F5] to-[#F0EDE8]">
      <div className="p-6 pb-32">
        <div className="flex items-center gap-4 mb-6">
          <button
            onClick={onBack}
            className="w-10 h-10 rounded-full bg-white/70 backdrop-blur-xl flex items-center justify-center shadow-lg"
          >
            <ArrowLeft className="w-5 h-5 text-[#3A3A3A]" />
          </button>
          <h1 className="text-2xl text-[#3A3A3A]" style={{ fontWeight: 600 }}>Cost Breakdown</h1>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white/70 backdrop-blur-xl rounded-3xl p-6 shadow-xl shadow-orange-500/10 mb-6"
        >
          <div className="text-center mb-4">
            <p className="text-[#7A7A7A] mb-2" style={{ fontWeight: 300 }}>Total Estimated Cost</p>
            <h2 className="text-5xl text-[#E87722]" style={{ fontWeight: 700 }}>
              {formatPKR(totalCost)}
            </h2>
          </div>
        </motion.div>

        <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-6 shadow-xl shadow-orange-500/10 mb-6">
          <h3 className="text-xl text-[#3A3A3A] mb-4" style={{ fontWeight: 600 }}>Cost Distribution</h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={chartData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={90}
                paddingAngle={5}
                dataKey="value"
              >
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip
                formatter={(value: number) => formatPKR(value)}
                contentStyle={{
                  backgroundColor: "rgba(255, 255, 255, 0.9)",
                  backdropFilter: "blur(10px)",
                  border: "none",
                  borderRadius: "12px",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)"
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-6 shadow-xl shadow-orange-500/10">
          <h3 className="text-xl text-[#3A3A3A] mb-4" style={{ fontWeight: 600 }}>Material Breakdown</h3>
          <div className="space-y-3">
            {materials.map((material, index) => {
              const subtotal = material.pricePerUnit * material.quantity;
              const percentage = ((subtotal / totalCost) * 100).toFixed(1);

              return (
                <motion.div
                  key={material.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center justify-between py-3 border-b border-[#E0DDD8] last:border-0"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: COLORS[index % COLORS.length] }}
                    />
                    <div>
                      <p className="text-[#3A3A3A]" style={{ fontWeight: 500 }}>{material.name}</p>
                      <p className="text-sm text-[#7A7A7A]" style={{ fontWeight: 300 }}>
                        {material.quantity} {material.unit}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-[#3A3A3A]" style={{ fontWeight: 600 }}>
                      {formatPKR(subtotal)}
                    </p>
                    <p className="text-sm text-[#7A7A7A]" style={{ fontWeight: 300 }}>{percentage}%</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[#FAF8F5] via-[#FAF8F5] to-transparent">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={onViewReport}
          className="w-full bg-gradient-to-r from-[#8AB68D] to-[#A8C5AA] text-white py-4 rounded-2xl shadow-xl shadow-green-500/30 hover:shadow-2xl hover:shadow-green-500/40 transition-all flex items-center justify-center gap-2"
          style={{ fontWeight: 600 }}
        >
          <Download className="w-5 h-5" />
          View Full Report
        </motion.button>
      </div>
    </div>
  );
}
