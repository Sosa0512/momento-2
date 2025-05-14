import './about-page.css';

function AboutPage() {
    return (
        <div className="about-page page">
            <h1 className="page-title">Acerca de Nosotros</h1>

            <section className="about-section">
                <h2>Nuestra Historia</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod,
                    nisl eget aliquam ultricies, nunc nunc aliquet nunc, vitae aliquam nisl
                    nunc vitae nisl. Fusce quis lacus eget nisl luctus tincidunt. Sed auctor
                    euismod nisl, nec aliquam nisl. Sed auctor euismod nisl, nec aliquam nisl.
                </p>
                <p>
                    Suspendisse potenti. In hac habitasse platea dictumst. Donec sagittis,
                    est eget lacinia tincidunt, nisl nunc aliquet nisl, eget aliquam nisl
                    nunc vitae nisl. Fusce quis lacus eget nisl luctus tincidunt.
                </p>
            </section>

            <section className="about-section">
                <h2>Nuestra Misión</h2>
                <p>
                    Nuestra misión es proporcionar soluciones de alta calidad que satisfagan
                    las necesidades de nuestros clientes y superen sus expectativas. Nos
                    esforzamos por ofrecer un servicio excepcional y construir relaciones
                    a largo plazo basadas en la confianza y el respeto mutuo.
                </p>
            </section>

            <section className="about-section">
                <h2>Nuestro Equipo</h2>
                <div className="team-container">
                    <div className="team-member">
                        <div className="member-photo placeholder"></div>
                        <h3>Nombre Apellido</h3>
                        <p>CEO & Fundador</p>
                    </div>
                    <div className="team-member">
                        <div className="member-photo placeholder"></div>
                        <h3>Nombre Apellido</h3>
                        <p>Director de Operaciones</p>
                    </div>
                    <div className="team-member">
                        <div className="member-photo placeholder"></div>
                        <h3>Nombre Apellido</h3>
                        <p>Director de Tecnología</p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default AboutPage;