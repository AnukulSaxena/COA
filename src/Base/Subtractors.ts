import { XorGate, NotGate, AndGate, OrGate } from "./Gates";
import { bit, ISubtractorReturnType } from "../models/types";
import { to8BitBinary } from "../helpers";

export function HalfSubtractor(minuEnd: bit, subtrahEnd:bit):ISubtractorReturnType{

    return {
        Difference:XorGate(minuEnd, subtrahEnd),
        Bout: AndGate(NotGate(minuEnd),subtrahEnd)
    }
}

export function FullSubtractor(minuEnd:bit, subtrahEnd:bit, Bin:bit):ISubtractorReturnType{
    // console.log("MinuEnd: "+minuEnd+" SubtrahEnd: "+subtrahEnd+" BIN: "+Bin)
    const FirstHalfSubtractorResult = HalfSubtractor(minuEnd,subtrahEnd);

    const SecondHalfSubtractorResult = HalfSubtractor(FirstHalfSubtractorResult.Difference, Bin);

    return{
        Difference: SecondHalfSubtractorResult.Difference,
        Bout: OrGate(SecondHalfSubtractorResult.Bout, FirstHalfSubtractorResult.Bout)
    }
}


export function _8bitSubtractor(X:number,Y:number):{Difference: number,Bout: bit}{

    const BinaryX = to8BitBinary(X);
    const BinaryY = to8BitBinary(Y);

    console.log(BinaryX, BinaryY);

    const LSB = FullSubtractor(
        parseInt(BinaryX[7], 10) as bit,
        parseInt(BinaryY[7], 10) as bit,
        0
    );

    // console.log("Least Significant Bit: ", LSB);

    const SecondBit = FullSubtractor(
        parseInt(BinaryX[6], 10) as bit,
        parseInt(BinaryY[6], 10) as bit,
        LSB.Bout
    );

    // console.log("SecondBit: ", SecondBit);

    const ThirdBit = FullSubtractor(
        parseInt(BinaryX[5], 10) as bit,
        parseInt(BinaryY[5], 10) as bit,
        SecondBit.Bout
    );

    // console.log("ThirdBit: ", ThirdBit);

    const FourthBit = FullSubtractor(
        parseInt(BinaryX[4], 10) as bit,
        parseInt(BinaryY[4], 10) as bit,
        ThirdBit.Bout
    );

    // console.log("FourthBit: ", FourthBit);

    const FifthBit = FullSubtractor(
        parseInt(BinaryX[3], 10) as bit,
        parseInt(BinaryY[3], 10) as bit,
        FourthBit.Bout
    );

    // console.log("FifthBit: ", FifthBit);

    const SixthBit = FullSubtractor(
        parseInt(BinaryX[2], 10) as bit,
        parseInt(BinaryY[2], 10) as bit,
        FifthBit.Bout
    );

    // console.log("SixthBit: ", SixthBit);

    const SeventhBit = FullSubtractor(
        parseInt(BinaryX[1], 10) as bit,
        parseInt(BinaryY[1], 10) as bit,
        SixthBit.Bout
    );

    // console.log("SeventhBit: ", SeventhBit);

    const MSB = FullSubtractor(
        parseInt(BinaryX[0], 10) as bit,
        parseInt(BinaryY[0], 10) as bit,
        SeventhBit.Bout
    );

    // console.log("Most Significant Bit: ", MSB);

    let result = '';

    result = result.concat(MSB.Difference.toString());
    result = result.concat(SeventhBit.Difference.toString());
    result = result.concat(SixthBit.Difference.toString());
    result = result.concat(FifthBit.Difference.toString());
    result = result.concat(FourthBit.Difference.toString());
    result = result.concat(ThirdBit.Difference.toString());
    result = result.concat(SecondBit.Difference.toString());
    result = result.concat(LSB.Difference.toString());

    console.log("Concatenated Difference of All Bits: ", result);


    return {
        Difference: parseInt(result, 2),
        Bout: MSB.Bout
    }
    
}



