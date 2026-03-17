import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { Services } from './components/Services.tsx';
import { Stats } from './components/Stats.tsx';
import { TeamEquipment } from './components/TeamEquipment.tsx';
import { Testimonials } from './components/Testimonials.tsx';
import { Packages } from './components/Packages.tsx';
import { Locations } from './components/Locations.tsx';
import { CTASection } from './components/CTASection.tsx';
import { Footer } from './components/Footer.tsx';
import { PageTemplate } from './components/PageTemplate.tsx';
import { PackageDetail } from './components/PackageDetail.tsx';
import { motion, AnimatePresence } from 'framer-motion';

export type PageType = 'inicio' | 'fisioterapia' | 'rehabilitacion' | 'quiropractica' | 'masajes' | 'clinica' | 'domicilio' | 'geriatrica' | 'ayuda';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageType>('inicio');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderContent = () => {
    switch (currentPage) {
      case 'fisioterapia':
        return <PageTemplate name="Fisioterapia" onBack={() => setCurrentPage('inicio')} />;
      case 'rehabilitacion':
        return <PageTemplate name="Rehabilitación" onBack={() => setCurrentPage('inicio')} />;
      case 'quiropractica':
        return <PageTemplate name="Quiropráctica" onBack={() => setCurrentPage('inicio')} />;
      case 'masajes':
        return <PageTemplate name="Masajes" onBack={() => setCurrentPage('inicio')} />;
      case 'clinica':
        return <PackageDetail title="Rehabilitación en Clínica" id="clinica" onBack={() => setCurrentPage('inicio')} />;
      case 'domicilio':
        return <PackageDetail title="Rehabilitación a Domicilio" id="domicilio" onBack={() => setCurrentPage('inicio')} />;
      case 'geriatrica':
        return <PackageDetail title="Fisioterapia Geriátrica" id="geriatrica" onBack={() => setCurrentPage('inicio')} />;
      case 'ayuda':
        return <PackageDetail title="Plan de Ayuda Integral" id="ayuda" onBack={() => setCurrentPage('inicio')} />;
      default:
        return (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <section id="inicio">
              <Hero />
            </section>
            <section id="servicios">
              <Services />
            </section>
            <section id="conocenos">
              <Stats />
            </section>
            <TeamEquipment />
            <section id="reseñas">
              <Testimonials />
            </section>
            <section id="paquetes">
              <Packages onSelectPackage={(id) => setCurrentPage(id as PageType)} />
            </section>
            <section id="contactos">
              <Locations />
            </section>
            <CTASection />
          </motion.div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-brand-navy text-white relative overflow-x-hidden">
      {/* 
          MARCA DE AGUA DE TEXTO "MONARCA"
          Reemplaza la imagen por tipografía de 241px de ancho aproximado.
      */}
      <div className="fixed inset-0 z-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span 
          className="text-brand-teal font-black italic tracking-tighter opacity-[0.02] whitespace-nowrap uppercase"
          style={{ fontSize: '25vw' }}
        >
          GuideNow
        </span>
      </div>

      <Navbar onNavigate={(p) => setCurrentPage(p as PageType)} currentPage={currentPage} />
      
      <main className="relative z-10">
        <AnimatePresence mode="wait">
          {renderContent()}
        </AnimatePresence>
      </main>

      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
};

export default App;
