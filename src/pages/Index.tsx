import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Users, Utensils, Star, Heart } from "lucide-react";
import heroCazuela from "@/assets/hero-cazuela.png";
import herofond from "@/assets/menu.jpeg";
import logo from "@/assets/logo.png";
import tex from "@/assets/text.png";
import { Facebook, Instagram, Music } from "lucide-react";


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
  { icon: Users, title: "Events from 50 to 500+", desc: "We adapt to the size of your celebration" },
  { icon: Utensils, title: "Homemade dishes", desc: "Traditional recipes made with fresh ingredients" },
  { icon: Heart, title: "Personalized service", desc: "Your event is unique, and so is our service" },
  { icon: Star, title: "5-star experience", desc: "Disposables, decoration, and 2 hours of service included" },
];
const HomePage = () => {
  return (
    <div className="pt-20">
<section className="section-padding min-h-[90vh] flex items-center relative overflow-hidden">
  
  {/* 🌄 FONDO CON BLUR */}
  <div
    className="absolute inset-0 bg-cover bg-center scale-110"
    style={{ backgroundImage: `url(${tex})` }}
  ></div>

  {/* 🎨 CAPA PARA SUAVIZAR */}
  <div className="absolute inset-0 bg-white/95"></div>

  {/* CONTENIDO */}
  <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
    
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ ...spring, delay: 0.1 }}
    >
      <p className="font-accent text-xl text-muted-foreground mb-4">
        Catering
      </p>

      <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-primary leading-[1.1] mb-6">
        Authentic flavor for your events
      </h1>

      <p className="text-lg text-muted-foreground mb-8 max-w-lg">
        From our kitchen to your event. Homemade dishes, flawless service, and the soul of Mexico in every bite.
      </p>

      <div className="flex flex-wrap gap-4">
        <Link
          to="/menu"
          className="bg-primary text-primary-foreground rounded-full px-8 py-4 font-body font-bold hover:scale-105 transition-transform shadow-plum text-lg"
        >
          View Menu
        </Link>

        <Link
          to="/servicios"
          className="bg-secondary text-secondary-foreground rounded-full px-8 py-4 font-body font-bold hover:scale-105 transition-transform text-lg"
        >
          Services
        </Link>

        <a
          href="https://wa.me/12147135520?text=Hola%2C%20quiero%20cotizar%20un%20evento"
          target="_blank"
          rel="noopener noreferrer"
          className="border-2 border-primary text-primary rounded-full px-8 py-4 font-body font-bold hover:scale-105 transition-transform text-lg"
        >
          Get a Quote
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
        src={logo}
        alt="Authentic Mexican cazuela with stew"
        className="w-full max-w-[700px] lg:max-w-[900px] drop-shadow-2xl animate-float"
      />
    </motion.div>

  </div>
</section>

      {/* Social proof */}
      <section className="bg-primary text-primary-foreground py-8">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-8 md:gap-16 px-6 text-center">
          <div className="flex items-center gap-2">
            <Users size={24} />
            <span className="font-body font-bold text-lg">500+ events</span>
          </div>
          <div className="flex items-center gap-2">
            <Star size={24} />
            <span className="font-body font-bold text-lg">5-star service</span>
          </div>
          <div className="flex items-center gap-2">
            <Utensils size={24} />
            <span className="font-body font-bold text-lg">Since 2010</span>
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
            Why <span className="text-primary">Las Cazuelas</span>?
          </motion.h2>
          <p className="text-center text-muted-foreground text-lg mb-16 max-w-2xl mx-auto">
            Tacos that tell a story. Each dish reflects generations of Mexican culinary tradition.
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
                <div className="w-12 h-12 flex items-center justify-center mx-auto mb-4 text-primary">
                  {typeof f.icon === "string" ? <span className="text-2xl">{f.icon}</span> : <f.icon size={20} strokeWidth={1.5} />}
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
            Ready for the best tacos of your life?
          </motion.h2>
          <p className="text-lg text-muted-foreground mb-8">
            We cater events from 50 to 500+ guests. Get your quote today with no obligation.
          </p>
          <a
            href="https://wa.me/1234567890?text=Hola%2C%20quiero%20cotizar%20un%20evento"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary text-primary-foreground rounded-full px-10 py-5 font-body font-bold text-xl hover:scale-105 transition-transform shadow-plum-lg"
          >
            Get a Quote on WhatsApp
          </a>
        </div>
        <p className="text-center text-sm text-muted-foreground mt-6">
          Follow us:
        </p>
              <div className="flex justify-center gap-4 mt-4 w-full">
          <a href="https://www.facebook.com/share/18LrbTzNsk/?mibextid=wwXIfr" target="_blank">
            <Facebook className="w-6 h-6 hover:scale-110 transition-transform" />
          </a>

          <a href="https://instagram.com/TU_USUARIO" target="_blank">
            <Instagram className="w-6 h-6 hover:scale-110 transition-transform" />
          </a>

          <a href="https://tiktok.com/@taquizas_las_cazuelas" target="_blank">
            <Music className="w-6 h-6 hover:scale-110 transition-transform" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
