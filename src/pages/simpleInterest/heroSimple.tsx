import "../../styles/hero.style.css";
import { TbSquareRoundedArrowDownFilled } from "react-icons/tb";

export default function HeroSimple({ scrollToSection }: any) {
  return (
    <>
      <body>
        <section className="section-hero">
          <div className="hero">
            <div className="hero-text-box">
              <h1 className="heading-primary">Interés simple</h1>
              <p className="hero-description">
                El interés simple es el interés que se paga sobre un préstamo o
                que se gana en una inversión, calculado sobre el capital inicial
                y el tiempo del préstamo o la inversión.
              </p>
              <a
                href="#"
                className="btn btn--outline margin-right-btn"
                onClick={scrollToSection}
              >
                <div className="content_button">
                  Calcular interés simple <TbSquareRoundedArrowDownFilled />
                </div>
              </a>
            </div>
            <div className="hero-img-box">
              <img
                src="https://i.postimg.cc/jSPnX14V/Ingenieriaeco.png"
                alt="Dinero, hombre calculando, cerdito con monedas"
                className="hero-img"
              />
            </div>
          </div>
        </section>
      </body>
    </>
  );
}
