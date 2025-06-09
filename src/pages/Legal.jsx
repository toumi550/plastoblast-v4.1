import { useEffect } from 'react';

const Legal = () => {
  useEffect(() => {
    document.title = "Mentions légales – Plastoblast";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', "Mentions légales du site Plastoblast, fabricant d’accessoires pour caméras de vidéosurveillance en Algérie. Informations sur l’éditeur, l’hébergement, la propriété intellectuelle et la confidentialité.");
    } else {
      const meta = document.createElement('meta');
      meta.name = "description";
      meta.content = "Mentions légales du site Plastoblast, fabricant d’accessoires pour caméras de vidéosurveillance en Algérie. Informations sur l’éditeur, l’hébergement, la propriété intellectuelle et la confidentialité.";
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <section id="legal" className="section-padding">
      <h1>Mentions légales</h1>
      <h2>Éditeur du site</h2>
      <p>Plastoblast SARL<br />
      RC : 00B0000000<br />
      Siège : Alger, Algérie<br />
      Email : contact@plastoblast.com</p>
      <h2>Hébergement</h2>
      <p>Hébergeur : OVH – 2 rue Kellermann, 59100 Roubaix, France</p>
      <h2>Propriété intellectuelle</h2>
      <p>Tous les contenus (textes, images, logos) sont la propriété exclusive de Plastoblast ou de leurs auteurs respectifs. Toute reproduction est interdite sans autorisation.</p>
      <h2>Données personnelles</h2>
      <p>Aucune donnée personnelle n’est collectée sans votre consentement. Pour toute demande, contactez-nous à contact@plastoblast.com.</p>
    </section>
  );
};

export default Legal;
