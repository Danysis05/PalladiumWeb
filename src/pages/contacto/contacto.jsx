
import Formulario from "../../components/form/formulario";
// Importamos los iconos de Font Awesome
import { 
  FaEnvelope, 
  FaPhoneAlt, 
  FaFacebookF, 
  FaInstagram, 
  FaTiktok
} from "react-icons/fa";
import "./contacto.css";

const ContactoPage = () => {



  return (
    <div className="page-wrapper">
      {/* SECCIÓN HERO */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>CONTACTANOS</h1>
          <div className="hero-divider"></div>
          <p className="agency-name">Palladium Seguros</p>
          <p className="hero-subtitle">
           Tramita tu seguro de manera fácil y rápida con nosotros.
          </p>
        </div>
      </section>

      {/* SECCIÓN CONTENIDO */}
      <section className="content-section">
        <div className="container grid-container">
          
          {/* LADO IZQUIERDO: FORMULARIO */}
          
            
           <Formulario className="form-card" />
          {/* LADO DERECHO: INFO DE CONTACTO */}
          <div className="info-card">
            <h3>Ponte en contacto</h3>
            
            <div className="info-list">


              <div className="info-item">
                <div className="icon-circle"><FaEnvelope /></div>
                <div>
                  <p className="info-label">Escríbenos</p>
                  <p>Palladium.seguros25@gmail.com</p>
                </div>
              </div>

              <div className="info-item">
                <div className="icon-circle"><FaPhoneAlt /></div>
                <div>
                  <p className="info-label">Llámanos</p>
                  <p>315 0909277</p>
                </div>
              </div>
            </div>

            <div className="social-section">
              <p className="social-title">Siguenos en redes</p>
              <div className="social-links">

                <a href="https://www.facebook.com/share/1BxF7SUixV/" className="social-btn fb"><FaFacebookF /></a>
                <a href="https://www.instagram.com/segurospalladium/" className="social-btn ig"><FaInstagram /></a>
                
                <a href="https://www.tiktok.com/@palladium_seguros" className="social-btn tt"><FaTiktok /></a>
              </div>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
};

export default ContactoPage;