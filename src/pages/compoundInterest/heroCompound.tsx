import { TbSquareRoundedArrowDownFilled } from "react-icons/tb";
import "../../styles/hero.style.css";

export default function HeroCompound({ scrollToSection }: any) {
  return (
    <>
      <body>
        <section className="section-hero">
          <div className="hero">
            <div className="hero-text-box">
              <h1 className="heading-primary">Interés compuesto</h1>
              <p className="hero-description">
                El interés compuesto es el interés que se calcula sobre el
                capital inicial, más los intereses generados en periodos
                anteriores. Es decir, los intereses se acumulan al capital para
                generar nuevos intereses.
              </p>
              <a
                href="#"
                className="btn btn--outline margin-right-btn"
                onClick={scrollToSection}
              >
                <div className="content_button">
                  Calcular interés compuesto <TbSquareRoundedArrowDownFilled />
                </div>
              </a>
            </div>
            <div className="hero-img-box">
              <img
                src="https://i.postimg.cc/nL4tL4Yf/Ingenieriaeco2.png"
                alt="Dolares, silueta de hombre sentado en monedas, manos entregando dinero"
                className="hero-img"
              />
            </div>
          </div>
        </section>
      </body>
    </>
  );
}
