import "../../styles/hero.style.css";
import { TbSquareRoundedArrowDownFilled } from "react-icons/tb";

export default function HeroGradient({ scrollToSection }: any) {
  return (
    <>
      <body>
        <section className="section-hero">
          <div className="hero">
            <div className="hero-text-box">
              <h1 className="heading-primary">Gradientes</h1>
              <p className="hero-description">
                Los gradientes son anualidades o serie de pagos periódicos, en
                los cuales cada pago es igual al anterior más una cantidad; esta
                cantidad puede ser constante o proporcional al pago
                inmediatamente anterior. El monto en que varía cada pago
                determina la clase de gradiente.
              </p>
              <a
                href="#"
                className="btn btn--outline margin-right-btn"
                onClick={scrollToSection}
              >
                <div className="content_button">
                  Calcular gradientes <TbSquareRoundedArrowDownFilled />
                </div>
              </a>
            </div>
            <div className="hero-img-box">
              <img
                src="https://i.postimg.cc/2SZpfRL8/gradient.png"
                alt="Grafica, billetes, villetes con monedas"
                className="hero-img"
              />
            </div>
          </div>
        </section>
      </body>
    </>
  );
}
