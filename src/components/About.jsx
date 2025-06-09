import { motion } from 'framer-motion';
import { User, Shield, Settings, Briefcase } from 'lucide-react';

const About = () => {
  const teamMembers = [
    { id: 1, name: 'Mehdi Touhami', role: 'Fondateur & CEO', bio: 'Expert en sécurité électronique avec 10 ans d\'expérience.' },
    { id: 2, name: 'Sara El Mansouri', role: 'Responsable Technique', bio: 'Ingénieure en systèmes de surveillance, spécialiste en compatibilité.' },
    { id: 3, name: 'Karim Benjelloun', role: 'Directeur Commercial', bio: '15 ans d\'expérience dans le secteur de la sécurité.' },
    { id: 4, name: 'Lina Ziri', role: 'Chef de Produit', bio: 'Conception et développement de nouvelles solutions innovantes.' },
  ];

  return (
    <section id="a-propos" className="section-padding">
      <div className="container-custom">
        <div className="about-content about-flex">
          {/* Bloc gauche : texte histoire/mission */}
          <motion.div 
            className="about-text about-side"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Notre Histoire</h2>
            <p className="about-description">
              Fondée en 2020, Plastoblast est née d'une passion pour l'innovation dans le domaine de la sécurité électronique.
            </p>
            <p className="about-description">
              Nous nous engageons à fournir des accessoires CCTV de haute qualité, durables et compatibles avec les principales marques du marché.
            </p>
            <div className="mission-values">
              <h3 className="values-title">Notre Mission</h3>
              <p>
                Révolutionner l'industrie des accessoires de surveillance par l'innovation, la qualité et un service client exceptionnel.
              </p>
            </div>
          </motion.div>

          {/* Bloc droite : équipe en grille cartes */}
          <motion.div 
            className="about-team about-side"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Notre Équipe</h2>
            <div className="team-grid-modern">
              {teamMembers.map((member) => (
                <motion.div 
                  key={member.id}
                  className="team-member-modern"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="member-image-modern">
                    <div className="team-member-icon">
                      {member.id === 1 && <User size={40} />}
                      {member.id === 2 && <Settings size={40} />}
                      {member.id === 3 && <Briefcase size={40} />}
                      {member.id === 4 && <Shield size={40} />}
                    </div>
                  </div>
                  <div className="member-info-modern">
                    <h3 className="member-name-modern">{member.name}</h3>
                    <p className="member-role-modern">{member.role}</p>
                    <p className="member-bio-modern">{member.bio}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
