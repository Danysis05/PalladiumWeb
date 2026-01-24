import { NavLink } from "react-router-dom"; // Cambiamos Link por NavLink
import { motion as Motion } from "framer-motion";
import "./footer.css";
import { 
  FaEnvelope, 
  FaPhoneAlt, 
  FaFacebookF, 
  FaInstagram, 
  FaTiktok
} from "react-icons/fa";
import logo from "../../assets/img/newLogo.png";

function Footer() {
  const footerVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <Motion.footer 
      className="footer"
      variants={footerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <div className="footer-container">
        <div className="footer-brand">
          <div className="logo-container">
            <img src={logo} alt="Palladium Logo" />
            <div className="logo-text">
              <h2>Palladium</h2>
              <p>Seguros</p>
            </div>
          </div>
          <p className="brand-description">
            Protegiendo lo que más valoras con la elegancia y seguridad que mereces.
          </p>
        </div>

        {/* NAVEGACIÓN ACTUALIZADA */}
        <div className="footer-links">
          <h3>Navegación</h3>
          <ul>
            <li>
              <NavLink to="/" end>Inicio</NavLink>
            </li>
                     <li>
            <NavLink to="/pagos">Pagos</NavLink>
          </li>
            <li>
              <NavLink to="/about">Nosotros</NavLink>
            </li>
            <li>
              <NavLink to="/contacto">Contacto</NavLink>
            </li>
          </ul>
        </div>

        <div className="footer-contact">
          <h3>Contacto</h3>
          <p>Palladium.seguros25@gmail.com</p>
          <p>Tel: +57 315 0909277</p>
          <div className="social-links">
            <a href="https://www.instagram.com/segurospalladium/" target="_blank"><FaInstagram />   Instagram</a>
            <a href="https://www.facebook.com/share/1BxF7SUixV/" target="_blank"><FaFacebookF />   Facebook</a>
            <a href="https://www.tiktok.com/@palladium_seguros" target="_blank"><FaTiktok />   TikTok</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <hr />
        <p>&copy; {new Date().getFullYear()} Palladium Seguros. Todos los derechos reservados.</p>
      </div>
    </Motion.footer>
  );
}

export default Footer;