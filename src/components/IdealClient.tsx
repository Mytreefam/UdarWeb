import { CheckCircle, Building, Cog, Zap, Brain, Target } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { motion } from 'motion/react';

export function IdealClient() {
  const clientProfiles = [
    {
      icon: <Building className="text-cyan-400" size={24} />,
      title: "Eres una empresa mediana o grande que busca crecer con tecnología",
      description: "Tu empresa tiene procesos establecidos y busca optimizarlos mediante soluciones tecnológicas para escalar."
    },
    {
      icon: <Target className="text-cyan-400" size={24} />,
      title: "Operas en retail, servicios profesionales, industria o logística",
      description: "Sectores donde la digitalización y automatización pueden generar el mayor impacto en eficiencia y resultados."
    },
    {
      icon: <Cog className="text-cyan-400" size={24} />,
      title: "Quieres simplificar y optimizar tus procesos",
      description: "Buscas eliminar tareas repetitivas, reducir errores y mejorar la comunicación entre departamentos."
    },
    {
      icon: <Brain className="text-cyan-400" size={24} />,
      title: "Buscas incorporar IA y automatización con impacto real",
      description: "No quieres tecnología por tecnología, sino soluciones que aporten valor tangible a tu negocio."
    },
    {
      icon: <Zap className="text-cyan-400" size={24} />,
      title: "Necesitas soluciones a medida que se adapten a tu negocio",
      description: "Las herramientas estándar no cubren tus necesidades específicas y buscas personalización."
    }
  ];

  return (
    <section className="py-20 bg-slate-800/50 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/5" />
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(rgba(6, 182, 212, 0.05) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(6, 182, 212, 0.05) 1px, transparent 1px)`,
            backgroundSize: '80px 80px'
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl text-white mb-6">
            Somos tu <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">partner ideal</span> si…
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto mb-6" />
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">
            ¿Te identificas con alguno de estos perfiles? Entonces podemos ayudarte a transformar tu empresa.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-1 gap-6 max-w-4xl mx-auto">
          {clientProfiles.map((profile, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="group"
            >
              <Card className="bg-slate-700/50 border-slate-600 hover:border-cyan-400/50 transition-all duration-300 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-slate-800/50 rounded-lg p-3 border border-slate-600 group-hover:border-cyan-400/50 transition-all duration-300 flex-shrink-0">
                      {profile.icon}
                    </div>
                    <div>
                      <div className="flex items-start mb-3">
                        <CheckCircle className="text-cyan-400 mr-3 mt-1 flex-shrink-0" size={20} />
                        <h3 className="text-white leading-tight">{profile.title}</h3>
                      </div>
                      <p className="text-slate-300 ml-8">{profile.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-slate-700/50 to-slate-800/50 rounded-2xl p-8 backdrop-blur-sm border border-slate-600 max-w-2xl mx-auto">
            <p className="text-lg text-slate-300 mb-4">
              ¿Te reconoces en alguno de estos puntos?
            </p>
            <p className="text-cyan-400">
              Hablemos sobre cómo podemos impulsar tu empresa hacia el siguiente nivel.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}