import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Search, Eye, Download, ArrowLeft, ShoppingCart, Box, PanelTop } from 'lucide-react';
import { useNavigate, useParams, Link } from 'react-router-dom';

export const products = [
  // Boîtes de jonction
  {
    id: 1,
    name: 'CBOX-AJ120',
    category: 'boites',
    image: '/images/products/boite-jonction-aj120-camera-cctv-dahua-hikvision.webp',
    altText: 'Boîte de jonction CBOX-AJ120, hautement résistante et étanche pour caméras dôme ou bullet CCTV, compatible Dahua et Hikvision.',
    description: 'Boîte de jonction CBOX-AJ120 hautement résistante et étanche pour caméras dôme ou bullet. Idéale pour installations Dahua et Hikvision.',
    features: [
      'Compatibilité quasi universelle',
      'Supporte jusqu\'à 150 kg',
      'Matériaux premium PP anti-UV',
      'Joint d\'étanchéité intégré'
    ],
    specs: {
      dimensions: '40 × 125 × 45 mm',
      poids: '101 g',
      rayon: '25-90 mm',
      couleur: 'Blanc'
    }
  },
  {
    id: 2,
    name: 'CBOX-AJ140',
    category: 'boites',
    image: '/images/products/boite-jonction-aj140-camera-cctv-dahua-hikvision.webp',
    altText: 'Boîte de jonction premium CBOX-AJ140 pour installations extérieures exigeantes de caméras CCTV, compatible Dahua et Hikvision.',
    description: 'Boîte de jonction premium CBOX-AJ140 pour installations extérieures exigeantes. Parfaite pour caméras Dahua et Hikvision.',
    features: [
      'Résistance maximale',
      'Design ergonomique',
      'Installation rapide',
      'Protection IP65'
    ],
    specs: {
      dimensions: '50 × 140 × 50 mm',
      poids: '120 g',
      rayon: '30-120 mm',
      couleur: 'Blanc'
    }
  },
  {
    id: 3,
    name: 'CBOX-SJ110',
    category: 'boites',
    image: '/images/products/boite-jonction-sj110-camera-cctv-dome-bullet-dahua-hikvision.webp',
    altText: 'Boîte de jonction compacte et étanche CBOX-SJ110 pour caméras dome/bullet, compatible Dahua et Hikvision.',
    description: 'Boîte de jonction compacte et étanche CBOX-SJ110 pour caméras dome/bullet, plastique traité utilisable en extérieur/intérieur. Adaptée pour Dahua et Hikvision.',
    features: [
      'Design compact',
      'Installation simple',
      'Étanchéité garantie',
      'Plage de diamètres 28~90 mm',
      '200 Pièces/carton'
    ],
    specs: {
      dimensions: '50 (H) x 113 (L) x 45 (Pr) mm',
      poids: '150 g',
      charge: '100 kg',
      couleur: 'Blanc'
    }
  },
  {
    id: 13,
    name: 'CBOX-AJ140mm',
    category: 'boites',
    image: '/images/products/boite-jonction-aj140mm-grande-camera-cctv-dahua-hikvision.webp',
    altText: 'Grande boîte de jonction CBOX-AJ140mm pour installations complexes de caméras CCTV.',
    description: 'Grande boîte de jonction CBOX-AJ140mm, conçue pour offrir un espace maximal et une protection robuste pour les installations de vidéosurveillance complexes.',
    features: [
      'Grand volume intérieur',
      'Construction robuste',
      'Multiples points d\'entrée',
      'Protection IP66'
    ],
    specs: {
      dimensions: '140 x 140 x 60 mm',
      poids: '250 g',
      matériau: 'ABS renforcé',
      couleur: 'Blanc'
    }
  },
  // Supports muraux
  {
    id: 4,
    name: 'WS15-D',
    category: 'supports',
    image: '/images/products/support-mural-droit-ws15d-15cm-camera-cctv-dahua-hikvision.webp',
    altText: 'Support mural droit WS15-D de 15cm en alliage pour caméras de surveillance CCTV, compatible Dahua et Hikvision.',
    description: 'Support mural droit WS15-D de 15cm pour caméras de surveillance. Idéal pour Dahua et Hikvision.',
    features: [
      'Longueur 15cm',
      'Installation murale',
      'Alliage résistant',
      'Finition anti-corrosion',
      'Tube 2 mm d\'épaisseur',
      '50 Pièces/carton'
    ],
    specs: {
      longueur: '150 mm',
      charge: '20 kg',
      matériau: 'Alliage',
      couleur: 'Blanc'
    }
  },
  {
    id: 5,
    name: 'WS30-L',
    category: 'supports',
    image: '/images/products/support-mural-l-ws30l-30cm-camera-cctv-dahua-hikvision.webp',
    altText: 'Support mural en L WS30-L de 30cm pour installation flexible de caméras CCTV, compatible Dahua et Hikvision.',
    description: 'Support mural en L WS30-L de 30cm pour installation flexible. Convient aux caméras Dahua et Hikvision.',
    features: [
      'Forme en L',
      'Longueur 30cm',
      'Grande stabilité',
      'Installation polyvalente',
      'Tube 2 mm d\'épaisseur',
      '36 Pièces/carton'
    ],
    specs: {
      longueur: '300 mm',
      charge: '30 kg',
      matériau: 'Alliage',
      couleur: 'Blanc'
    }
  },
  {
    id: 6,
    name: 'WS30-T',
    category: 'supports',
    image: '/images/products/support-mural-telescopique-ws30t-30cm-camera-cctv-dahua-hikvision.webp',
    altText: 'Support mural télescopique WS30-T de 30cm pour réglage précis de caméras CCTV, compatible Dahua et Hikvision.',
    description: 'Support mural télescopique WS30-T de 30cm pour réglage précis. Adapté pour Dahua et Hikvision.',
    features: [
      'Longueur réglable',
      'Fixation solide',
      'Ajustement précis',
      'Installation facile',
      'Tube 2 mm d\'épaisseur',
      '36 Pièces/carton'
    ],
    specs: {
      longueur: '300 mm',
      charge: '25 kg',
      matériau: 'Alliage',
      couleur: 'Blanc'
    }
  },
  {
    id: 7,
    name: 'WS30-T90°',
    category: 'supports',
    image: '/images/products/support-mural-angle-droit-ws30t90-30cm-camera-cctv-dahua-hikvision.webp',
    altText: 'Support mural à angle droit WS30-T90° de 30cm pour installation en coin de caméras CCTV, compatible Dahua et Hikvision.',
    description: 'Support mural à angle droit WS30-T90° de 30cm pour installation en coin. Idéal pour caméras Dahua et Hikvision.',
    features: [
      'Angle 90°',
      'Montage en coin',
      'Stabilité optimale',
      'Design compact',
      'Tube 2 mm d\'épaisseur',
      '30 Pièces/carton'
    ],
    specs: {
      longueur: '300 mm',
      charge: '20 kg',
      matériau: 'Alliage',
      couleur: 'Blanc'
    }
  },
  {
    id: 8,
    name: 'WS50-D',
    category: 'supports',
    image: '/images/products/support-mural-droit-ws50d-50cm-camera-cctv-dahua-hikvision.webp',
    altText: 'Support mural droit WS50-D de 50cm en alliage renforcé pour installations longues portées de caméras CCTV, compatible Dahua et Hikvision.',
    description: 'Support mural droit WS50-D de 50cm pour installations longues portées. Parfait pour Dahua et Hikvision.',
    features: [
      'Longueur 50cm',
      'Renforts internes',
      'Résistance accrue',
      'Installation murale',
      'Tube 2 mm d\'épaisseur',
      '25 Pièces/carton'
    ],
    specs: {
      longueur: '500 mm',
      charge: '40 kg',
      matériau: 'Alliage renforcé',
      couleur: 'Blanc'
    }
  },
  {
    id: 9,
    name: 'WS50-T',
    category: 'supports',
    image: '/images/products/support-mural-telescopique-ws50t-50cm-installations-pro-camera-cctv-dahua-hikvision.webp',
    altText: 'Support mural télescopique WS50-T de 50cm en alliage renforcé pour installations professionnelles de caméras CCTV, compatible Dahua et Hikvision.',
    description: 'Support mural télescopique WS50-T de 50cm pour installations professionnelles. Convient aux caméras Dahua et Hikvision.',
    features: [
      'Longueur 50cm',
      'Réglage micrométrique',
      'Fixation renforcée',
      'Stabilité optimale',
      'Tube 2 mm d\'épaisseur',
      '20 Pièces/carton'
    ],
    specs: {
      longueur: '500 mm',
      charge: '35 kg',
      matériau: 'Alliage renforcé',
      couleur: 'Blanc'
    }
  },
  {
    id: 10,
    name: 'WS50-T90°',
    category: 'supports',
    image: '/images/products/support-mural-angle-droit-ws50t90deg-50cm-installations-pro-camera-cctv-dahua-hikvision.webp',
    altText: 'Support mural à angle droit WS50-T90° de 50cm en alliage renforcé pour installations professionnelles en coin de caméras CCTV, compatible Dahua et Hikvision.',
    description: 'Support mural à angle droit WS50-T90° de 50cm pour installations professionnelles en coin. Idéal pour caméras Dahua et Hikvision.',
    features: [
      'Angle 90°',
      'Longueur 50cm',
      'Montage en coin',
      'Stabilité renforcée',
      'Tube 2 mm d\'épaisseur',
      '20 Pièces/carton'
    ],
    specs: {
      longueur: '500 mm',
      charge: '30 kg',
      matériau: 'Alliage renforcé',
      couleur: 'Blanc'
    }
  },
  {
    id: 11,
    name: 'WS80-D',
    category: 'supports',
    image: '/images/products/support-mural-droit-ws80d-80cm-extra-long-camera-cctv-dahua-hikvision.webp',
    altText: 'Support mural droit extra-long WS80-D de 80cm en alliage haute résistance pour installations spéciales de caméras CCTV, compatible Dahua et Hikvision.',
    description: 'Support mural droit extra-long WS80-D de 80cm pour installations spéciales. Parfait pour Dahua et Hikvision.',
    features: [
      'Longueur 80cm',
      'Structure renforcée',
      'Résistance maximale',
      'Installation professionnelle',
      'Tube 2 mm d\'épaisseur',
      '10 Pièces/carton'
    ],
    specs: {
      longueur: '800 mm',
      charge: '50 kg',
      matériau: 'Alliage haute résistance',
      couleur: 'Blanc'
    }
  },
  {
    id: 12,
    name: 'WS80-L',
    category: 'supports',
    image: '/images/products/support-mural-l-ws80l-80cm-extra-long-camera-cctv-dahua-hikvision.webp',
    altText: 'Support mural en L extra-long WS80-L de 80cm en alliage haute résistance pour installations spéciales de caméras CCTV, compatible Dahua et Hikvision.',
    description: 'Support mural en L extra-long WS80-L de 80cm pour installations spéciales. Idéal pour caméras Dahua et Hikvision.',
    features: [
      'Forme en L',
      'Longueur 80cm',
      'Stabilité extrême',
      'Installation professionnelle',
      'Tube 2 mm d\'épaisseur',
      '8 Pièces/carton'
    ],
    specs: {
      longueur: '800 mm',
      charge: '45 kg',
      matériau: 'Alliage haute résistance',
      couleur: 'Blanc'
    }
  },
  {
    id: 14,
    name: 'WS15-E',
    category: 'supports',
    image: '/images/products/support-mural-angle-externe-ws15e-15cm-camera-cctv-dahua-hikvision.webp',
    altText: 'Support mural d\'angle externe WS15-E pour une fixation robuste des caméras.',
    description: 'Le support WS15-E est conçu pour une installation en angle externe, offrant une solution de montage solide et fiable pour vos caméras de surveillance.',
    features: [
      'Montage en angle externe',
      'Tube 2 mm d\'épaisseur',
      'Construction en alliage',
      '50 Pièces/carton'
    ],
    specs: {
      longueur: '150 mm',
      charge: '15 kg',
      matériau: 'Alliage',
      couleur: 'Blanc'
    }
  },
  {
    id: 15,
    name: 'WS15-L',
    category: 'supports',
    image: '/images/products/support-mural-l-ws15l-15cm-camera-cctv-dahua-hikvision.webp',
    altText: 'Support mural compact en L WS15-L de 15cm.',
    description: 'Support mural compact en L WS15-L, parfait pour les installations discrètes et rapprochées nécessitant un déport du mur.',
    features: [
      'Forme en L compacte',
      'Longueur 15cm',
      'Tube 2 mm d\'épaisseur',
      '50 Pièces/carton'
    ],
    specs: {
      longueur: '150 mm',
      charge: '18 kg',
      matériau: 'Alliage',
      couleur: 'Blanc'
    }
  },
  {
    id: 16,
    name: 'WS30-D',
    category: 'supports',
    image: '/images/products/support-mural-droit-ws30d-30cm-camera-cctv-dahua-hikvision.webp',
    altText: 'Support mural droit WS30-D de 30cm pour caméras de surveillance.',
    description: 'Support mural droit standard WS30-D de 30cm, une solution fiable et robuste pour le montage de la plupart des caméras de vidéosurveillance.',
    features: [
      'Longueur 30cm',
      'Installation murale simple',
      'Tube 2 mm d\'épaisseur',
      '40 Pièces/carton'
    ],
    specs: {
      longueur: '300 mm',
      charge: '22 kg',
      matériau: 'Alliage',
      couleur: 'Blanc'
    }
  },
  {
    id: 17,
    name: 'WS30-E',
    category: 'supports',
    image: '/images/products/support-mural-angle-externe-ws30e-30cm-camera-cctv-dahua-hikvision.webp',
    altText: 'Support mural d\'angle externe WS30-E de 30cm.',
    description: 'Support mural WS30-E pour montage en angle externe, offrant une portée de 30cm pour un positionnement optimal de la caméra.',
    features: [
      'Montage en angle externe',
      'Longueur 30cm',
      'Tube 2 mm d\'épaisseur',
      '30 Pièces/carton'
    ],
    specs: {
      longueur: '300 mm',
      charge: '25 kg',
      matériau: 'Alliage',
      couleur: 'Blanc'
    }
  },
  {
    id: 18,
    name: 'WS30-F',
    category: 'supports',
    image: '/images/products/support-mural-poteau-ws30f-camera-cctv-dahua-hikvision.webp',
    altText: 'Support de fixation sur poteau WS30-F.',
    description: 'Le support WS30-F permet de fixer solidement vos équipements de surveillance sur des poteaux de différents diamètres.',
    features: [
      'Fixation sur poteau',
      'Sangles ajustables',
      'Tube 2 mm d\'épaisseur',
      '30 Pièces/carton'
    ],
    specs: {
      longueur: 'N/A',
      charge: '20 kg',
      matériau: 'Acier et alliage',
      couleur: 'Blanc'
    }
  },
  {
    id: 19,
    name: 'WS30-D+T',
    category: 'supports',
    image: '/images/products/support-mural-droit-telescopique-ws30d-plus-t-30cm-camera-cctv-dahua-hikvision.webp',
    altText: 'Kit de support mural droit et télescopique WS30-D+T.',
    description: 'Ensemble combiné WS30-D+T offrant la polyvalence d\'un support droit et d\'une extension télescopique pour une portée et un ajustement maximum.',
    features: [
      'Combinaison Droit + Télescopique',
      'Portée étendue',
      'Tube 2 mm d\'épaisseur',
      '20 Pièces/carton'
    ],
    specs: {
      longueur: '30-60 cm',
      charge: '20 kg',
      matériau: 'Alliage',
      couleur: 'Blanc'
    }
  },
  {
    id: 20,
    name: 'WS50-D+T',
    category: 'supports',
    image: '/images/products/support-mural-droit-telescopique-ws50d-plus-t-50cm-camera-cctv-dahua-hikvision.webp',
    altText: 'Kit de support mural droit et télescopique longue portée WS50-D+T.',
    description: 'Ensemble combiné WS50-D+T pour les installations exigeantes, alliant un support droit de 50cm à une extension télescopique pour une portée maximale.',
    features: [
      'Combinaison Droit + Télescopique',
      'Très longue portée',
      'Tube 2 mm d\'épaisseur',
      '15 Pièces/carton'
    ],
    specs: {
      longueur: '50-100 cm',
      charge: '25 kg',
      matériau: 'Alliage renforcé',
      couleur: 'Blanc'
    }
  },
  {
    id: 21,
    name: 'WS50-E',
    category: 'supports',
    image: '/images/products/support-mural-angle-externe-ws50e-50cm-camera-cctv-dahua-hikvision.webp',
    altText: 'Support mural d\'angle externe longue portée WS50-E de 50cm.',
    description: 'Support mural pour angle externe WS50-E avec une portée de 50cm, idéal pour une surveillance étendue des coins de bâtiments.',
    features: [
      'Montage en angle externe',
      'Longueur 50cm',
      'Tube 2 mm d\'épaisseur',
      '20 Pièces/carton'
    ],
    specs: {
      longueur: '500 mm',
      charge: '30 kg',
      matériau: 'Alliage',
      couleur: 'Blanc'
    }
  },
  {
    id: 22,
    name: 'WS50-F',
    category: 'supports',
    image: '/images/products/support-mural-poteau-ws50f-camera-cctv-dahua-hikvision.webp',
    altText: 'Support de fixation sur poteau renforcé WS50-F.',
    description: 'Support de fixation sur poteau renforcé WS50-F, conçu pour les équipements plus lourds et les conditions exigeantes.',
    features: [
      'Fixation sur poteau renforcée',
      'Sangles haute résistance',
      'Tube 2 mm d\'épaisseur',
      '20 Pièces/carton'
    ],
    specs: {
      longueur: 'N/A',
      charge: '30 kg',
      matériau: 'Acier et alliage',
      couleur: 'Blanc'
    }
  },
  {
    id: 23,
    name: 'WS50-L',
    category: 'supports',
    image: '/images/products/support-mural-l-ws50l-50cm-camera-cctv-dahua-hikvision.webp',
    altText: 'Support mural en L WS50-L de 50cm.',
    description: 'Support mural en L WS50-L de 50cm, offrant un déport important pour une vision sans obstruction, même avec des obstacles muraux.',
    features: [
      'Forme en L',
      'Longueur 50cm',
      'Tube 2 mm d\'épaisseur',
      '20 Pièces/carton'
    ],
    specs: {
      longueur: '500 mm',
      charge: '35 kg',
      matériau: 'Alliage',
      couleur: 'Blanc'
    }
  }
];

