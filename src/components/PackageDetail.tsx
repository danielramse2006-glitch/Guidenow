import React from 'react';
import { motion } from 'framer-motion';

interface PackageDetailProps {
  title: string;
  id: string;
  onBack: () => void;
}

const packageData: Record<string, {
  includes: string[];
  treats: string[];
  extraInfo?: { title: string; desc: string }[];
  price: string;
  specs: { label: string; value: string }[];
}> = {
  clinica: {
    price: "$400",
    includes: [
      "Evaluación inicial completa",
      "Uso de equipo de vanguardia",
      "Terapia manual especializada",
      "Electroestimulación y calor"
    ],
    treats: [
      "Lesiones deportivas",
      "Dolores crónicos",
      "Recuperación post-quirúrgica",
      "Problemas de postura"
    ],
    extraInfo: [
      { title: "Tecnología_Láser", desc: "Aplicación de fotobiomodulación para acelerar la regeneración celular." },
      { title: "Protocolo_Elite", desc: "Seguimiento biométrico de progreso en cada sesión." }
    ],
    specs: [
      { label: "DURACIÓN", value: "50-60 MIN" },
      { label: "EQUIPO", value: "HIGH-TECH CLINIC" },
      { label: "PERSONAL", value: "CERTIFIED FISIO" }
    ]
  },
  domicilio: {
    price: "$600",
    includes: [
      "Traslado de terapeuta a hogar",
      "Equipo portátil profesional",
      "Atención personalizada 1 a 1",
      "Plan de ejercicios en casa"
    ],
    treats: [
      "Pacientes postrados en cama",
      "Recién operados",
      "Movilidad reducida",
      "Comodidad total"
    ],
    extraInfo: [
      { title: "Home_Setup", desc: "Adaptamos tu entorno para una rehabilitación óptima sin salir de casa." }
    ],
    specs: [
      { label: "DURACIÓN", value: "60 MIN" },
      { label: "EQUIPO", value: "MOBILE UNIT" },
      { label: "ZONA", value: "REYNOSA METRO" }
    ]
  },
  geriatrica: {
    price: "$400",
    includes: [
      "Ejercicios de equilibrio",
      "Fortalecimiento muscular suave",
      "Prevención de caídas",
      "Estimulación cognitiva motora"
    ],
    treats: [
      "Debilidad en el adulto mayor",
      "Post-operados de cadera",
      "Dolor de rodilla crónico",
      "Pérdida de equilibrio"
    ],
    extraInfo: [
      { title: "Active_Aging", desc: "Protocolos diseñados para mantener la independencia y calidad de vida." }
    ],
    specs: [
      { label: "DURACIÓN", value: "45-50 MIN" },
      { label: "ENFOQUE", value: "MOBILITY+" },
      { label: "SUPERVISIÓN", value: "CONSTANT" }
    ]
  },
  ayuda: {
    price: "Variable",
    includes: [
      "Evaluación socioeconómica",
      "Tratamiento integral",
      "Seguimiento continuo",
      "Apoyo a pacientes vulnerables"
    ],
    treats: [
      "Casos sociales",
      "Bajos recursos",
      "Discapacidad severa",
      "Apoyo comunitario"
    ],
    extraInfo: [
      { title: "Social_Impact", desc: "Comprometidos con la salud de nuestra comunidad más vulnerable." }
    ],
    specs: [
      { label: "DURACIÓN", value: "ADAPTATIVA" },
      { label: "COSTO", value: "SUBSIDIADO" },
      { label: "REQUISITO", value: "VALORACIÓN" }
    ]
  }
};

export const PackageDetail: React.FC<PackageDetailProps> = ({ title, id, onBack }) => {
  const data = packageData[id] || packageData.clinica;
  const waLink = `https://wa.me/528994611671?text=Hola%20GuideNow%20Fisio,%20me%20interesa%20el%20paquete%20de%20${encodeURIComponent(title)}.`;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-brand-navy py-24 md:py-40 px-4 sm:px-8 relative overflow-hidden"
    >
      {/* Background Watermark */}
      <div className="absolute top-1/2 left-0 w-full -translate-y-1/2 opacity-[0.02] pointer-events-none select-none">
        <span className="text-[30vw] font-black uppercase tracking-tighter whitespace-nowrap">
          PACKAGE_DETAIL
        </span>
      </div>

      <div className="max-w-[1800px] mx-auto relative z-10">
        <button 
          onClick={onBack}
          className="data-label text-white/40 hover:text-neon mb-16 flex items-center space-x-4 transition-colors"
        >
          <span>←</span> <span>EXIT_TO_CATALOG</span>
        </button>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-24 border-b border-white/5 pb-16">
          <div className="flex flex-col">
            <span className="data-label text-neon mb-8 block">Protocol_Selection</span>
            <h1 className="text-6xl md:text-9xl font-black uppercase tracking-tighter leading-[0.8]">
              {title.split(' ')[0]} <br />
              <span className="font-serif italic text-neon lowercase tracking-normal">
                {title.split(' ').slice(1).join(' ')}
              </span>
            </h1>
          </div>
          <div className="text-left lg:text-right">
             <span className="data-label text-white/40 mb-4 block">Unit_Investment_Cost</span>
             <div className="text-6xl md:text-9xl font-black text-white tabular-nums leading-none">{data.price}</div>
             <span className="data-label text-neon mt-4 block">MXN_CURRENCY_STABLE</span>
          </div>
        </div>

        {/* Technical Specs Bar */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-24">
          {data.specs.map((spec, i) => (
            <div key={i} className="flex flex-col">
              <span className="data-label text-white/20 mb-2">{spec.label}</span>
              <span className="text-white font-black uppercase tracking-widest text-sm">{spec.value}</span>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 brutal-border">
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            className="bg-brand-navy p-12 md:p-16 border-r border-white/5"
          >
            <div className="flex items-center space-x-4 mb-12">
              <div className="w-2 h-2 bg-neon rounded-full" />
              <h3 className="data-label text-white">System_Inclusions</h3>
            </div>
            <ul className="space-y-6">
              {data.includes.map((item, i) => (
                <li key={i} className="text-zinc-400 text-sm font-black uppercase tracking-widest flex items-start space-x-4 group">
                  <span className="text-neon">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="bg-brand-navy p-12 md:p-16 border-r border-white/5"
          >
            <div className="flex items-center space-x-4 mb-12">
              <div className="w-2 h-2 bg-neon rounded-full" />
              <h3 className="data-label text-white">Target_Optimization</h3>
            </div>
            <ul className="space-y-6">
              {data.treats.map((item, i) => (
                <li key={i} className="text-zinc-500 text-sm font-black uppercase tracking-widest flex items-start space-x-4 group">
                  <span className="text-white/20 group-hover:text-neon transition-colors">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <div className="bg-brand-navy p-12 md:p-16 flex flex-col justify-between">
            <div className="space-y-8">
              {data.extraInfo?.map((info, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  className="bg-neon/5 brutal-border p-8"
                >
                  <h4 className="data-label text-neon mb-4">{info.title}</h4>
                  <p className="text-zinc-500 text-xs font-serif italic leading-relaxed">{info.desc}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-12">
              <a 
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-neon text-black py-8 brutal-shadow-white font-black uppercase tracking-[0.2em] text-sm hover:bg-white transition-all"
              >
                Execute_Booking
              </a>
              
              <div className="mt-8 flex justify-between items-center">
                <span className="data-label text-[8px]">System_Ready</span>
                <div className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-neon rounded-full animate-pulse" />
                  <span className="text-white font-mono text-[8px]">LIVE_CONNECTION</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
