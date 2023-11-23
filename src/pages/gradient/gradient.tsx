import { useForm } from "react-hook-form";
import NavBar from "../../components/navbar";

import { useRef } from "react";
import "../../styles/gradient.style.css";
import HeroGradient from "./heroGradient";
import Footer from "../../components/footer";
import { calcularA, calcularGAAFA, calcularGAAFV, calcularGAAPA, calcularGAAPI, calcularGAAPV, calcularGADFA, calcularGADFV, calcularGADPA, calcularGADPI, calcularGADPV } from "../../funtions/gradient/calculos";
export default function GradientPage() {
  const sectionRef = useRef<null | HTMLDivElement>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm();

  const onSubmit = handleSubmit((data) => {
    console.log(data);
    var resulado = 0;

    if (data.k === 0 || isNaN(data.k)) {
      resulado = calcularA(parseFloat(data.vf), parseFloat(data.i), parseFloat(data.g), parseFloat(data.n));
      setValue("k", resulado.toFixed(2));
    }

    if (data.tipoGraditente == "GAAI") {
      resulado = calcularGAAPI(parseFloat(data.k), parseFloat(data.i), parseFloat(data.g));
      setValue("vp", resulado.toFixed(2))
    }

    if (data.tipoGraditente == "GADI") {
      resulado = calcularGADPI(parseFloat(data.k), parseFloat(data.i), parseFloat(data.g));
      setValue("vp", resulado.toFixed(2))
    }



    if (data.tipoGraditente == "GAA") {
      if (data.vp === 0 || isNaN(data.vp)) {
        if (data.t == "ven") {
          resulado = calcularGAAPV(parseFloat(data.k), parseFloat(data.i), parseFloat(data.n), parseFloat(data.g), data.isAnual);
          setValue("vp", resulado.toFixed(2))
        } else if (data.t == "ant") {
          resulado = calcularGAAPA(parseFloat(data.k), parseFloat(data.i), parseFloat(data.n), parseFloat(data.g));
          setValue("vp", resulado.toFixed(2))
        }
      } else if (data.vf === 0 || isNaN(data.vf)) {
        if (data.t == "ven") {
          resulado = calcularGAAFV(parseFloat(data.k), parseFloat(data.i), parseFloat(data.n), parseFloat(data.g));
          setValue("vf", resulado.toFixed(2))
        } else if (data.t == "ant") {
          resulado = calcularGAAFA(parseFloat(data.k), parseFloat(data.i), parseFloat(data.n), parseFloat(data.g));
          setValue("vf", resulado.toFixed(2))
        }
      }

    }

    if (data.tipoGraditente == "GAD") {
      if (data.vp === 0 || isNaN(data.vp)) {
        if (data.t == "ven") {
          resulado = calcularGADPV(parseFloat(data.k), parseFloat(data.i), parseFloat(data.n), parseFloat(data.g), data.isAnual);
          setValue("vp", resulado.toFixed(2))
        } else if (data.t == "ant") {
          resulado = calcularGADPA(parseFloat(data.k), parseFloat(data.i), parseFloat(data.n), parseFloat(data.g));
          setValue("vp", resulado.toFixed(2))
        }
      } else if (data.vf === 0 || isNaN(data.vf)) {
        if (data.t == "ven") {
          resulado = calcularGADFV(parseFloat(data.k), parseFloat(data.i), parseFloat(data.n), parseFloat(data.g), data.isAnual);
          setValue("vf", resulado.toFixed(2))
        } else if (data.t == "ant") {
          resulado = calcularGADFA(parseFloat(data.k), parseFloat(data.i), parseFloat(data.n), parseFloat(data.g));
          setValue("vf", resulado.toFixed(2))
        }
      }
    }






  });

  return (
    <>
      <NavBar />
      <HeroGradient
        scrollToSection={() => {
          if (sectionRef.current) {
            sectionRef.current.scrollIntoView({ behavior: "smooth" });
          }
        }}
      />
      <section className="section-gradient">
        <h1 className="title">Calcular gradientes</h1>
        <div className="container-gradient">
          <form onSubmit={onSubmit} className="form-gradient">
            <div className="dropone2">
              <label htmlFor="tipogradiente" className="labels2">
                Tipo de gradiente
              </label>
              <div className="drop2">
                <select className="dropdown" {...register("tipoGraditente")}>
                  <option value="GAA">Gradiente aritmético creciente</option>
                  <option value="GAD">Gradiente aritmético decreciente</option>
                  <option value="GAAI">Gradiente aritmético creciente infinito</option>
                  <option value="GADI">Gradiente aritmético decreciente infinito</option>
                </select>
              </div>
            </div>

            <div className="dropone3">
              <label htmlFor="tipogradiente" className="labels2">
                Tipo de pago
              </label>
              <div className="drop2">
                <select className="dropdown" {...register("t")}>
                  <option value="ven">Vencido</option>
                  <option value="ant">Anticipado</option>

                </select>
              </div>
            </div>

            <div className="dropone3">
              <label htmlFor="tipogradiente" className="labels2">
                tipo de tasa
              </label>
              <div className="drop2">
                <select className="dropdown" {...register("isAnual")}>
                  <option value="acm">capitalizable mensual</option>
                  <option value="normal">normal</option>

                </select>
              </div>
            </div>


            <div className="input-container ic2">
              <input
                placeholder=" "
                id="valorfinal"
                className="input"
                type="number"
                step={"0.001"}
                {...register("vp", { min: 0, valueAsNumber: true })}
              />
              <div className="cut cut-short-snew"></div>
              <label htmlFor="valorfinal" className="placeholder">
                Valor presente (vp)
              </label>
            </div>

            <div className="input-container ic2">
              <input
                placeholder=" "
                id="cuotainicial"
                className="input"
                type="number"
                step={"0.001"}
                {...register("k", { min: 0, valueAsNumber: true })}
              />
              <div className="cut cut-short-sone2"></div>
              <label htmlFor="cuotainicial" className="placeholder">
                Cuota inicial (K)
              </label>
            </div>

            <div className="input-container ic2">
              <input
                placeholder=" "
                id="tasadeinteres"
                className="input"
                type="number"
                step={"0.001"}
                {...register("i", { min: 0, valueAsNumber: true })}
              />
              <div className="cut"></div>
              <label htmlFor="tasadeinteres" className="placeholder">
                Tasa de interes (i)
              </label>
            </div>
            <div className="input-container ic2">
              <input
                placeholder=" "
                id="ingresos"
                className="input"
                type="number"
                step={"0.001"}
                {...register("n", { min: 0, valueAsNumber: true })}
              />
              <div className="cut cut-short-three"></div>
              <label htmlFor="ingresos" className="placeholder">
                Ingresos (n)
              </label>
            </div>
            <div className="input-container ic2">
              <input
                placeholder=" "
                id="aumento"
                className="input"
                type="number"
                step={"0.001"}
                {...register("g", { min: 0, valueAsNumber: true })}
              />
              <div className="cut cut-short-three"></div>
              <label htmlFor="aumento" className="placeholder">
                Aumento (G)
              </label>
            </div>

            <div className="input-container ic2">
              <input
                placeholder=" "
                id="valorfinal"
                className="input"
                type="number"
                step={"0.001"}
                {...register("vf", { min: 0, valueAsNumber: true })}
              />
              <div className="cut cut-short-snew"></div>
              <label htmlFor="valorfinal" className="placeholder">
                Valor final (vf)
              </label>
            </div>
            <button type="submit" className="submit">
              Calcular
            </button>
            <button type="reset" className="cleartwo">
              Limpiar campos
            </button>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
}
