const shoe1 = {
    model: 'PegasusA12',
    gender: 'F',
    sizes: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],

    getDetails() {
        return `Shoe model ${this.model} is for ${this.gender === 'F' ? 'females' : 'males'}; and is available in sizes: ${this.sizes.join(', ')}`;
    }
};

const shoe2 = {
    model: 'PegasusA13',
    gender: 'M',
    sizes: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],

    getDetails() {
        return `Shoe model ${this.model} is for ${this.gender === 'F' ? 'females' : 'males'}; and is available in sizes: ${this.sizes.join(', ')}`;
    }
};

const shoe3 = {
    model: 'PegasusA14',
    gender: 'F',
    sizes: [1, 2, 3, 4, 5],

    getDetails() {
        return `Shoe model ${this.model} is for ${this.gender === 'F' ? 'females' : 'males'}; and is available in sizes: ${this.sizes.join(', ')}`;
    }
};

const shoe4 = {
    model: 'PegasusA15',
    gender: 'F',
    sizes: [1, 2, 3, 4, 5],

    getDetails() {
        // using conditional operator
        return `Shoe model ${this.model} is for ${this.gender === 'F' ? 'females' : this.gender === 'M' ? 'males' : 'unknown'}; and is available in sizes: ${this.sizes.join(', ')}`;
    }
};

console.log(shoe1.getDetails());
console.log(shoe2.getDetails());
console.log(shoe3.getDetails());
console.log(shoe4.getDetails());

