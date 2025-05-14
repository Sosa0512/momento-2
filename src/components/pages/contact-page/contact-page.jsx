import './contact-page.css';

function ContactPage() {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Mensaje enviado correctamente!');
        // Here you would typically send the form data to a server
    };

    return (
        <div className="contact-page page">
            <h1 className="page-title">Contacto</h1>

            <div className="contact-container">
                <div className="contact-info">
                    <h2>Información de Contacto</h2>
                    <p><strong>Dirección:</strong> Calle Ejemplo 123, Ciudad</p>
                    <p><strong>Teléfono:</strong> +1 234 567 890</p>
                    <p><strong>Email:</strong> info@ejemplo.com</p>

                    <h3>Horario de Atención</h3>
                    <p>Lunes a Viernes: 9:00 AM - 6:00 PM</p>
                    <p>Sábados: 10:00 AM - 2:00 PM</p>
                </div>

                <div className="contact-form-container">
                    <h2>Envíanos un Mensaje</h2>
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label className="form-label" htmlFor="name">Nombre</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="form-input"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label className="form-label" htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="form-input"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label className="form-label" htmlFor="subject">Asunto</label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                className="form-input"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label className="form-label" htmlFor="message">Mensaje</label>
                            <textarea
                                id="message"
                                name="message"
                                className="form-input form-textarea"
                                rows="5"
                                required
                            ></textarea>
                        </div>

                        <button type="submit" className="form-button">Enviar Mensaje</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ContactPage;