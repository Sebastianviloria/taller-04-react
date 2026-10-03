import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <span className="navbar-logo">ReactAcademy</span>
      <div className="navbar-links">
        <NavLink to="/" end>Inicio</NavLink>
        <NavLink to="/cursos">Cursos</NavLink>
        <NavLink to="/nosotros">Nosotros</NavLink>
        <NavLink to="/login">Login</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;