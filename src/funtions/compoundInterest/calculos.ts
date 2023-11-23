export function calcularMc(c: number, i: number, n: number, op: string): number {
  if (op == "acm") {
    i = isAnualCapMen(i, true);
  }

  const vf = c * Math.pow(1 + i / 100, n);
  return parseFloat(vf.toFixed(2));
}

export function calcularC(mc: number, i: number, n: number, op: string): number {
  if (op == "acm") {
    i = isAnualCapMen(i, true);
  }

  const c = mc / Math.pow(1 + i / 100, n);
  return parseFloat(c.toFixed(2));
}

export function calculari(mc: number, c: number, n: number, op: string): number {

  const i = Math.pow(mc / c, 1 / n) - 1;
  console.log(i);

  return parseFloat((i * 100).toFixed(1));
}

export function calcularN(mc: number, c: number, i: number, op: string): number {
  if (op == "acm") {
    i = isAnualCapMen(i, true);
  }

  const n = (Math.log(mc) - Math.log(c)) / Math.log(1 + i / 100);
  return Math.round(n);
}

export function calcularIc(mc: number, c: number): number {
  const Ic = mc - c;
  return parseFloat(Ic.toFixed(2));
}

function isAnualCapMen(i: number, op: boolean): number {
  if (op) {
    return i / 12;
  } else {
    return i;
  }

}