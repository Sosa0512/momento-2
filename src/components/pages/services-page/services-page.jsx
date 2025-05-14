import './services-page.css';

function ServicesPage() {
    const services = [
        {
            id: 1,
            title: 'Servicio 1',
            description: 'Descripción detallada del servicio 1. Aquí puede ir toda la información relevante sobre este servicio específico.',
            features: ['Característica 1', 'Característica 2', 'Característica 3']
        },
        {
            id: 2,
            title: 'Servicio 2',
            description: 'Descripción detallada del servicio 2. Este servicio ofrece soluciones para problemas específicos de nuestros clientes.',
            features: ['Característica 1', 'Característica 2', 'Característica 3']
        },
        {
            id: 3,
            title: 'Servicio 3',
            description: 'Descripción detallada del servicio 3. Una opción premium para aquellos que buscan resultados excepcionales.',
            features: ['Característica 1', 'Característica 2', 'Característica 3']
        }
    ];

    return (
        <div className="services-page page">
            <h1 className="page-title">Nuestros Servicios</h1>
            <p className="services-intro">
                Ofrecemos una variedad de servicios diseñados para satisfacer sus necesidades.
                Explore nuestras opciones a continuación.
            </p>

            <div className="services-container">
                {services.map(service => (
                    <div key={service.id} className="service-item">
                        <h2>{service.title}</h2>
                        <p>{service.description}</p>
                        <h3>Características</h3>
                        <ul>
                            {service.features.map((feature, index) => (
                                <li key={index}>{feature}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ServicesPage;