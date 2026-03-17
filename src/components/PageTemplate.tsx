import React from 'react';
import { motion } from 'framer-motion';

interface PageTemplateProps {
  name: string;
  onBack: () => void;
}

const pageDetails: Record<string, {
  fullTitle: string;
  subtitle: string;
  desc: string;
  tech: string[];
  includes: string[];
  benefits: string[];
}> = {
  "FISIOTERAPIA": {
    fullTitle: "Fisioterapia Avanzada",
    subtitle: "RECUPERACIÓN Y MEJORA DE LA FUNCIÓN FÍSICA",
    desc: "Servicio terapéutico enfocado en la recuperación utilizando técnicas especializadas y tecnología de vanguardia para que recuperes tu movilidad absoluta.",
    tech: ["Ultrasonido terapéutico", "Láser terapéutico", "Ondas de choque", "Plataformas vibratorias", "Plataforma de masaje alemana"],
    includes: ["Terapia manual", "Ejercicios personalizados", "Movilidad articular", "Fortalecimiento muscular", "Aplicación de calor y TENS"],
    benefits: ["Lesiones musculares", "Esguinces y distensiones", "Dolor de rodilla/hombro", "Tendinitis", "Rehabilitación postoperatoria"]
  },
  "REHABILITACIÓN": {
    fullTitle: "Rehabilitación Física",
    subtitle: "PLAN TERAPÉUTICO PROGRESIVO Y SUPERVISADO",
    desc: "Enfoque integral en recuperar la fuerza, movilidad y estabilidad después de una lesión o cirugía mediante reeducación del movimiento.",
    tech: ["Láser de alta potencia", "Ondas de choque radiales", "Ultrasonido de precisión", "Plataformas de equilibrio"],
    includes: ["Diagnóstico funcional", "Ejercicios progresivos", "Reeducación del movimiento", "Coordinación y equilibrio", "Terapia manual"],
    benefits: ["Postoperatorio", "Secuelas de inmovilización", "Readaptación laboral/deportiva", "Debilidad muscular", "Fracturas"]
  },
  "QUIROPRÁCTICA": {
    fullTitle: "Ajuste Quiropráctico",
    subtitle: "ALINEACIÓN VERTEBRAL Y SISTEMA NERVIOSO",
    desc: "Corrección de desalineaciones de la columna para optimizar el funcionamiento de tu sistema nervioso y eliminar dolores de raíz.",
    tech: ["Mesa quiropráctica de precisión", "Masajeadora alemana", "Activador neurológico"],
    includes: ["Ajuste manual", "Evaluación postural", "Termoterapia", "Electroestimulación"],
    benefits: ["Dolor lumbar/cervical", "Hernias discales", "Migrañas tensionales", "Mejora de la postura", "Alineación integral"]
  },
  "MASAJES": {
    fullTitle: "Masaje Descontracturante",
    subtitle: "LIBERACIÓN DE TENSIÓN MUSCULAR PROFUNDA",
    desc: "Servicio terapéutico diseñado para relajar músculos sobrecargados y eliminar los nudos producidos por el estrés o el ejercicio intenso.",
    tech: ["Masajeadora de percusión alemana", "Aceites terapéuticos", "Piedras calientes (opcional)"],
    includes: ["Masaje manual profundo", "Descarga muscular", "Crioterapia", "Puntos gatillo"],
    benefits: ["Estrés acumulado", "Nudos musculares", "Sobrecarga deportiva", "Fatiga crónica", "Cuerpo pesado"]
  }
};

export const PageTemplate: React.FC<PageTemplateProps> = ({ name, onBack }) => {
  const content = pageDetails[name.toUpperCase()] || pageDetails["FISIOTERAPIA"];

  return (
    <div className="min-h-screen bg-[#050505] py-24 md:py-40 px-4 sm:px-8 relative overflow-hidden">
      {/* Background Watermark */}
      <div className="absolute top-1/2 left-0 w-full -translate-y-1/2 opacity-[0.02] pointer-events-none select-none">
        <span className="text-[30vw] font-black uppercase tracking-tighter whitespace-nowrap">
          {name}_PROTOCOL
        </span>
      </div>

      <div className="max-w-[1800px] mx-auto relative z-10">
        <motion.button 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={onBack}
          className="data-label text-white/40 hover:text-neon mb-16 flex items-center space-x-4 transition-colors"
        >
          <span>←</span> <span>EXIT_TO_DASHBOARD</span>
        </motion.button>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-32">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
            >
              <span className="data-label text-neon mb-8 block">
                {content.subtitle}
              </span>
              <h1 className="text-6xl md:text-9xl font-black uppercase leading-[0.8] tracking-tighter mb-12">
                {content.fullTitle.split(' ')[0]} <br />
                <span className="font-serif italic text-neon lowercase tracking-normal">
                  {content.fullTitle.split(' ').slice(1).join(' ')}
                </span>
              </h1>
              <p className="text-zinc-500 text-xl md:text-3xl leading-relaxed font-serif italic mb-16 max-w-2xl">
                {content.desc}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-12 border-t border-white/5">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <div className="flex items-center space-x-4 mb-8">
                  <div className="w-2 h-2 bg-neon rounded-full" />
                  <h3 className="data-label text-white">Tecnología_Aplicada</h3>
                </div>
                <ul className="space-y-4">
                  {content.tech.map((t, i) => (
                    <li key={i} className="text-zinc-400 text-sm font-black uppercase tracking-widest flex items-center space-x-4 group">
                      <span className="text-neon opacity-20 group-hover:opacity-100 transition-opacity">0{i + 1}</span>
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <div className="flex items-center space-x-4 mb-8">
                  <div className="w-2 h-2 bg-neon rounded-full" />
                  <h3 className="data-label text-white">Protocolo_Sesión</h3>
                </div>
                <ul className="space-y-4">
                  {content.includes.map((inc, i) => (
                    <li key={i} className="text-zinc-400 text-sm font-black uppercase tracking-widest flex items-center space-x-4 group">
                      <span className="text-neon">✓</span>
                      <span>{inc}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="bg-zinc-900/10 brutal-border p-12 md:p-16 sticky top-32"
            >
              <span className="data-label text-neon mb-8 block">Target_Conditions</span>
              <h3 className="text-4xl font-black uppercase tracking-tighter mb-12">Padecimientos <br /> <span className="font-serif italic text-neon lowercase tracking-normal">tratados</span></h3>
              
              <div className="space-y-4 mb-16">
                {content.benefits.map((benefit, i) => (
                  <div key={i} className="flex items-center justify-between py-4 border-b border-white/5 group">
                    <span className="text-zinc-400 text-xs font-black uppercase tracking-widest group-hover:text-white transition-colors">{benefit}</span>
                    <div className="w-8 h-8 brutal-border flex items-center justify-center group-hover:bg-neon group-hover:text-black transition-all">
                      <span className="text-xs">→</span>
                    </div>
                  </div>
                ))}
              </div>

              <a 
                href="https://wa.me/528994611671"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-neon text-black py-8 brutal-shadow-white font-black uppercase tracking-[0.2em] text-sm hover:bg-white transition-all"
              >
                Initialize_Protocol
              </a>
              
              <div className="mt-8 flex justify-between items-center">
                <span className="data-label text-[8px]">Security_Status</span>
                <div className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-neon rounded-full animate-pulse" />
                  <span className="text-white font-mono text-[8px]">ENCRYPTED_SESSION</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};
