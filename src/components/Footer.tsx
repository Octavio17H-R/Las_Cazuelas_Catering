import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-charcoal text-primary-foreground section-padding">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <h3 className="font-display text-2xl font-bold text-marigold mb-4">
            Cazuelas Las
          </h3>
          <p className="font-accent text-primary-foreground/70 text-lg">
            "Hecho a mano, servido con amor"
          </p>
          <p className="mt-4 text-primary-foreground/60">
            De nuestra cocina a tu evento. Guisos caseros, servicio impecable, y el alma de México en cada plato.
          </p>
        </div>

        <div>
          <h4 className="font-display text-lg font-bold mb-4">Navegación</h4>
          <div className="flex flex-col gap-3">
            <Link to="/" className="text-primary-foreground/70 hover:text-marigold transition-colors">Inicio</Link>
            <Link to="/menu" className="text-primary-foreground/70 hover:text-marigold transition-colors">Menú</Link>
            <Link to="/servicios" className="text-primary-foreground/70 hover:text-marigold transition-colors">Servicios</Link>
          </div>
        </div>

        <div>
          <h4 className="font-display text-lg font-bold mb-4">Contacto</h4>
          <div className="flex flex-col gap-3">
            <a href="tel:+1234567890" className="flex items-center gap-2 text-primary-foreground/70 hover:text-marigold transition-colors">
              <Phone size={18} /> (123) 456-7890
            </a>
            <a href="mailto:info@cazuelaslas.com" className="flex items-center gap-2 text-primary-foreground/70 hover:text-marigold transition-colors">
              <Mail size={18} /> info@cazuelaslas.com
            </a>
            <span className="flex items-center gap-2 text-primary-foreground/70">
              <MapPin size={18} /> Tu ciudad, México
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-primary-foreground/10 text-center text-primary-foreground/40">
        <p>© {new Date().getFullYear()} Cazuelas Las. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
