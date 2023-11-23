import { set, useForm } from "react-hook-form";
import NavBar from "../../components/navbar.tsx";
import Hero from "./heroSimple.tsx";
import Footer from "../../components/footer.tsx";
import "../../styles/simpleInterest.style.css";
import { calcular, result } from "../../funtions/SimpleInterest/simpleInterest";
import { useRef, useState } from "react";
import { IoCalculator } from "react-icons/io5";
import {
  calcularTsinvf,
  ddMMAAAA,
} from "../../funtions/SimpleInterest/calculos.ts";

export default function SimpleInteresPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm();

  const [visibleSpan, SetVisibleSpan] = useState(false);
  const [TiempoSpan, SetTiempoSpan] = useState("");

  const sectionRef = useRef<null | HTMLDivElement>(null);

  const onSubmit = handleSubmit((data) => {
    console.log(data);
    let control: boolean = true;

    if (data.tasa === 0 || isNaN(data.tasa)) {
      const resultado: result = calcular(data);
      setValue("tasa", resultado.v1);
    }
    if (data.inputTiempo === 0 || isNaN(data.inputTiempo)) {
      const result: ddMMAAAA = calcularTsinvf(
        parseFloat(data.interes),
        parseFloat(data.capital),
        parseFloat(data.tasa)
      );

      setValue("tiempo", "DD/MM/AAAA");

      setValue("dias", result.d);
      setValue("meses", result.m);
      setValue("año", result.a);
    }

    if (
      (data.capital === 0 || isNaN(data.capital)) &&
      (data.vf === 0 || (isNaN(data.vf) && control))
    ) {
      console.log("entro en vp y vf");
      control = false;
      const resultado: result = calcular(data);
      setValue("capital", resultado.v1);
      setValue("vf", resultado.v2);
    }

    if (
      (isNaN(data.capital) || data.capital === 0) &&
      (isNaN(data.interes) || data.interes === 0) &&
      control
    ) {
      console.log("entro en vp y I");
      const resultado: result = calcular(data);
      control = false;
      setValue("capital", resultado.v1);
      setValue("interes", resultado.v2);
    }

    if (
      (isNaN(data.vf) || data.vf === 0) &&
      (isNaN(data.interes) || data.interes === 0) &&
      control
    ) {
      console.log("entro en vf y I");

      const resultado: result = calcular(data);
      setValue("vf", resultado.v1);
      setValue("interes", resultado.v2);
    }

    if (
      (isNaN(data.tasa) || data.tasa === 0) &&
      (isNaN(data.interes) || data.interes === 0) &&
      control
    ) {
      console.log("entro en tasa y I");

      const resultado: result = calcular(data);
      setValue("tasa", resultado.v1);
      setValue("interes", resultado.v2);
    }

    if (
      (data.interes === 0 || isNaN(data.interes)) &&
      (data.vf === 0 || isNaN(data.vf)) &&
      control
    ) {
      const resultado: result = calcular(data);
      setValue("interes", resultado.v2);
      setValue("vf", resultado.v1);
    }
  });

  return (
    <>
      <NavBar />
      <Hero
        scrollToSection={() => {
          if (sectionRef.current) {
            sectionRef.current.scrollIntoView({ behavior: "smooth" });
          }
        }}
      />
      <section className="section-simpleInterest" ref={sectionRef}>
        <h1 className="title">Calcular interés simple</h1>
        <div className="container-InteresSimple">
          <form onSubmit={onSubmit} className="form-InteresSimple">
            <div className="input-container ic1">
              <input
                placeholder=" "
                id="capital"
                className="input"
                type="number"
                {...register("capital", {
                  min: 0,
                  valueAsNumber: true,
                })}
              />
              {errors.capital && (
                <>
                  <br /> <span>Solo se aceptan numeros positivos</span>
                </>
              )}
              <div className="cut cut-short"></div>
              <label htmlFor="capital" className="placeholder">
                Capital
              </label>
            </div>

            <div className="input-container ic2">
              <input
                id="tasainteres"
                className="input"
                type="number"
                step={0.0001}
                placeholder=" "
                {...register("tasa", {
                  min: 0,
                  max: 100,
                  valueAsNumber: true,
                })}
              />
              {errors.tasa && (
                <>
                  <br /> <span>Solo se aceptan numeros entre 1 y 100</span>
                </>
              )}
              <div className="cut"></div>
              <label htmlFor="tasa" className="placeholder">
                Tasa de interés (%)
              </label>
            </div>

            <div className="dropone">
              <label htmlFor="Tiempo" className="labels">
                Tiempo
              </label>
              <select className="dropdown" {...register("tiempo", {})}>
                <option value="" hidden>
                  Seleccione una opción
                </option>
                <option value="dias">Dias</option>
                <option value="meses">Meses</option>
                <option value="años">Años</option>
                <option value="DD/MM/AAAA">DD/MM/AAAA</option>
                <option value="fechas">Fechas</option>
              </select>
              {errors.tiempo && (
                <>
                  <br /> <span>Debe escoger una opción</span>
                </>
              )}
              <br />
            </div>

            {watch("tiempo") === "dias" ||
              watch("tiempo") === "meses" ||
              watch("tiempo") === "años" ? (
              <div className="input-container ic23">
                <input
                  id="inputTiempo"
                  className="input"
                  type="number"
                  placeholder=" "
                  {...register("inputTiempo", {
                    min: 0,
                    valueAsNumber: true,
                  })}
                />
                <div className="cut cut-short"></div>
                <label htmlFor="inputTiempo" className="placeholder">
                  {watch("tiempo").charAt(0).toUpperCase() +
                    watch("tiempo").slice(1)}
                </label>
              </div>
            ) : null}

            {watch("tiempo") === "DD/MM/AAAA" ? (
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

            {watch("tiempo") === "fechas" ? (
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
                className="input"
                type="number"
                placeholder=" "
                step={0.01}
                {...register("vf", { min: 0, valueAsNumber: true })}
              />
              <div className="cut cut-short-three"></div>
              <label htmlFor="vf" className="placeholder">
                Valor futuro
              </label>
            </div>
            <div className="botones">
              <button type="submit" className="submit">
                Calcular
                <div className="icon">
                  <IoCalculator />
                </div>
              </button>
              <button type="reset" className="clear">
                Limpiar campos
              </button>
            </div>
          </form>
        </div>
        <div hidden={visibleSpan}>
          <span>{TiempoSpan}</span>
        </div>
      </section>
      <Footer />
    </>
  );
}
