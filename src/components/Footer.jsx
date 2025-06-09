import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Download, ExternalLink, ChevronUp, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const productCategories = [
    { name: 'CBOX-AJ120', to: '/products' },
    { name: 'CBOX-AJ140', to: '/products' },
    { name: 'CBOX-SJ110', to: '/products' },
    { name: 'WS15 Series', to: '/products' },
    { name: 'WS30 Series', to: '/products' },
    { name: 'WS50 Series', to: '/products' },
  ];

  const quickLinks = [
    { name: 'À propos', to: '/about' },
    { name: 'Nos Produits', to: '/products' },
    { name: 'Contact', to: '/contact' },
    { name: 'Demander un Devis', to: '/contact' },
  ];

  const resources = [
    { name: 'Fiches Techniques', href: '#', icon: Download },
    { name: 'Guides d\'Installation', href: '#', icon: Download },
    { name: 'Compatibilité CCTV', href: '#compatibilite', icon: ExternalLink },
    { name: 'Support Technique', href: '#contact', icon: ExternalLink },
  ];

  const certifications = [
    'Norme IP65',
    'Certification CE',
    'ISO 9001',
    'Anti-UV garanti'
  ];

  return (
    <footer>
      {/* Back to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-plastoblast-blue hover:bg-plastoblast-darkblue p-3 rounded-full shadow-lg transition-all duration-300"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.1 }}
      >
        <ChevronUp size={24} />
      </motion.button>

      <div className="container-custom pt-16 pb-8">
        {/* Main Footer Content */}
        <div className="footer-grid-modern bg-white rounded-lg shadow-lg p-8 mb-8">
          {/* Company Info */}
          <div className="footer-col-modern">
            <h3 className="footer-title-modern">Plastoblast</h3>
            <p className="footer-desc-modern">
              Fabricant algérien d'accessoires pour caméras de vidéosurveillance.<br/>
              8+ ans d'expertise au service des professionnels.<br/>
              <span className="footer-slogan-modern">"Notre mission : concevoir des accessoires fiables, durables et innovants pour la sécurité."</span>
            </p>
            <div className="footer-contact-modern">
              <div><span className="footer-contact-label">Tél :</span> +213 (0) 560 00 69 06</div>
              <div><span className="footer-contact-label">Email :</span> contact@plastoblast.dz</div>
              <div><span className="footer-contact-label">Adresse :</span> Algérie</div>
            </div>
          </div>

          {/* Ressources */}
          <div className="footer-col-modern">
            <h4 className="footer-title-modern">Ressources</h4>
            <ul className="footer-links-modern">
              <li><a href="#">Fiches Techniques</a></li>
              <li><a href="#">Guides d'Installation</a></li>
              <li><a href="#compatibilite">Compatibilité CCTV</a></li>
              <li><a href="#contact">Support Technique</a></li>
            </ul>
          </div>
          {/* Newsletter / Contact rapide */}
          <div className="footer-col-modern">
            <h4 className="footer-title-modern">Newsletter</h4>
            <form className="footer-newsletter-modern">
              <input type="email" placeholder="Votre email" className="footer-newsletter-input-modern"/>
              <button type="submit" className="footer-newsletter-btn-modern">S'inscrire</button>
            </form>
            <div className="footer-social-modern">
              <a href="#" aria-label="Facebook"><Facebook size={20}/></a>
              <a href="#" aria-label="Instagram"><Instagram size={20}/></a>
              <a href="#" aria-label="LinkedIn"><Linkedin size={20}/></a>
            </div>
          </div>
        </div>
        <hr className="border-gray-200" />
        {/* Footer Bottom */}
        <div className="footer-bottom-modern bg-gray-100 p-4 text-center">
          <div className="footer-copyright-modern">
            {new Date().getFullYear()} Plastoblast. Tous droits réservés.
          </div>
          <div className="footer-legal-modern">
            <Link to="/legal">Mentions légales</Link> | <Link to="/privacy">Politique de confidentialité</Link>
          </div>
        </div>
      </div>
      <div className="footer-seo-local" style={{textAlign: 'center', fontSize: '0.95em', color: '#ccc', marginTop: '2rem'}}>
        Plastoblast – Fabricant d’accessoires vidéosurveillance à Alger, Oran, Blida, Béjaïa, Annaba, Tizi Ouzou. Vente en gros pour installateurs CCTV en Algérie.
      </div>
    </footer>
  );
};

export default Footer;
