export function add(summandA: number, summandB: number): number {
  return summandA + summandB;
}

export function subtract(minuend: number, subtrahend: number): number {
  return minuend - subtrahend;
}

export function multiply(faktorA: number, faktorB: number): number {
  return faktorA * faktorB;
}

export function divide(dividentA: number, divisorB: number): number {
  if (divisorB === 0) {
    throw new Error("Division durch Null ist nicht erlaubt.");
  }
  return dividentA / divisorB;
}
