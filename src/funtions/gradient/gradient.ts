import { calcularGAAPV, calcularGADPV } from "../../funtions/gradient/calculos";
export type result = {
    v1: number;
    v2: number;
};


export function calcular(data: any): result {
    if (data.vf === 0 || isNaN(data.vf)) {
        console.log("entra a vf");
        var vf: number = 0;
        switch (data.tipoGradiente) {
            case 'GAA':
                vf = calcularGAAPV(parseFloat(data.k), parseFloat(data.i), parseFloat(data.n), parseFloat(data.g));
                break;
            case 'GAD':
                vf = calcularGADPV(parseFloat(data.k), parseFloat(data.i), parseFloat(data.n), parseFloat(data.g));
                break;

            case 'GGD':

                break;
            case 'GGA':

                break;

            default:
                break;
        }


        return { v1: vf, v2: 0 };
    }

    return {
        v1: 0,
        v2: 0
    }
}