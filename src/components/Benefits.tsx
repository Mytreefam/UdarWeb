import { motion } from "motion/react";
import { CheckCircle, Zap, TrendingUp, Users } from "lucide-react";
import { Button } from "./ui/button";

export function Benefits() {
  const benefits = [
    {
      icon: <CheckCircle className="text-cyan-400" size={28} />,
      title: "Soluciones a medida",
      description: "Tecnología que se adapta perfectamente a tu negocio y objetivos específicos"
    },
    {
      icon: <Users className="text-cyan-400" size={28} />,
      title: "Tecnología fácil de usar",
      description: "Interfaz intuitiva y enfoque humano Tu equipo la adoptará desde el primer día"
    },
    {
      icon: <Zap className="text-cyan-400" size={28} />,
      title: "Resultados rápidos y medibles",
      description: "ROI visible en semanas Optimización inmediata de procesos y productividad"
    },
    {
      icon: <TrendingUp className="text-cyan-400" size={28} />,
      title: "Crecimiento sostenible",
      description: "Soluciones escalables que evolucionan contigo y potencian tu expansión"
    }
  ];

  const scrollToContact = () => {
    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="por-que-udar" className="py-12 md:py-20 bg-slate-900/50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl text-white mb-6">
            Lo que conseguimos para tu empresa
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Transformamos tu negocio con tecnología que genera resultados reales
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm p-4 md:p-6 rounded-xl border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-lg text-white mb-3">
                  {benefit.title}
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mini CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              onClick={scrollToContact}
              className="bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 text-white px-8 py-3 text-lg border-0 shadow-xl shadow-cyan-500/50 ring-2 ring-cyan-400/20"
            >
              Solicita un diagnóstico gratuito de tus procesos
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}