import About from '../components/About';

import { useEffect } from 'react';

const AboutPage = () => {
  useEffect(() => {
    document.title = "À propos de Plastoblast – Fabricant algérien d’accessoires vidéosurveillance professionnels";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', "Découvrez l’histoire, la mission et l’expertise de Plastoblast, fabricant B2B d’accessoires plastiques pour caméras de sécurité et vidéosurveillance en Algérie. Solutions sur-mesure pour installateurs et distributeurs.");
    } else {
      const meta = document.createElement('meta');
      meta.name = "description";
      meta.content = "Découvrez l’histoire, la mission et l’expertise de Plastoblast, fabricant B2B d’accessoires plastiques pour caméras de sécurité et vidéosurveillance en Algérie. Solutions sur-mesure pour installateurs et distributeurs.";
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <section id="about" className="section-padding">
      <About />
    </section>
  );
};

export default AboutPage;
