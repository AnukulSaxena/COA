import { _8bitAdder } from "./Base/Adders";

const X = 31;
const Y = 22;

const result = _8bitAdder(X,Y);

console.log(`${X} + ${Y} = ${result.Sum}`);