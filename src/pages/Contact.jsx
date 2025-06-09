import Contact from '../components/Contact';

import { useEffect } from 'react';

const ContactPage = () => {
  useEffect(() => {
    document.title = "Contact Plastoblast – Demande de devis accessoires vidéosurveillance Algérie";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', "Contactez Plastoblast pour vos besoins en accessoires caméra, devis personnalisés, informations techniques ou partenariat installateur. Fournisseur B2B en Algérie.");
    } else {
      const meta = document.createElement('meta');
      meta.name = "description";
      meta.content = "Contactez Plastoblast pour vos besoins en accessoires caméra, devis personnalisés, informations techniques ou partenariat installateur. Fournisseur B2B en Algérie.";
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <section id="contact">
      <Contact />
    </section>
  );
};


export default ContactPage;
