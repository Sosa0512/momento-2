import './home-page.css';

function HomePage() {
    return (
        <div className="home-page page">
            <h1 className="page-title">Bienvenido a Nuestra Página</h1>
            <div className="home-content">
                <section className="home-section">
                    <h2>Nuestra Plataforma</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod,
                        nisl eget aliquam ultricies, nunc nunc aliquet nunc, vitae aliquam nisl
                        nunc vitae nisl. Nullam euismod, nisl eget aliquam ultricies.
                    </p>
                </section>

                <section className="home-section">
                    <h2>Servicios Destacados</h2>
                    <div className="featured-services">
                        <div className="service-card">
                            <h3>Servicio 1</h3>
                            <p>Descripción breve del servicio destacado número 1.</p>
                        </div>
                        <div className="service-card">
                            <h3>Servicio 2</h3>
                            <p>Descripción breve del servicio destacado número 2.</p>
                        </div>
                        <div className="service-card">
                            <h3>Servicio 3</h3>
                            <p>Descripción breve del servicio destacado número 3.</p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default HomePage;