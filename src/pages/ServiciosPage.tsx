import { useState } from "react";
import { motion } from "framer-motion";
import { Music, Wine, Users, Sparkles, Apple, IceCreamCone, CandyCane, UtensilsCrossed, Send } from "lucide-react";
import churrosImg from "@/assets/Galeria/10.jpg";

const spring = { type: "spring" as const, stiffness: 300, damping: 20 };
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };
const popIn = { hidden: { scale: 0.9, opacity: 0 }, show: { scale: 1, opacity: 1, transition: spring } };

const services = [
  { icon: Apple, title: "Fruit Cups", desc: "Fresh fruit cups with chili and lime" },
  { icon: Sparkles, title: "Fruit Station", desc: "Seasonal fresh fruit station" },
  { icon: IceCreamCone, title: "Corn in a Cup", desc: "Freshly prepared Mexican street corn (esquites)" },
  { icon: CandyCane, title: "Mexican Candy Table", desc: "Traditional Mexican sweets table" },
  { icon: UtensilsCrossed, title: "Appetizers", desc: "Snacks and finger foods to start your event" },
  { icon: IceCreamCone, title: "Churros Cups", desc: "Fresh churros with chocolate and caramel" },
  { icon: Music, title: "DJ Service", desc: "Live music to keep your event energized" },
  { icon: Wine, title: "Bartenders", desc: "Professional bartending service" },
  { icon: Users, title: "Wait Staff", desc: "Professional and attentive service team" },
  { icon: Users, title: "Event Staff", desc: "Extra staff for large events" },
];

const ServiciosPage = () => {
  const [form, setForm] = useState({ name: "", phone: "", event: "", guests: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hello, my name is ${form.name}. I would like to host a ${form.event} for approximately ${form.guests} guests. You can reach me at ${form.phone}.`;
    window.open(`https://wa.me/12147135520?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <div className="pt-20">

      {/* HERO */}
          <section className="section-padding bg-chili text-primary-foreground relative overflow-hidden">
  
     {/* IMAGEN MITAD DERECHA */}
      <div className="hidden lg:block absolute top-0 right-0 w-1/2 h-full">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${churrosImg})` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-l from-transparent to-chili"></div>
      </div>

        {/* CONTENIDO */}
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="w-full lg:w-1/2 py-12">
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-4">
              Services & Extras
            </h1>
            <p className="text-xl text-primary-foreground/80 max-w-lg">
              Make your event unforgettable with our add-ons. From churros to DJs, we’ve got everything covered.
            </p>
          </div>
        </div>
    </section>

      {/* SERVICES */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display text-4xl font-bold text-center mb-12">
            Everything for Your Event
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

      {/* DJ + BAR */}
      <section className="section-padding bg-charcoal text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            DJ & Bartending
          </h2>
          <p className="text-xl text-primary-foreground/70 mb-8">
            Elevate your event with music and drinks. Great vibes and unforgettable moments guaranteed.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="border border-primary-foreground/20 rounded-[32px] p-8">
              <Music size={40} className="text-marigold mx-auto mb-4" />
              <h3 className="font-display text-2xl font-bold mb-2">Professional DJ</h3>
              <p className="text-primary-foreground/60">
                Sound system, lighting, and the best music selection for your event.
              </p>
            </div>

            <div className="border border-primary-foreground/20 rounded-[32px] p-8">
              <Wine size={40} className="text-marigold mx-auto mb-4" />
              <h3 className="font-display text-2xl font-bold mb-2">Bartenders</h3>
              <p className="text-primary-foreground/60">
                Handcrafted cocktails, margaritas, and micheladas made by professionals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FORM */}
      <section className="section-padding bg-secondary" id="quote">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-display text-4xl font-bold text-center mb-4">
            Request a Quote
          </h2>
          <p className="text-center text-muted-foreground mb-10 font-accent text-lg">
            "Tell us about your event"
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">

            <div>
              <label className="block font-body font-bold mb-2">My name is...</label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Your name"
                className="w-full rounded-full border border-border bg-card px-6 py-4 text-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div>
              <label className="block font-body font-bold mb-2">My phone number is...</label>
              <input
                type="tel"
                required
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                placeholder="(214) 713-5520"
                className="w-full rounded-full border border-border bg-card px-6 py-4 text-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div>
              <label className="block font-body font-bold mb-2">I want to host...</label>
              <input
                type="text"
                required
                value={form.event}
                onChange={(e) => setForm({ ...form, event: e.target.value })}
                placeholder="Birthday, wedding, corporate event..."
                className="w-full rounded-full border border-border bg-card px-6 py-4 text-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div>
              <label className="block font-body font-bold mb-2">For approximately...</label>
              <input
                type="number"
                required
                value={form.guests}
                onChange={(e) => setForm({ ...form, guests: e.target.value })}
                placeholder="80 guests"
                className="w-full rounded-full border border-border bg-card px-6 py-4 text-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-primary-foreground rounded-full px-8 py-5 font-body font-bold text-xl hover:scale-[1.02] transition-transform shadow-plum-lg flex items-center justify-center gap-3"
            >
              <Send size={22} /> Send via WhatsApp
            </button>

          </form>
        </div>
      </section>

    </div>
  );
};

export default ServiciosPage;
