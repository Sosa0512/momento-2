import { Link } from 'react-router-dom';
import './register-form.css';

export function RegisterForm() {
    return (
        <div className="register-wrapper">
            <form>
                <div className="form-group">
                    <label>Usuario</label>
                    <input type="text" />
                </div>
                <div className="form-group">
                    <label>Contraseña</label>
                    <input type="password" />
                </div>
                <div className="form-group">
                    <label>Nombre</label>
                    <input type="text" />
                </div>
                <div className="form-group">
                    <label>Correo</label>
                    <input type="email" />
                </div>
                <button type="submit">Registrarse</button>
            </form>
            <p>¿Ya tiene una cuenta? <Link to="/login">Iniciar sesión</Link></p>
        </div>
    );
}

export default RegisterForm;
