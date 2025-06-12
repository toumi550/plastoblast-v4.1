import React, { useRef, useEffect } from 'react';

const VideoBackground = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    // Essayer de démarrer la lecture automatiquement
    const playVideo = async () => {
      try {
        if (videoRef.current) {
          await videoRef.current.play();
        }
      } catch (err) {
        // La lecture automatique a échoué, on laisse le navigateur gérer
        console.log('La lecture automatique de la vidéo a échoué:', err);
      }
    };

    playVideo();
  }, []);

  return (
    <div className="video-background">
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="video"
        poster="/images/video-poster.webp" // Image de remplacement pendant le chargement
      >
        <source src="/videos/hero-background.mp4" type="video/mp4" />
        Votre navigateur ne supporte pas la lecture de vidéos.
      </video>
      {/* Overlay pour améliorer la lisibilité du texte */}
      <div className="video-overlay" />
      
      <style jsx>{`
        .video-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
          overflow: hidden;
        }
        
        .video {
          position: absolute;
          top: 50%;
          left: 50%;
          min-width: 100%;
          min-height: 100%;
          width: auto;
          height: auto;
          transform: translate(-50%, -50%);
          object-fit: cover;
        }
        
        .video-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(255, 255, 255, 0.1); /* Opacité réduite */
          z-index: 2;
        }
        
        @media (max-width: 768px) {
          .video-overlay {
            background: rgba(255, 255, 255, 0.1); /* Opacité réduite sur mobile */
          }
        }
      `}</style>
    </div>
  );
};

export default VideoBackground;
