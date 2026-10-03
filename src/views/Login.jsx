import { useState } from "react";
import "./Login.css";

function Login() {
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");
  const [enviado, setEnviado] = useState(false);

  const camposVacios = correo === "" || password === "";

  const handleSubmit = (e) => {
    e.preventDefault();
    setEnviado(true);
  };

  return (
    <section className="login">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Iniciar sesión</h2>

        <label htmlFor="correo">Correo</label>
        <input
          id="correo"
          type="email"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
          disabled={enviado}
        />

        <label htmlFor="password">Contraseña</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={enviado}
        />

        <button type="submit" disabled={camposVacios || enviado}>
          Entrar
        </button>

        <p className="login-nota">
          Esto es solo una interfaz de práctica: no valida nada ni inicia
          sesión de verdad.
        </p>
      </form>
    </section>
  );
}

export default Login;