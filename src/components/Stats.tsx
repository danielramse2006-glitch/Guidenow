import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { val: "+5,000", label: "PACIENTES ATENDIDOS" },
  { val: "98%", label: "SATISFACCIÓN" },
  { val: "20+", label: "AÑOS DE EXPERIENCIA" },
  { val: "1", label: "SUCURSAL" },
];

export const Stats: React.FC = () => {
  return (
    <div className="py-24 md:py-40 bg-brand-navy px-4 sm:px-8 relative overflow-hidden border-y border-white/5">
      <div className="max-w-[1800px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24">
        <div className="flex flex-col">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="data-label mb-8 block">Performance_Metrics_Report</span>
            <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-12">
              RESULTADOS <br />
              <span className="font-serif italic text-neon lowercase tracking-normal">comprobados</span>
            </h2>
            <p className="text-zinc-500 text-xl font-serif italic mb-16 max-w-md">
              "Nuestra trayectoria se define por la recuperación exitosa de miles de pacientes que confiaron en nuestra ciencia."
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {stats.map((s, i) => (
                <div key={i} className="flex flex-col border-l border-neon/30 pl-6">
                  <span className="text-5xl md:text-7xl font-black tabular-nums mb-2">{s.val}</span>
                  <span className="data-label text-[10px] text-white/40">{s.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            <div className="aspect-square md:aspect-video brutal-border bg-zinc-900 overflow-hidden relative group">
              <img 
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800" 
                alt="Instalaciones" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-neon/10 mix-blend-multiply opacity-60 group-hover:opacity-0 transition-opacity" />
              
              <div className="absolute top-8 left-8">
                <div className="bg-black/80 backdrop-blur-md p-4 brutal-border">
                  <span className="data-label text-white">Live_Feed: HQ_01</span>
                </div>
              </div>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 brutal-border bg-zinc-900/10">
                <h3 className="data-label text-neon mb-4">Misión_Protocol</h3>
                <p className="text-zinc-400 leading-relaxed font-serif italic">
                  Atención de élite utilizando técnicas innovadoras y un enfoque personalizado para la recuperación total.
                </p>
              </div>
              <div className="p-8 brutal-border bg-zinc-900/10">
                <h3 className="data-label text-neon mb-4">Staff_Status</h3>
                <p className="text-zinc-400 leading-relaxed font-serif italic">
                  Fisioterapeutas y quiroprácticos certificados con pasión por la excelencia clínica.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Vertical Label */}
          <div className="absolute -right-12 top-0 h-full hidden xl:flex items-center">
            <span className="vertical-text data-label text-[10px] opacity-10">
              QUALITY_ASSURANCE_SYSTEM_v3.0
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
