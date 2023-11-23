import {
  calcularMc,
  calcularIc,
  calcularN,
  calculari,
  calcularC,
} from "./calculos";

export type result = {
  v1: number;
  v2: number;
};

export function calcular(data: any): result {
  if (data.vf === 0 || isNaN(data.vf)) {
    console.log("entra a vf");

    const vf = calcularMc(
      parseFloat(data.vp),
      parseFloat(data.i),
      parseFloat(data.inputTiempo), data.isAnual == "acm" ? "acm" : ""
    );
    const Ic = calcularIc(vf, parseFloat(data.vp));
    return { v1: vf, v2: Ic };
  }

  if (data.inputTiempo === 0 || isNaN(data.inputTiempo)) {
    const n = calcularN(
      parseFloat(data.vf),
      parseFloat(data.vp),
      parseFloat(data.i), data.isAnual == "acm" ? "acm" : ""
    );

    const I = calcularIc(parseFloat(data.vf), parseFloat(data.vp));
    return {
      v1: n,
      v2: I,
    };
  }

  if (data.i === 0 || isNaN(data.i)) {
    const i = calculari(
      parseFloat(data.vf),
      parseFloat(data.vp),
      parseFloat(data.inputTiempo), data.isAnual == "acm" ? "acm" : ""
    );
    const I = calcularIc(parseFloat(data.vf), parseFloat(data.vp));
    return {
      v1: i,
      v2: I,
    };
  }

  if (data.vp === 0 || isNaN(data.vp)) {
    const vp = calcularC(
      parseFloat(data.vf),
      parseFloat(data.i),
      parseFloat(data.inputTiempo), data.isAnual == "acm" ? "acm" : ""
    );
    const I = calcularIc(parseFloat(data.vf), vp);
    return {
      v1: vp,
      v2: I,
    };
  }

  return { v1: 0, v2: 0 };
}
