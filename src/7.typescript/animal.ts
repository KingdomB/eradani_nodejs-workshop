class Animal {
    private numLegs: number;
    private sound: string;
    
    constructor(numLegs: number, sound: string) {
        this.numLegs = numLegs;
        this.sound = sound;
    }

    makeSound(): string {
        return this.sound;
    }
}

let dog: Animal = new Animal(4, 'woof');
let bird: Animal = new Animal(2, 'chirp');

console.log(dog.makeSound());
console.log(bird.makeSound());