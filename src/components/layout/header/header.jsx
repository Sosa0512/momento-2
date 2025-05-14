import { Link, useNavigate } from 'react-router-dom';
import './header.css';

function Header() {
    const navigate = useNavigate();
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

    const handleLogout = () => {
        localStorage.removeItem('isLoggedIn');
        navigate('/login');
    };

    return (
        <header className="header">
            <div className="logo">
                <Link to="/">Mi Sitio</Link>
            </div>
            <nav className="nav">
                <ul className="nav-list">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/services" className="nav-link">Servicios</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contact" className="nav-link">Contacto</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about" className="nav-link">Acerca de</Link>
                    </li>
                    {isLoggedIn ? (
                        <li className="nav-item">
                            <button onClick={handleLogout} className="nav-button">Cerrar Sesión</button>
                        </li>
                    ) : (
                        <li className="nav-item">
                            <Link to="/login" className="nav-button">Iniciar Sesión</Link>
                        </li>
                    )}
                </ul>
            </nav>
        </header>
    );
}

export default Header;