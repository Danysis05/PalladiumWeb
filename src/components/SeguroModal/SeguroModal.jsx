import { useEffect } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";
import { NavLink } from "react-router-dom";
import "./SeguroModal.css"; // Asegúrate de importar el CSS

function SeguroModal({ seguro, onClose }) {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  return (
    <AnimatePresence>
      {seguro && (
        <Motion.div
          className="modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <Motion.div
            className="modal-content"
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Botón X de cerrar */}
            <button className="close-icon" onClick={onClose}>&times;</button>

            <div className="modal-image-container">
              <img src={seguro.imagen} alt={seguro.titulo} />
            </div>

            <div className="modal-body">
              <h2>{seguro.titulo}</h2>
              <p className="modal-text">{seguro.info || seguro.descripcion}</p>
              
              <div className="modal-actions">
                <NavLink to="/contacto">
                  <button className="btn-modal-primary">Cotiza Ahora</button>
                </NavLink>
                
                <button className="btn-modal-secondary" onClick={onClose}>
                  Tal vez luego
                </button>

              </div>
            </div>
          </Motion.div>
        </Motion.div>
      )}
    </AnimatePresence>
  );
}

export default SeguroModal;