export const displayableCategories = [
  {
    id: 'boites',
    name: 'Boîtes de Jonction',
    description: 'Découvrez notre gamme de boîtes de jonction étanches pour vos installations extérieures.',
    image: '/images/boite-jonction-etanche-camera-dahua-hikvision-3.webp',
    count: products.filter(p => p.category === 'boites').length,
    IconComponent: Box
  },
  {
    id: 'supports',
    name: 'Supports Muraux',
    description: 'Supports robustes et réglables pour une installation optimale de vos caméras.',
    image: '/images/support-mural-22.webp',
    count: products.filter(p => p.category === 'supports').length,
    IconComponent: PanelTop
  }
];

const Products = () => {
  const navigate = useNavigate();
  const { categoryId } = useParams(); // categoryId peut être 'boites', 'supports', ou undefined
  const [searchTerm, setSearchTerm] = useState('');

  const handleViewDetails = (productId) => {
    // Assure que categoryId est inclus dans le lien pour la page détail
    navigate(`/products/${categoryId}/${productId}`);
  };

  // Détermine la catégorie actuellement sélectionnée à partir de l'URL
  const currentCategoryDetails = categoryId 
    ? displayableCategories.find(cat => cat.id === categoryId)
    : null;

  // Filtre les produits si une catégorie est sélectionnée
  const productsToList = categoryId
    ? products.filter(product => product.category === categoryId)
    : []; // Si aucune catégorie n'est sélectionnée, on n'affiche pas de liste de produits ici

  // Filtre les produits en fonction du terme de recherche (uniquement si une catégorie est sélectionnée)
  const filteredProducts = categoryId
    ? productsToList.filter(product => 
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  // Si categoryId est défini mais n'est pas une catégorie valide, on pourrait rediriger ou afficher un message
  // Pour l'instant, on assume que les categoryId dans l'URL seront valides (boites, supports)
  // Ou si currentCategoryDetails est null après une tentative de find, cela signifie une catégorie invalide.

  if (categoryId && !currentCategoryDetails) {
    // Optionnel : Gérer le cas d'un categoryId invalide dans l'URL
    // Par exemple, rediriger vers /products ou afficher un message "Catégorie non trouvée"
    // Pour l'instant, cela affichera un titre vide et aucun produit.
    console.warn(`Catégorie avec id '${categoryId}' non trouvée.`);
  }

  // Vue pour afficher les catégories
  if (!categoryId) {
    return (
      <section id="product-categories" className="section-padding" style={{ paddingTop: '140px', paddingBottom: '40px', marginTop: '0' }}>
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="section-title">Nos Catégories de Produits</h2>
            <p className="section-subtitle">Parcourez nos solutions professionnelles.</p>
          </motion.div>
          <div className="categories-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {displayableCategories.map(category => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                whileHover={{ y: -8, scale: 1.03, boxShadow: '0 12px 24px rgba(0,0,0,0.15)' }}
                viewport={{ once: true }}
                className="category-card"
                style={{ border: '1px solid #eee', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', cursor: 'pointer' }}
              >
                <Link to={`/products/${category.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <div style={{ height: '250px', padding: '1rem', backgroundColor: '#f8f9fa', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <motion.img 
                      src={category.image} 
                      alt={`Image pour ${category.name}`} 
                      style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }} 
                      onError={(e) => { e.target.onerror = null; e.target.src='/images/placeholder-fallback.jpg'; }} // Fallback image
                      transition={{ duration: 0.3 }}
                      whileHover={{ scale: 1.05 }}
                    />
                  </div>
                  <div style={{ padding: '1rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.75rem' }}>
                      {category.IconComponent && <category.IconComponent size={28} style={{ marginRight: '0.75rem', color: '#1a5d33', flexShrink: 0 }} />}
                      <h3 style={{ margin: '0', fontSize: '1.3rem', fontWeight: '600', color: '#333' }}>{category.name}</h3>
                    </div>
                    <p style={{ fontSize: '0.9rem', color: '#555', marginBottom: '0.75rem', lineHeight: '1.5' }}>{category.description}</p>
                    <p style={{ fontSize: '0.85rem', color: '#777', fontWeight: '500' }}>{category.count} produits disponibles</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Vue pour afficher les produits d'une catégorie sélectionnée
  return (
    <section 
      id="produits-categorie" 
      className="section-padding"
      style={{ paddingTop: '140px', paddingBottom: '40px', marginTop: '0' }}
    >
      <div className="container-custom">
        <motion.div 
          className="back-button-container mb-4"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'flex-start',
            // marginTop: 'calc(env(safe-area-inset-top, 0px) + 70px)', // Peut-être pas nécessaire si paddingTop est suffisant
          }}
        >
          <motion.button
            onClick={() => navigate('/products')}
            className="back-button"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            aria-label="Retour aux catégories"
          >
            <ArrowLeft size={18} aria-hidden="true" />
            <span>Retour aux catégories</span>
          </motion.button>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="section-title">
            {currentCategoryDetails ? currentCategoryDetails.name : 'Produits'}
          </h2>
          <p className="section-subtitle">
            {currentCategoryDetails ? currentCategoryDetails.description : 'Solutions professionnelles pour la sécurité et la surveillance'}
          </p>
        </motion.div>

        <div className="product-filters" style={{ marginBottom: '2rem' }}>
          <div className="search-bar">
            <Search size={20} />
            <input
              type="text"
              placeholder={`Rechercher dans ${currentCategoryDetails ? currentCategoryDetails.name : 'les produits'}...`}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="products-grid">
          {filteredProducts.map((product, index) => (
            <React.Fragment key={product.id}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="product-card"
            >
              <div className="product-image">
                <img
                  src={product.image}
                  alt={product.altText || `Image de ${product.name}`}
                  className="product-image-modern"
                  loading="lazy"
                  onError={(e) => { e.target.onerror = null; e.target.src='/images/placeholder-fallback.jpg'; }} // Fallback image
                />
                <div className="product-overlay">
                  <button className="btn-icon" onClick={() => handleViewDetails(product.id)} aria-label={`Voir les détails de ${product.name}`}>
                    <Eye size={20} />
                  </button>
                  {/* Optionnel: bouton de téléchargement si vous avez des fiches produits individuelles */}
                  {/* <button className="btn-icon" aria-label={`Télécharger la fiche de ${product.name}`}><Download size={20} /></button> */}
                </div>
              </div>
              <div className="product-content">
                <h3 className="product-title">{product.name}</h3>
                <p className="product-description">{product.description}</p>
                <div className="product-features">
                  {product.features.slice(0, 2).map((feature, idx) => (
                    <span key={idx} className="feature-tag">
                      {feature}
                    </span>
                  ))}
                </div>
                <div className="product-specs">
                  <div className="spec-item">
                    <span className="spec-label">Dimensions:</span>
                    <span className="spec-value">{product.specs.dimensions || product.specs.longueur}</span>
                  </div>
                  <div className="spec-item">
                    <span className="spec-label">Charge max:</span>
                    <span className="spec-value">{product.specs.charge || product.specs.poids}</span>
                  </div>
                </div>
                <div className="product-actions">
                  <button 
                    className="btn-secondary"
                    onClick={() => handleViewDetails(product.id)}
                    aria-label={`Voir les détails de ${product.name}`}
                  >
                    <Eye size={18} />
                    Détails
                  </button>
                  <button 
                    className="btn-primary"
                    onClick={() => {/* Gérer la demande de devis */}}
                    aria-label={`Demander un devis pour ${product.name}`}
                  >
                    <ShoppingCart size={18} />
                    Devis
                  </button>
                </div>
              </div>
            </motion.div>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify({
                  "@context": "https://schema.org/",
                  "@type": "Product",
                  "name": product.name,
                  "image": `https://plastoblast.com${product.image}`,
                  "description": product.description,
                  "brand": {
                    "@type": "Brand",
                    "name": "Plastoblast"
                  },
                  "offers": {
                    "@type": "Offer",
                    "availability": "https://schema.org/InStock",
                    "priceCurrency": "DZD",
                    // Mettre à jour l'URL pour inclure categoryId si possible, ou une URL produit unique
                    "url": `https://plastoblast.com/products/${categoryId}/${product.id}` 
                  }
                }) }}
              />
            </React.Fragment>
          ))}
        </div>

        {categoryId && filteredProducts.length === 0 && (
          <div className="no-products" style={{ textAlign: 'center', marginTop: '2rem' }}>
            <p>Aucun produit ne correspond à votre recherche dans cette catégorie.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Products;
