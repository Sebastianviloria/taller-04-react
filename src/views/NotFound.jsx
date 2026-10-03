import { Link } from "react-router-dom";
import "./NotFound.css";

function NotFound() {
  return (
    <section className="notfound">
      <h2>404</h2>
      <p>Esta página no existe.</p>
      <Link to="/">Volver al inicio</Link>
    </section>
  );
}

export default NotFound;