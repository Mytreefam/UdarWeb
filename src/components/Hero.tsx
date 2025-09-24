import { ArrowRight, Zap, Users, Target } from 'lucide-react';
import { Button } from './ui/button';
import { TechBackground } from './TechBackground';
import { motion } from 'motion/react';

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contacto');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="inicio" className="relative pt-24 pb-16 bg-black overflow-hidden min-h-screen flex items-center">
      <TechBackground />
      
      {/* Simplified background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Static decorative elements instead of animated ones */}
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full border border-cyan-400/10" />
        <div className="absolute bottom-20 right-10 w-24 h-24 rounded-full border border-blue-400/15" />
        <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-cyan-400/50 rounded-full" />
        <div className="absolute bottom-1/3 left-1/4 w-1 h-1 bg-blue-400/60 rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-6xl text-white mb-6 md:mb-8 leading-tight px-2"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Adaptamos la tecnología a tu empresa
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-base md:text-lg text-slate-400 mb-8 md:mb-12 max-w-3xl mx-auto px-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span className="hidden md:inline">
              Consultoría tecnológica en transformación digital, automatización e inteligencia artificial 
              Soluciones personalizadas que hacen crecer tu empresa
            </span>
            <span className="md:hidden">
              Consultoría tecnológica en digitalización, IA y automatización 
              Soluciones que hacen crecer tu empresa
            </span>
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12 md:mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="flex flex-col items-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  onClick={scrollToContact}
                  className="bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 text-white px-8 py-3 text-lg border-0 shadow-xl shadow-cyan-500/50 ring-2 ring-cyan-400/20"
                >
                  Solicitar consulta gratuita
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </motion.div>
              {/* Microcopy alineado con el botón primario */}
              <motion.p 
                className="text-sm text-slate-500 mt-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.0 }}
              >
                Respuesta en menos de 24h – sin compromiso
              </motion.p>
            </div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                variant="outline" 
                onClick={() => document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-slate-600 text-slate-300 hover:bg-slate-800/50 hover:text-cyan-300 hover:border-cyan-400/50 px-8 py-3 text-lg backdrop-blur-sm"
              >
                Ver servicios
              </Button>
            </motion.div>
          </motion.div>

          {/* Key Benefits - Simplified animations */}
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                icon: <Zap className="text-cyan-400" size={24} />,
                title: "Innovación Práctica",
                description: "Tecnología útil, enfocada en resultados reales"
              },
              {
                icon: <Users className="text-cyan-400" size={24} />,
                title: "Cercanía y Humanidad", 
                description: "La digitalización al servicio de las personas"
              },
              {
                icon: <Target className="text-cyan-400" size={24} />,
                title: "Eficiencia",
                description: "Simplificamos lo complejo para que tu negocio fluya"
              }
            ].map((benefit, index) => (
              <motion.div 
                key={index}
                className="text-center group"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 + (index * 0.2) }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="bg-slate-900/50 backdrop-blur-sm rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center border border-slate-700 group-hover:border-cyan-400/50 transition-all duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-white mb-2">{benefit.title}</h3>
                <p className="text-slate-400">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}