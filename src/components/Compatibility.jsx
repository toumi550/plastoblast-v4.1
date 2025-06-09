          import React from 'react';

const Compatibility = () => (
  <section id="compatibilite" className="compat-section">
    <div className="compat-table-wrapper">
      {/* Image de fond */}
      <img
        src="/images/arriere-plan-support-mural-camera.webp"
        alt="Arrière-plan illustrant des supports muraux pour caméras de surveillance Dahua et Hikvision"
        className="compat-bg-img"
        loading="lazy"
      />
      {/* Overlay sombre */}
      <div className="compat-bg-overlay" />
      {/* Contenu du tableau */}
      <div className="compat-table-content">
        <h2 className="compat-title">
          Compatibilité avec les Marques Populaires
        </h2>
        <p className="compat-desc">
          Nos produits sont conçus pour s’adapter parfaitement à vos caméras
        </p>
        <table style={{
          width: "100%",
          borderCollapse: "collapse",
          background: "rgba(255,255,255,0.07)",
          borderRadius: 16,
          overflow: "hidden",
          color: "#fff",
        }}>
          <thead>
            <tr style={{ color: "#fff", fontWeight: 600, background: "rgba(30,34,50,0.6)" }}>
              <th style={{ padding: "14px 10px" }}>Modèle de Caméra</th>
              <th style={{ padding: "14px 10px" }}>Dimensions</th>
              <th style={{ padding: "14px 10px" }}>SJ110</th>
              <th style={{ padding: "14px 10px" }}>AJ120</th>
              <th style={{ padding: "14px 10px" }}>AJ140</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ color: "#fff" }}>Dahua DOME PVC réf: HAC-T1A21P</td>
              <td style={{ color: "#fff" }}>⌀85.4 mm × 68.8 mm</td>
              <td style={{ color: "#22c55e", fontWeight: 700 }}>✔</td>
              <td style={{ color: "#22c55e", fontWeight: 700 }}>✔</td>
              <td style={{ color: "#22c55e", fontWeight: 700 }}>✔</td>
            </tr>
            <tr>
              <td style={{ color: "#fff" }}>HAC-T2A21 HDCVI Fixed-focal Eyeball</td>
              <td style={{ color: "#fff" }}>⌀94.0 mm × 78.0 mm</td>
              <td style={{ color: "#22c55e", fontWeight: 700 }}>✔</td>
              <td style={{ color: "#22c55e", fontWeight: 700 }}>✔</td>
              <td style={{ color: "#22c55e", fontWeight: 700 }}>✔</td>
            </tr>
            <tr>
              <td style={{ color: "#fff" }}>Hik Vision DS-2CE19H8T-AIT3ZF</td>
              <td style={{ color: "#fff" }}>92 mm × 255.1 mm</td>
              <td style={{ color: "#ef4444", fontWeight: 700 }}>✗</td>
              <td style={{ color: "#22c55e", fontWeight: 700 }}>✔</td>
              <td style={{ color: "#ef4444", fontWeight: 700 }}>✗</td>
            </tr>
            <tr>
              <td style={{ color: "#fff" }}>DH-IPC-HFW2531T-ZAS-S2 5MP</td>
              <td style={{ color: "#fff" }}>90.4 mm × 244.1 mm</td>
              <td style={{ color: "#ef4444", fontWeight: 700 }}>✗</td>
              <td style={{ color: "#22c55e", fontWeight: 700 }}>✔</td>
              <td style={{ color: "#ef4444", fontWeight: 700 }}>✗</td>
            </tr>
            {/* ...ajoute d'autres lignes si besoin... */}
          </tbody>
        </table>
        <div style={{ display: "flex", justifyContent: "center", marginTop: 32 }}>
          <a
            href="/docs/compatibilite-plastoblast.pdf"
            download
            style={{
              background: "#2563eb",
              color: "#fff",
              fontWeight: 600,
              fontSize: 18,
              padding: "12px 32px",
              borderRadius: 8,
              boxShadow: "0 2px 12px #0001",
              textDecoration: "none",
              transition: "background 0.2s, transform 0.2s",
            }}
            onMouseOver={e => { e.currentTarget.style.background = "#1e40af"; e.currentTarget.style.transform = "scale(1.06)"; }}
            onMouseOut={e => { e.currentTarget.style.background = "#2563eb"; e.currentTarget.style.transform = "none"; }}
          >
            Télécharger la liste complète
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Compatibility;
