import React from 'react';
import { motion } from 'framer-motion';

const packs = [
  { id: "clinica", icon: "🏥", title: "Rehabilitación en Clínica", price: "$400", unit: "SESIÓN" },
  { id: "domicilio", icon: "🏠", title: "Rehabilitación a Domicilio", price: "$600", unit: "SESIÓN", rec: true },
  { id: "geriatrica", icon: "👴", title: "Fisioterapia Geriátrica", price: "$400", unit: "SESIÓN" },
  { id: "ayuda", icon: "🤝", title: "Plan de Ayuda Integral", price: "Variable", unit: "CONSULTA" },
];

interface PackagesProps {
  onSelectPackage: (id: string) => void;
}

export const Packages: React.FC<PackagesProps> = ({ onSelectPackage }) => {
  return (
    <div className="py-24 md:py-40 bg-brand-navy px-4 sm:px-8 relative overflow-hidden border-t border-white/5">
      <div className="max-w-[1800px] mx-auto">
        <div className="flex flex-col lg:flex-row items-end justify-between mb-24 gap-12">
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="data-label text-neon mb-6 block">Investment_Structure_v3</span>
              <h2 className="text-6xl md:text-9xl font-black tracking-tighter uppercase leading-[0.8]">
                INVERSIÓN <br />
                <span className="font-serif italic text-neon lowercase tracking-normal">en salud</span>
              </h2>
            </motion.div>
          </div>
          <div className="w-full lg:w-1/3 text-left lg:text-right">
            <p className="text-zinc-500 text-lg font-serif italic mb-8">
              "La salud es la inversión con mayor retorno. Elige el protocolo que mejor se adapte a tus necesidades de optimización física."
            </p>
            <div className="h-[1px] w-full bg-white/10" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5 brutal-border">
          {packs.map((p, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              onClick={() => onSelectPackage(p.id)}
              className={`group relative p-12 md:p-16 bg-brand-navy cursor-pointer hover:bg-neon/5 transition-all duration-500 flex flex-col justify-between min-h-[400px] ${i % 2 === 0 ? 'border-r border-white/5' : ''} ${i < 2 ? 'border-b border-white/5' : ''}`}
            >
              {p.rec && (
                <div className="absolute top-8 right-8">
                  <span className="data-label text-neon border border-neon px-3 py-1">RECOMMENDED_PROTOCOL</span>
                </div>
              )}
              
              <div>
                <div className="flex justify-between items-start mb-12">
                  <span className="text-5xl grayscale group-hover:grayscale-0 transition-all duration-500">{p.icon}</span>
                  <span className="data-label opacity-20">PRC_0{i + 1}</span>
                </div>
                <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-none mb-4 group-hover:text-neon transition-colors">
                  {p.title}
                </h3>
                <span className="data-label text-[8px] text-white/30">System_Optimization_Plan</span>
              </div>

              <div className="mt-12 flex items-end justify-between">
                <div className="flex flex-col">
                  <span className="text-5xl md:text-7xl font-black text-white tabular-nums leading-none">{p.price}</span>
                  <span className="data-label text-[10px] text-neon mt-2">MXN / {p.unit}</span>
                </div>
                <div className="flex flex-col items-end gap-4">
                  <span className="data-label text-[8px] opacity-0 group-hover:opacity-100 transition-opacity">VIEW_PROTOCOL_DETAILS</span>
                  <div className="w-16 h-16 brutal-border flex items-center justify-center group-hover:bg-neon group-hover:text-black transition-all">
                    <span className="text-2xl">→</span>
                  </div>
                </div>
              </div>

              {/* Decorative Background Number */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20rem] font-black text-white/[0.01] pointer-events-none group-hover:text-neon/[0.03] transition-colors">
                {i + 1}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
