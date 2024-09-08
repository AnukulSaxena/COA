import { bit } from "../models/types";
import { NandGate, NorGate } from "./Gates";

// NAND GATE
export function NotGate_Nand(input: bit): bit {
    return NandGate(input, input);
}

export function OrGate_Nand(input1: bit, input2: bit):bit {
    return NandGate(NandGate(input1, input1),
        NandGate(input2, input2));
}

export function AndGate_Nand(input1:bit, input2:bit):bit{
    return NandGate( NandGate(input1,input2),
        NandGate(input1,input2));
}

//NOR Gate

export function NotGate_Nor(input:bit):bit{
    return NorGate(input, input);
}

export function OrGate_Nor(input1:bit, input2:bit){
    return NorGate( NorGate(input1, input2),
        NorGate(input1, input2));
}

export function AndGate_Nor(input1: bit, input2: bit): bit{
    return NorGate( NorGate(input1, input1),
        NorGate(input2, input2));
}