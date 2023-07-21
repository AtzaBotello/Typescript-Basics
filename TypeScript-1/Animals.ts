class Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    makeSound(): void {
        console.log("rawr");
    }
}

class Dog extends Animal {
    breed: string;

    constructor(name: string, breed: string) {
        super(name)
        this.breed = breed;
    }

    makeSound(): void {
        console.log("Bark bark, bark bark...");
    }
}

const perro = new Dog("Buddy", "Labrador Retriever");
perro.makeSound();