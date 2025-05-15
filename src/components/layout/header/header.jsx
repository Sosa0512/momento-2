import { Link, useLocation } from "react-router-dom";
import "./header.css";
import logo from "../assetes/logos.jpg"; // Asegúrate de tener un archivo de logo

export function Header() {
  const location = useLocation();

  return (
    <header className="header-container">
      <div className="logo-container">
        <Link to="/">
          <img src={logo} alt="Logo de la empresa" className="logo" />
        </Link>
      </div>

      <nav className="header-nav">
        <Link
          to="/"
          className={`nav-link ${location.pathname === "/" ? "active" : ""}`}
        >
          Home
        </Link>
        <Link
          to="/services"
          className={`nav-link ${
            location.pathname === "/services" ? "active" : ""
          }`}
        >
          Servicios
        </Link>
        <Link
          to="/contact"
          className={`nav-link ${
            location.pathname === "/contact" ? "active" : ""
          }`}
        >
          Contacto
        </Link>
        <Link
          to="/about"
          className={`nav-link ${
            location.pathname === "/about" ? "active" : ""
          }`}
        >
          Acerca de
        </Link>
      </nav>

      <div className="user-actions">
        <Link to="/login" className="logout-button">
          Cerrar sesión
        </Link>
      </div>
    </header>
  );
}

export default Header;
