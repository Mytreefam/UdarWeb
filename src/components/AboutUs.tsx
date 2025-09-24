import { motion } from "motion/react";
import { Star, CheckCircle, Target, Eye, Users, Building, Lightbulb } from "lucide-react";

export function AboutUs() {
  const values = [
    {
      icon: <Star className="text-cyan-400" size={28} />,
      title: "Innovación práctica en digitalización",
      description: "Tecnología útil, enfocada en resultados reales para tu empresa."
    },
    {
      icon: <CheckCircle className="text-cyan-400" size={28} />,
      title: "Cercanía y humanidad",
      description: "La digitalización al servicio de las personas, no al revés."
    },
    {
      icon: <Target className="text-cyan-400" size={28} />,
      title: "Eficiencia en procesos empresariales",
      description: "Simplificamos lo complejo para que tu negocio fluya mejor."
    },
    {
      icon: <Eye className="text-cyan-400" size={28} />,
      title: "Adaptabilidad",
      description: "El software se ajusta a la empresa, nunca al revés."
    }
  ];

  const team = [
    {
      icon: <Users className="text-cyan-400" size={32} />,
      title: "Equipo especializado",
      description: "Profesionales con amplia experiencia en digitalización empresarial y tecnologías emergentes."
    },
    {
      icon: <Building className="text-cyan-400" size={32} />,
      title: "Compromiso local",
      description: "Con sede en Barcelona, trabajamos con empresas de toda España y expandimos hacia LATAM."
    },
    {
      icon: <Lightbulb className="text-cyan-400" size={32} />,
      title: "Enfoque práctico",
      description: "Soluciones tecnológicas que generan resultados medibles desde el primer día."
    }
  ];

  return (
    <section id="nosotros" className="py-20 bg-slate-900/50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl text-white mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Sobre Nosotros
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto mb-8" />
          <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Somos UDAR EDGE, una consultora tecnológica especializada en hacer que la tecnología 
            trabaje para tu empresa de forma intuitiva y eficiente.
          </p>
        </motion.div>

        {/* Misión */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
            <h3 className="text-2xl text-white mb-4 text-center">Nuestra Misión</h3>
            <p className="text-slate-300 text-lg text-center max-w-3xl mx-auto leading-relaxed">
              Transformar empresas a través de la tecnología, garantizando que cada solución digital 
              se adapte perfectamente a los procesos y necesidades específicas de nuestros clientes. 
              Creemos que la tecnología debe ser un facilitador, no un obstáculo.
            </p>
          </div>
        </motion.div>

        {/* Valores */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl text-white text-center mb-12">Nuestros Valores</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700 hover:border-cyan-400/50 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="text-center">
                  <div className="bg-slate-700/50 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    {value.icon}
                  </div>
                  <h4 className="text-lg text-white mb-3">{value.title}</h4>
                  <p className="text-slate-300 text-sm leading-relaxed">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Visión */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
            <h3 className="text-2xl text-white mb-4 text-center">Nuestra Visión</h3>
            <p className="text-slate-300 text-lg text-center max-w-3xl mx-auto leading-relaxed">
              Ser el partner tecnológico de referencia para empresas que buscan crecer de forma 
              sostenible a través de la digitalización inteligente. Queremos que cada empresa 
              pueda aprovechar al máximo el potencial de la tecnología sin perder su esencia humana.
            </p>
          </div>
        </motion.div>

        {/* Equipo/Compromiso */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl text-white text-center mb-12">Por qué elegirnos</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((item, index) => (
              <motion.div
                key={index}
                className="text-center group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 hover:border-cyan-400/50 transition-all duration-300">
                  <div className="bg-slate-700/50 rounded-full p-4 w-20 h-20 mx-auto mb-6 flex items-center justify-center group-hover:bg-cyan-400/20 transition-all duration-300">
                    {item.icon}
                  </div>
                  <h4 className="text-xl text-white mb-4">{item.title}</h4>
                  <p className="text-slate-300 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}