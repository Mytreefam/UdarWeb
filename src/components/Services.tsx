import { 
  Brain, 
  Cog, 
  Smartphone, 
  GraduationCap, 
  Wrench, 
  MessageSquare,
  ChevronRight 
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { motion } from 'motion/react';

export function Services() {
  const services = [
    {
      icon: <Cog className="text-cyan-400" size={32} />,
      title: "Consultoría en digitalización para empresas",
      description: "Análisis de procesos internos y detección de ineficiencias Propuesta de mejoras con herramientas digitales y automatización",
      features: ["Análisis de procesos", "Detección de ineficiencias", "Roadmap personalizado"],
      benefit: "Detectamos ineficiencias, optimizamos procesos y ayudamos a escalar tu empresa",
      cta: "Solicita tu diagnóstico en digitalización"
    },
    {
      icon: <Smartphone className="text-cyan-400" size={32} />,
      title: "Apps móviles y web corporativas a medida",
      description: "Apps móviles (iOS y Android) y aplicaciones web corporativas Integraciones con ERP/CRM y desarrollos escalables",
      features: ["Apps móviles", "Aplicaciones web", "Integraciones ERP/CRM"],
      benefit: "Soluciones tecnológicas que se adaptan perfectamente a tu negocio",
      cta: "Solicita tu presupuesto para apps móviles y web"
    },
    {
      icon: <Brain className="text-cyan-400" size={32} />,
      title: "Automatización de procesos con RPA e IA",
      description: "Flujos interdepartamentales optimizados y automatización RPA Integraciones no-code/low-code (Make, n8n, Zapier)",
      features: ["Flujos optimizados", "RPA", "Integraciones no-code"],
      benefit: "Elimina tareas repetitivas y reduce errores humanos al mínimo",
      cta: "Automatiza tus procesos ahora"
    },
    {
      icon: <Brain className="text-cyan-400" size={32} />,
      title: "Soluciones de Inteligencia Artificial para empresas",
      description: "Modelos predictivos de ventas y demanda, chatbots y asistentes virtuales Procesamiento de lenguaje natural y analítica avanzada",
      features: ["Modelos predictivos", "Chatbots", "Analítica avanzada"],
      benefit: "IA práctica que toma decisiones inteligentes y mejora tus resultados",
      cta: "Descubre la IA para tu empresa"
    },
    {
      icon: <GraduationCap className="text-cyan-400" size={32} />,
      title: "Formación en digitalización y adopción tecnológica",
      description: "Talleres de adopción tecnológica y formación práctica en nuevas herramientas digitales Soporte completo en la transición",
      features: ["Talleres tecnológicos", "Formación práctica", "Soporte en transición"],
      benefit: "Tu equipo domina las nuevas tecnologías desde el primer día",
      cta: "Solicita formación tecnológica"
    },
    {
      icon: <Wrench className="text-cyan-400" size={32} />,
      title: "Soporte tecnológico continuo para empresas",
      description: "Mantenimiento continuo y adaptación de soluciones a la evolución del negocio Soporte técnico cercano y especializado",
      features: ["Mantenimiento continuo", "Adaptación evolutiva", "Soporte técnico"],
      benefit: "Tecnología que evoluciona contigo sin preocupaciones",
      cta: "Conoce nuestro soporte tecnológico"
    },
    {
      icon: <MessageSquare className="text-cyan-400" size={32} />,
      title: "Consultoría en comunicación digital y documental",
      description: "Diseño de sistemas internos de comunicación y digitalización de la gestión documental Conexión eficiente de equipos y departamentos",
      features: ["Sistemas de comunicación", "Gestión documental", "Conexión departamental"],
      benefit: "Comunicación fluida que conecta a todos tus equipos eficientemente",
      cta: "Mejora tu comunicación digital"
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contacto');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="servicios" className="py-12 md:py-20 bg-black relative overflow-hidden">
      {/* Simplified background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/5" />
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(6, 182, 212, 0.05) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(6, 182, 212, 0.05) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
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
            Servicios de consultoría tecnológica y digitalización
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto mb-6" />
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">
            Ofrecemos soluciones tecnológicas integrales para transformar tu empresa, 
            desde la consultoría estratégica hasta la implementación y soporte continuo.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }} // Reduced delay
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="group"
            >
              <Card className="bg-slate-900/50 border-slate-700 hover:border-cyan-400/50 transition-all duration-300 backdrop-blur-sm h-full">
                <CardHeader>
                  <div className="bg-slate-800/50 rounded-lg p-3 w-fit mb-4 border border-slate-700 group-hover:border-cyan-400/50 transition-all duration-300">
                    {service.icon}
                  </div>
                  <CardTitle className="text-white leading-tight">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-4">
                    {service.features.map((feature, featureIndex) => (
                      <li 
                        key={featureIndex} 
                        className="flex items-center text-sm text-slate-400"
                      >
                        <ChevronRight className="text-cyan-400 mr-2" size={14} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="border-t border-slate-600 pt-4 mt-4">
                    <p className="text-cyan-300 mb-3 text-sm">
                      {service.benefit}
                    </p>
                    <Button 
                      onClick={scrollToContact}
                      variant="outline"
                      size="sm"
                      className="border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 hover:text-cyan-300 text-xs"
                    >
                      {service.cta}
                      <ChevronRight className="ml-1" size={12} />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl text-white mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            ¿Listo para transformar tu empresa?
          </h3>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
            Agenda una consulta gratuita y descubre cómo podemos ayudarte a digitalizar, 
            automatizar y optimizar tus procesos empresariales.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              onClick={scrollToContact}
              className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-3 border-0 shadow-lg shadow-cyan-500/25"
            >
              Solicitar Consulta Gratuita
              <ChevronRight className="ml-2" size={16} />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}