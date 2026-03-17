import React from 'react';
import { motion } from 'framer-motion';

export const CTASection: React.FC = () => {
  const waLink = "https://wa.me/528994611671?text=Hola%20GuideNow%20Fisio,%20estoy%20listo%20para%20iniciar%20mi%20protocolo%20de%20recuperación.";

  return (
    <div className="py-32 md:py-48 bg-brand-teal px-4 sm:px-8 relative overflow-hidden border-t border-white/5">
      {/* Decorative background element */}
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />
      
      <div className="max-w-[1800px] mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          <div className="w-full lg:w-2/3">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="data-label text-brand-navy mb-8 block">Final_Call_to_Action</span>
              <h2 className="text-6xl md:text-[10vw] font-black uppercase tracking-tighter leading-[0.8] mb-12 text-brand-navy">
                ACTIVA TU <br />
                <span className="font-serif italic text-white lowercase tracking-normal">protocolo</span> <br />
                DE MEJORA
              </h2>
              <p className="text-brand-navy/70 text-xl font-serif italic max-w-xl leading-relaxed">
                "El movimiento es vida. No permitas que una limitación física defina tu futuro. Inicia tu transformación hoy mismo."
              </p>
            </motion.div>
          </div>

          <div className="w-full lg:w-1/3 flex flex-col gap-8">
            <motion.a 
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-brand-navy text-white px-12 py-8 brutal-shadow font-black uppercase tracking-[0.2em] text-xl text-center hover:bg-white hover:text-brand-navy transition-all"
            >
              Connect_Now
            </motion.a>
            
            <div className="grid grid-cols-2 gap-4">
              <a 
                href="tel:8994611671"
                className="brutal-border border-brand-navy p-6 flex flex-col items-center justify-center gap-4 hover:bg-brand-navy/10 transition-all group"
              >
                <span className="data-label text-brand-navy group-hover:text-white">Voice_Line</span>
                <span className="text-brand-navy font-black uppercase tracking-widest text-xs group-hover:text-white">Llamar</span>
              </a>
              <div className="brutal-border border-brand-navy p-6 flex flex-col items-center justify-center gap-4">
                <span className="data-label text-brand-navy">Status</span>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-brand-navy rounded-full animate-pulse" />
                  <span className="text-brand-navy font-black uppercase tracking-widest text-[10px]">Ready</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Vertical Decorative Text */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 hidden xl:block">
        <span className="vertical-text data-label text-[8px] opacity-10">
          SYSTEM_READY • PROTOCOL_INITIATED • MOTION_OPTIMIZED • SYSTEM_READY • PROTOCOL_INITIATED
        </span>
      </div>
    </div>
  );
};
