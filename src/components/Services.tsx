import React from 'react';
import { motion } from 'framer-motion';

const services = [
  { icon: "🏥", title: "REHABILITACIÓN EN CLÍNICA", desc: "Atención especializada en nuestras instalaciones con equipo de vanguardia.", category: "Clinical" },
  { icon: "🏠", title: "REHABILITACIÓN A DOMICILIO", desc: "Llevamos la terapia a la comodidad de tu hogar para pacientes con movilidad limitada.", category: "Mobile" },
  { icon: "🧠", title: "LESIONES NEUROLÓGICAS", desc: "Tratamiento especializado para secuelas de EVC, Parkinson y otras afecciones del sistema nervioso.", category: "Specialized" },
  { icon: "🦴", title: "LESIONES TRAUMATOLÓGICAS", desc: "Recuperación de fracturas, esguinces, post-operados de cadera y rodilla.", category: "Surgical" },
  { icon: "👴", title: "ADULTO MAYOR", desc: "Fisioterapia geriátrica enfocada en prevenir caídas y mejorar la calidad de vida.", category: "Geriatric" },
  { icon: "🤝", title: "PLAN DE AYUDA", desc: "Programas especiales para pacientes vulnerables y casos sociales.", category: "Social" }
];

export const Services: React.FC = () => {
  return (
    <div className="py-24 md:py-40 bg-brand-navy px-4 sm:px-8 relative overflow-hidden">
      <div className="max-w-[1800px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-32">
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="data-label text-neon mb-6 block">Service_Directory_v3</span>
              <h2 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-[0.8] mb-8">
                NUESTRAS <br />
                <span className="font-serif italic text-neon lowercase tracking-normal">especialidades</span>
              </h2>
              <p className="text-zinc-500 text-lg font-serif italic max-w-md">
                "La excelencia no es un acto, sino un hábito. Nuestra misión es restaurar no solo el movimiento, sino la calidad de vida."
              </p>
            </motion.div>
          </div>
          
          <div className="lg:col-span-7 flex flex-col justify-end">
            <div className="h-[1px] w-full bg-white/10 mb-8" />
            <div className="flex justify-between items-center">
              <span className="data-label">Operational_Protocols</span>
              <span className="text-white/40 font-mono text-xs">SCANNING_AVAILABLE_SLOTS...</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((s, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative flex flex-col p-8 brutal-border bg-zinc-900/20 hover:bg-neon/5 transition-all duration-500"
            >
              <div className="flex justify-between items-start mb-12">
                <span className="text-4xl grayscale group-hover:grayscale-0 transition-all duration-500">{s.icon}</span>
                <span className="data-label opacity-20">0{i + 1}</span>
              </div>

              <div className="mb-8">
                <span className="data-label text-neon text-[8px] mb-2 block">{s.category}</span>
                <h3 className="text-2xl font-black uppercase tracking-tight group-hover:text-neon transition-colors">
                  {s.title}
                </h3>
              </div>
              
              <p className="text-zinc-500 text-sm leading-relaxed mb-12 font-serif italic">
                {s.desc}
              </p>

              <div className="mt-auto pt-8 border-t border-white/5 flex justify-between items-center">
                <span className="data-label text-[8px]">Status: Active</span>
                <div className="w-8 h-8 brutal-border flex items-center justify-center group-hover:bg-neon group-hover:text-black transition-all">
                  <span className="text-xs">→</span>
                </div>
              </div>

              {/* Decorative Background Text */}
              <div className="absolute -bottom-4 -right-4 text-8xl font-black text-white/[0.02] pointer-events-none group-hover:text-neon/[0.05] transition-colors">
                {i + 1}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
