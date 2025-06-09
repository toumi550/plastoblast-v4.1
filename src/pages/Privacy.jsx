import { useEffect } from 'react';

const Privacy = () => {
  useEffect(() => {
    document.title = "Politique de confidentialité – Plastoblast";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', "Politique de confidentialité du site Plastoblast. Informations sur la gestion des données personnelles, cookies et droits des utilisateurs.");
    } else {
      const meta = document.createElement('meta');
      meta.name = "description";
      meta.content = "Politique de confidentialité du site Plastoblast. Informations sur la gestion des données personnelles, cookies et droits des utilisateurs.";
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <section id="privacy" className="section-padding">
      <h1>Politique de confidentialité</h1>
      <p>Plastoblast s’engage à protéger la vie privée de ses utilisateurs. Aucune donnée personnelle n’est collectée sans consentement. Les cookies utilisés servent uniquement à améliorer l’expérience utilisateur et les statistiques anonymes.</p>
      <h2>Droits des utilisateurs</h2>
      <p>Vous pouvez demander l’accès, la modification ou la suppression de vos données à tout moment en écrivant à contact@plastoblast.com.</p>
      <h2>Contact</h2>
      <p>Pour toute question sur la confidentialité, contactez-nous à contact@plastoblast.com.</p>
    </section>
  );
};

export default Privacy;
