import React, { useState } from 'react';

const locations = {
  vistaBonita: {
    name: "Vista Bonita",
    fullName: "Clínica Vista Bonita",
    address: "Vista Bonita #105, Col. San José, Reynosa, Tamaulipas, 88748",
    map: "https://www.google.com/maps/search/Vista+Bonita+%23105,+Col+San+Jos%C3%A9,+Reynosa"
  }
};

export const Locations: React.FC = () => {
  const [active] = useState<keyof typeof locations>('vistaBonita');
  
  const fbLink = "https://www.facebook.com/GuideNowFisioterapiaReynosa";
  const waLink = "https://wa.me/528994611671";

  return (
    <div className="py-24 md:py-40 bg-brand-navy px-4 sm:px-8 relative overflow-hidden">
      <div className="max-w-[1800px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-px bg-white/5 brutal-border">
          <div className="lg:col-span-4 bg-brand-navy p-8 md:p-16 flex flex-col justify-between">
            <div>
              <span className="data-label text-neon mb-8 block">Contact_Node</span>
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase mb-8">UBICACIÓN</h2>
              <p className="text-zinc-500 text-lg font-serif italic leading-relaxed mb-12">
                "Nuestra sede principal en Reynosa está equipada con la tecnología más avanzada para tu recuperación."
              </p>
            </div>
            
            <div className="flex space-x-4">
               <a href={fbLink} target="_blank" className="w-12 h-12 brutal-border flex items-center justify-center text-white hover:bg-neon hover:text-black transition-all">f</a>
               <a href={waLink} target="_blank" className="w-12 h-12 brutal-border flex items-center justify-center text-white hover:bg-neon hover:text-black transition-all">💬</a>
            </div>
          </div>

          <div className="lg:col-span-4 bg-brand-navy p-8 md:p-16 flex flex-col justify-between border-l border-white/5">
             <div>
               <span className="data-label mb-8 block">Facility_ID: 01</span>
               <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-6">{locations[active].fullName}</h3>
               <p className="text-zinc-400 font-serif italic text-xl leading-relaxed mb-12">{locations[active].address}</p>
             </div>
             <a 
              href={locations[active].map} 
              target="_blank" 
              className="flex items-center justify-between brutal-border p-6 hover:bg-neon hover:text-black transition-all group"
             >
               <span className="data-label text-white group-hover:text-black">Google Maps</span>
               <span className="text-neon group-hover:text-black">→</span>
             </a>
          </div>

          <div className="lg:col-span-4 bg-brand-navy p-8 md:p-16 flex flex-col justify-between border-l border-white/5">
             <div>
               <span className="data-label mb-8 block">Operational_Status</span>
               <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-8">HORARIOS</h3>
               
               <div className="space-y-8">
                 <div>
                   <span className="data-label text-[8px] text-neon mb-2 block">Weekdays</span>
                   <p className="text-3xl font-black uppercase tabular-nums">09:00 – 20:00</p>
                 </div>
                 <div className="pt-8 border-t border-white/5">
                   <span className="data-label text-[8px] text-neon mb-2 block">Saturdays</span>
                   <p className="text-3xl font-black uppercase tabular-nums">09:00 – 16:00</p>
                 </div>
               </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};
