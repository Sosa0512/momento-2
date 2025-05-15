import "./home-page.css";
import empleoImage from "../imagenes2/empleo.jpg";
import heroImage from "../imagenes2/hero.jpg";
import feature1Icon from "./icons/feature1.jpg";
import feature2Icon from "./icons/feature2.jpg";
import feature3Icon from "./icons/feature3.jpg";

export function HomePage() {
  const features = [
    {
      icon: feature1Icon,
      title: "Soluciones Integradas",
      description: "Todas las herramientas que necesitas en un solo lugar",
    },
    {
      icon: feature2Icon,
      title: "Soporte Personalizado",
      description: "Asistencia técnica dedicada cuando la necesites",
    },
    {
      icon: feature3Icon,
      title: "Tecnología Avanzada",
      description: "Plataforma construida con las últimas tecnologías",
    },
  ];

  return (
    <main className="home-wrapper">
      {/* Sección principal con imagen de héroe */}
      <section className="hero-section">
        <div className="hero-image-container">
          <img
            src={heroImage}
            alt="Bienvenido a nuestra plataforma"
            className="hero-image"
          />
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-text">
          <h1>Transformando tu experiencia digital</h1>
          <p className="hero-subtitle">
            Descubre una nueva forma de gestionar tus necesidades con nuestras
            soluciones integrales
          </p>
          <button className="cta-button">Conoce más</button>
        </div>
      </section>

      {/* Sección de características */}
      <section className="features-section">
        <h2 className="section-title">¿Por qué elegirnos?</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <img
                src={feature.icon}
                alt={feature.title}
                className="feature-icon"
              />
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Sección de testimonios */}
      <section className="testimonials-section">
        <h2 className="section-title">Lo que dicen nuestros clientes</h2>
        <div className="testimonial">
          <p className="testimonial-text">
            "Esta plataforma ha revolucionado completamente nuestra forma de
            trabajar. ¡Altamente recomendada!"
          </p>
          <p className="testimonial-author">
            - Carlos M., Director de Operaciones
          </p>
        </div>
      </section>

      {/* Sección de empleo */}
      <section className="empleo-section">
        <div className="empleo-content">
          <h2>Oportunidades de Empleo</h2>
          <p>
            Únete a nuestro equipo y desarrolla tu carrera profesional en un
            ambiente innovador. Estamos en constante búsqueda de talento.
          </p>
        </div>
        <img src={empleoImage} alt="Empleo" className="empleo-image" />
      </section>
    </main>
  );
}

export default HomePage;
