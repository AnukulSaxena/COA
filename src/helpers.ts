export function to8BitBinary(num: number): string {
    return num.toString(2).padStart(8, '0');
}