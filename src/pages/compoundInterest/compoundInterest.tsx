import Footer from "../../components/footer";
import NavBar from "../../components/navbar";
import HeroCompound from "./heroCompound";
import "../../styles/compoundInterest.style.css";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import { IoCalculator } from "react-icons/io5";
import {
  calcular,
  result,
} from "../../funtions/compoundInterest/compoundInterest";

export default function CompoundInteresPage() {
  const sectionRef = useRef<null | HTMLDivElement>(null);
  const {
    handleSubmit,
    register,
    watch,
    setValue,
    formState: { errors },
  } = useForm();

  const onsubmit = handleSubmit((data) => {
    console.log(data);

    if (data.vf === 0 || isNaN(data.vf)) {
      const resultado: result = calcular(data);
      console.log("resultado", resultado);

      setValue("vf", resultado.v1);
      setValue("interes", resultado.v2);
    }

    if (data.inputTiempo === 0 || isNaN(data.inputTiempo)) {
      const resultado: result = calcular(data);
      console.log("resultado", resultado);
      setValue("periodos", "dias");
      setValue("inputTiempo", resultado.v1);
      setValue("interes", resultado.v2);
    }

    if (data.i === 0 || isNaN(data.i)) {
      const resultado: result = calcular(data);
      console.log("resultado", resultado);
      setValue("i", resultado.v1);
      setValue("interes", resultado.v2);
    }

    if (data.vp === 0 || isNaN(data.vp)) {
      const resultado: result = calcular(data);
      console.log("resultado", resultado);
      setValue("vp", resultado.v1);
      setValue("interes", resultado.v2);
    }
  });

  return (
    <>
      <NavBar />
      <HeroCompound
        scrollToSection={() => {
          if (sectionRef.current) {
            sectionRef.current.scrollIntoView({ behavior: "smooth" });
          }
        }}
      />
      <section className="section-compoundInterest" ref={sectionRef}>
        <h1 className="title">Calcular interés compuesto</h1>
        <div className="container-compoundInterest">
          <form onSubmit={onsubmit} className="form-compoundInterest">
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
            <div className="input-container ic1">
              <input
                placeholder=" "
                id="vp"
                className="input"
                type="number"
                step={0.01}
                {...register("vp", {
                  valueAsNumber: true,
                  min: 0,
                })}
              />
              <div className="cut cut-short"></div>
              <label htmlFor="vp" className="placeholder">
                Capital
              </label>
            </div>

            <div className="input-container ic2">
              <input
                id="i"
                className="input"
                step={0.01}
                type="number"
                placeholder=" "
                {...register("i", { valueAsNumber: true, min: 0, max: 100 })}
              />
              <div className="cut"></div>
              <label htmlFor="i" className="placeholder">
                Tasa de interes (%)
              </label>
            </div>

            <div className="droponetwo">
              <label htmlFor="Periodos" className="labels">
                Tiempo
              </label>
              <select className="dropdown" {...register("periodos", {})}>
                <option value="" hidden>
                  Seleccione una opción
                </option>
                <option value="dias">Dias</option>
                <option value="meses">Meses</option>
                <option value="años">Años</option>
                <option value="DD/MM/AAAA">DD/MM/AAAA</option>
                <option value="fechas">Fechas</option>
              </select>
            </div>
            {watch("periodos") === "dias" ||
              watch("periodos") === "meses" ||
              watch("periodos") === "años" ? (
              <div className="input-container ic23">
                <input
                  id="inputTiempo"
                  className="input"
                  type="number"
                  placeholder=" "
                  step={0.001}
                  {...register("inputTiempo", {
                    min: 0,
                    valueAsNumber: true,
                  })}
                />
                <div className="cut cut-short"></div>
                <label htmlFor="inputTiempo" className="placeholder">
                  {watch("periodos").charAt(0).toUpperCase() +
                    watch("periodos").slice(1)}
                </label>
              </div>
            ) : null}

            {watch("periodos") === "DD/MM/AAAA" ? (
              <div className="input-container ic3">
                <input
                  id="dias"
                  className="input-one"
                  placeholder=" "
                  type="number"
                  {...register("dias", {
                    required: true,
                    min: 0,
                    valueAsNumber: true,
                  })}
                />
                <div className="cut-short-sone"></div>

                <label htmlFor="dias" className="placeholder-one">
                  Dias
                </label>
                <input
                  id="meses"
                  className="input-two"
                  type="number"
                  placeholder=" "
                  {...register("meses", {
                    required: true,
                    min: 0,
                    valueAsNumber: true,
                  })}
                />
                <div className="cut-short-stwo"></div>
                <label htmlFor="meses" className="placeholder-two">
                  Meses
                </label>

                <input
                  id="anos"
                  className="input-three"
                  type="number"
                  placeholder=" "
                  {...register("año", {
                    required: true,
                    min: 0,
                    valueAsNumber: true,
                  })}
                />
                <div className="cut cut-short-sthree"></div>
                <label htmlFor="años" className="placeholder-three">
                  Años
                </label>
              </div>
            ) : null}

            {watch("periodos") === "fechas" ? (
              <div>
                <div className="dated">
                  <label htmlFor="fecha-inicial" className="labelfecha">
                    Fecha inicial
                  </label>
                  <input
                    type="date"
                    className="fecha"
                    {...register("fechaI")}
                  />
                </div>
                <div className="dated-two">
                  <label htmlFor="fecha-final" className="labelfecha">
                    Fecha final
                  </label>
                  <input
                    type="date"
                    className="fecha"
                    {...register("fechaF")}
                  />
                </div>
              </div>
            ) : null}
            <div className="input-container ic4">
              <input
                id="intereses"
                className="input"
                type="number"
                placeholder=" "
                step={0.01}
                {...register("interes", { min: 0, valueAsNumber: true })}
              />
              {errors.interes && (
                <>
                  <br /> <span>Solo se aceptan numeros entre 1 y 100</span>
                </>
              )}
              <div className="cut cut-short-two"></div>
              <label htmlFor="interes" className="placeholder">
                Intereses
              </label>
            </div>
            <div className="input-container ic4">
              <input
                id="vf"
                step={0.01}
                className="input"
                type="number"
                placeholder=" "
                {...register("vf", { valueAsNumber: true, min: 0 })}
              />
              <div className="cut cut-short-three"></div>
              <label htmlFor="vf" className="placeholder">
                Valor futuro
              </label>
            </div>
            <div className="botones">
              <button type="submit" className="submitwo">
                Calcular
                <div className="icon">
                  <IoCalculator />
                </div>
              </button>
              <button type="reset" className="cleartwo">
                Limpiar campos
              </button>
            </div>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
}
