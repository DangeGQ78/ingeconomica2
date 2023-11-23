
import { calcularInversionInicial, calcularTIR } from "./tir";


export function calculosTir(data: any, n: number): number | undefined {
    var periodoValues: number[] = [];
    try {
        const keys = Object.keys(data);
        periodoValues = keys
            .filter(key => key.includes("periodo"))
            .map(key => Number(data[key]));
        console.log(periodoValues);

    } catch (error) {
        console.log("no se pudo transformar");

    }

    if (data.tir === "" || isNaN(data.tir)) {
        var result = calcularTIR(periodoValues, data.lo);
        if (result !== undefined) {
            result = parseFloat((result * 100).toFixed(3));
        }
        return result;
    } else if (data.lo === "" || isNaN(data.lo)) {
        return calcularInversionInicial(periodoValues, data.tir)
    }

    return 0;
}


