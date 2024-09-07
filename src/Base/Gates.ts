import { bit } from "../models/types";

export function OrGate(input1:bit , input2:bit):bit{
    if(input1)
        return 1;
    if(input2)
        return 1;
    return 0;
}

export function AndGate(input1:bit , input2:bit):bit{
    if(input1)
        if(input2)
            return 1;
    
    if(input2)
        if(input1)
            return 1;
    return 0;
}

export function NotGate(input:bit):bit{
    if(input)
        return 0;
    else
        return 1;
}

export function NorGate(input1:bit, input2:bit):bit{
   return NotGate(OrGate(input1, input2));
}

export function NandGate(input1:bit, input2:bit):bit{
    return NotGate(AndGate(input1, input2));
}

export function XorGate(input1:bit,input2:bit):bit{
    return AndGate(OrGate(input1,input2), NandGate(input1, input2));
}

export function XnorGate(input1:bit,input2:bit):bit{
    return NotGate(XorGate(input1, input2))
}