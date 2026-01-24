import { motion as Motion } from "framer-motion";
import "./nosotros.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShieldHalved, faHandshake, faGem } from "@fortawesome/free-solid-svg-icons"; // Importamos iconos
import equipo from "../../assets/img/equipoCorporativo.jpg";
import { NavLink } from "react-router-dom";

function NosotrosPage() {
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <main className="nosotros">
      {/* SECCIÓN HERO - INTRODUCCIÓN */}
      <section className="nosotros-hero">
        <Motion.div 
          className="hero-content"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <span>Nuestra Historia</span>
          <h1>Comprometidos con tu <strong>Tranquilidad</strong></h1>
          <p>
            En Palladium Seguros, no solo ofrecemos seguros; construimos relaciones 
            basadas en la confianza y la protección personalizada para cada etapa de tu vida.
          </p>
        </Motion.div>
      </section>

      {/* SECCIÓN IMAGEN + TEXTO (QUIÉNES SOMOS) */}
      <section className="nosotros-grid">
        <div className="grid-container">
          <Motion.div 
            className="grid-image"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* ESPACIO PARA TU IMAGEN 1 */}
            <div className="image-placeholder">
               <img src={equipo} alt="Nuestro Equipo" />
            </div>
          </Motion.div>

          <Motion.div 
            className="grid-text"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>Liderazgo y Confianza</h2>
            <p>
Hemos evolucionado para ofrecer soluciones tecnológicas que simplifican el mundo de los seguros, sin perder el enfoque humano que nos distingue. Nuestra experiencia nos permite acompañarte con confianza y cercanía, para que tomes decisiones claras y te enfoques en lo que realmente importa.
            </p>
            <div className="stats-box">
              <div className="stat">
                <h3>+15k</h3>
                <p>Clientes</p>
              </div>
              <div className="stat">
                <h3>99%</h3>
                <p>Resolución</p>
              </div>
            </div>
          </Motion.div>
        </div>
      </section>

      {/* SECCIÓN VALORES (TARJETAS) */}
      <section className="nosotros-values">
        <Motion.div className="values-header">
          <h2>Nuestros Pilares</h2>
        </Motion.div>

        <Motion.div 
          className="values-container"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {/* TARJETA 1: SEGURIDAD */}
          <Motion.div className="value-card" variants={fadeIn}>
            <div className="value-icon-container">
              <FontAwesomeIcon icon={faShieldHalved} className="value-icon-fa" />
            </div>
            <h3>Seguridad</h3>
            <p>Respaldamos cada contrato con la solidez financiera más alta del mercado.</p>
          </Motion.div>

          {/* TARJETA 2: CERCANÍA */}
          <Motion.div className="value-card" variants={fadeIn}>
            <div className="value-icon-container">
              <FontAwesomeIcon icon={faHandshake} className="value-icon-fa" />
            </div>
            <h3>Cercanía</h3>
            <p>Estamos donde tú estés, con soporte 24/7 y atención personalizada.</p>
          </Motion.div>

          {/* TARJETA 3: EXCELENCIA */}
          <Motion.div className="value-card" variants={fadeIn}>
            <div className="value-icon-container">
              <FontAwesomeIcon icon={faGem} className="value-icon-fa" />
            </div>
            <h3>Excelencia</h3>
            <p>Buscamos la perfección en cada proceso para superar tus expectativas.</p>
          </Motion.div>
        </Motion.div>
      </section>

      {/* SECCIÓN FINAL CON IMAGEN DE FONDO */}
      <section className="nosotros-cta">
        <div className="cta-overlay">
          <h2>¿Listo para proteger tu futuro?</h2>
             <NavLink to="/contacto">
              <button className="cta-btn">Contactar a un Asesor</button>
            </NavLink>
          
        </div>
      </section>
    </main>
  );
}

export default NosotrosPage;