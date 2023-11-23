import "../../styles/hero.style.css";
import { TbSquareRoundedArrowDownFilled } from "react-icons/tb";

export default function HeroTir({ scrollToSection }: any) {
  return (
    <>
      <body>
        <section className="section-hero">
          <div className="hero">
            <div className="hero-text-box">
              <h1 className="heading-primary">Tasa Interna de Retorno (TIR)</h1>
              <p className="hero-description">
                La tasa interna de retorno (TIR) es una métrica financiera que
                indica la rentabilidad de una inversión al calcular la tasa de
                interés a la cual el valor presente neto (VPN) de los flujos de
                efectivo de un proyecto se vuelve igual a cero.
              </p>
              <a
                href="#"
                className="btn btn--outline margin-right-btn"
                onClick={scrollToSection}
              >
                <div className="content_button">
                  Calcular TIR <TbSquareRoundedArrowDownFilled />
                </div>
              </a>
            </div>
            <div className="hero-img-box">
              <img
                src="https://i.postimg.cc/yN4M1Q0h/tir.png"
                alt="Billetes y teclado de un computador con billetes y monedas"
                className="hero-img"
              />
            </div>
          </div>
        </section>
      </body>
    </>
  );
}
