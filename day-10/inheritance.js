class Animal {
    constructor(species) {
        console.log(`Creating an animal of species ${species}`);
    }

    print() {
        console.log(`Name: ${this.name}, Species: ${this.species}`);
    }
}

class Cat extends Animal {
    constructor(name, species) {
        super(species);

        this.name = name;
        this.species = species;
    }

    cattyFn() {
        console.log('This is a cat specific feature - they don\'t like vegetables');
    }
}

class Tiger extends Cat { }

class Lion extends Cat { }

class Canine extends Animal { }

class Dog extends Canine { }
class Wolf extends Canine { }

class IndianDog extends Dog { }


const cat1 = new Cat('Baagh Mama', 'Tigris');
cat1.print();
cat1.cattyFn();