class Rectangle {
    // Приватні поля
    #width;
    #height;

    constructor(width, height) {
        this.#width = width;
        this.#height = height;
    }

    // Геттер для ширини
    get width() {
        return this.#width;
    }

    // Сеттер для ширини
    set width(value) {
        if (value > 0) {
            this.#width = value;
        } else {
            console.log('Width must be positive.');
        }
    }

    // Геттер для висоти
    get height() {
        return this.#height;
    }

    // Сеттер для висоти
    set height(value) {
        if (value > 0) {
            this.#height = value;
        } else {
            console.log('Height must be positive.');
        }
    }

    // Геттер для площі
    get area() {
        return this.#width * this.#height;
    }
}

// Використання класу
const rectangle = new Rectangle(5, 10);

console.log(rectangle.width); // 5
console.log(rectangle.height); // 10
console.log(rectangle.area); // 50

rectangle.width = 7;
rectangle.height = 14;

console.log(rectangle.width); // 7
console.log(rectangle.height); // 14
console.log(rectangle.area); // 98

rectangle.width = -3; // Width must be positive.
rectangle.height = 0; // Height must be positive.
