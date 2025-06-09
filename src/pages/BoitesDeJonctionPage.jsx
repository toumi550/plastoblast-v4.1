// src/pages/BoitesDeJonctionPage.jsx
import React from 'react';
import ProductsComponent from '../components/Products';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const BoitesDeJonctionPage = () => {
  const navigate = useNavigate();
  
  return (
    <div>
      <button 
        onClick={() => navigate('/products')} 
        className="back-button"
        style={{ marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '5px' }}
      >
        <ArrowLeft size={20} /> Retour aux produits
      </button>
      {/* <h1 className="text-2xl font-bold mb-4">Boîtes de Jonction</h1> */}
      <ProductsComponent defaultCategory="boites" />
    </div>
  );
};

export default BoitesDeJonctionPage;
