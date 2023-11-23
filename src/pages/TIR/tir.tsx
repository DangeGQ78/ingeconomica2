import NavBar from "../../components/navbar";
import { useForm } from "react-hook-form";
import "../../styles/tir.styles.css";
import { useState } from "react";
import { calculosTir } from "../../funtions/tir/calculos";
import HeroTir from "./heroTir";
import { useRef } from "react";
import { BiSolidMessageSquareAdd } from "react-icons/bi";
import { MdDeleteForever } from "react-icons/md";
import Footer from "../../components/footer";

export default function TirPage() {
  const sectionRef = useRef<null | HTMLDivElement>(null);
  const [periodos, setPeriodos] = useState([""]);
  const addItem = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setPeriodos([...periodos, ""]);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm();

  const onSubmit = handleSubmit((data) => {
    console.log(data);
    try {
      if (data.tir == "" || isNaN(data.tir)) {
        const result = calculosTir(data, periodos.length);
        console.log(result);

        setValue("tir", result);
      } else if (data.lo === "" || isNaN(data.lo)) {
        setValue("lo", calculosTir(data, periodos.length));
      }
    } catch (error) {
      alert("ha ocurrido un error :c");
    }
  });

  return (
    <>
      <NavBar />
      <HeroTir
        scrollToSection={() => {
          if (sectionRef.current) {
            sectionRef.current.scrollIntoView({ behavior: "smooth" });
          }
        }}
      />
      <section className="section-gradient">
        <h1 className="title">Calcular TIR</h1>
        <div className="container-gradient">
          <form onSubmit={onSubmit} className="form-gradient">
            <div className="input-container ic1">
              <input
                placeholder=" "
                id="inversionInicial"
                className="input"
                type="number"
                step={"0.001"}
                {...register("lo", { min: 0, valueAsNumber: true })}
              />
              <div className="cut"></div>
              <label htmlFor="inversionInicial" className="placeholder">
                Inversion inicial (lo)
              </label>
            </div>

            <div className="input-container ic2">
              <button className="badd" onClick={addItem}>
                Flujos de efectivo <BiSolidMessageSquareAdd />
              </button>
            </div>

            <div>
              <ul>
                {periodos.map((periodo, index) => (
                  <li>
                    <div className="campos2">
                      <input
                        placeholder=" "
                        id="periodo"
                        className="input2"
                        type="number"
                        key={index}
                        {...register(`periodo${index + 1}`, {
                          valueAsNumber: true,
                        })}
                      />

                      <button className="bdel">
                        <MdDeleteForever />
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="input-container ic2">
              <input
                placeholder=" "
                id="tir"
                className="input"
                type="number"
                step={"0.001"}
                {...register("tir", { min: 0, valueAsNumber: true })}
              />
              <div className="cut cut-short-sthree"></div>
              <label htmlFor="inversionInicial" className="placeholder">
                TIR
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
