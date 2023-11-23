import { Link } from "react-router-dom";
import NavBar from "../components/navbar";
import "../funtions/home";
import "../styles/home.style.css";
import Footer from "../components/footer";

export default function HomePage() {
  return (
    <>
      <NavBar />
      <section className="hero-section">
        <div className="hero-container">
          <div className="titleh">
            <h1>Ingeniería económica</h1>
          </div>
          <div className="message">
            <p>
              La ingeniería económica es una disciplina que aplica principios
              económicos y análisis cuantitativo para tomar decisiones
              financieras. Su objetivo es evaluar la viabilidad y rentabilidad
              de proyectos e inversiones mediante herramientas como el valor
              presente neto, la tasa interna de retorno y el análisis de costos
              y beneficios.
            </p>
          </div>
          <div className="card-grid">
            <a className="card">
              <Link to={"/interes-simple"}>
                <div
                  className="card_background"
                  style={{
                    backgroundImage:
                      "url(https://i.postimg.cc/9fq13Yz5/engin-akyurt-DQajipl-Dxn-M-unsplash.jpg)",
                  }}
                ></div>
                <div className="card_content">
                  <p className="card_category">Tema #1</p>
                  <h3 className="card_heading">Interés simple</h3>
                </div>
              </Link>
            </a>
            <a className="card">
              <Link to={"/interes-compuesto"}>
                <div
                  className="card_background"
                  style={{
                    backgroundImage:
                      "url(https://i.postimg.cc/fbd3Pcq2/towfiqu-barbhuiya-jpqyf-K7-GB4w-unsplash.jpg)",
                  }}
                ></div>
                <div className="card_content">
                  <p className="card_category">Tema #2</p>
                  <h3 className="card_heading">Interés compuesto</h3>
                </div>
              </Link>
            </a>
            <a className="card" href="#">
              <Link to={"/gradiente"}>
                <div
                  className="card_background"
                  style={{
                    backgroundImage:
                      "url(https://images.unsplash.com/photo-1556680262-9990363a3e6d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60)",
                  }}
                ></div>
                <div className="card_content">
                  <p className="card_category">Tema #3</p>
                  <h3 className="card_heading">Gradientes</h3>
                </div>
              </Link>
            </a>
            <a className="card" href="#">
              <Link to={"/TIR"}>
                <div
                  className="card_background"
                  style={{
                    backgroundImage:
                      "url(https://images.unsplash.com/photo-1557004396-66e4174d7bf6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60)",
                  }}
                ></div>
                <div className="card_content">
                  <p className="card_category">Tema #4</p>
                  <h3 className="card_heading_name_large">Tasa Interna de Retorno (TIR)</h3>
                </div>
              </Link>
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
