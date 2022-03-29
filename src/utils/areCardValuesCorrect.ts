import { CardValue } from "../types/CardTypes";

type Operator = "add" | "sub" | "mul" | "div";

const OPERATORS: Operator[] = ["add", "sub", "mul", "div"];

/**
 * receives 4 numbers and 3 operators in order, and calculates the value
 *
 */
const calculate = (
  valA: CardValue,
  valB: CardValue,
  valC: CardValue,
  valD: CardValue,
  opA: Operator,
  opB: Operator,
  opC: Operator
) => {
  return 24;
};

/**
 * this function returns true if the 4 numbers passed in can
 * create a correct solution = 24
 *
 * 2+1*7+1 = true
 *
 * initial function (A,B,C,D), 3ops
 * recursive function (B,C,D), 2ops
 *
 * (A+B*C)*D
 * A + B * C * D
 *
 *(A + B)* C * D
 *(A + B * C)* D
 *
 * A +(B * C)* D
 *(A +(B * C))* D
 * A +((B * C)* D)
 * A +(B * C * D)
 *
 * A + B *(C * D)
 *
 *(A + B)*(C * D)
 */
const areCardValuesCorrect = (
  a: CardValue,
  b: CardValue,
  c: CardValue,
  d: CardValue
) => {
  for (let i = 0; i < OPERATORS.length; i++) {
    const firstOp = OPERATORS[i];
    for (let j = 0; j < OPERATORS.length; j++) {
      const secondOp = OPERATORS[j];
      for (let k = 0; k < OPERATORS.length; k++) {
        const thirdOp = OPERATORS[k];
        const calculatedValue = calculate(
          a,
          b,
          c,
          d,
          firstOp,
          secondOp,
          thirdOp
        );
        if (calculatedValue === 24) return true;
      }
    }
  }
  return false;
};

export default areCardValuesCorrect;
