import { useRef } from "react";
import { motion as Motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCreditCard, faChevronLeft, faChevronRight, faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

// Importa tus logos (puedes reutilizar los del carrusel anterior)
import allianz from '../../assets/img/allianz-Logo.png';
import axaColpatria from '../../assets/img/axaColpatria-Logo.png';
import mapfre from '../../assets/img/mapfre-Logo.png';
import segurosBolivar from '../../assets/img/segurosBolivar-Logo.png';
import sura from '../../assets/img/sura-Logo.png';
import equidadSeguros from '../../assets/img/equidadSeguros-Logo.png';
import previsora from '../../assets/img/previsora-Logo.png';
import segurosMundial from '../../assets/img/segurosMundial-Logo.png';
import sbs from '../../assets/img/sbs-Logo.png';
import segurosdelEstado from '../../assets/img/segurosdelEstado-Logo.png';
// ... el resto de logos

import "./pagos.css";

function PagosPage() {
  const scrollRef = useRef(null);

  const pagadoras = [
    { id: 1, nombre: 'Allianz', logo: allianz, linkPago: "https://www.allianz.co/clientes/todos-los-clientes/pagos.html", desc: "Paga tu póliza de salud, autos o vida." },
    { id: 2, nombre: 'Axa Colpatria', logo: axaColpatria, linkPago: "https://www.axacolpatria.co/pagosenlinea/opcionespago", desc: "Portal de pagos rápido y seguro." },
    { id: 3, nombre: 'Mapfre', logo: mapfre, linkPago: "https://cotiza.mapfre.com.co/pagosWeb/vista/paginas/noFilterIniPagosPublico.jsf", desc: "Acceso directo a facturación electrónica." },
    { id: 4, nombre: 'Seguros Bolívar', logo: segurosBolivar, linkPago: "https://recaudos.segurosbolivar.com/login", desc: "Pagos PSE y tarjetas de crédito." },
    { id: 5, nombre: 'Sura', logo: sura, linkPago: "https://pagos.segurossura.com.co/pagos", desc: "Gestiona el pago de tus seguros Sura." },
    { id: 6, nombre: 'Equidad Seguros', logo: equidadSeguros, linkPago: "https://servicios.laequidadseguros.coop/tesoreria-services/search", desc: "Facilita el pago de tus pólizas." },
    { id: 7, nombre: 'Previsora', logo: previsora, linkPago: "https://www.previsora.gov.co/web/guest/previpagos", desc: "Paga en línea tus seguros Previsora." },
    { id: 8, nombre: 'Seguros Mundial', logo: segurosMundial, linkPago: "https://www.segurosmundial.com.co/pagos/", desc: "Opciones de pago flexibles." },
    { id: 9, nombre: 'SBS', logo: sbs, linkPago: "https://www.sbseguros.co/servicio-al-cliente/alternativas-pagos", desc: "Realiza pagos de manera segura." },
    { id: 10, nombre: 'Seguros del Estado', logo: segurosdelEstado, linkPago: "https://portaldepago.segurosdelestado.com/pago-agil", desc: "Tu pago al alcance de un clic." },
    // Agrega las demás aquí siguiendo el mismo formato
  ];

  const handleScroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <section className="pagos-section">
      <Motion.div 
        className="pagos-header"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="pagos-badge">
          <FontAwesomeIcon icon={faCreditCard} />
          <span>Pagos en línea</span>
        </div>
        <h2>Centro de <strong>Pagos</strong></h2>
        <p>Realiza tus pagos de forma segura directamente en el portal oficial de tu aseguradora.</p>
      </Motion.div>

      <div className="pagos-carrusel-wrapper">
        <button className="nav-btn left" onClick={() => handleScroll("left")} aria-label="Anterior">
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>

        <div className="pagos-track" ref={scrollRef}>
          {pagadoras.map((empresa) => (
            <Motion.div 
              key={empresa.id} 
              className="pago-card"
              whileHover={{ y: -10 }}
            >
              <div className="card-logo">
                <img src={empresa.logo} alt={empresa.nombre} />
              </div>
              <div className="card-info">
                <h3>{empresa.nombre}</h3>
                <p>{empresa.desc}</p>
                <a href={empresa.linkPago} target="_blank" rel="noopener noreferrer" className="btn-pago">
                  Pagar Ahora <FontAwesomeIcon icon={faExternalLinkAlt} size="xs" />
                </a>
              </div>
            </Motion.div>
          ))}
        </div>

        <button className="nav-btn right" onClick={() => handleScroll("right")} aria-label="Siguiente">
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </section>
  );
}

export default PagosPage;