import { useState } from 'react';
import { Link } from 'react-router-dom';
import './register-form.css';

function RegisterForm() {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        name: '',
        email: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Registration attempted with:', formData);
        // Here you would typically make an API call to register the user
    };

    return (
        <div className="register-form-container form-container">
            <h2 className="form-title">Registrarse</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label className="form-label" htmlFor="username">Usuario</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        className="form-input"
                        value={formData.username}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label className="form-label" htmlFor="password">Contraseña</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        className="form-input"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label className="form-label" htmlFor="name">Nombre</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-input"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label className="form-label" htmlFor="email">Correo</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-input"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className="form-button">Registrarse</button>
            </form>
            <Link to="/login" className="form-link">¿Ya tiene una cuenta?</Link>
        </div>
    );
}

export default RegisterForm;