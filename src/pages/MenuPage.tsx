import { motion } from "framer-motion";
import { Check } from "lucide-react";
import tacosHero from "@/assets/tacos-hero.png";
import aguasFrescas from "@/assets/aguas-frescas.png";

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
    className={`card-cazuela border-l-4 ${borderColor}`}
  >
    <h3 className="font-display text-2xl font-bold mb-1">
      {emoji} {title}
    </h3>
    <p className="text-muted-foreground mb-4 font-accent">{subtitle}</p>
    <ul className="space-y-2">
      {items.map((item) => (
        <li key={item} className="flex items-center gap-2">
          <Check size={16} className="text-primary flex-shrink-0" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </motion.div>
);

const meats = [
  "Bistec", "Pollo", "Pastor", "Adobada", "Carnitas",
  "Pollo con mole", "Tinga de pollo", "Carne deshebrada",
  "Asado de puerco en chile colorado", "Birria de res",
  "¡Y muchos guisos más!"
];

const salsas = ["Roja", "Verde", "Quemada", "Molcajeteada", "Taquera roja"];
const sides = ["Arroz", "Macarrones con crema poblana"];
const toppings = ["Cilantro", "Cebolla", "Rábanos", "Limones", "Cebollita asada", "Frijoles charros"];
const kids = ["Hotdogs", "Quesadillas"];
const drinks = ["Limonada", "Horchata", "Jamaica", "Melón", "Pepino con limón"];

const MenuPage = () => {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1">
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-4">
              Nuestro Menú
            </h1>
            <p className="text-xl text-primary-foreground/80 max-w-lg">
              Elige tus favoritos y arma el menú perfecto para tu evento. ¡Todo hecho a mano con ingredientes frescos!
            </p>
          </div>
          <motion.img
            src={tacosHero}
            alt="Tacos mexicanos"
            className="w-64 md:w-80 drop-shadow-2xl"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={spring}
          />
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
              emoji="🌮"
              subtitle="Elige 3 tipos de carne"
              items={meats}
              borderColor="border-chili"
            />
            <MenuSection
              title="Salsas"
              emoji="🌶"
              subtitle="Elige 2 salsas"
              items={salsas}
              borderColor="border-primary"
            />
            <MenuSection
              title="Acompañamientos"
              emoji="🍚"
              subtitle="Elige 1"
              items={sides}
              borderColor="border-marigold"
            />
            <MenuSection
              title="Toppings incluidos"
              emoji="🥗"
              subtitle="Siempre frescos"
              items={toppings}
              borderColor="border-primary"
            />
            <MenuSection
              title="Opciones para niños"
              emoji="👶"
              subtitle="Elige 1"
              items={kids}
              borderColor="border-marigold"
            />
            <MenuSection
              title="Bebidas"
              emoji="🥤"
              subtitle="1 sabor (50 pers.) / 2 sabores (80+)"
              items={drinks}
              borderColor="border-chili"
            />
          </motion.div>
        </div>
      </section>

      {/* Drinks image + Included bar */}
      <section className="section-padding bg-secondary">
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
                🎉 Incluye con tu paquete
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {[
                  { emoji: "🍽", label: "Desechables" },
                  { emoji: "🎊", label: "Decoración" },
                  { emoji: "⏰", label: "2 horas de servicio" },
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

      {/* CTA */}
      <section className="section-padding text-center">
        <h2 className="font-display text-4xl font-bold mb-6">
          ¿Te gustó lo que ves?
        </h2>
        <a
          href="https://wa.me/1234567890?text=Hola%2C%20quiero%20cotizar%20un%20evento"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-primary text-primary-foreground rounded-full px-10 py-5 font-body font-bold text-xl hover:scale-105 transition-transform shadow-plum-lg"
        >
          📞 Cotizar ahora
        </a>
      </section>
    </div>
  );
};

export default MenuPage;
