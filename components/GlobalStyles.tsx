import React from 'react';

const GlobalStyles: React.FC = () => {
  React.useEffect(() => {
    // Inject styles directly into the document head
    const style = document.createElement('style');
    style.textContent = `
      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(30px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      
      @keyframes fillBar {
        from {
          width: 0%;
        }
      }
      
      @keyframes float {
        0%, 100% {
          transform: translateY(0px);
        }
        50% {
          transform: translateY(-10px);
        }
      }
      
      .floating {
        animation: float 3s ease-in-out infinite;
      }
      
      .hover-scale {
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      }
      
      .hover-scale:hover {
        transform: scale(1.05);
      }
      
      .glow-on-hover:hover {
        box-shadow: 0 0 30px rgba(16, 185, 129, 0.3);
      }
      
      .scroll-progress {
        position: fixed;
        top: 0;
        left: 0;
        height: 3px;
        background: linear-gradient(90deg, #10b981, #06b6d4);
        transition: width 0.3s ease;
        z-index: 1000;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return null;
};

export default GlobalStyles;