import { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion as Motion } from "framer-motion";
import "./header.css";
import logo from "../../assets/img/newLogo.png";

function Header() {
  const [open, setOpen] = useState(false);

  const headerVariants = {
    hidden: { opacity: 0, y: -30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <Motion.header
      className="header"
      variants={headerVariants}
      initial="hidden"
      animate="show"
    >
      {/* LOGO */}
      <div className="logo-container">
        <img src={logo} alt="Palladium Logo" />
        <div className="logo-text">
          <h1>Palladium</h1>
          <p>Seguros</p>
        </div>
      </div>

      {/* HAMBURGER */}
      <div
        className={`hamburger ${open ? "active" : ""}`}
        onClick={() => setOpen(!open)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* NAV — SIEMPRE EXISTE */}
      <nav className={`nav ${open ? "open" : ""}`}>
        <ul>
          <li>
            <NavLink to="/" end onClick={() => setOpen(false)}>
              Inicio
            </NavLink>
          </li>

          <li>
            <NavLink to="/pagos" onClick={() => setOpen(false)}>
              Pagos
            </NavLink>
          </li>

          <li>
            <NavLink to="/about" onClick={() => setOpen(false)}>
              Nosotros
            </NavLink>
          </li>

          <li>
            <NavLink to="/contacto" onClick={() => setOpen(false)}>
              Contáctanos
            </NavLink>
          </li>


        </ul>
      </nav>
    </Motion.header>
  );
}

export default Header;
