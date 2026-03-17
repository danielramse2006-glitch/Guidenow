import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const waLink = "https://wa.me/528994611671?text=Hola%20GuideNow%20Fisio,%20me%20gustaría%20agendar%20una%20cita.";

  const navLinks = [
    { id: 'fisioterapia', label: 'FISIOTERAPIA' },
    { id: 'rehabilitacion', label: 'REHABILITACIÓN' },
    { id: 'quiropractica', label: 'QUIROPRÁCTICA' },
    { id: 'masajes', label: 'MASAJES' },
  ];

  const handleNav = (id: string) => {
    onNavigate(id);
    setIsMenuOpen(false);
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 w-full z-[100] bg-brand-navy/80 backdrop-blur-xl border-b border-white/5"
    >
      <div className="max-w-[1800px] mx-auto px-4 sm:px-8 h-20 flex items-center justify-between">
        <motion.div 
          whileTap={{ scale: 0.95 }}
          className="flex items-center space-x-4 cursor-pointer group"
          onClick={() => handleNav('inicio')}
        >
          <div className="flex flex-col leading-none">
            <span className="text-white font-black text-2xl tracking-tighter uppercase group-hover:text-neon transition-colors">
              GuideNow
            </span>
            <span className="font-serif italic text-white/40 text-[10px] lowercase tracking-normal">Physiotherapy Systems</span>
          </div>
        </motion.div>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center space-x-12">
          <div className="flex items-center space-x-8">
            {navLinks.map((link) => (
              <button 
                key={link.id}
                onClick={() => handleNav(link.id)} 
                className={`data-label text-[9px] transition-all relative group py-2 ${currentPage === link.id ? 'text-neon' : 'text-zinc-500 hover:text-white'}`}
              >
                {link.label}
                {currentPage === link.id && (
                  <motion.div 
                    layoutId="nav-underline" 
                    className="absolute -bottom-1 left-0 w-full h-[1px] bg-neon" 
                  />
                )}
              </button>
            ))}
          </div>
          
          <div className="h-8 w-[1px] bg-white/10" />

          <div className="flex items-center space-x-8">
            <div className="flex flex-col items-end">
              <span className="data-label text-[6px]">Status</span>
              <div className="flex items-center space-x-1">
                <div className="w-1 h-1 bg-neon rounded-full animate-pulse" />
                <span className="text-white font-mono text-[9px]">ONLINE</span>
              </div>
            </div>
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={waLink}
              target="_blank"
              className="bg-white text-black px-6 py-2 brutal-shadow font-black uppercase tracking-widest text-[9px] hover:bg-neon hover:text-white transition-all"
            >
              Contact_Now
            </motion.a>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center space-x-4">
           <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white p-2 bg-zinc-900/50 brutal-border"
           >
             <div className="w-6 h-4 flex flex-col justify-between items-end">
                <span className={`h-[1px] bg-neon transition-all duration-300 ${isMenuOpen ? 'w-6 translate-y-1.5 -rotate-45' : 'w-6'}`}></span>
                <span className={`h-[1px] bg-neon transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'w-4'}`}></span>
                <span className={`h-[1px] bg-neon transition-all duration-300 ${isMenuOpen ? 'w-6 -translate-y-2 rotate-45' : 'w-6'}`}></span>
             </div>
           </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden bg-zinc-950 border-b border-white/5 overflow-hidden"
          >
            <div className="flex flex-col p-8 space-y-8 text-center">
               {navLinks.map((link) => (
                 <button 
                  key={link.id}
                  onClick={() => handleNav(link.id)}
                  className={`text-2xl font-black tracking-tighter uppercase ${currentPage === link.id ? 'text-neon' : 'text-zinc-500'}`}
                 >
                   {link.label}
                 </button>
               ))}
               <div className="pt-8 border-t border-white/5">
                  <p className="font-serif italic text-zinc-600 text-sm mb-6">"Elite Physical Therapy Systems"</p>
                  <motion.a 
                    href={waLink}
                    target="_blank"
                    className="inline-block bg-neon text-black px-12 py-4 font-black uppercase tracking-widest text-xs"
                  >
                    Agendar Cita
                  </motion.a>
               </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
