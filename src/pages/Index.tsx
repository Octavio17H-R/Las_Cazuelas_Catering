import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Users, Utensils, Star, ChefHat, PartyPopper, Heart } from "lucide-react";
import heroCazuela from "@/assets/hero-cazuela.png";
import tacosHero from "@/assets/tacos-hero.png";

const spring = { type: "spring" as const, stiffness: 300, damping: 20 };

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const popIn = {
  hidden: { scale: 0.9, opacity: 0 },
  show: { scale: 1, opacity: 1, transition: spring },
};

const features = [
  { icon: PartyPopper, title: "Eventos de 50 a 500+", desc: "Nos adaptamos al tamaño de tu celebración" },
  { icon: ChefHat, title: "Guisos caseros", desc: "Recetas tradicionales hechas con ingredientes frescos" },
  { icon: Heart, title: "Atención personalizada", desc: "Tu evento es único, nuestro servicio también" },
  { icon: Star, title: "Servicio 5 estrellas", desc: "Desechables, decoración y 2 horas de servicio incluidos" },
];

const HomePage = () => {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="section-padding min-h-[90vh] flex items-center">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ ...spring, delay: 0.1 }}
          >
            <p className="font-accent text-xl text-muted-foreground mb-4">
              Catering premium de tacos
            </p>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-primary leading-[1.1] mb-6">
              El sabor auténtico para tus eventos
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-lg">
              De nuestra cocina a tu evento. Guisos caseros, servicio impecable, y el alma de México en cada plato.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/menu"
                className="bg-primary text-primary-foreground rounded-full px-8 py-4 font-body font-bold hover:scale-105 transition-transform shadow-plum text-lg"
              >
                🌮 Ver Menú
              </Link>
              <Link
                to="/servicios"
                className="bg-secondary text-secondary-foreground rounded-full px-8 py-4 font-body font-bold hover:scale-105 transition-transform text-lg"
              >
                🎉 Servicios
              </Link>
              <a
                href="https://wa.me/1234567890?text=Hola%2C%20quiero%20cotizar%20un%20evento"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-primary text-primary rounded-full px-8 py-4 font-body font-bold hover:scale-105 transition-transform text-lg"
              >
                📞 Cotizar
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ ...spring, delay: 0.3 }}
            className="relative flex justify-center"
          >
            <img
              src={heroCazuela}
              alt="Cazuela tradicional mexicana con guiso"
              className="w-80 md:w-96 lg:w-[28rem] drop-shadow-2xl animate-float"
            />
            <img
              src={tacosHero}
              alt="Tacos mexicanos auténticos"
              className="absolute -bottom-8 -left-4 w-48 md:w-56 drop-shadow-xl"
              style={{ animationDelay: "1s" }}
            />
          </motion.div>
        </div>
      </section>

      {/* Social proof */}
      <section className="bg-primary text-primary-foreground py-8">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-8 md:gap-16 px-6 text-center">
          <div className="flex items-center gap-2">
            <Users size={24} />
            <span className="font-body font-bold text-lg">500+ eventos</span>
          </div>
          <div className="flex items-center gap-2">
            <Star size={24} />
            <span className="font-body font-bold text-lg">Servicio 5 estrellas</span>
          </div>
          <div className="flex items-center gap-2">
            <Utensils size={24} />
            <span className="font-body font-bold text-lg">Desde 2010</span>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="font-display text-4xl md:text-5xl font-bold text-center mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={spring}
          >
            ¿Por qué <span className="text-primary">Cazuelas Las</span>?
          </motion.h2>
          <p className="text-center text-muted-foreground text-lg mb-16 max-w-2xl mx-auto">
            Tacos que cuentan una historia. Cada platillo refleja generaciones de tradición culinaria mexicana.
          </p>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {features.map((f) => (
              <motion.div key={f.title} variants={popIn} className="card-cazuela text-center">
                <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mx-auto mb-4">
                  <f.icon size={28} className="text-primary" />
                </div>
                <h3 className="font-display text-xl font-bold mb-2">{f.title}</h3>
                <p className="text-muted-foreground">{f.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-secondary">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="font-display text-4xl md:text-5xl font-bold mb-6"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={spring}
          >
            ¿Listo para el mejor taco de tu vida?
          </motion.h2>
          <p className="text-lg text-muted-foreground mb-8">
            Atendemos eventos desde 50 hasta 500+ personas. Cotiza ahora sin compromiso.
          </p>
          <a
            href="https://wa.me/1234567890?text=Hola%2C%20quiero%20cotizar%20un%20evento"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary text-primary-foreground rounded-full px-10 py-5 font-body font-bold text-xl hover:scale-105 transition-transform shadow-plum-lg"
          >
            📞 Cotizar por WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
