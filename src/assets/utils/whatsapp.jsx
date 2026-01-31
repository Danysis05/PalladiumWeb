import { FaWhatsapp } from "react-icons/fa";

const WhatsappIcon = ({
  size = 30, // Reduje un poco el tamaño del icono para que quepa bien en el círculo
  bgColor = "#25D366",
  iconColor = "#FFFFFF",
  fixed = true,
  className = "",
}) => {
  const phone = "3150909277";
  const message = "Hola, me gustaría obtener más información";

  const link = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      style={{
        position: fixed ? "fixed" : "relative",
        bottom: fixed ? "20px" : "auto",
        right: fixed ? "20px" : "auto",
        zIndex: 9999,
        backgroundColor: bgColor, // Fondo verde
        color: iconColor,         // Silueta blanca
        borderRadius: "50%",      // Lo hace circular
        width: "60px",            // Tamaño del círculo
        height: "60px",           // Tamaño del círculo
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0px 4px 10px rgba(0,0,0,0.3)", // Sombra para que resalte
        transition: "transform 0.3s ease",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      <FaWhatsapp size={size} />
    </a>
  );
};

export default WhatsappIcon;