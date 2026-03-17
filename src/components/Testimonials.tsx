import React from 'react';
import { motion } from 'framer-motion';

const reviews = [
  { name: "Roberto Hernández", text: "Excelente servicio y atención personalizada. La rehabilitación post-lesión me ayudó a volver a mis actividades deportivas en tiempo récord.", tag: "DEPORTIVA" },
  { name: "María González", text: "El ajuste quiropráctico cambió mi vida. Tenía dolores crónicos de espalda que desaparecieron tras un par de sesiones. ¡Recomendadísimo!", tag: "BIENESTAR" },
  { name: "Carlos Slim", text: "Atención de primer nivel. El equipo y las instalaciones son lo mejor que he visto en México. El sillón recovery es una maravilla.", tag: "PREMIUM" },
  { name: "Ana Paula Luna", text: "Mi recuperación de rodilla fue mucho más rápida de lo esperado. Los fisios son profesionales y muy dedicados.", tag: "FISIOTERAPIA" },
];

export const Testimonials: React.FC = () => {
  return (
    <div className="py-24 md:py-40 bg-brand-navy px-4 sm:px-8 relative overflow-hidden border-t border-white/5">
      <div className="max-w-[1800px] mx-auto mb-24">
        <div className="flex flex-col lg:flex-row items-end justify-between gap-12">
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="data-label text-neon mb-6 block">Patient_Feedback_Logs</span>
              <h2 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-[0.8]">
                VOCES DE <br />
                <span className="font-serif italic text-neon lowercase tracking-normal">recuperación</span>
              </h2>
            </motion.div>
          </div>
          <div className="w-full lg:w-1/3">
             <div className="flex items-center space-x-4 mb-4">
                <div className="flex text-neon">{"★★★★★".split("").map((s, i) => <span key={i} className="text-xs">{s}</span>)}</div>
                <span className="data-label text-white/40">Verified_Reviews</span>
             </div>
             <p className="text-zinc-500 text-sm font-serif italic">
                "La confianza de nuestros pacientes es el motor de nuestra innovación constante en sistemas de rehabilitación."
             </p>
          </div>
        </div>
      </div>

      <div className="relative flex overflow-x-hidden">
        <motion.div 
          className="flex whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        >
          {[...reviews, ...reviews].map((r, i) => (
            <div key={i} className="inline-block w-[400px] md:w-[600px] mx-6 whitespace-normal">
              <div className="bg-zinc-900/10 brutal-border p-12 md:p-16 h-full flex flex-col justify-between hover:bg-neon/5 transition-all duration-500 group">
                <div className="mb-12">
                  <span className="data-label text-neon text-[8px] mb-8 block">Log_Entry: {i + 1}</span>
                  <p className="text-zinc-300 font-serif italic text-2xl md:text-3xl leading-relaxed">
                    "{r.text}"
                  </p>
                </div>
                <div className="flex items-end justify-between pt-12 border-t border-white/5">
                  <div>
                    <h4 className="text-xl font-black text-white uppercase tracking-tight mb-2 group-hover:text-neon transition-colors">{r.name}</h4>
                    <span className="data-label text-[10px] text-white/30">{r.tag}_SPECIALIST</span>
                  </div>
                  <div className="w-12 h-12 brutal-border flex items-center justify-center opacity-20 group-hover:opacity-100 transition-opacity">
                    <span className="text-2xl font-serif italic">“</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Background Marquee */}
      <div className="absolute top-1/2 left-0 w-full -translate-y-1/2 opacity-[0.02] pointer-events-none select-none">
        <span className="text-[30vw] font-black uppercase tracking-tighter whitespace-nowrap">
          TESTIMONIALS_FEEDBACK_DATA_LOGS
        </span>
      </div>
    </div>
  );
};
