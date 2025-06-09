import { motion } from 'framer-motion';
import { Shield, Award, Users, Wrench, ChevronDown } from 'lucide-react';
import VideoBackground from './VideoBackground';

const Hero = () => {
  const stats = [
    { icon: Shield, value: "8+", label: "Années d'expertise" },
    { icon: Award, value: "100%", label: "Norme IP65" },
    { icon: Users, value: "500+", label: "Clients professionnels" },
    { icon: Wrench, value: "20+", label: "Références produits" },
  ];

  return (
    <section id="accueil" className="hero-section">
      {/* Vidéo en fond */}
      <VideoBackground />
      <div className="hero-content">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-animate-in"
        >
          {/* Nouveau titre "Plasto Blast" */}
          <h1 className="hero-brand-title"> 
            Plasto Blast
          </h1>
          {/* Titre existant, maintenant en h2 */}
          <h2 className="hero-title"> 
            Accessoires CCTV
            <br />
            <span className="text-gradient">Haute Qualité</span>
          </h2>
          
          <p className="hero-subtitle">
            Chez Plastoblast, notre mission est de concevoir et de produire des accessoires de haute qualité pour les caméras de sécurité, répondant aux besoins spécifiques de nos clients en matière de fiabilité, de durabilité et d'innovation.
          </p>

          <div className="hero-buttons">
            <a href="#produits" className="btn-primary">
              Découvrir nos Produits
            </a>
            <a href="#contact" className="btn-secondary">
              Demander un Devis
            </a>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div 
          className="hero-stats"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="stat-item"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <span className="stat-icon"><stat.icon /></span>
              <div className="stat-number">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          style={{
            position: 'absolute',
            bottom: '2rem',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            color: 'var(--gray-500)'
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
          >
            <span style={{ fontSize: '0.875rem', marginBottom: '0.5rem' }}>Découvrir plus</span>
            <ChevronDown style={{ width: '1.5rem', height: '1.5rem' }} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
