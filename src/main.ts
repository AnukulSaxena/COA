import { _8bitAdder } from "./Base/Adders";
import { _8bitSubtractor } from "./Base/Subtractors";

const X = 31;
const Y = 22;

const result = _8bitAdder(X,Y);

console.log(`${X} + ${Y} = ${result.Sum}`);


const NewResult = _8bitSubtractor(X,Y);
console.log(`${X} - ${Y} = ${NewResult.Difference}`);
