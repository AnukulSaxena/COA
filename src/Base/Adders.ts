import { AndGate, OrGate, XorGate } from "./Gates";
import { to8BitBinary } from "../helpers";
import { bit,IAdderReturnType } from "../models/types";


export function HalfAdder(input1: bit, input2:bit):IAdderReturnType{

    return {
        Sum:XorGate(input1, input2),
        Carry: AndGate(input1,input2)
    }
}

export function FullAdder(input1:bit, input2:bit, carry:bit):IAdderReturnType{

    const FirstHalfAdderResult = HalfAdder(input1, input2);

    const SecondHalfAdderResult = HalfAdder(carry,FirstHalfAdderResult.Sum);

    const OrResult = OrGate(FirstHalfAdderResult.Carry, SecondHalfAdderResult.Carry);


    return{
        Sum: SecondHalfAdderResult.Sum,
        Carry:OrResult
    }
}

export function _8bitAdder(X:number,Y:number):{Sum: number,Carry: bit}{

    const BinaryX = to8BitBinary(X);
    const BinaryY = to8BitBinary(Y);

    console.log(BinaryX, BinaryY);

    const LSB = FullAdder(
        parseInt(BinaryX[7], 10) as bit,
        parseInt(BinaryY[7], 10) as bit,
        0
    );

    // console.log("Least Significant Bit: ", LSB);

    const SecondBit = FullAdder(
        parseInt(BinaryX[6], 10) as bit,
        parseInt(BinaryY[6], 10) as bit,
        LSB.Carry
    );

    // console.log("SecondBit: ", SecondBit);

    const ThirdBit = FullAdder(
        parseInt(BinaryX[5], 10) as bit,
        parseInt(BinaryY[5], 10) as bit,
        SecondBit.Carry
    );

    // console.log("ThirdBit: ", ThirdBit);

    const FourthBit = FullAdder(
        parseInt(BinaryX[4], 10) as bit,
        parseInt(BinaryY[4], 10) as bit,
        ThirdBit.Carry
    );

    // console.log("FourthBit: ", FourthBit);

    const FifthBit = FullAdder(
        parseInt(BinaryX[3], 10) as bit,
        parseInt(BinaryY[3], 10) as bit,
        FourthBit.Carry
    );

    // console.log("FifthBit: ", FifthBit);

    const SixthBit = FullAdder(
        parseInt(BinaryX[2], 10) as bit,
        parseInt(BinaryY[2], 10) as bit,
        FifthBit.Carry
    );

    // console.log("SixthBit: ", SixthBit);

    const SeventhBit = FullAdder(
        parseInt(BinaryX[1], 10) as bit,
        parseInt(BinaryY[1], 10) as bit,
        SixthBit.Carry
    );

    // console.log("SeventhBit: ", SeventhBit);

    const MSB = FullAdder(
        parseInt(BinaryX[0], 10) as bit,
        parseInt(BinaryY[0], 10) as bit,
        SeventhBit.Carry
    );

    // console.log("Most Significant Bit: ", MSB);

    let result = '';

    result = result.concat(MSB.Sum.toString());
    result = result.concat(SeventhBit.Sum.toString());
    result = result.concat(SixthBit.Sum.toString());
    result = result.concat(FifthBit.Sum.toString());
    result = result.concat(FourthBit.Sum.toString());
    result = result.concat(ThirdBit.Sum.toString());
    result = result.concat(SecondBit.Sum.toString());
    result = result.concat(LSB.Sum.toString());

    console.log("Concatenated Sum of All Bits: ", result);

    return {
        Sum: parseInt(result, 2),
        Carry: MSB.Carry
    }
    
}

