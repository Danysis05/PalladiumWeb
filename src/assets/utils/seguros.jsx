/* IMPORTS */
import vida from "../../assets/img/seguroVida.jpg";
import salud from "../../assets/img/seguroSalud.jpg";
import auto from "../../assets/img/seguroAuto.jpg";
import hogar from "../../assets/img/seguroHogar.jpg";
import pyme from "../../assets/img/seguroPYME.jpg";
import cumplimiento from "../../assets/img/seguroCumplimiento.jpg";
import copropiedades from "../../assets/img/seguroCopropiedad.jpg";

/* DATA */
const seguros = [
  {
    id: "vida",
    titulo: "Seguro de Vida",
    descripcion: "Tranquilidad hoy y respaldo económico mañana para quienes más amas.",
    info: "El Seguro de Vida te permite proteger el bienestar financiero de tu familia en caso de fallecimiento o invalidez. Ofrece respaldo económico para cubrir gastos esenciales como deudas, educación, vivienda y manutención. Es una solución flexible que se adapta a tus necesidades y te brinda la certeza de que tus seres queridos estarán protegidos ante cualquier imprevisto.",
    imagen: vida,
  },
  {
    id: "salud",
    titulo: "Seguro de Salud",
    descripcion: "Accede a atención médica de calidad cuando más lo necesites.",
    info: "El Seguro de Salud te brinda acceso a una amplia red de clínicas, hospitales y profesionales médicos. Incluye coberturas para consultas, exámenes, hospitalización, cirugías y emergencias. Diseñado para cuidar tu salud y la de tu familia, reduciendo gastos médicos inesperados y garantizando atención oportuna y de calidad.",
    imagen: salud,
  },
  {
    id: "auto",
    titulo: "Seguro de Auto",
    descripcion: "Conduce con seguridad y protege tu vehículo en todo momento.",
    info: "El Seguro de Auto ofrece protección integral frente a accidentes, robos, daños materiales y responsabilidad civil. Incluye asistencia vial, apoyo legal y cobertura ante imprevistos en carretera. Es la mejor forma de proteger tu inversión y conducir con la tranquilidad de estar respaldado ante cualquier situación.",
    imagen: auto,
  },
  {
    id: "hogar",
    titulo: "Seguro de Hogar",
    descripcion: "Protección completa para tu hogar y todo lo que hay en él.",
    info: "El Seguro de Hogar protege tu vivienda y tus bienes frente a riesgos como incendios, robos, daños por fenómenos naturales y accidentes domésticos. Además, puede incluir responsabilidad civil y asistencia para reparaciones urgentes. Una solución ideal para mantener tu patrimonio seguro y tu familia tranquila.",
    imagen: hogar,
  },
  {
    id: "pyme",
    titulo: "Seguro PYME",
    descripcion: "La seguridad que tu negocio necesita para seguir creciendo.",
    info: "El Seguro PYME está diseñado para proteger pequeñas y medianas empresas ante riesgos operativos, daños a instalaciones, robos, responsabilidad civil y pérdida de ingresos. Ofrece coberturas flexibles que se adaptan a la actividad de tu negocio, ayudándote a mantener la continuidad operativa frente a cualquier imprevisto.",
    imagen: pyme,
  },
  {
    id: "cumplimiento",
    titulo: "Seguro de Cumplimiento",
    descripcion: "Garantiza el cumplimiento de tus contratos con respaldo financiero.",
    info: "El Seguro de Cumplimiento respalda tus obligaciones contractuales frente a entidades públicas o privadas. Brinda seguridad financiera y confianza a las partes involucradas, garantizando el cumplimiento de contratos, licitaciones o acuerdos comerciales. Es una herramienta clave para fortalecer tu credibilidad y respaldo legal.",
    imagen: cumplimiento,
  },
  {
    id: "coopropiedades",
    titulo: "Seguro de Copropiedades",
    descripcion: "Protección integral para tu copropiedad y sus residentes.",
    info: "El Seguro de Copropiedades cubre riesgos como incendios, robos, daños estructurales y responsabilidad civil. Incluye cobertura para instalaciones comunes, áreas verdes y servicios esenciales. Es ideal para mantener la seguridad de tu comunidad y proteger el patrimonio colectivo frente a cualquier imprevisto.",
    imagen: copropiedades,
  },
];

export default seguros;