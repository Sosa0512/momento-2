import service3Image from "../imagenes2/empleo.jpg"; // Reemplaza con imágenes reales
import service2Image from "../imagenes2/escritorio.jpg"; // Usando la misma imagen para el ejemplo
import service1Image from "../imagenes2/hero.jpg"; // Ajusta la ruta según tu estructura
import "./services-page.css";

export function ServicesPage() {
  const services = [
    {
      id: 1,
      title: "Servicio 1",
      description:
        "Descripción detallada del primer servicio que ofrecemos a nuestros clientes.",
      features: [
        "Característica principal 1",
        "Beneficio destacado 2",
        "Ventaja competitiva 3",
      ],
      image: service1Image,
      imageAlt: "Ilustración del Servicio 1",
    },
    {
      id: 2,
      title: "Servicio 2",
      description:
        "Descripción detallada del segundo servicio disponible para nuestros usuarios.",
      features: [
        "Funcionalidad exclusiva A",
        "Beneficio adicional B",
        "Soporte especializado C",
      ],
      image: service2Image,
      imageAlt: "Ilustración del Servicio 2",
    },
    {
      id: 3,
      title: "Servicio 3",
      description:
        "Información sobre nuestro tercer servicio premium con todas sus características.",
      features: [
        "Opción avanzada X",
        "Integración con Y",
        "Solución personalizada Z",
      ],
      image: service3Image,
      imageAlt: "Ilustración del Servicio 3",
    },
  ];

  return (
    <div className="services-section">
      <h1>Nuestros Servicios</h1>

      {services.map((service) => (
        <div key={service.id} className="service">
          <div className="service-content">
            <h2>{service.title}</h2>
            <p>{service.description}</p>
            <div className="service-features">
              <ul>
                {service.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>
          <img
            src={service.image}
            alt={service.imageAlt}
            className="service-image"
          />
        </div>
      ))}
    </div>
  );
}

export default ServicesPage;
