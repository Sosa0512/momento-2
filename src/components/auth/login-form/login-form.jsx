import { Link } from 'react-router-dom';
import './login-form.css';

export function LoginForm() {
    return (
        <div className="login-wrapper">
            <h1>A Web Page</h1>
            <form>
                <div className="form-group">
                    <label>Usuario</label>
                    <input type="text" />
                </div>
                <div className="form-group">
                    <label>Contraseña</label>
                    <input type="password" />
                </div>
                <button type="submit">Iniciar Sesión</button>
            </form>
            <p>¿No tiene una cuenta? <Link to="/register">Registrarse</Link></p>
        </div>
    );
}

export default LoginForm;