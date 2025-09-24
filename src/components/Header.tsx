import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { motion } from 'motion/react';
import udarLogo from 'figma:asset/446e76494b3062b65021587fc2add9c86bc83d88.png';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <motion.header 
      className={`fixed top-0 w-full backdrop-blur-md border-b z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-black/80 border-slate-700' 
          : 'bg-black/60 border-slate-800'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img src={udarLogo} alt="UDAR EDGE" className="h-10 w-auto brightness-0 invert" />
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {[
              { id: 'inicio', label: 'Inicio' },
              { id: 'por-que-udar', label: 'Por qué UDAR' },
              { id: 'servicios', label: 'Servicios' },
              { id: 'contacto', label: 'Contacto' },
              { id: 'nosotros', label: 'Nosotros' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-slate-300 hover:text-cyan-400 transition-colors relative group"
              >
                {item.label}
                <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 w-0 group-hover:w-full transition-all duration-200" />
              </button>
            ))}
            <Button 
              onClick={() => scrollToSection('contacto')}
              className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white border-0"
            >
              Solicitar Consulta
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-white hover:text-cyan-400 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-slate-700 pt-4">
            <div className="flex flex-col space-y-4">
              {[
                { id: 'inicio', label: 'Inicio' },
                { id: 'por-que-udar', label: 'Por qué UDAR' },
                { id: 'servicios', label: 'Servicios' },
                { id: 'contacto', label: 'Contacto' },
                { id: 'nosotros', label: 'Nosotros' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-slate-300 hover:text-cyan-400 transition-colors text-left"
                >
                  {item.label}
                </button>
              ))}
              <Button 
                onClick={() => scrollToSection('contacto')}
                className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white border-0 w-fit"
              >
                Solicitar Consulta
              </Button>
            </div>
          </nav>
        )}
      </div>
    </motion.header>
  );
}