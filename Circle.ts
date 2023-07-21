class Circle2 {
    radius: number;
    #PI: number = 3.1415;

    constructor(radius: number) {
        this.radius = radius;
    }

    calculateArea(): number {
        return this.#PI * this.radius**2;
    }
}

const circle2 = new Circle2(5);
console.log(circle2.calculateArea());

