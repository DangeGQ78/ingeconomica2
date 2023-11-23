import {
  calcularI,
  calcularVp,
  calcularVf,
  calcularVpSinVf,
  calculari,
  calcularTsinvf,
  calculari_i,
} from "./calculos";

export type result = {
  v1: number;
  v2: number;
};

export function calcular(data: any): result {
  let control: Boolean = true;
  // calcular capital o vp
  /* if (data.inputTiempo === 0 || isNaN(data.inputTiempo)) {
    console.log("tiempo ok");

    const t: string = calcularTsinvf(
      parseFloat(data.interes),
      parseFloat(data.capital),
      parseFloat(data.tasa)
    );
    return {
      v1: t,
      v2: 0,
    };
  }*/

  if(data.tasa === 0 || isNaN(data.tasa)){
    console.log("tasa ok");
    
    const i: number = calculari_i(
      parseFloat(data.interes),
      parseFloat(data.capital),
      parseFloat(data.inputTiempo),
      parseFloat(data.año),
      parseFloat(data.meses),
      parseFloat(data.dias),
      data.fechaI,
      data.fechaF,
      data.tiempo
    );
    return {
      v1: i,
      v2: calcularI(
        parseFloat(data.capital),
        i,
        parseFloat(data.inputTiempo),
        parseFloat(data.año),
        parseFloat(data.meses),
        parseFloat(data.dias),
        data.fechaI,
        data.fechaF,
        data.tiempo
      ),
    };
  }
  if (
    (data.capital === 0 || isNaN(data.capital)) &&
    (data.vf === 0 || (isNaN(data.vf) && control))
  ) {
    const vp: number = calcularVpSinVf(
      parseFloat(data.interes),
      parseFloat(data.tasa),
      parseFloat(data.inputTiempo),
      parseFloat(data.año),
      parseFloat(data.meses),
      parseFloat(data.dias),
      data.fechaI,
      data.fechaF,
      data.tiempo
    );
    control = false;
    return {
      v1: vp,
      v2: calcularVf(
        vp,
        parseFloat(data.tasa),
        parseFloat(data.inputTiempo),
        parseFloat(data.año),
        parseFloat(data.meses),
        parseFloat(data.dias),
        data.fechaI,
        data.fechaF,
        data.tiempo
      ),
    };
  } else if ((data.capital === 0 || isNaN(data.capital)) && control) {
    const vp: number = calcularVp(
      parseFloat(data.vf),
      parseFloat(data.tasa),
      parseFloat(data.inputTiempo),
      parseFloat(data.año),
      parseFloat(data.meses),
      parseFloat(data.dias),
      data.fechaI,
      data.fechaF,
      data.tiempo
    );
    return {
      v1: vp,
      v2: calcularI(
        vp,
        parseFloat(data.tasa),
        parseFloat(data.inputTiempo),
        parseFloat(data.año),
        parseFloat(data.meses),
        parseFloat(data.dias),
        data.fechaI,
        data.fechaF,
        data.tiempo
      ),
    };
  }

  // calcular valor futuro o monto
  if ((isNaN(data.vf) || data.vf === 0) && control) {
    return {
      v1: calcularVf(
        parseFloat(data.capital),
        parseFloat(data.tasa),
        parseFloat(data.inputTiempo),
        parseFloat(data.año),
        parseFloat(data.meses),
        parseFloat(data.dias),
        data.fechaI,
        data.fechaF,
        data.tiempo
      ),
      v2: calcularI(
        parseFloat(data.capital),
        parseFloat(data.tasa),
        parseFloat(data.inputTiempo),
        parseFloat(data.año),
        parseFloat(data.meses),
        parseFloat(data.dias),
        data.fechaI,
        data.fechaF,
        data.tiempo
      ),
    };
  }

  //calcular tasa o i

  if ((data.tasa === 0 || isNaN(data.tasa)) && control) {
    const i: number = calculari(
      parseFloat(data.capital),
      parseFloat(data.vf),
      parseFloat(data.inputTiempo),
      parseFloat(data.año),
      parseFloat(data.meses),
      parseFloat(data.dias),
      data.fechaI,
      data.fechaF,
      data.tiempo
    );
    return {
      v1: i,
      v2: calcularI(
        parseFloat(data.capital),
        i,
        parseFloat(data.inputTiempo),
        parseFloat(data.año),
        parseFloat(data.meses),
        parseFloat(data.dias),
        data.fechaI,
        data.fechaF,
        data.tiempo
      ),
    };
  }

  //calcular intereses o I

  if ((data.interes === 0 || isNaN(data.interes)) && control) {
    const I: number = calcularI(
      parseFloat(data.capital),
      parseFloat(data.tasa),
      parseFloat(data.inputTiempo),
      parseFloat(data.año),
      parseFloat(data.meses),
      parseFloat(data.dias),
      data.fechaI,
      data.fechaF,
      data.tiempo
    );
    return {
      v1: I,
      v2: calcularVf(
        parseFloat(data.capital),
        parseFloat(data.tasa),
        parseFloat(data.inputTiempo),
        parseFloat(data.año),
        parseFloat(data.meses),
        parseFloat(data.dias),
        data.fechaI,
        data.fechaF,
        data.tiempo
      ),
    };
  }

  return { v1: 0, v2: 0 };
}
