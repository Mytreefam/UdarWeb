import { Mail, Calendar, Linkedin, Youtube, Instagram, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { Button } from './ui/button';
import udarLogo from 'figma:asset/446e76494b3062b65021587fc2add9c86bc83d88.png';

interface FooterProps {
  onOpenLegal: (content: string) => void;
}

export function Footer({ onOpenLegal }: FooterProps) {
  const termsContent = `
# TÉRMINOS Y CONDICIONES DE USO

**Última actualización:** Enero 2025

## 1. INFORMACIÓN GENERAL

Estos términos y condiciones de uso (en adelante, "Términos") regulan el acceso y uso del sitio web de UDAR EDGE, S.L. (en adelante, "la Empresa"), con domicilio social en C/ Lepanto, 230, Barcelona, España, y N.I.F. B22653737.

## 2. ACEPTACIÓN DE LOS TÉRMINOS

El acceso y uso de este sitio web implica la aceptación expresa y sin reservas de estos Términos. Si no estás de acuerdo con alguno de estos términos, te rogamos que no utilices este sitio web.

## 3. USO DEL SITIO WEB

El usuario se compromete a utilizar el sitio web conforme a la ley, la moral, las buenas costumbres y el orden público. Queda prohibido:

- Realizar actividades ilícitas o que vulneren derechos de terceros
- Introducir virus informáticos o realizar acciones que dañen los sistemas
- Intentar acceder a áreas restringidas del sitio web
- Reproducir, copiar o distribuir el contenido sin autorización

## 4. PROPIEDAD INTELECTUAL

Todos los contenidos del sitio web (textos, imágenes, diseños, logotipos, etc.) son propiedad de UDAR EDGE, S.L. o de terceros que han autorizado su uso. Su reproducción total o parcial sin autorización está prohibida.

## 5. RESPONSABILIDAD

UDAR EDGE, S.L. no se responsabiliza de:
- Interrupciones o errores en el funcionamiento del sitio web
- Daños derivados del uso indebido del sitio web
- Contenidos de sitios web de terceros enlazados

## 6. MODIFICACIONES

UDAR EDGE, S.L. se reserva el derecho de modificar estos términos en cualquier momento, publicando las modificaciones en el sitio web.

## 7. LEGISLACIÓN APLICABLE

Estos términos se rigen por la legislación española. Para cualquier controversia, las partes se someten a los juzgados y tribunales de Barcelona.

## 8. CONTACTO

Para cualquier consulta sobre estos términos:
- Email: hola@udaredge.com
- Dirección: C/ Lepanto, 230, Barcelona, España
`;

  const privacyContent = `
# POLÍTICA DE PRIVACIDAD

**Última actualización:** Enero 2025

## 1. RESPONSABLE DEL TRATAMIENTO

**UDAR EDGE, S.L.**
- N.I.F.: B22653737
- Domicilio: C/ Lepanto, 230, Barcelona, España
- Email: hola@udaredge.com

## 2. DATOS QUE RECOPILAMOS

A través de nuestro sitio web podemos recopilar:
- Datos de contacto (nombre, email, empresa)
- Información sobre tu consulta o proyecto
- Datos de navegación (cookies técnicas)

## 3. FINALIDAD DEL TRATAMIENTO

Utilizamos tus datos para:
- Responder a tus consultas y solicitudes
- Gestionar reuniones y citas
- Mejorar nuestros servicios
- Cumplir obligaciones legales

## 4. BASE LEGAL

El tratamiento se basa en:
- Consentimiento del interesado
- Interés legítimo de la empresa
- Ejecución de medidas precontractuales

## 5. CONSERVACIÓN DE DATOS

Conservamos tus datos:
- Mientras dure la relación comercial
- Durante los plazos legalmente establecidos
- Hasta que solicites su eliminación

## 6. DERECHOS DEL USUARIO

Tienes derecho a:
- Acceder a tus datos personales
- Rectificar datos inexactos
- Suprimir tus datos
- Limitar el tratamiento
- Portabilidad de datos
- Oposición al tratamiento

Para ejercer estos derechos, contacta con nosotros en hola@udaredge.com

## 7. MEDIDAS DE SEGURIDAD

Implementamos medidas técnicas y organizativas para proteger tus datos conforme al RGPD.

## 8. TRANSFERENCIAS INTERNACIONALES

No realizamos transferencias de datos fuera del Espacio Económico Europeo.

## 9. AUTORIDAD DE CONTROL

Puedes presentar reclamaciones ante la Agencia Española de Protección de Datos (www.aepd.es).

## 10. CONTACTO

Para cualquier consulta sobre esta política:
- Email: hola@udaredge.com
- Dirección: C/ Lepanto, 230, Barcelona, España
`;

  const cookiesContent = `
# POLÍTICA DE COOKIES

**Última actualización:** Enero 2025

## 1. ¿QUÉ SON LAS COOKIES?

Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas un sitio web. Nos ayudan a mejorar tu experiencia de navegación.

## 2. TIPOS DE COOKIES QUE UTILIZAMOS

### Cookies Técnicas (Necesarias)
- **Finalidad:** Funcionamiento básico del sitio web
- **Duración:** Sesión
- **Base legal:** Interés legítimo

### Cookies de Funcionalidad
- **Finalidad:** Recordar preferencias del usuario
- **Duración:** Hasta 1 año
- **Base legal:** Consentimiento

## 3. COOKIES DE TERCEROS

Podemos utilizar servicios de terceros que instalan sus propias cookies:

### Google Analytics (Opcional)
- **Finalidad:** Análisis de tráfico web
- **Duración:** Hasta 2 años
- **Más información:** [Política de Google](https://policies.google.com/privacy)

## 4. GESTIÓN DE COOKIES

Puedes gestionar las cookies de las siguientes formas:

### En tu navegador:
- **Chrome:** Configuración > Privacidad y seguridad > Cookies
- **Firefox:** Opciones > Privacidad y seguridad
- **Safari:** Preferencias > Privacidad
- **Edge:** Configuración > Cookies y permisos del sitio

### En nuestro sitio web:
Próximamente dispondremos de un panel de configuración de cookies.

## 5. CONSENTIMIENTO

Al continuar navegando en nuestro sitio web, das tu consentimiento para el uso de cookies conforme a esta política.

## 6. ACTUALIZACIÓN DE LA POLÍTICA

Esta política puede actualizarse. Te recomendamos revisarla periódicamente.

## 7. CONTACTO

Para cualquier consulta sobre cookies:
- Email: hola@udaredge.com
- Dirección: C/ Lepanto, 230, Barcelona, España

## 8. MÁS INFORMACIÓN

Para más información sobre cookies, visita:
- [Agencia Española de Protección de Datos](https://www.aepd.es/)
- [All About Cookies](https://www.allaboutcookies.org/)
`;

  return (
    <footer className="bg-black text-white py-16 relative overflow-hidden">
      {/* Simplified background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/5" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <motion.div 
            className="md:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img 
              src={udarLogo} 
              alt="UDAR EDGE" 
              className="h-12 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-slate-300 mb-6 leading-relaxed">
              UDAR EDGE es una consultora tecnológica en Barcelona especializada en digitalización de procesos, 
              automatización, inteligencia artificial y soluciones digitales a medida para empresas en España y LATAM.
            </p>
            
            {/* CTA final destacado */}
            <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 border border-slate-600 rounded-lg p-4 mb-6">
              <p className="text-cyan-300 mb-3">
                ¿Quieres saber cómo podemos ayudar a tu empresa?
              </p>
              <Button 
                onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 text-white px-6 py-2 text-sm border-0"
              >
                Agenda tu consulta gratuita
              </Button>
            </div>
            <div className="space-y-2 text-sm text-slate-400">
              <p>UDAR EDGE, S.L.</p>
              <p>N.I.F.: B22653737</p>
              <p>C/ Lepanto, 230, Barcelona, España</p>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Enlaces rápidos
            </h3>
            <ul className="space-y-3 text-slate-300">
              {[
                { id: 'inicio', label: 'Inicio' },
                { id: 'por-que-udar', label: 'Por qué UDAR' },
                { id: 'servicios', label: 'Servicios' },
                { id: 'contacto', label: 'Contacto' },
                { id: 'nosotros', label: 'Nosotros' }
              ].map((item) => (
                <li key={item.id}>
                  <button 
                    onClick={() => document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' })}
                    className="hover:text-cyan-400 transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Contacto
            </h3>
            <div className="space-y-3">
              <a 
                href="mailto:hola@udaredge.com"
                className="flex items-center text-slate-300 hover:text-cyan-400 transition-colors"
              >
                <Mail className="mr-2" size={16} />
                hola@udaredge.com
              </a>
              <a 
                href="https://calendly.com/hola-udaredge/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-slate-300 hover:text-cyan-400 transition-colors"
              >
                <Calendar className="mr-2" size={16} />
                Agendar reunión
              </a>
              
              {/* Social Media */}
              <div className="mt-4">
                <p className="text-slate-400 text-sm mb-3">Síguenos:</p>
                <div className="flex space-x-3">
                  <a 
                    href="https://linkedin.com/company/udaredge" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-cyan-400 transition-colors"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a 
                    href="https://youtube.com/@udaredge" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-cyan-400 transition-colors"
                  >
                    <Youtube size={20} />
                  </a>
                  <a 
                    href="https://instagram.com/udaredge" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-cyan-400 transition-colors"
                  >
                    <Instagram size={20} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* CTA Final */}
        <motion.div 
          className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 rounded-2xl p-8 mb-8 text-center backdrop-blur-sm border border-slate-600"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl text-white mb-4">
            ¿Quieres saber cómo podemos ayudar a tu empresa?
          </h3>
          <a 
            href="https://calendly.com/hola-udaredge/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105"
          >
            Agenda tu consulta gratuita
            <ArrowRight className="ml-2" size={16} />
          </a>
        </motion.div>

        {/* Legal Links */}
        <motion.div 
          className="border-t border-slate-700 pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm mb-4 md:mb-0">
              © 2025 UDAR EDGE, S.L. Todos los derechos reservados.
            </p>
            <div className="flex flex-wrap gap-6 text-sm">
              {[
                { content: termsContent, label: "Términos y Condiciones" },
                { content: privacyContent, label: "Política de Privacidad" },
                { content: cookiesContent, label: "Política de Cookies" }
              ].map((item) => (
                <button
                  key={item.label}
                  onClick={() => onOpenLegal(item.content)}
                  className="text-slate-400 hover:text-cyan-400 transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}