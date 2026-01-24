
import './mensaje.css';
const Mensaje = ({ 
  isOpen, 
  onClose, 
  titulo, 
  mensaje, 
  tipo = "success", // 'success', 'error', 'info'
  textoBoton = "Aceptar" 
}) => {
  if (!isOpen) return null;

  // Mapeo de iconos según el tipo
  const iconos = {
    success: (
      <svg className="modal-icon svg-success" viewBox="0 0 52 52">
        <circle className="path circle" cx="26" cy="26" r="25" fill="none" />
        <path className="path check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
      </svg>
    ),
    error: (
      <svg className="modal-icon svg-error" viewBox="0 0 52 52">
        <circle className="path circle" cx="26" cy="26" r="25" fill="none" />
        <path className="path line" fill="none" d="M16 16l20 20M36 16L16 36" />
      </svg>
    ),
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      {/* Detenemos la propagación para que no se cierre al hacer click dentro del card */}
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <div className={`icon-wrapper ${tipo}`}>
          {iconos[tipo]}
        </div>
        
        <h2 className="modal-title">{titulo}</h2>
        <p className="modal-text">{mensaje}</p>
        
        <button className={`modal-btn btn-${tipo}`} onClick={onClose}>
          {textoBoton}
        </button>
      </div>
    </div>
  );
};

export default Mensaje;