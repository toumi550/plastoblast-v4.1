import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, FileText, Users, MessageSquare } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    entreprise: '',
    nom: '',
    email: '',
    telephone: '',
    produits: '',
    quantite: '',
    message: '',
    typedemande: 'devis'
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici vous pouvez ajouter la logique d'envoi du formulaire
    console.log('Données du formulaire:', formData);
    alert('Votre demande a été envoyée avec succès ! Nous vous contacterons sous 24h.');
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Téléphone',
      details: ['+213 (0) 560 00 69 06', 'Lun-Ven 8h-17h'],
      primary: true
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['contact@plastoblast.dz', 'Réponse sous 24h']
    },
    {
      icon: MapPin,
      title: 'Localisation',
      details: ['Algérie', 'Livraison nationale']
    },
    {
      icon: Clock,
      title: 'Horaires',
      details: ['Lun-Ven: 8h-17h', 'Sam: 8h-12h']
    }
  ];

  return (
    <section id="contact" className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="section-title">Contactez-nous</h2>
          <p className="section-subtitle">
            Notre équipe est à votre disposition pour répondre à toutes vos questions
          </p>
        </motion.div>

        <div className="contact-container">
          {/* Informations de contact */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="contact-info"
          >
            <h3 className="contact-info-title">Informations de Contact</h3>
            <p className="contact-info-subtitle">
              N'hésitez pas à nous contacter pour toute demande de devis ou d'information
            </p>

            <div className="contact-info-list">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`contact-info-item ${item.primary ? 'primary' : ''}`}
                  >
                    <div className="contact-icon">
                      <Icon size={24} />
                    </div>
                    <div>
                      <h4>{item.title}</h4>
                      {item.details.map((detail, idx) => (
                        <p key={idx}>{detail}</p>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* CTA Box */}
            <div className="contact-cta-box">
              <h4>Besoin d'un devis rapide ?</h4>
              <p>Appelez-nous directement ou remplissez le formulaire ci-contre</p>
              <a href="tel:+213560006906" className="btn-primary">
                <Phone size={18} />
                Appeler Maintenant
              </a>
            </div>
          </motion.div>

          {/* Formulaire de contact */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="contact-form-wrapper"
          >
            <form onSubmit={handleSubmit} className="contact-form">
              <h3 className="form-title">Demande de Devis</h3>
              
              {/* Type de demande */}
              <div className="form-group">
                <label>Type de demande</label>
                <div className="radio-group">
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="typedemande"
                      value="devis"
                      checked={formData.typedemande === 'devis'}
                      onChange={handleChange}
                    />
                    <FileText size={16} />
                    Devis
                  </label>
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="typedemande"
                      value="information"
                      checked={formData.typedemande === 'information'}
                      onChange={handleChange}
                    />
                    <MessageSquare size={16} />
                    Information
                  </label>
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="typedemande"
                      value="partenariat"
                      checked={formData.typedemande === 'partenariat'}
                      onChange={handleChange}
                    />
                    <Users size={16} />
                    Partenariat
                  </label>
                </div>
              </div>

              {/* Informations entreprise */}
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="entreprise">Entreprise *</label>
                  <input
                    type="text"
                    id="entreprise"
                    name="entreprise"
                    value={formData.entreprise}
                    onChange={handleChange}
                    required
                    placeholder="Nom de votre entreprise"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="nom">Nom complet *</label>
                  <input
                    type="text"
                    id="nom"
                    name="nom"
                    value={formData.nom}
                    onChange={handleChange}
                    required
                    placeholder="Votre nom"
                  />
                </div>
              </div>

              {/* Coordonnées */}
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="votre@email.com"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="telephone">Téléphone *</label>
                  <input
                    type="tel"
                    id="telephone"
                    name="telephone"
                    value={formData.telephone}
                    onChange={handleChange}
                    required
                    placeholder="+213 XXX XX XX XX"
                  />
                </div>
              </div>

              {/* Détails de la demande */}
              {formData.typedemande === 'devis' && (
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="produits">Produits souhaités</label>
                    <input
                      type="text"
                      id="produits"
                      name="produits"
                      value={formData.produits}
                      onChange={handleChange}
                      placeholder="Ex: CBOX-AJ120, WS30-L..."
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="quantite">Quantité estimée</label>
                    <input
                      type="text"
                      id="quantite"
                      name="quantite"
                      value={formData.quantite}
                      onChange={handleChange}
                      placeholder="Ex: 50 unités"
                    />
                  </div>
                </div>
              )}

              {/* Message */}
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Décrivez votre projet ou vos besoins..."
                ></textarea>
              </div>

              {/* Submit */}
              <button type="submit" className="btn-primary submit-button">
                <Send size={18} />
                Envoyer la demande
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
