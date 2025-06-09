import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Accueil', to: '/' },
    { name: 'Produits', to: '/products' },
    { name: 'À propos', to: '/about' },
    { name: 'Contact', to: '/contact' },
  ];

  return (
    <header className="header">
      {/* Top Bar avec infos contact */}
      <div className="header-top">
        <div className="container-custom header-top-flex">
          <div className="header-info">
            <div className="header-info-item">
              <Phone size={14} />
              <span>+213 (0) 560 00 69 06</span>
            </div>
            <div className="header-info-item">
              <Mail size={14} />
              <span>contact@plastoblast.dz</span>
            </div>
          </div>
          <div className="header-top-center">
            CCTV Accessoires
          </div>
          <div className="header-info-item header-info-right">
            <MapPin size={14} />
            <span>Fabricant Algérien depuis 2016</span>
          </div>
        </div>
      </div>

      {/* Navigation principale */}
      <div className="header-main">
        {/* MOBILE FLEX: hamburger Ã  gauche, logo Ã  droite */}
        <div className="header-flex-mobile">
          <button
            className="mobile-menu-button"
            aria-label="Ouvrir le menu"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} color="#17613a" /> : <Menu size={28} color="#17613a" />}
          </button>
          <motion.a
            href="#accueil"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="logo-container"
          >
            <img 
              src="/logo-plastoblast.webp" 
              alt="Logo de Plastoblast, fabricant algérien d'accessoires pour caméras de surveillance"
              className="logo-img"
            />
          </motion.a>
        </div>
        {/* DESKTOP FLEX: menu Ã  gauche, logo Ã  droite */}
        <div className="header-flex-extremes">
          <nav className="nav-menu nav-menu-left">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link to={item.to} className={`nav-link${location.pathname === item.to ? ' active' : ''}`}>
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </nav>
          <motion.a
            href="#accueil"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="logo-container logo-right"
          >
            <img 
              src="/logo-plastoblast.webp" 
              alt="Logo de Plastoblast, fabricant algérien d'accessoires pour caméras de surveillance"
              className="logo-img"
            />
          </motion.a>
        </div>
      </div>
      {/* Menu Mobile Overlay, EN DEHORS du flex principal */}
      {isMenuOpen && (
        <div className="mobile-menu">
          {/* Bouton X visible dans le menu overlay, en haut Ã  droite */}
          <button
            className="mobile-menu-close"
            aria-label="Fermer le menu"
            onClick={() => setIsMenuOpen(false)}
            style={{ position: 'absolute', right: 16, top: 16, background: 'none', border: 'none', zIndex: 6000 }}
          >
            <X size={32} color="#17613a" />
          </button>
          <div className="mobile-menu-content">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                className={`mobile-menu-item${location.pathname === item.to ? ' active' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="btn-primary"
              style={{ marginTop: '1rem', textAlign: 'center', display: 'block' }}
              onClick={() => setIsMenuOpen(false)}
            >
              Demander un Devis
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
