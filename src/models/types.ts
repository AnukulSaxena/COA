export type bit = 0 | 1;

export interface IAdderReturnType{
    Sum: bit;
    Carry: bit;
}

export interface ISubtractorReturnType{
    Difference: bit;
    Bout: bit;
}