export function calulartimepo(
  tiempo: string,
  inputTiempo: number,
  años: number = 0,
  meses: number = 0,
  dias: number = 0,
  fechaI?: string,
  fechaF?: string
): number {
  switch (tiempo) {
    case "dias":
      return convertirAaños.dias(inputTiempo);

    case "meses":
      return convertirAaños.meses(inputTiempo);

    case "años":
      return convertirAaños.años(inputTiempo);

    case "DD/MM/AAAA":
      return convertirAaños.DDMMAAAA(años, meses, dias);

    case "fechas":
      if (fechaI && fechaF) {
        return convertirAaños.fechas(fechaI, fechaF);
      } else {
        return 0; // Manejo de error, falta de fechas
      }

    default:
      return 0;
  }
}

const convertirAaños = {
  dias: (dias: number) => {
    let años;
    return (años = dias / 365);
  },
  meses: (meses: number) => {
    let años;
    return (años = meses / 12);
  },
  trimestre: (meses: number) => {
    let años;
    return (años = (meses * 3) / 12);
  },
  bimestre: (meses: number) => {
    let años;
    return (años = (meses * 2) / 12);
  },
  años: (años: number) => {
    return años;
  },
  DDMMAAAA: (años: number, meses: number, dias: number) => {
    return años + meses / 12 + dias / 365;
  },
  fechas: (fechaI: string, fechaF: string) => {
    const fecha1 = new Date(fechaI);
    const fecha2 = new Date(fechaF);
    const restar: number = fecha2.getTime() - fecha1.getTime();
    const diferenciaDias: number = restar / (1000 * 60 * 60 * 24);
    return diferenciaDias / 365;
  },
};
