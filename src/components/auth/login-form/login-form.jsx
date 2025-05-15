import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./login-form.css";

export function LoginForm() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <div className="login-wrapper">
      <div className="login-card">
        <h1 className="login-title">Iniciar Sesión</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Usuario</label>
            <input type="text" required />
          </div>
          <div className="form-group">
            <label>Contraseña</label>
            <input type="password" required />
          </div>
          <button type="submit" className="login-button">
            Entrar
          </button>
        </form>
        <p className="register-link">
          ¿No tiene una cuenta? <Link to="/register">Registrarse</Link>
        </p>
      </div>
    </div>
  );
}
