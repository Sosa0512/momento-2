import { Link } from 'react-router-dom';
import './about-page.css';

export function AboutPage() {
    return (
        <div className="about-container">
            <aside className="sidebar">
                <h2>Home</h2>
                <nav className="sidebar-nav">
                    <Link to="/services">Servicios</Link>
                    <Link to="/contact">Contacto</Link>
                    <Link to="/about">Acerca de</Link>
                    <Link to="/logout">Cerrar Sesión</Link>
                </nav>
            </aside>

            <main className="main-content">
                <h1>Acerca de</h1>
            </main>
        </div>
    );
}

export default AboutPage;