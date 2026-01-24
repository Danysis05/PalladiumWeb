import { useRef } from "react";
import { motion as Motion } from "framer-motion";
import "./SegurosCarrusel.css";

function SegurosCarrusel({ seguros, onSelectSeguro }) {
  const carruselRef = useRef(null);

  // --- VARIANTES DE ANIMACIÓN ---
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Tiempo entre la aparición de cada tarjeta
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const scroll = (dir) => {
    if (!carruselRef.current) return;
    const card = carruselRef.current.firstChild;
    if (!card) return;
    const scrollAmount = card.offsetWidth + 25; 

    carruselRef.current.scrollBy({
      left: dir === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="carrusel-wrapper">
      <button className="arrow left" onClick={() => scroll("left")}>
        ‹
      </button>

      <Motion.div 
        className="seguros-carrusel" 
        ref={carruselRef}
        variants={containerVariants}
        initial="hidden"
        whileInView="show" // Se activa cuando entra en pantalla
        viewport={{ once: true, amount: 0.2 }} // Solo anima una vez
      >
        {seguros.map((seguro) => (
          <Motion.div
            key={seguro.id}
            className="seguro"
            variants={itemVariants} // Cada tarjeta usa la variante de item
            whileHover={{ scale: 1.03, y: -5 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onSelectSeguro(seguro)}
          >
            <img src={seguro.imagen} alt={seguro.titulo} />
            <h3>{seguro.titulo}</h3>
            <p>{seguro.descripcion}</p>
          </Motion.div>
        ))}
      </Motion.div>

      <button className="arrow right" onClick={() => scroll("right")}>
        ›
      </button>
    </div>
  );
}

export default SegurosCarrusel;