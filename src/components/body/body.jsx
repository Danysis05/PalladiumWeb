import { useState } from "react";
import { motion as Motion } from "framer-motion";
import SeguroModal from "../SeguroModal/SeguroModal";
import SegurosCarrusel from "../SegurosCarrusel/SegurosCarrusel";
import ProveedoresCarrusel from "../proveedoresCarrusel/proveedoresCarrusel.jsx"; 
import "./body.css";
import imgFamily from "../../assets/img/familia.jpg";
import seguros from "../../assets/utils/seguros.jsx";


function Body() {
  const [seguroActivo, setSeguroActivo] = useState(null);

  /* ANIMATIONS */
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const stagger = {
    hidden: {},
    show: { transition: { staggerChildren: 0.2 } },
  };

  return (
    
    <main className="body">
      {/* HERO */}
      <Motion.section
        className="hero"
        variants={stagger}
        initial="hidden"
        animate="show"
      >
        <Motion.img src={imgFamily} alt="Family" variants={fadeUp} />

        <Motion.div className="hero-text" variants={fadeUp}>
          <h2>Protege lo que más importa</h2>
          <p>
            Protege lo que más importa con Palladium Seguros. Ofrecemos soluciones
            personalizadas para cuidar de tu familia, tu hogar y tu futuro.
          </p>
        </Motion.div>
      </Motion.section>

      {/* SEGUROS */}
    <Motion.section
      className="seguros"
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <Motion.h2 variants={fadeUp}>Seguros Disponibles</Motion.h2>

      <SegurosCarrusel
        seguros={seguros}
        onSelectSeguro={setSeguroActivo}
      />
    </Motion.section>


      {/* MODAL */}
      <SeguroModal
        seguro={seguroActivo}
        onClose={() => setSeguroActivo(null)}
      />
{/* PROVEEDORES */}
<Motion.section
  className="proveedores-section"
  variants={stagger}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true }}
>
  <div className="proveedores-header">
    <Motion.h2 variants={fadeUp}>Empresas que confían en nosotros</Motion.h2>
    <Motion.p variants={fadeUp} className="proveedores-subtitle">
      Trabajamos de la mano con las aseguradoras más sólidas del país para brindarte el respaldo que mereces.
    </Motion.p>
    <Motion.div variants={fadeUp} className="title-accent"></Motion.div>
  </div>
  
  <div className="carrusel-wrapper-layout">
    <ProveedoresCarrusel />
  </div>
</Motion.section>
      
    </main>
  );
}

export default Body;
