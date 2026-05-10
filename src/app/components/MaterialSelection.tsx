import { motion } from "motion/react";
import { Minus, Plus, ArrowRight, ArrowLeft } from "lucide-react";
import { useState } from "react";
import { formatPKR } from "../lib/currency";

interface Material {
  id: string;
  name: string;
  icon: string;
  pricePerUnit: number;
  unit: string;
  quantity: number;
}

interface MaterialSelectionProps {
  houseArea: number;
  onComplete: (materials: Material[]) => void;
  onBack: () => void;
}

export function MaterialSelection({ houseArea, onComplete, onBack }: MaterialSelectionProps) {
  const [materials, setMaterials] = useState<Material[]>([
    { id: "cement", name: "Cement", icon: "🏗️", pricePerUnit: 450, unit: "bag", quantity: Math.ceil(houseArea / 50) },
    { id: "bricks", name: "Bricks", icon: "🧱", pricePerUnit: 8, unit: "piece", quantity: Math.ceil(houseArea * 8) },
    { id: "sand", name: "Sand", icon: "🏖️", pricePerUnit: 1200, unit: "ton", quantity: Math.ceil(houseArea / 200) },
    { id: "tiles", name: "Tiles", icon: "⬜", pricePerUnit: 55, unit: "sq ft", quantity: Math.ceil(houseArea * 0.6) },
    { id: "paint", name: "Paint", icon: "🎨", pricePerUnit: 280, unit: "gallon", quantity: Math.ceil(houseArea / 350) },
    { id: "labour", name: "Labour", icon: "👷", pricePerUnit: 25, unit: "per sq ft", quantity: houseArea }
  ]);

  const updateQuantity = (id: string, change: number) => {
    setMaterials(materials.map(m =>
      m.id === id ? { ...m, quantity: Math.max(0, m.quantity + change) } : m
    ));
  };

  const handleContinue = () => {
    onComplete(materials);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FAF8F5] to-[#F0EDE8]">
      <div className="p-6">
        <div className="flex items-center gap-4 mb-6">
          <button
            onClick={onBack}
            className="w-10 h-10 rounded-full bg-white/70 backdrop-blur-xl flex items-center justify-center shadow-lg"
          >
            <ArrowLeft className="w-5 h-5 text-[#3A3A3A]" />
          </button>
          <div>
            <h1 className="text-2xl text-[#3A3A3A]" style={{ fontWeight: 600 }}>Select Materials</h1>
            <p className="text-[#7A7A7A]" style={{ fontWeight: 300 }}>For {houseArea} sq ft</p>
          </div>
        </div>

        <div className="space-y-4 mb-24">
          {materials.map((material, index) => (
            <motion.div
              key={material.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="bg-white/70 backdrop-blur-xl rounded-2xl p-4 shadow-lg"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#F0EDE8] to-white flex items-center justify-center text-2xl shadow-md">
                  {material.icon}
                </div>

                <div className="flex-1">
                  <h3 className="text-lg text-[#3A3A3A]" style={{ fontWeight: 600 }}>{material.name}</h3>
                  <p className="text-[#7A7A7A]" style={{ fontWeight: 300 }}>
                    {formatPKR(material.pricePerUnit)} per {material.unit}
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => updateQuantity(material.id, -1)}
                    className="w-9 h-9 rounded-full bg-[#F0EDE8] hover:bg-[#E0DDD8] flex items-center justify-center transition-all"
                  >
                    <Minus className="w-4 h-4 text-[#3A3A3A]" />
                  </button>

                  <span className="w-12 text-center text-[#3A3A3A]" style={{ fontWeight: 600 }}>
                    {material.quantity}
                  </span>

                  <button
                    onClick={() => updateQuantity(material.id, 1)}
                    className="w-9 h-9 rounded-full bg-gradient-to-br from-[#E87722] to-[#D4AF37] hover:shadow-lg hover:shadow-orange-500/30 flex items-center justify-center transition-all"
                  >
                    <Plus className="w-4 h-4 text-white" />
                  </button>
                </div>
              </div>

              <div className="mt-3 pt-3 border-t border-[#E0DDD8] flex justify-between items-center">
                <span className="text-[#7A7A7A]" style={{ fontWeight: 300 }}>Subtotal</span>
                <span className="text-lg text-[#E87722]" style={{ fontWeight: 600 }}>
                  {formatPKR(material.pricePerUnit * material.quantity)}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="fixed bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[#FAF8F5] via-[#FAF8F5] to-transparent">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleContinue}
            className="w-full bg-gradient-to-r from-[#E87722] to-[#D4AF37] text-white py-4 rounded-2xl shadow-xl shadow-orange-500/40 hover:shadow-2xl hover:shadow-orange-500/50 transition-all flex items-center justify-center gap-2"
            style={{ fontWeight: 600 }}
          >
            Calculate Cost
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </div>
  );
}
