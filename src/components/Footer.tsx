import React from 'react';
import { motion } from 'framer-motion';

export const Footer: React.FC = () => {
  const socials = [
    { name: 'WhatsApp', url: 'https://wa.me/528994611671' },
    { name: 'Facebook', url: 'https://www.facebook.com/GuideNowFisioterapiaReynosa' },
    { name: 'Email', url: 'mailto:guidenow8@gmail.com' }
  ];

  return (
    <footer className="bg-brand-navy border-t border-white/5 py-24 md:py-40 px-4 sm:px-8 relative overflow-hidden">
      <div className="max-w-[1800px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-32">
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="data-label text-neon mb-8 block">System_Exit_Protocol</span>
              <h2 className="text-6xl md:text-9xl font-black uppercase tracking-tighter leading-[0.8] mb-12">
                REDEFINE <br />
                <span className="font-serif italic text-neon lowercase tracking-normal">tu</span> <br />
                POTENCIAL
              </h2>
              <p className="text-zinc-500 text-xl font-serif italic max-w-md leading-relaxed">
                "No solo tratamos lesiones, optimizamos la arquitectura del movimiento humano."
              </p>
            </motion.div>
          </div>

          <div className="lg:col-span-6 flex flex-col justify-end lg:items-end">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-12 w-full">
              <div className="flex flex-col">
                <span className="data-label mb-6">Navigation</span>
                <div className="flex flex-col space-y-4">
                  {['Inicio', 'Servicios', 'Stats', 'Contacto'].map(item => (
                    <button key={item} className="text-white/40 hover:text-neon text-left text-xs font-black uppercase tracking-widest transition-colors">
                      {item}
                    </button>
                  ))}
                </div>
              </div>
              <div className="flex flex-col">
                <span className="data-label mb-6">Social_Nodes</span>
                <div className="flex flex-col space-y-4">
                  {socials.map((social) => (
                    <a 
                      key={social.name} 
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/40 hover:text-neon text-xs font-black uppercase tracking-widest transition-colors"
                    >
                      {social.name}
                    </a>
                  ))}
                </div>
              </div>
              <div className="flex flex-col col-span-2 md:col-span-1">
                <span className="data-label mb-6">Legal_Data</span>
                <div className="flex flex-col space-y-4">
                  <span className="text-white/20 text-[10px] uppercase font-bold">Privacy_Policy</span>
                  <span className="text-white/20 text-[10px] uppercase font-bold">Terms_of_Service</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center space-x-6">
            <div className="w-8 h-8 bg-neon flex items-center justify-center brutal-shadow">
              <span className="text-black font-black text-xs">G</span>
            </div>
            <span className="data-label text-[10px]">© 2026 GUIDENOW_SYSTEMS_v3.0</span>
          </div>
          
          <div className="flex items-center space-x-8">
            <div className="flex flex-col items-end">
              <span className="data-label text-[6px]">Encryption</span>
              <span className="text-white/20 font-mono text-[8px]">AES_256_ENABLED</span>
            </div>
            <div className="h-8 w-[1px] bg-white/5" />
            <p className="data-label text-neon">
              OPTIMIZING_HUMAN_MOTION
            </p>
          </div>
        </div>
      </div>

      {/* Background Decorative Text */}
      <div className="absolute -bottom-20 -right-20 text-[20vw] font-black text-white/[0.01] pointer-events-none select-none uppercase leading-none">
        GuideNow
      </div>
    </footer>
  );
};
