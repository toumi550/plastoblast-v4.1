import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const ProductCard3D = ({ product }) => {
  // Vérification des données du produit
  if (!product) {
    console.error('Product is undefined in ProductCard3D');
    return null;
  }
  
  const [isHovered, setIsHovered] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const { id, name, description, image, altText, category } = product;

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateY = ((x - centerX) / centerX) * 10; // Rotation sur l'axe Y
    const rotateX = ((centerY - y) / centerY) * 10; // Rotation sur l'axe X
    
    setTilt({ x: rotateX, y: rotateY });
  };
  
  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
  };
  
  // Valeurs par défaut pour éviter les erreurs
  const safeImage = image || '/images/placeholder-product.jpg';
  const safeAltText = altText || name || 'Produit sans nom';
  const safeDescription = description || 'Description non disponible';
  const safeCategory = category || 'produit';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="w-full h-full perspective-1000"
    >
      <motion.div 
        className="product-card w-full h-full"
        onMouseEnter={() => setIsHovered(true)}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: isHovered 
            ? `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateZ(20px)`
            : 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)',
          transition: 'transform 0.1s ease-out'
        }}
      >
        {/* Conteneur de l'image */}
        <div className="product-image-container">
          <motion.img
            src={safeImage}
            alt={safeAltText}
            className="product-image absolute top-0 left-0 w-full h-full object-contain p-6"
            animate={{
              scale: isHovered ? 1.1 : 1,
              transition: { duration: 0.3 }
            }}
            onError={(e) => {
              console.error('Erreur de chargement de l\'image:', safeImage);
              e.target.src = '/images/placeholder-product.jpg';
            }}
          />
          
          {/* Badge de catégorie */}
          <motion.div 
            className="category-badge bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md"
            initial={{ y: -10, opacity: 0 }}
            animate={{ 
              y: isHovered ? 0 : -10, 
              opacity: isHovered ? 1 : 0 
            }}
            transition={{ duration: 0.3 }}
          >
            {safeCategory === 'boites' ? 'Boîte' : 'Support'}
          </motion.div>
        </div>
        
        {/* Contenu de la carte */}
        <div className="product-content">
          <h3 className="product-title">
            {name || 'Produit sans nom'}
          </h3>
          <p className="product-description">
            {safeDescription}
          </p>
          
          <div className="product-action">
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                to={`/products/${id || ''}`}
                className="block w-full text-center bg-[#1a5d33] hover:bg-[#2d8f4f] text-white px-6 py-2 rounded-lg font-medium transition-colors"
              >
                Voir le produit
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProductCard3D;
