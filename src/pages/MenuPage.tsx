import { motion } from "framer-motion";
import { Check } from "lucide-react";
import tacosHero from "@/assets/Galeria/3.jpeg";
import aguasFrescas from "@/assets/tacos.png";
import a1 from "@/assets/Galeria/10.jpg";
import a2 from "@/assets/Galeria/3.jpeg";
import a3 from "@/assets/Galeria/4.jpeg";
import a4 from "@/assets/Galeria/5.jpeg";
import a5 from "@/assets/Galeria/6.jpeg";
import a6 from "@/assets/Galeria/7.jpeg";
import a7 from "@/assets/Galeria/8.jpeg";
import a8 from "@/assets/Galeria/9.jpeg";
import textura from "@/assets/textura.jpg"; // o cualquier textura tipo papel/madera


const spring = { type: "spring" as const, stiffness: 300, damping: 20 };
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };
const popIn = { hidden: { scale: 0.9, opacity: 0 }, show: { scale: 1, opacity: 1, transition: spring } };

interface MenuSectionProps {
  title: string;
  emoji: string;
  subtitle: string;
  items: string[];
  borderColor: string;
}

const MenuSection = ({ title, emoji, subtitle, items, borderColor }: MenuSectionProps) => (
  <motion.div
    variants={popIn}
    className={`
      relative 
      overflow-hidden 
      card-cazuela 
      border-l-4 ${borderColor}
    `}
  >
    {/* TEXTURA */}
    <div
      className="absolute inset-0 opacity-10 bg-cover bg-center pointer-events-none"
      style={{ backgroundImage: `url(${textura})` }}
    ></div>

    {/* CONTENIDO */}
    <div className="relative z-10">
      <h3 className="font-display text-2xl font-bold mb-1">
        {emoji} {title}
      </h3>

      <p className="text-muted-foreground mb-4 font-accent">
        {subtitle}
      </p>

      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item} className="flex items-center gap-2">
            <Check size={16} className="text-primary flex-shrink-0" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  </motion.div>
);
const meats = [
  "Steak", "Chicken", "Al Pastor", "Adobada", "Carnitas",
  "Chicken with mole", "Chicken tinga", "Shredded beef",
  "Pork in red chili sauce", "Beef birria",
  "And many more dishes!"
];

const salsas = ["Red", "Green", "Smoky", "Molcajete-style", "Red taquera"];
const sides = ["Rice", "Pasta with poblano cream"];
const toppings = ["Cilantro", "Onion", "Radishes", "Limes", "Grilled onions", "Charro beans"];
const kids = ["Hot dogs", "Quesadillas"];
const drinks = ["Lemonade", "Horchata", "Hibiscus", "Melon", "Cucumber with lime"];

const MenuPage = () => {
  return (
    <div className="pt-20">
      {/* Hero */}
    <section className="section-padding bg-primary text-primary-foreground relative overflow-hidden">
  
     {/* IMAGEN MITAD DERECHA */}
      <div className="hidden lg:block absolute top-0 right-0 w-1/2 h-full">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${tacosHero})` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-l from-transparent to-primary"></div>
      </div>

        {/* CONTENIDO */}
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="w-full lg:w-1/2 py-12">
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-4">
              Our Menu
            </h1>
            <p className="text-xl text-primary-foreground/80 max-w-lg">
              Choose your favorites and create the perfect menu for your event. Everything made by hand with fresh ingredients!
            </p>
          </div>
        </div>
    </section>
      {/* Menu Grid */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <MenuSection
              title="Tacos"
              emoji=""
              subtitle="Choose 3 types of meat"
              items={meats}
              borderColor="border-chili"
            />
            <MenuSection
              title="Salsas"
              emoji=""
              subtitle="Choose 2 salsas"
              items={salsas}
              borderColor="border-primary"
            />
            <MenuSection
              title="Sides"
              emoji=""
              subtitle="Choose 1"
              items={sides}
              borderColor="border-marigold"
            />
            <MenuSection
              title="Included Toppings"
              emoji=""
              subtitle="Always fresh"
              items={toppings}
              borderColor="border-primary"
            />
            <MenuSection
              title="Kids Options"
              emoji=""
              subtitle="Choose 1"
              items={kids}
              borderColor="border-marigold"
            />
            <MenuSection
              title="Drinks"
              emoji=""
              subtitle="1 flavor (50 guests) / 2 flavors (80+)"
              items={drinks}
              borderColor="border-chili"
            />
          </motion.div>
        </div>
      </section>

      {/* Drinks image + Included bar */}
      <section className="py-4 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.img
              src={aguasFrescas}
              alt="Aguas frescas mexicanas"
              className="w-48 md:w-64 drop-shadow-xl"
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={spring}
            />
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                Included in your package
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {[
                  { emoji: "", label: "Disposable tableware" },
                  { emoji: "", label: "Decoration" },
                  { emoji: "", label: "2 hours of service" },
                ].map((item) => (
                  <div key={item.label} className="card-cazuela text-center py-8">
                    <span className="text-4xl block mb-2">{item.emoji}</span>
                    <span className="font-display font-bold text-lg">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
   {/* GALERIA */}

    <section className="section-padding">
    <div className="max-w-7xl mx-auto">
      
      <h2 className="font-display text-3xl md:text-4xl font-bold mb-8 text-center">
        Gallery
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        
        {[a1, a2, a3, a4, a5, a6, a7, a8].map((img, i) => (
          <div
            key={i}
            className="overflow-hidden rounded-xl group"
          >
            <img
              src={img}
              alt="Event gallery"
              className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
            />
          </div>
        ))}

      </div>
    </div>
  </section>



      {/* CTA */}
      <section className="section-padding text-center">
        <h2 className="font-display text-4xl font-bold mb-6">
          Like what you see?
        </h2>
        <a
          href="https://wa.me/12147135520?text=Hola%2C%20quiero%20cotizar%20un%20evento"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-primary text-primary-foreground rounded-full px-10 py-5 font-body font-bold text-xl hover:scale-105 transition-transform shadow-plum-lg"
        >
        Get a Quote Now
        </a>
      </section>
    </div>
  );
};

export default MenuPage;
