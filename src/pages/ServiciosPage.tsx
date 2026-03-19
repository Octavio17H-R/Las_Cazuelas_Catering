import { useState } from "react";
import { motion } from "framer-motion";
import { Music, Wine, Users, Sparkles, Apple, IceCreamCone, CandyCane, UtensilsCrossed, Send } from "lucide-react";
import churrosImg from "@/assets/churros.png";

const spring = { type: "spring" as const, stiffness: 300, damping: 20 };
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };
const popIn = { hidden: { scale: 0.9, opacity: 0 }, show: { scale: 1, opacity: 1, transition: spring } };

const services = [
  { icon: Apple, title: "Fruit Cup", desc: "Vasos de fruta fresca con chile y limón" },
  { icon: Sparkles, title: "Fruits Station", desc: "Estación de frutas frescas de temporada" },
  { icon: IceCreamCone, title: "Corn on the Cup", desc: "Esquites preparados al momento" },
  { icon: CandyCane, title: "Mexican Candies Table", desc: "Mesa de dulces mexicanos tradicionales" },
  { icon: UtensilsCrossed, title: "Appetizers", desc: "Botanas y antojitos para empezar la fiesta" },
  { icon: IceCreamCone, title: "Churros on a Cup", desc: "Churros frescos con chocolate y cajeta" },
  { icon: Music, title: "DJ", desc: "Música en vivo para animar tu evento" },
  { icon: Wine, title: "Bartenders", desc: "Servicio profesional de bartending" },
  { icon: Users, title: "Meseros", desc: "Personal de servicio profesional y atento" },
  { icon: Users, title: "Personal de apoyo", desc: "Staff extra para eventos grandes" },
];

const ServiciosPage = () => {
  const [form, setForm] = useState({ nombre: "", telefono: "", evento: "", personas: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hola, me llamo ${form.nombre} y quiero celebrar ${form.evento} con ${form.personas} personas. Mi teléfono es ${form.telefono}.`;
    window.open(`https://wa.me/1234567890?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="section-padding bg-chili text-primary-foreground">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1">
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-4">
              Servicios & Extras
            </h1>
            <p className="text-xl text-primary-foreground/80 max-w-lg">
              Haz tu evento inolvidable con nuestros servicios adicionales. Desde churros hasta DJ, lo tenemos todo.
            </p>
          </div>
          <motion.img
            src={churrosImg}
            alt="Churros mexicanos"
            className="w-48 md:w-64 drop-shadow-2xl"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={spring}
          />
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display text-4xl font-bold text-center mb-12">
            🎉 Todo para tu fiesta
          </h2>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {services.map((s) => (
              <motion.div key={s.title} variants={popIn} className="card-cazuela flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                  <s.icon size={22} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold">{s.title}</h3>
                  <p className="text-muted-foreground">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* DJ/Bartenders dark section */}
      <section className="section-padding bg-charcoal text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            🎶 DJ & Bartenders
          </h2>
          <p className="text-xl text-primary-foreground/70 mb-8">
            Dale un toque profesional a la noche. Música que prende y cócteles que sorprenden.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="border border-primary-foreground/20 rounded-[32px] p-8">
              <Music size={40} className="text-marigold mx-auto mb-4" />
              <h3 className="font-display text-2xl font-bold mb-2">DJ Profesional</h3>
              <p className="text-primary-foreground/60">Equipo de audio, luces y la mejor selección musical para tu evento.</p>
            </div>
            <div className="border border-primary-foreground/20 rounded-[32px] p-8">
              <Wine size={40} className="text-marigold mx-auto mb-4" />
              <h3 className="font-display text-2xl font-bold mb-2">Bartenders</h3>
              <p className="text-primary-foreground/60">Cócteles artesanales, margaritas y micheladas preparadas por expertos.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section className="section-padding bg-secondary" id="cotizar">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-display text-4xl font-bold text-center mb-4">
            📋 Cotiza tu evento
          </h2>
          <p className="text-center text-muted-foreground mb-10 font-accent text-lg">
            "Hola, cuéntanos de tu celebración"
          </p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block font-body font-bold mb-2">Hola, me llamo...</label>
              <input
                type="text"
                required
                value={form.nombre}
                onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                placeholder="Tu nombre"
                className="w-full rounded-full border border-border bg-card px-6 py-4 text-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label className="block font-body font-bold mb-2">Mi teléfono es...</label>
              <input
                type="tel"
                required
                value={form.telefono}
                onChange={(e) => setForm({ ...form, telefono: e.target.value })}
                placeholder="(123) 456-7890"
                className="w-full rounded-full border border-border bg-card px-6 py-4 text-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label className="block font-body font-bold mb-2">Quiero celebrar...</label>
              <input
                type="text"
                required
                value={form.evento}
                onChange={(e) => setForm({ ...form, evento: e.target.value })}
                placeholder="Cumpleaños, boda, evento corporativo..."
                className="w-full rounded-full border border-border bg-card px-6 py-4 text-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label className="block font-body font-bold mb-2">Con aproximadamente...</label>
              <input
                type="number"
                required
                value={form.personas}
                onChange={(e) => setForm({ ...form, personas: e.target.value })}
                placeholder="80 personas"
                className="w-full rounded-full border border-border bg-card px-6 py-4 text-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-primary-foreground rounded-full px-8 py-5 font-body font-bold text-xl hover:scale-[1.02] transition-transform shadow-plum-lg flex items-center justify-center gap-3"
            >
              <Send size={22} /> Enviar por WhatsApp
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ServiciosPage;
