import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { to: "/", label: "Inicio" },
  { to: "/menu", label: "Menú" },
  { to: "/servicios", label: "Servicios" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <Link to="/" className="font-display text-2xl font-bold text-primary">
          Cazuelas Las
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`font-body font-medium transition-colors hover:text-primary ${
                location.pathname === link.to ? "text-primary" : "text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://wa.me/1234567890?text=Hola%2C%20quiero%20cotizar%20un%20evento"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-primary-foreground rounded-full px-6 py-2.5 font-body font-bold hover:scale-105 transition-transform"
          >
            Cotizar
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-foreground"
          aria-label="Toggle menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-background border-b border-border overflow-hidden"
          >
            <div className="flex flex-col gap-4 px-6 py-6">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className={`font-body text-lg font-medium ${
                    location.pathname === link.to ? "text-primary" : "text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="https://wa.me/1234567890?text=Hola%2C%20quiero%20cotizar%20un%20evento"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-primary-foreground rounded-full px-6 py-3 font-body font-bold text-center"
              >
                Cotizar
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
