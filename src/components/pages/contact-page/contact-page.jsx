import './contact-page.css';

export function ContactPage() {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí iría la lógica para enviar el formulario
        alert('Formulario enviado con éxito');
    };

    return (
        <div className="contact-section">
            <h1>Contacto</h1>
            
            <div className="contact-content">
                <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Nombre completo</label>
                        <input 
                            type="text" 
                            id="name" 
                            name="name" 
                            required 
                            placeholder="Ingresa tu nombre"
                        />
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="email">Correo electrónico</label>
                        <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            required 
                            placeholder="tu@email.com"
                        />
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="subject">Asunto</label>
                        <input 
                            type="text" 
                            id="subject" 
                            name="subject" 
                            required 
                            placeholder="Motivo de tu contacto"
                        />
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="message">Mensaje</label>
                        <textarea 
                            id="message" 
                            name="message" 
                            rows="5" 
                            required 
                            placeholder="Escribe tu mensaje aquí..."
                        ></textarea>
                    </div>
                    
                    <button type="submit" className="submit-button">
                        Enviar mensaje
                    </button>
                </form>
                
                <div className="contact-info">
                    <h2>Información de contacto</h2>
                    <p><strong>Email:</strong> contacto@empresa.com</p>
                    <p><strong>Teléfono:</strong> +1 234 567 890</p>
                    <p><strong>Dirección:</strong> Calle Principal 123, Ciudad</p>
                    <p><strong>Horario:</strong> Lunes a Viernes, 9:00 - 18:00</p>
                </div>
            </div>
        </div>
    );
}

export default ContactPage;