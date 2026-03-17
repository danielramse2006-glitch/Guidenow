import React from 'react';
import { motion } from 'framer-motion';

const items = [
  { title: "Atención Geriátrica", desc: "Cuidado especializado para el adulto mayor", img: "https://images.unsplash.com/photo-1581578731522-aa837941662c?auto=format&fit=crop&q=80&w=800" },
  { title: "Rehabilitación Física", desc: "Recuperación de movilidad y fuerza", img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800" },
  { title: "Terapia Neurológica", desc: "Estimulación y control motor avanzado", img: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=800" },
  { title: "Servicio a Domicilio", desc: "Terapia profesional en tu hogar", img: "https://images.unsplash.com/photo-1584432810601-6c7f27d2362b?auto=format&fit=crop&q=80&w=800" },
  { title: "Post-Operatorios", desc: "Seguimiento quirúrgico especializado", img: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800" },
];

export const TeamEquipment: React.FC = () => {
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
              <span className="data-label text-neon mb-6 block">Infrastructure_Assets_v2</span>
              <h2 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-[0.8]">
                EQUIPO <br />
                <span className="font-serif italic text-neon lowercase tracking-normal">& tecnología</span>
              </h2>
            </motion.div>
          </div>
          <div className="w-full lg:w-1/3">
             <p className="text-zinc-500 text-sm font-serif italic mb-8">
                "Sistemas avanzados de recuperación muscular y neurológica diseñados para la optimización del rendimiento humano."
             </p>
             <div className="flex space-x-2">
                {[1, 2, 3].map(i => (
                   <div key={i} className="w-2 h-2 bg-neon/20 rounded-full" />
                ))}
             </div>
          </div>
        </div>
      </div>

      <div className="relative flex overflow-x-hidden">
        <motion.div 
          className="flex whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        >
          {[...items, ...items].map((item, i) => (
            <div key={i} className="inline-block w-[300px] md:w-[450px] mx-6 whitespace-normal group relative overflow-hidden brutal-border bg-zinc-900 aspect-[3/4] transition-all duration-500">
              <img 
                src={item.img} 
                alt={item.title} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60"></div>
              
              <div className="absolute top-6 right-6">
                 <span className="data-label text-[8px] bg-black/80 px-2 py-1 border border-white/10">AST_{i + 1}</span>
              </div>

              <div className="absolute bottom-0 left-0 p-10 w-full translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h4 className="text-3xl md:text-4xl font-black uppercase tracking-tighter leading-none mb-4 group-hover:text-neon transition-colors">
                  {item.title}
                </h4>
                <p className="text-zinc-400 text-[10px] uppercase tracking-widest font-bold leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  {item.desc}
                </p>
                <div className="mt-8 h-[1px] w-0 bg-neon group-hover:w-full transition-all duration-700"></div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-12 right-12 hidden lg:block">
         <div className="vertical-text text-white/5 text-[10px] tracking-[1em] uppercase">
            Optimization_Protocol_Active
         </div>
      </div>
    </div>
  );
};
