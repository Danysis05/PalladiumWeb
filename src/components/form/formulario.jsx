import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Mensaje from "../../assets/utils/mensaje/mensaje"; // 1. Importamos el componente Mensaje
import "./formulario.css";

const ContactoForm = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);

  // 2. Estado para controlar el Modal
  const [modal, setModal] = useState({
    isOpen: false,
    tipo: "success",
    titulo: "",
    mensaje: "",
  });

  // Función para cerrar el modal
  const cerrarModal = () => {
    setModal((prev) => ({ ...prev, isOpen: false }));
  };

  const enviarCorreo = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_p41ydnk",
        "template_bm07mtu",
        formRef.current,
        "YguD6VpR44xGJhuk_"
      )
      .then(() => {
        // 3. ÉXITO: Mostramos el modal de success
        setModal({
          isOpen: true,
          tipo: "success",
          titulo: "¡Mensaje Enviado!",
          mensaje: "Gracias por escribirnos. Un asesor se pondrá en contacto contigo muy pronto.",
        });
        formRef.current.reset();
      })
      .catch((error) => {
        // 3. ERROR: Mostramos el modal de error
        console.error("Error al enviar:", error);
        setModal({
          isOpen: true,
          tipo: "error",
          titulo: "Error al enviar",
          mensaje: "Hubo un problema al enviar tu mensaje. Por favor, revisa tu conexión o inténtalo más tarde.",
        });
      })
      .finally(() => setLoading(false));
  };

  return (
    <section className="contacto-wrapper">
      <div className="contacto-container">
        <form ref={formRef} onSubmit={enviarCorreo} className="contacto-form">
          <div className="form-header">
            <h2>Necesitas Información</h2>
            <p>Déjanos tus datos y un asesor profesional te contactará pronto.</p>
          </div>

          <div className="form-grid">
            {/* Fila 1 */}
            <div className="form-group">
              <input type="text" name="nombre" placeholder=" " required />
              <label>Nombre completo</label>
            </div>

            <div className="form-group">
              <input type="text" name="ocupación" placeholder=" " required />
              <label>Ocupación</label>
            </div>

            {/* Fila 2 */}
            <div className="form-group">
              <input type="email" name="email" placeholder=" " required />
              <label>Correo electrónico</label>
            </div>

            <div className="form-group">
              <input type="tel" name="telefono" placeholder=" " required />
              <label>Teléfono</label>
            </div>

            {/* Fila 3 - Ancho completo */}
            <div className="form-group full-width">
              <textarea name="mensaje" rows="4" placeholder=" " required />
              <label>Tu mensaje...</label>
            </div>
          </div>

          <button type="submit" className="submit-btn" disabled={loading}>
            <span>{loading ? "Enviando..." : "Enviar mensaje"}</span>
            {!loading && <i className="icon-arrow"></i>}
          </button>
        </form>
      </div>

      {/* 4. Renderizamos el componente Mensaje */}
      <Mensaje
        isOpen={modal.isOpen}
        onClose={cerrarModal}
        titulo={modal.titulo}
        mensaje={modal.mensaje}
        tipo={modal.tipo}
        textoBoton="Entendido"
      />
    </section>
  );
};

export default ContactoForm;