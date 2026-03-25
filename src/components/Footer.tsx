import { Link } from "react-router-dom";
import { Smartphone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-primary-foreground section-padding">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        
        {/* BRAND */}
        <div>
          <h3 className="font-display text-2xl font-bold text-marigold mb-4">
            Las Cazuelas
          </h3>
          <p className="font-accent text-primary-foreground/70 text-lg">
            "Handmade, served with love"
          </p>
          <p className="mt-4 text-primary-foreground/60">
            From our kitchen to your event. Homemade dishes, exceptional service, and the soul of Mexico in every bite.
          </p>
        </div>

        {/* NAVIGATION */}
        <div>
          <h4 className="font-display text-lg font-bold mb-4">Navigation</h4>
          <div className="flex flex-col gap-3">
            <Link to="/" className="text-primary-foreground/70 hover:text-marigold transition-colors">
              Home
            </Link>
            <Link to="/menu" className="text-primary-foreground/70 hover:text-marigold transition-colors">
              Menu
            </Link>
            <Link to="/servicios" className="text-primary-foreground/70 hover:text-marigold transition-colors">
              Services
            </Link>
          </div>
        </div>

        {/* CONTACT */}
        <div>
          <h4 className="font-display text-lg font-bold mb-4">Contact</h4>
          <div className="flex flex-col gap-3">
            <a href="tel:+12147135520" className="flex items-center gap-2 text-primary-foreground/70 hover:text-marigold transition-colors">
              <Smartphone size={18} />(214) 713-5520
            </a>
            <a href="mailto:info@cazuelaslas.com" className="flex items-center gap-2 text-primary-foreground/70 hover:text-marigold transition-colors">
              <Mail size={18} /> info@cazuelaslas.com
            </a>
            <span className="flex items-center gap-2 text-primary-foreground/70">
              <MapPin size={18} /> Dallas–Fort Worth area and surrounding cities
            </span>
          </div>
        </div>

      </div>

      {/* COPYRIGHT */}
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-primary-foreground/10 text-center text-primary-foreground/40">
        <p>© {new Date().getFullYear()} Las Cazuelas. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
