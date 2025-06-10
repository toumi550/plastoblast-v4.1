import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ShoppingCart, Download } from 'lucide-react';
import { motion } from 'framer-motion';
import { products } from '../components/Products';

const ProductDetail = () => {
  const { categoryId, productId } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const foundProduct = products.find(p => p.id === parseInt(productId));
    if (foundProduct) {
      setProduct(foundProduct);
      document.title = `${foundProduct.name} - Plastoblast`;
    } else {
      // Rediriger vers la page des produits si le produit n'est pas trouvé
      navigate('/products');
    }
  }, [productId, navigate]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.button
          onClick={() => navigate(`/products/${categoryId}`)}
          className="flex items-center bg-[#1a5d33] hover:bg-[#2d8f4f] text-white px-4 py-2 rounded-lg font-medium mb-6 transition-colors"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <ArrowLeft className="mr-2" size={20} />
          Retour aux produits
        </motion.button>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="md:flex">
            {/* Image du produit */}
            <div className="md:w-1/2 p-6 bg-gray-100 flex items-center justify-center">
              <img 
                src={product.image} 
                alt={product.altText || product.name}
                className="max-h-96 w-auto object-contain"
                loading="eager"
              />
            </div>

            {/* Détails du produit */}
            <div className="md:w-1/2 p-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
              
              <div className="mt-6">
                <h2 className="text-lg font-medium text-gray-900">Description</h2>
                <p className="mt-2 text-gray-600">{product.description}</p>
              </div>

              <div className="mt-6">
                <h2 className="text-lg font-medium text-gray-900">Caractéristiques principales</h2>
                <ul className="mt-2 space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6">
                <h2 className="text-lg font-medium text-gray-900">Spécifications techniques</h2>
                <div className="mt-2 grid grid-cols-2 gap-4">
                  {Object.entries(product.specs).map(([key, value]) => (
                    <div key={key} className="bg-gray-50 p-3 rounded">
                      <p className="text-sm font-medium text-gray-500 capitalize">{key}</p>
                      <p className="text-gray-900 font-medium">{value}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <button className="flex-1 bg-[#1a5d33] hover:bg-[#2d8f4f] text-white py-3 px-6 rounded-lg font-medium transition-colors flex items-center justify-center">
                  <ShoppingCart className="mr-2" size={20} />
                  Demander un devis
                </button>
                <button className="flex-1 border border-gray-300 text-gray-700 py-3 px-6 rounded-lg font-medium hover:bg-gray-50 transition-colors flex items-center justify-center">
                  <Download className="mr-2" size={20} />
                  Télécharger la fiche technique
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
