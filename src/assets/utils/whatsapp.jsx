import { FaWhatsapp } from "react-icons/fa";

const WhatsappIcon = ({
  size = 40,
  color = "#25D366",
  fixed = true,
  className = "",
}) => {
  const phone = "3150909277";
  const message =
    "Hola, me gustaría obtener más información";

  const link = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      style={{
        position: fixed ? "fixed" : "absolute",
        bottom: "20px",
        right: "20px",
        zIndex: 9999,
      }}
    >
      <FaWhatsapp size={size} color={color} />
    </a>
  );
};

export default WhatsappIcon;
