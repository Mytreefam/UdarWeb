import { CheckCircle, Target, Users, Zap, Award, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { motion } from 'motion/react';

export function WhyUdar() {
  const reasons = [
    {
      icon: <Target className="text-cyan-400" size={32} />,
      title: "Soluciones a medida en digitalización y automatización",
      description: "No aplicamos plantillas genéricas. Cada empresa es única y nuestras soluciones se adaptan a tu realidad específica.",
      benefits: ["Análisis personalizado", "Desarrollo específico", "Escalabilidad garantizada"]
    },
    {
      icon: <Users className="text-cyan-400" size={32} />,
      title: "Tecnología con enfoque humano y experiencia de usuario",
      description: "La tecnología debe facilitar el trabajo de las personas, no complicarlo. Priorizamos la experiencia del usuario final.",
      benefits: ["Interfaces intuitivas", "Formación incluida", "Soporte cercano"]
    },
    {
      icon: <Zap className="text-cyan-400" size={32} />,
      title: "Resultados rápidos: ROI medible desde el primer mes",
      description: "Implementamos mejoras que generan impacto inmediato mientras construimos la estrategia a largo plazo.",
      benefits: ["Quick wins", "ROI medible", "Iteración continua"]
    },
    {
      icon: <Award className="text-cyan-400" size={32} />,
      title: "Experiencia integral: de la consultoría a la implementación",
      description: "Cubrimos todo el ciclo: desde la consultoría estratégica hasta el soporte post-implementación.",
      benefits: ["Consultoría experta", "Desarrollo propio", "Mantenimiento continuo"]
    },
    {
      icon: <TrendingUp className="text-cyan-400" size={32} />,
      title: "Crecimiento sostenible con arquitectura escalable",
      description: "Nuestras soluciones crecen contigo. Arquitectura escalable que se adapta a la evolución de tu negocio.",
      benefits: ["Arquitectura flexible", "Integración fácil", "Evolución planificada"]
    }
  ];

  const differentiators = [
    "Personalización real frente a software genérico",
    "Digitalización + Automatización + IA en una sola estrategia",
    "Resultados medibles en eficiencia y ahorro",
    "Enfoque humano y soporte cercano frente a grandes consultoras"
  ];

  return (
    <section id="por-que-udar" className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/5" />
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(rgba(6, 182, 212, 0.05) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(6, 182, 212, 0.05) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
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
          <h2 className="text-4xl md:text-5xl text-white mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            ¿Por qué elegir a UDAR EDGE como tu partner en transformación digital?
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto mb-6" />
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">
            Somos más que una consultora tecnológica. Somos tu partner estratégico 
            para la transformación digital que realmente funciona.
          </p>
        </motion.div>

        {/* Main reasons */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="group"
            >
              <Card className="bg-slate-800/50 border-slate-700 hover:border-cyan-400/50 transition-all duration-300 backdrop-blur-sm h-full">
                <CardHeader>
                  <div className="bg-slate-700/50 rounded-lg p-3 w-fit mb-4 border border-slate-600 group-hover:border-cyan-400/50 transition-all duration-300">
                    {reason.icon}
                  </div>
                  <CardTitle className="text-white leading-tight">
                    {reason.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300 mb-4 leading-relaxed">
                    {reason.description}
                  </p>
                  <ul className="space-y-2">
                    {reason.benefits.map((benefit, benefitIndex) => (
                      <li 
                        key={benefitIndex} 
                        className="flex items-center text-sm text-slate-400"
                      >
                        <CheckCircle className="text-cyan-400 mr-2" size={14} />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Differentiators */}
        <motion.div 
          className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 rounded-2xl p-8 backdrop-blur-sm border border-slate-600"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.01 }}
        >
          <h3 className="text-3xl text-white mb-6 text-center">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Ventajas competitivas</span> de nuestra consultoría tecnológica
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {differentiators.map((diff, index) => (
              <motion.div 
                key={index}
                className="flex items-center text-slate-300"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.6 + (index * 0.1) }}
                viewport={{ once: true }}
              >
                <CheckCircle className="text-cyan-400 mr-3 flex-shrink-0" size={16} />
                {diff}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats or testimonial section could go here */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl text-cyan-400 mb-2">100%</div>
              <p className="text-slate-300">Soluciones personalizadas</p>
            </div>
            <div className="text-center">
              <div className="text-3xl text-cyan-400 mb-2">24/7</div>
              <p className="text-slate-300">Soporte técnico disponible</p>
            </div>
            <div className="text-center">
              <div className="text-3xl text-cyan-400 mb-2">ROI</div>
              <p className="text-slate-300">Medible desde el primer mes</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}