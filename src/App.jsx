import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutPage from './pages/About';
import AllProductsPageDisplay from './components/Products';
import SupportsMurauxPage from './pages/SupportsMurauxPage';
import BoitesDeJonctionPage from './pages/BoitesDeJonctionPage';
import ProductDetail from './pages/ProductDetail';
import ContactPage from './pages/Contact';
import Legal from './pages/Legal';
import Privacy from './pages/Privacy';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/products" element={<AllProductsPageDisplay />} />
            <Route path="/products/supports-muraux" element={<SupportsMurauxPage />} />
            <Route path="/products/boites-de-jonction" element={<BoitesDeJonctionPage />} />
            <Route path="/products/:id" element={<ProductDetail />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/legal" element={<Legal />} />
            <Route path="/privacy" element={<Privacy />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
