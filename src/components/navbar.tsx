import { Link } from "react-router-dom";
import "../styles/navbar.style.css";

export default function NavBar() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container container">
          <div className="hamburger-lines">
            <span className="line line1"></span>
            <span className="line line2"></span>
            <span className="line line3"></span>
          </div>
          <ul className="menu-items">
            <li>
              <Link className="links" to={"/interes-simple"}>
                Interés simple
              </Link>
            </li>
            <li>
              <Link className="links" to={"/interes-compuesto"}>
                Interés compuesto
              </Link>
            </li>
            <li>
              <Link className="links" to={"/gradiente"}>
                Gradientes
              </Link>
            </li>
            <li>
              <Link className="links" to={"/TIR"}>
                TIR
              </Link>
            </li>
          </ul>
          <Link className="links" to={"/"}>
            <h1 className="logo">Ingeniería económica</h1>
          </Link>
        </div>
      </nav>
    </>
  );
}
