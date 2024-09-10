import { XorGate, NotGate, AndGate, OrGate } from "./Gates";
import { bit, ISubtractorReturnType } from "../models/types";

export function HalfSubtractor(minuEnd: bit, subtrahEnd:bit):ISubtractorReturnType{

    return {
        Difference:XorGate(minuEnd, subtrahEnd),
        Bout: AndGate(NotGate(minuEnd),subtrahEnd)
    }
}

export function FullSubtractor(minuEnd:bit, subtrahEnd:bit, Bin:bit):ISubtractorReturnType{

    const FirstHalfSubtractorResult = HalfSubtractor(minuEnd,subtrahEnd);

    const SecondHalfSubtractorResult = HalfSubtractor(Bin, FirstHalfSubtractorResult.Difference);

    return{
        Difference: SecondHalfSubtractorResult.Difference,
        Bout: OrGate(SecondHalfSubtractorResult.Bout, FirstHalfSubtractorResult.Bout)
    }
}



console.log(HalfSubtractor(0,1))
