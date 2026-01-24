import { useRef } from "react";
// Asegúrate de que tus importaciones de imágenes sean correctas
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
import "./proveedoresCarrusel.css";

function ProveedoresCarrusel() {
  const carruselRef = useRef(null);

  const proveedores = [
    { id: 1, nombre: 'Allianz', imagen: allianz, link: "https://allianzdigital.co/?utm_source=google&utm_medium=cpc&utm_campaign=canal+digital+hogar&gad_source=1&gad_campaignid=21511427403&gbraid=0AAAAADQIOdCQliEgIAXYL6Fbub7ffQZ6h&gclid=CjwKCAiA95fLBhBPEiwATXUsxFozkR8gfdlYTkReM1JS8wmsIwndwo_raeoG14Cn8X2gQ49IIFpDEBoCU-8QAvD_BwE&sid=019ba8c89e277550ba632d23efc6d8bb" },
    { id: 2, nombre: 'Axa', imagen: axaColpatria, link: "https://www.axacolpatria.co/home" },
    { id: 3, nombre: 'Mapfre', imagen: mapfre, link: "https://www.mapfre.com.co/" },
    { id: 4, nombre: 'Seguros Bolivar', imagen: segurosBolivar, link: "https://www.segurosbolivar.com" },
    { id: 5, nombre: 'Sura', imagen: sura, link: "https://www.sura.co/seguros" },
    { id: 6, nombre: 'Equidad Seguros', imagen: equidadSeguros, link: "https://www.laequidadseguros.coop/" },
    { id: 7, nombre: 'Previsora', imagen: previsora, link: "https://www.previsora.com" },
    { id: 8, nombre: 'Seguros Mundial', imagen: segurosMundial, link: "https://www.segurosmundial.com.co/personas" },
    { id: 9, nombre: 'SBS', imagen: sbs, link: "https://www.sbseguros.co/" },
    { id: 10, nombre: 'Seguros del Estado', imagen: segurosdelEstado, link: "https://www.segurosdelestado.com" },
  ];

  const scroll = (dir) => {
    if (!carruselRef.current) return;

    // Obtenemos el ancho del contenedor visible
    const scrollAmount = carruselRef.current.clientWidth;

    carruselRef.current.scrollBy({
      left: dir === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="carrusel-container animate-fade-in">
      <button className="arrow left" onClick={() => scroll("left")} aria-label="Anterior">
        ‹
      </button>

      <div className="proveedores-carrusel-track" ref={carruselRef}>
        {proveedores.map((proveedor) => (
          // NOTA: Eliminé el div anidado redundante. El <a> ahora es la tarjeta.
          <a
            key={proveedor.id}
            href={proveedor.link}
            target="_blank"
            rel="noopener noreferrer"
            className="proveedor-card"
          >
            <img src={proveedor.imagen} alt={proveedor.nombre} />
          </a>
        ))}
      </div>

      <button className="arrow right" onClick={() => scroll("right")} aria-label="Siguiente">
        ›
      </button>
    </div>
  );
}

export default ProveedoresCarrusel;