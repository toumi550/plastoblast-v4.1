// src/pages/SupportsMurauxPage.jsx
import React from 'react';
import ProductsComponent from '../components/Products';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const SupportsMurauxPage = () => {
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
      {/* Vous pouvez ajouter un titre spécifique ici si besoin */}
      {/* <h1 className="text-2xl font-bold mb-4">Supports Muraux</h1> */}
      <ProductsComponent defaultCategory="supports" />
    </div>
  );
};

export default SupportsMurauxPage;
