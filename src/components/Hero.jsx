import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();

  return (
    <section className="hero">
      <h1>
        Aprende <span className="highlight">React</span> desde cero
      </h1>
      <p>
        Domina la librería más popular del frontend con proyectos
        prácticos y reales.
      </p>
      <button className="hero-button" onClick={() => navigate("/cursos")}>
        Ver Cursos
      </button>
    </section>
  );
}

export default Hero;