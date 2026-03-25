import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Users, Utensils, Star, Heart } from "lucide-react";
import logo from "@/assets/logo.png";
import herofond from "@/assets/textura.jpg";
import { Facebook, Instagram, Music } from "lucide-react";
import { useState, useEffect } from "react";

import g1 from "@/assets/1.jpeg";
import g2 from "@/assets/2.jpeg";
import g3 from "@/assets/3.jpeg";
import g4 from "@/assets/4.jpeg";
import g5 from "@/assets/Galeria/10.jpg";
import g6 from "@/assets/Galeria/5.jpeg";
import g7 from "@/assets/Galeria/7.jpeg";
import g8 from "@/assets/Galeria/8.jpeg";
import g9 from "@/assets/Galeria/9.jpeg";

const galleryImages = [g1, g2, g3, g4, g5, g6, g7, g8, g9];
const gallery = [g1, g2, g3, g4];
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

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % gallery.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="pt-20">

      {/* 🔥 HERO = GALERÍA FULL SCREEN */}
      <section className="relative min-h-screen w-full overflow-hidden">

        {/* IMÁGENES */}
        {gallery.map((img, i) => (
          <div
            key={i}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}

        {/* OVERLAY PREMIUM */}
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80"></div>

        {/* CONTENIDO */}
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6 max-w-5xl mx-auto">

          {/* LOGO */}
          <motion.img
            src={logo}
            alt="Las Cazuelas"
            className="mx-auto w-72 md:w-96 mb-8 drop-shadow-2xl"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={spring}
          />

          {/* TITULO */}
          <motion.h1
            className="font-display text-5xl md:text-7xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...spring, delay: 0.1 }}
          >
            Authentic Mexican Catering
          </motion.h1>

          {/* SUBTITULO */}
          <motion.p
            className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            From our kitchen to your event. Traditional flavors, premium service, unforgettable experience.
          </motion.p>

          {/* BOTONES */}
          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <Link to="/menu" className="bg-white text-black px-8 py-3 rounded-full font-bold hover:scale-105 transition">
              View Menu
            </Link>

            <Link to="/servicios" className="bg-primary text-white px-8 py-3 rounded-full font-bold hover:scale-105 transition">
              Services
            </Link>

            <a
              href="https://wa.me/12147135520"
              target="_blank"
              className="border border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-black transition"
            >
              Get a Quote
            </a>
          </motion.div>

        </div>

        {/* DOTS */}
        <div className="absolute bottom-6 flex gap-2 justify-center w-full z-10">
          {gallery.map((_, i) => (
            <div
              key={i}
              className={`w-3 h-3 rounded-full ${i === index ? "bg-white" : "bg-white/40"}`}
            />
          ))}
        </div>

      </section>

      {/* SOCIAL PROOF */}
      <section className="bg-primary text-primary-foreground py-8">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-8 md:gap-16 px-6 text-center">
          <div className="flex items-center gap-2">
            <Users size={24} />
            <span className="font-bold text-lg">500+ events</span>
          </div>
          <div className="flex items-center gap-2">
            <Star size={24} />
            <span className="font-bold text-lg">5-star service</span>
          </div>
          <div className="flex items-center gap-2">
            <Utensils size={24} />
            <span className="font-bold text-lg">Since 2010</span>
          </div>
        </div>
      </section>
      {/* 🎞️ CARRUSEL INFINITO */}
    <section className="py-16 bg-black overflow-hidden">
      <div className="relative w-full overflow-hidden">

        <div className="flex gap-4 animate-scroll">

          {/* DUPLICAMOS PARA LOOP */}
          {[...galleryImages, ...galleryImages].map((img, i) => (
            <div
              key={i}
              className="min-w-[300px] h-[200px] rounded-xl overflow-hidden shadow-lg"
            >
              <img
                src={img}
                className="w-full h-full object-cover hover:scale-110 transition duration-100"
              />
            </div>
          ))}

          </div>

        </div>
      </section>

      {/* FEATURES */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">

          <h2 className="font-display text-4xl md:text-5xl font-bold text-center mb-4">
            Why <span className="text-primary">Las Cazuelas</span>?
          </h2>

          <p className="text-center text-muted-foreground text-lg mb-16 max-w-2xl mx-auto">
            Tacos that tell a story. Each dish reflects generations of Mexican culinary tradition.
          </p>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={stagger}
            initial="hidden"
            whileInView="show"
          >
            {features.map((f) => (
              <motion.div
                key={f.title}
                variants={popIn}
                className="group relative overflow-hidden bg-white/60 backdrop-blur-md border border-white/30 rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl hover:-translate-y-2 transition"
              >
                {/* TEXTURA */}
                <div
                  className="absolute inset-0 opacity-10 bg-cover"
                  style={{ backgroundImage: `url(${herofond})` }}
                />

                <div className="w-14 h-14 flex items-center justify-center mx-auto mb-5 rounded-full bg-primary/10">
                  <f.icon size={24} className="text-primary" />
                </div>

                <h3 className="font-display text-xl font-semibold mb-2 text-gray-900">
                  {f.title}
                </h3>

                <p className="text-gray-600 text-sm">
                  {f.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-secondary text-center">
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
          Ready for the best tacos of your life?
        </h2>

        <p className="text-lg text-muted-foreground mb-8">
          Get your quote today with no obligation.
        </p>

        <a
          href="https://wa.me/1234567890"
          target="_blank"
          className="bg-primary text-white px-10 py-5 rounded-full font-bold text-xl hover:scale-105 transition"
        >
          Get a Quote
        </a>
      </section>

    </div>
  );
};

export default HomePage;