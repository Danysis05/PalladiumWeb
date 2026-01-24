import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Header from "./components/header/header";
import Footer from "./components/footer/footer"; // Importamos el nuevo Footer
import Home from "./pages/home";
import Contacto from "./pages/contacto/contacto";
import Nosotros from "./pages/nosotros/nosotros";
import Pagos from "./pages/pagos/pagos";
import WhatsappIcon from "./assets/utils/whatsapp";

function App() {
  return (
    <BrowserRouter>
      <Header />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pagos" element={<Pagos />} />
        <Route path="/about" element={<Nosotros />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>

      {/* El Footer se coloca aquí para que sea visible en todas las rutas */}
      <Footer />

      <WhatsappIcon className="whatsapp-Icon" size={55} />
    </BrowserRouter>
  );
}

export default App;        