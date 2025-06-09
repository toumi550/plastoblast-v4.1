import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download, Eye, ShoppingCart, Filter, Search, ArrowLeft } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

export const products = [
  // Boîtes de jonction
  {
    id: 1,
    name: 'CBOX-AJ120',
    category: 'boites',
    image: '/images/products/plastoblast-030.webp',
    altText: 'Boîte de jonction CBOX-AJ120, hautement résistante et étanche pour caméras dôme ou bullet CCTV, compatible Dahua et Hikvision.',
    description: 'Boîte de jonction CBOX-AJ120 hautement résistante et étanche pour caméras dôme ou bullet. Idéale pour installations Dahua et Hikvision.',
    features: [
      'Compatibilité quasi universelle',
      'Supporte jusqu\\\'à 150 kg',
      'Matériaux premium PP anti-UV',
      'Joint d\\\'étanchéité intégré'
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
    image: '/images/products/plastoblast-030.webp', // Remplacement temporaire - image spécifique manquante
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
    image: '/images/products/SJ110-2.webp',
    altText: 'Boîte de jonction compacte CBOX-SJ110 pour caméras de surveillance CCTV, compatible Dahua et Hikvision.',
    description: 'Boîte de jonction compacte CBOX-SJ110 pour caméras de surveillance. Adaptée pour Dahua et Hikvision.',
    features: [
      'Design compact',
      'Installation simple',
      'Matériaux résistants',
      'Étanchéité garantie'
    ],
    specs: {
      dimensions: '110 × 110 × 50 mm',
      poids: '150 g',
      charge: '100 kg',
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
      'Finition anti-corrosion'
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
      'Installation polyvalente'
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
      'Installation facile'
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
      'Design compact'
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
      'Installation murale'
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
      'Stabilité optimale'
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
      'Stabilité renforcée'
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
      'Installation professionnelle'
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
      'Installation professionnelle'
    ],
    specs: {
      longueur: '800 mm',
      charge: '45 kg',
      matériau: 'Alliage haute résistance',
      couleur: 'Blanc'
    }
  }
];

const Products = ({ defaultCategory }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleViewDetails = (productId) => {
    navigate(`/products/${productId}`);
  };

  const categoryFromUrl = location.pathname.includes('supports-muraux') 
    ? 'supports' 
    : location.pathname.includes('boites-de-jonction') 
      ? 'boites' 
      : null;

  const [selectedCategory, setSelectedCategory] = useState(categoryFromUrl || defaultCategory || 'all');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    if (categoryFromUrl) {
      setSelectedCategory(categoryFromUrl);
    }
  }, [categoryFromUrl]);

  const formatText = (text) => {
    if (!text) return '';
    return text
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase();
  };

  const categories = [
    { id: 'all', name: 'Toutes les catégories', count: products.length },
    { 
      id: 'boites', 
      name: 'Boîtes de Jonction', 
      count: products.filter(p => p.category === 'boites').length 
    },
    { 
      id: 'supports', 
      name: 'Supports Muraux', 
      count: products.filter(p => p.category === 'supports').length 
    },
  ];

  const handleCategoryClick = (categoryId) => {
    if (categoryId === 'all') {
      navigate('/products');
    } else if (categoryId === 'supports') {
      navigate('/products/supports-muraux');
    } else if (categoryId === 'boites') {
      navigate('/products/boites-de-jonction');
    }
  };

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  console.log('filteredProducts', filteredProducts, 'products', products);

  return (
    <section 
      id="produits" 
      className="section-padding"
      style={{
        paddingTop: '140px', /* Augmentation de l'espace pour le header fixe */
        paddingBottom: '40px',
        marginTop: '0' /* Réinitialisation de toute marge */
      }}
    >
      <div className="container-custom">
        {/* Bouton de retour - visible uniquement sur les pages de catégorie */}
        {defaultCategory && (
          <motion.div 
            className="back-button-container"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'flex-start',
              padding: '0.5rem 1rem 0',
              marginTop: 'calc(env(safe-area-inset-top, 0px) + 70px)', // Ajustement pour header fixe
              marginBottom: '1rem',
              position: 'relative',
              zIndex: 10
            }}
          >
            <motion.button
              onClick={() => navigate('/products')}
              className="back-button"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              aria-label="Retour à la liste des produits"
            >
              <ArrowLeft size={18} aria-hidden="true" />
              <span>Retour aux produits</span>
            </motion.button>
          </motion.div>
        )}
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="section-title">
            {defaultCategory === 'supports' && 'Nos Supports Muraux'}
            {defaultCategory === 'boites' && 'Nos Boîtes de Jonction'}
            {!defaultCategory && 'Nos Produits'}
          </h2>
          <p className="section-subtitle">
            Solutions professionnelles pour la sécurité et la surveillance
          </p>
        </motion.div>

        {/* Barre de recherche et filtres */}
        {!defaultCategory && (
          <div className="product-filters">
          <div className="search-bar">
            <Search size={20} />
            <input
              type="text"
              placeholder="Rechercher un produit..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="category-filters">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryClick(category.id)}
                className={`filter-button ${selectedCategory === category.id ? 'active' : ''}`}
              >
                {category.name}
                <span className="filter-count">{category.count}</span>
              </button>
            ))}
          </div>
        </div>
        )}

        {/* Grille de produits */}
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
                  alt={product.altText || `Image de ${product.name} - ${categories.find(c => c.id === product.category)?.name || product.category} compatible Dahua et Hikvision`}
                  className="product-image-modern"
                  loading="lazy"
                />
                <div className="product-overlay">
                  <button className="btn-icon" aria-label={`Voir les détails de ${product.name}`}>
                    <Eye size={20} />
                  </button>
                  <button className="btn-icon" aria-label={`Télécharger la fiche de ${product.name}`}>
                    <Download size={20} />
                  </button>
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
                    "url": `https://plastoblast.com/products#${product.name.replace(/\s/g, '-')}`
                  }
                }) }}
              />
            </React.Fragment>
          ))}
        </div>

        {/* Message si aucun produit */}
        {filteredProducts.length === 0 && (
          <div className="no-products">
            <p>Aucun produit ne correspond à votre recherche.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Products;
