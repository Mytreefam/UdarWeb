import { CheckCircle, Eye, Target, Star } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { motion } from 'motion/react';

export function About() {
  const values = [
    {
      icon: <Star className="text-cyan-400" size={24} />,
      title: "Innovación práctica en digitalización",
      description: "Tecnología útil, enfocada en resultados reales."
    },
    {
      icon: <CheckCircle className="text-cyan-400" size={24} />,
      title: "Cercanía y humanidad",
      description: "La digitalización al servicio de las personas."
    },
    {
      icon: <Target className="text-cyan-400" size={24} />,
      title: "Eficiencia en procesos empresariales",
      description: "Simplificamos lo complejo para que tu negocio fluya."
    },
    {
      icon: <Eye className="text-cyan-400" size={24} />,
      title: "Adaptabilidad",
      description: "El software se ajusta a la empresa, nunca al revés."
    }
  ];

  return (
    <section id="nosotros" className="py-20 bg-slate-800 relative overflow-hidden">
      {/* Simplified background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5" />
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(rgba(6, 182, 212, 0.05) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(6, 182, 212, 0.05) 1px, transparent 1px)`,
            backgroundSize: '100px 100px'
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Mission */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl text-white mb-6">
              Nuestra <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Misión</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto mb-6" />
            <p className="text-lg text-slate-300 leading-relaxed">
              Ayudamos a empresas a digitalizar y automatizar procesos con soluciones tecnológicas a medida. 
              Mejoramos la comunicación, la eficiencia y el bienestar organizacional.
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl text-white mb-6">
              Nuestra <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Visión</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto mb-6" />
            <p className="text-lg text-slate-300 leading-relaxed">
              Ser la consultora tecnológica de referencia en España y LATAM, reconocida por transformar 
              empresas con digitalización, IA y automatización, de forma ágil, humana y sostenible.
            </p>
          </motion.div>

          {/* Values */}
          <motion.div 
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl text-white mb-12 text-center">
              Nuestros <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Valores</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <Card className="bg-slate-700/50 border-slate-600 hover:border-cyan-400/50 transition-all duration-300 backdrop-blur-sm h-full">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="bg-slate-800/50 rounded-lg p-2 border border-slate-600">
                          {value.icon}
                        </div>
                        <div>
                          <h3 className="text-white mb-2">{value.title}</h3>
                          <p className="text-slate-300">{value.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Value Proposition */}
          <motion.div 
            className="bg-gradient-to-r from-slate-700/50 to-slate-800/50 rounded-2xl p-8 text-center backdrop-blur-sm border border-slate-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.01 }}
          >
            <h2 className="text-3xl md:text-4xl text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Resultados</span> que garantizamos
            </h2>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div>
                <h3 className="text-white mb-4">Ventajas competitivas:</h3>
                <ul className="space-y-3 text-slate-300">
                  {[
                    "Personalización real frente a software genérico",
                    "Enfoque integral: digitalización, automatización e IA",
                    "Visión humana: tecnología cercana, centrada en personas"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle className="text-cyan-400 mr-3" size={16} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-white mb-4">Resultados garantizados:</h3>
                <ul className="space-y-3 text-slate-300">
                  {[
                    "Agilidad y cercanía frente a grandes consultoras",
                    "Resultados medibles en eficiencia, ahorro y crecimiento",
                    "Traducimos el impacto de cada mejora en euros"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle className="text-cyan-400 mr-3" size={16} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}