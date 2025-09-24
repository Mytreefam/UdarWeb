import { useState } from 'react';
import { Mail, Calendar, Send, MapPin, Building } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { motion } from 'motion/react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleServiceChange = (value: string) => {
    setFormData({
      ...formData,
      service: value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const subject = `Consulta de ${formData.name} - ${formData.service}`;
    const body = `Nombre: ${formData.name}
Email: ${formData.email}
Empresa: ${formData.company}
Servicio de interés: ${formData.service}

Mensaje:
${formData.message}`;

    const mailtoLink = `mailto:hola@udaredge.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  return (
    <section id="contacto" className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Simplified background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/5" />
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
            Hablemos de cómo digitalizar tu empresa
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto mb-6" />
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">
            Consulta gratuita, respuesta en menos de 24h Sin compromiso
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="bg-slate-800/50 border-slate-700 shadow-xl backdrop-blur-sm hover:border-cyan-400/50 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <div className="mr-3 p-2 bg-cyan-500/20 rounded-lg">
                    <Send className="text-cyan-400" size={20} />
                  </div>
                  Solicita tu consulta gratuita
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className="text-slate-300">Nombre completo *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="mt-1 bg-slate-700/50 border-slate-600 text-white placeholder-slate-400 focus:border-cyan-400"
                        placeholder="Tu nombre"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-slate-300">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="mt-1 bg-slate-700/50 border-slate-600 text-white placeholder-slate-400 focus:border-cyan-400"
                        placeholder="tu@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="company" className="text-slate-300">Empresa</Label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="mt-1 bg-slate-700/50 border-slate-600 text-white placeholder-slate-400 focus:border-cyan-400"
                      placeholder="Nombre de tu empresa"
                    />
                  </div>

                  <div>
                    <Label htmlFor="service" className="text-slate-300">Servicio de interés</Label>
                    <Select onValueChange={handleServiceChange}>
                      <SelectTrigger className="mt-1 bg-slate-700/50 border-slate-600 text-white">
                        <SelectValue placeholder="Selecciona un servicio" />
                      </SelectTrigger>
                      <SelectContent className="bg-slate-800 border-slate-700">
                        <SelectItem value="consultoria">Consultoría en digitalización</SelectItem>
                        <SelectItem value="desarrollo">Desarrollo de aplicaciones</SelectItem>
                        <SelectItem value="automatizacion">Automatización de procesos</SelectItem>
                        <SelectItem value="ia">Implementación de IA</SelectItem>
                        <SelectItem value="formacion">Formación y acompañamiento</SelectItem>
                        <SelectItem value="soporte">Soporte tecnológico</SelectItem>
                        <SelectItem value="comunicacion">Consultoría en comunicación</SelectItem>
                        <SelectItem value="otro">Otro</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-slate-300">Mensaje</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="mt-1 min-h-[120px] bg-slate-700/50 border-slate-600 text-white placeholder-slate-400 focus:border-cyan-400"
                      placeholder="Cuéntanos sobre tu proyecto o necesidades..."
                    />
                  </div>

                  <Button 
                    type="submit"
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white border-0"
                  >
                    <Send className="mr-2" size={16} />
                    Enviar consulta gratuita
                  </Button>
                  <p className="text-center text-sm text-slate-500 mt-3">
                    Tus datos están seguros. Cumplimos RGPD.
                  </p>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Direct Contact */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="bg-slate-800/50 border-slate-700 shadow-xl backdrop-blur-sm hover:border-cyan-400/50 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <div className="mr-3 p-2 bg-cyan-500/20 rounded-lg">
                      <Mail className="text-cyan-400" size={20} />
                    </div>
                    Contacto directo
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <p className="text-slate-400 mb-2">Email:</p>
                      <a 
                        href="mailto:hola@udaredge.com" 
                        className="text-cyan-400 hover:text-cyan-300 transition-colors"
                      >
                        hola@udaredge.com
                      </a>
                    </div>
                    <div className="flex items-start space-x-2">
                      <MapPin className="text-slate-400 mt-1" size={16} />
                      <div>
                        <p className="text-slate-300">
                          C/ Lepanto, 230<br />
                          Barcelona, España
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-2">
                      <Building className="text-slate-400 mt-1" size={16} />
                      <div>
                        <p className="text-slate-300">
                          Udar Edge, S.L.<br />
                          B22653737
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Schedule Meeting */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Card className="bg-slate-800/50 border-slate-700 shadow-xl backdrop-blur-sm hover:border-cyan-400/50 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <div className="mr-3 p-2 bg-cyan-500/20 rounded-lg">
                      <Calendar className="text-cyan-400" size={20} />
                    </div>
                    Agenda una reunión
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300 mb-4">
                    ¿Prefieres hablar directamente? Agenda una videollamada de 30 minutos 
                    con nuestro equipo para discutir tu proyecto.
                  </p>
                  <Button 
                    asChild
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white border-0"
                  >
                    <a 
                      href="https://calendly.com/hola-udaredge/30min" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <Calendar className="mr-2" size={16} />
                      Agenda tu reunión
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Prueba social - Caso de éxito */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 border-slate-700 shadow-xl backdrop-blur-sm hover:border-cyan-400/50 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-white">
                    ✨ Caso de éxito destacado
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <p className="text-slate-300 italic">
                      "UDAR EDGE automatizó nuestros procesos de inventario y redujo errores en un 85%. 
                      El ROI fue visible desde el primer mes."
                    </p>
                    <div className="text-sm text-cyan-400">
                      — Empresa de logística, Barcelona
                    </div>
                    <div className="grid grid-cols-2 gap-4 mt-4 pt-4 border-t border-slate-600">
                      <div className="text-center">
                        <div className="text-xl text-cyan-400">85%</div>
                        <div className="text-xs text-slate-400">Reducción errores</div>
                      </div>
                      <div className="text-center">
                        <div className="text-xl text-cyan-400">30 días</div>
                        <div className="text-xs text-slate-400">ROI visible</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}