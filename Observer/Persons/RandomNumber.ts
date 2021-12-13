export function getRandomNumber(min: number = -100, max: number = 100): number {
    const dif = min > 0 ? max - min : max + min;
    return Math.random() * (dif) + max ^ 0;
}

export function getRandomCoefficient(min: number = 0, max: number = 2): number {
    const dif = min > 0 ? max - min : max + min;
    return Math.random() * (dif) + max;
}