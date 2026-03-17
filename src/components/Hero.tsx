import React from 'react';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  const waLink = "https://wa.me/528994611671?text=Hola%20GuideNow%20Fisio,%20estoy%20listo%20para%20mi%20tratamiento.";

  return (
    <div className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-brand-navy pt-20">
      {/* Background Decorative Text */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span 
          className="text-brand-teal font-black italic tracking-tighter opacity-[0.05] whitespace-nowrap uppercase"
          style={{ fontSize: '30vw' }}
        >
          GuideNow
        </span>
      </div>

      {/* Atmospheric Background */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-brand-teal/30 blur-[150px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-brand-teal/20 blur-[120px] rounded-full" />
        <div className="absolute inset-0 grid-bg opacity-15" />
      </div>

      <div className="relative z-10 w-full max-w-[1800px] mx-auto px-4 sm:px-8">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-16">
          <div className="w-full lg:w-3/5">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center space-x-4 mb-12">
                <span className="data-label text-neon">EST. 2026</span>
                <div className="h-[1px] w-12 bg-white/20" />
                <span className="font-serif italic text-white/60 text-lg">Elite Physical Therapy</span>
              </div>

              <h1 className="text-[10vw] lg:text-[12vw] font-black leading-[0.8] tracking-tighter uppercase mb-8">
                <span className="block">RESTAURA</span>
                <span className="block text-neon italic font-serif lowercase tracking-normal">tu</span>
                <span className="block">MOVIMIENTO</span>
              </h1>
              
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 mt-12">
                <motion.a 
                  href={waLink}
                  target="_blank"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-5 bg-neon text-black font-black uppercase tracking-widest text-sm brutal-shadow-white hover:bg-white transition-colors"
                >
                  Iniciar Protocolo
                </motion.a>
                <div className="max-w-xs">
                  <p className="text-zinc-500 text-sm leading-relaxed">
                    Sistemas avanzados de rehabilitación diseñados para la optimización del rendimiento humano.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="w-full lg:w-2/5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.2 }}
              className="relative aspect-[3/4] lg:aspect-square overflow-hidden brutal-border group"
            >
              <img 
                src="https://images.unsplash.com/photo-1597452485669-2c7bb5fef90d?auto=format&fit=crop&q=80&w=1200" 
                alt="Fisioterapia Avanzada" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-neon/10 mix-blend-multiply group-hover:opacity-0 transition-opacity" />
              
              {/* Floating Data Overlay */}
              <div className="absolute top-8 right-8 text-right">
                <span className="data-label block mb-1">Node_Status</span>
                <span className="text-neon font-mono text-xs">OPERATIONAL</span>
              </div>
            </motion.div>

            {/* Decorative Serif Text */}
            <div className="absolute -bottom-12 -left-12 hidden lg:block">
              <p className="font-serif italic text-6xl text-white/10 leading-none">
                The science of <br /> human motion.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Status Bar */}
      <div className="absolute bottom-0 left-0 w-full p-6 flex justify-between items-end border-t border-white/5 bg-black/20 backdrop-blur-sm">
        <div className="flex space-x-12">
          <div className="flex flex-col">
            <span className="data-label text-[8px] mb-2">Location_ID</span>
            <span className="text-white font-bold text-xs">REYNOSA_HQ_01</span>
          </div>
          <div className="flex flex-col">
            <span className="data-label text-[8px] mb-2">Active_Patients</span>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-neon rounded-full animate-pulse" />
              <span className="text-white font-mono text-xs">128_LIVE</span>
            </div>
          </div>
        </div>
        <div className="text-right">
          <span className="data-label text-[8px] block mb-1">System_Clock</span>
          <span className="text-white font-mono text-xs">02:14:30_UTC</span>
        </div>
      </div>
    </div>
  );
};
