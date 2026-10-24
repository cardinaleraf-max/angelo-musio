import { useEffect } from "react";

const WhatsAppWidget = () => {
  useEffect(() => {
    const PHONE = "393339406820";
    const MESSAGE = encodeURIComponent(
      "Salve, vorrei informazioni sulla disponibilità del B&B Via del Mare."
    );
    const LINK = `https://wa.me/${PHONE}?text=${MESSAGE}`;

    // Create style element (independent from site CSS)
    const style = document.createElement("style");
    style.textContent = `
      #wa-float-widget {
        position: fixed !important;
        bottom: 24px !important;
        right: 24px !important;
        z-index: 90 !important;
        width: 64px !important;
        height: 64px !important;
        border-radius: 50% !important;
        background: #25D366 !important;
        border: none !important;
        box-shadow: 0 4px 16px rgba(0,0,0,0.25) !important;
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
        cursor: pointer !important;
        text-decoration: none !important;
        outline: none !important;
        animation: wa-float-in 0.5s ease 1.5s both !important;
        transition: transform 0.25s ease, box-shadow 0.25s ease !important;
        will-change: transform !important;
        transform: translateZ(0) !important;
        contain: layout style paint !important;
      }
      #wa-float-widget:hover {
        transform: translateZ(0) scale(1.12) !important;
        box-shadow: 0 6px 24px rgba(0,0,0,0.3) !important;
      }
      #wa-float-widget svg {
        width: 34px !important;
        height: 34px !important;
        pointer-events: none !important;
      }
      @keyframes wa-float-in {
        from { opacity: 0; transform: translateZ(0) scale(0.4); }
        to { opacity: 1; transform: translateZ(0) scale(1); }
      }
      @media (max-width: 640px) {
        #wa-float-widget {
          bottom: 16px !important;
          right: 16px !important;
          width: 54px !important;
          height: 54px !important;
        }
        #wa-float-widget svg {
          width: 30px !important;
          height: 30px !important;
        }
      }
    `;
    document.head.appendChild(style);

    // Create widget element directly on body (outside React root)
    const el = document.createElement("a");
    el.id = "wa-float-widget";
    el.href = LINK;
    el.target = "_blank";
    el.rel = "noopener noreferrer";
    el.setAttribute("aria-label", "Contattaci su WhatsApp");
    el.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21"/><path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1zm0 0c0 1.6.8 3.1 2 4m0 0a5.5 5.5 0 0 0 4 2m0 0a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1"/></svg>`;
    document.body.appendChild(el);

    return () => {
      el.remove();
      style.remove();
    };
  }, []);

  return null;
};

export default WhatsAppWidget;
