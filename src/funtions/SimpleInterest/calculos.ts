import { calulartimepo } from "../utils/timeAndDate";

export function calcularVf(
  vp: number,
  i: number,
  t: number,
  años: number,
  meses: number,
  dias: number,
  fecha1: string,
  fecha2: string,
  periodo: string
): number {
  const vf: number =
    vp *
    (1 +
      (i / 100) * calulartimepo(periodo, t, años, meses, dias, fecha1, fecha2));
  console.log(vf);

  return parseFloat(vf.toFixed(2));
}

export function calcularI(
  vp: number,
  i: number,
  t: number,
  años: number,
  meses: number,
  dias: number,
  fecha1: string,
  fecha2: string,
  periodo: string
): number {
  const interes: number =
    vp *
    (i / 100) *
    calulartimepo(periodo, t, años, meses, dias, fecha1, fecha2);
  return parseFloat(interes.toFixed(2));
}

export function calcularVp(
  vf: number,
  i: number,
  t: number,
  años: number,
  meses: number,
  dias: number,
  fecha1: string,
  fecha2: string,
  periodo: string
): number {
  const vp: number =
    vf /
    (1 +
      (i / 100) * calulartimepo(periodo, t, años, meses, dias, fecha1, fecha2));

  return parseFloat(vp.toFixed(2));
}

export function calcularVpSinVf(
  I: number,
  i: number,
  t: number,
  años: number,
  meses: number,
  dias: number,
  fecha1: string,
  fecha2: string,
  periodo: string
): number {
  const vp: number =
    I /
    ((i / 100) * calulartimepo(periodo, t, años, meses, dias, fecha1, fecha2));

  return parseFloat(vp.toFixed(2));
}

export function calculari(
  vp: number,
  vf: number,
  t: number,
  años: number,
  meses: number,
  dias: number,
  fecha1: string,
  fecha2: string,
  periodo: string
): number {
  const i: number =
    ((vf / vp - 1) /
      calulartimepo(periodo, t, años, meses, dias, fecha1, fecha2)) *
    100;
  console.log(i);

  return Math.round(i);
}

export function calculari_i(I:number,vp:number,t:number,años:number,meses:number,dias:number,fecha1:string,fecha2:string,periodo:string):number {
  console.log(I);
  console.log(vp);
  
  
  
  const t2 : number = calulartimepo(periodo, t, años, meses, dias, fecha1, fecha2);
  const i = (I / (vp * t2)) * 100;
  console.log(i);
  
  return parseFloat(i.toFixed(2));
}

export function calcularT(vp: number, vf: number, i: number) {
  const t = (vf / vp - 1) / i;

  return t;
}

export type ddMMAAAA = {
  d: number;
  m: number;
  a: number;
};

export function calcularTsinvf(I: number, vp: number, i: number): ddMMAAAA {
  const t = I / (vp * (i / 100));

  const años = Math.trunc(t);

  var meses = ((t % 1) * 365) / 30;

  var dias = (meses % 1) * 30;

  meses = Math.trunc(meses);

  dias = Math.trunc(dias);

  return { d: dias, m: meses, a: años };
}
