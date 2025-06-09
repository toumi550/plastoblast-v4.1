import { useEffect } from 'react';
import Hero from '../components/Hero';
import FeaturedProducts from '../components/FeaturedProducts.jsx';
import About from '../components/About';
import Compatibility from '../components/Compatibility';

const Home = () => {
  useEffect(() => {
    document.title = "Plastoblast Algérie – Fabricant d’accessoires caméra de surveillance, supports et boîtes de jonction CCTV";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', "Plastoblast conçoit et fabrique en Algérie des accessoires pour caméras de surveillance : supports muraux, boîtes de jonction étanches, accessoires CCTV compatibles Dahua, Hikvision, etc. Vente en gros pour installateurs et professionnels de la vidéosurveillance.");
    } else {
      const meta = document.createElement('meta');
      meta.name = "description";
      meta.content = "Plastoblast conçoit et fabrique en Algérie des accessoires pour caméras de surveillance : supports muraux, boîtes de jonction étanches, accessoires CCTV compatibles Dahua, Hikvision, etc. Vente en gros pour installateurs et professionnels de la vidéosurveillance.";
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Plastoblast",
        "url": "https://plastoblast.com",
        "logo": "https://plastoblast.com/logo-plastoblast.webp",
        "description": "Fabricant algérien d’accessoires pour caméras de vidéosurveillance : supports muraux, boîtes de jonction, accessoires compatibles Dahua, Hikvision, etc.",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Alger",
          "addressCountry": "DZ"
        },
        "contactPoint": [{
          "@type": "ContactPoint",
          "telephone": "+213-555-000000",
          "contactType": "customer service",
          "areaServed": "DZ"
        }],
        "sameAs": [
          "https://www.facebook.com/plastoblast",
          "https://www.linkedin.com/company/plastoblast"
        ]
      }` }} />
      <section id="home">
        <Hero />
        <FeaturedProducts />
        <About />
        <Compatibility />
      </section>
    </>
  );
};

export default Home;
