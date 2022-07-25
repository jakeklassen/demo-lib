/**
 * Function to add `n` numbers
 * @param numbers
 * @returns
 */
export const sum = (...numbers: number[]) => numbers.reduce((a, b) => a + b, 0);
