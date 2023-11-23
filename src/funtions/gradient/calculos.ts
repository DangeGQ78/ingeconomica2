
//calcula el Gradiente Aritmetico Ascendente Presente vencido
export function calcularGAAPV(a: number, i: number, n: number, g: number, tipoTasa: string): number {
    if (tipoTasa == "acm") {
        i = isAnualCapMen(i, true);
    }
    i = i / 100;
    const p: number = ((a * (1 - (1 + i) ** -n)) / (i)) + (g / i) * (((1 - (1 + i) ** -n) / (i)) - ((n) / ((1 + i) ** n)));

    return p;
}

//calcula el gradiente artimentico descendente presente vencido
export function calcularGADPV(a: number, i: number, n: number, g: number, tipoTasa: string): number {
    if (tipoTasa == "acm") {
        i = isAnualCapMen(i, true);
    }
    i = i / 100;
    const p: number = (a * ((((1 + i) ** n) - 1) / (i * (1 + i) ** n))) - (g / i) * (((((1 + i) ** n) - 1) / (i * ((1 + i) ** n))) - ((n) / ((1 + i) ** n)))

    return p;
}
//calcular el gradiente aritmetico ascende presente anticipado
export function calcularGAAPA(a: number, i: number, n: number, g: number): number {
    i = i / 100;

    const p: number = (((a * (1 - (1 + i) ** (-n))) / (1)) + ((g / i) * (((1 - (1 + i) ** (-n)) / (i)) - ((n) / (1 + i) ** n)))) * (1 + i)
    return p;
}

export function calcularGADPA(a: number, i: number, n: number, g: number): number {
    i = i / 100;
    const p: number = (((a * (1 - (1 + i) ** (-n))) / (1)) - ((g / i) * (((1 - (1 + i) ** (-n)) / (i)) - ((n) / (1 + i) ** n)))) * (1 + i)
    return p;
}

//gradiente aritmetico ascendente futuro anticipado
export function calcularGAAFA(a: number, i: number, n: number, g: number): number {
    i = i / 100;
    console.log("entro futuro anticipado");

    const f: number = ((a * ((((1 + i) ** n) - 1)) / (i)) + (g / i) * (((((1 + i) ** n) - 1) / (i)) - n)) * (1 + i);
    return f;
}

//gradiente aritmetico ascendente futuro vencido
export function calcularGAAFV(a: number, i: number, n: number, g: number): number {
    i = i / 100;
    console.log("entro aqui");
    console.log((a * (((1 + i) ** n) - 1) / (i)));
    console.log((g / i));
    console.log((((((1 + i) ** n) - 1) / i) - n));

    const f: number = (a * (((1 + i) ** n) - 1) / (i)) + (g / i) * (((((1 + i) ** n) - 1) / i) - n);
    return f;
}

//gradiente aritmetico descendente futuro anticipado
export function calcularGADFA(a: number, i: number, n: number, g: number): number {
    i = i / 100;
    const f: number = ((a * (((1 + i) ** n) - 1) / (i)) - (g / i) * (((((1 + i) ** n) - 1) / (i)) - n)) * (1 + i);
    return f;
}

//gradiente aritmetico descendente futuro vencido
export function calcularGADFV(a: number, i: number, n: number, g: number, tipoTasa: string): number {
    console.log("entro en futuro descendente vencido");
    if (tipoTasa == "acm") {
        i = isAnualCapMen(i, true);
    }
    i = i / 100;
    const part1: number = (a * (((1 + i) ** n) - 1) / (i));
    const part2: number = (g / i);
    const part3: number = (((((1 + i) ** n) - 1) / i) - n)
    const f: number = part1 - part2 * part3;
    console.log(f);

    return f;
}

//gradiente aritmetico ascendente presente infinito

export function calcularGAAPI(a: number, i: number, g: number): number {
    i = i / 100;
    const p: number = (a / i) + (g / (i ** 2));
    return p;
}

//gradiente aritmetico descendente presente infinito

export function calcularGADPI(a: number, i: number, g: number): number {
    i = i / 100;
    const p: number = (a / i) - (g / (i ** 2));
    return p;
}

export function calcularA(vf: number, i: number, g: number, n: number) {
    i = i / 100;
    const a: number = (vf - ((g / i) * (((((1 + i) ** n) - 1) / (i)) - n))) / (((((1 + i) ** n) - 1) / (i)));
    return a;
}

function isAnualCapMen(i: number, op: boolean): number {
    if (op) {
        return i / 12;
    } else {
        return i;
    }

}