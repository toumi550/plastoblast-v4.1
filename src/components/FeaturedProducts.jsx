import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { products } from './Products';
import ProductCard3D from './ProductCard3D';

const FeaturedProducts = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      console.log('Chargement des produits...');
      const featuredProductIds = [1, 2, 4, 5, 3, 7];
      console.log('IDs des produits à charger:', featuredProductIds);
      
      const validProducts = featuredProductIds
        .map(id => {
          const product = products.find(p => p && p.id === id);
          console.log(`Produit ID ${id}:`, product);
          return product;
        })
        .filter(Boolean);
      
      console.log('Produits valides trouvés:', validProducts);
      setFeaturedProducts(validProducts);
      setLoading(false);
    } catch (err) {
      console.error('Erreur lors du chargement des produits:', err);
      setError('Erreur lors du chargement des produits');
      setLoading(false);
    }
  }, []);

  if (loading) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="container-custom text-center">
          <div className="animate-pulse">Chargement des produits...</div>
        </div>
      </section>
    );
  }


  if (error) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="container-custom text-center text-red-600">
          {error}
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <motion.h2
            className="text-3xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Nos Produits Phare
          </motion.h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez notre sélection de produits les plus populaires et innovants
          </p>
        </div>
        
        {featuredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard3D 
                key={product.id} 
                product={product} 
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p>Aucun produit à afficher pour le moment.</p>
          </div>
        )}
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Link
            to="/products"
            className="inline-flex items-center justify-center bg-[#1a5d33] hover:bg-[#2d8f4f] text-white font-medium py-3 px-6 rounded-lg transition-colors"
          >
            Voir tous nos produits <ArrowRight className="ml-2" size={20} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
