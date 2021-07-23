class Shoe {
    constructor(model, gender, sizes) {
        // set object properties
        this.model = model;
        this.gender = gender;
        this.sizes = sizes;
        this.manufacturedIn = 'Israel';
    }

    // method
    getDetails() {
        let genderName;

        if (this.gender === 'F' || this.gender === 'f') {
            genderName = 'females';
        } else if (this.gender === 'M' || this.gender === 'm') {
            genderName = 'females';
        } else if (this.gender === 'X' || this.gender === 'x') {
            genderName = 'unisex';
        } else {
            // option 1:
            // genderName = 'unknown';

            // option 2:
            throw new Error('Shoe model\'s gender is not defined');
        }

        // this.gender === 'F' ? 'females' : 'males'
        // this.gender === 'F' ? 'females' : this.gender === 'M' ? 'males' : 'unknown'
        return `${this.manufacturedIn}'s shoe model ${this.model} is for ${genderName}; and is available in sizes: ${this.sizes.join(', ')}`;
    }
}

const shoes = [];

shoes.push(new Shoe('PegasusA12', 'F', [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
shoes.push(new Shoe('PegasusA13', 'M', [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]));

shoes.push(new Shoe('PegasusZ_666', 'Z', [10, 12, 14]));

shoes.push(new Shoe('PegasusA14', 'F', [1, 2, 3, 4, 5]));
shoes.push(new Shoe('PegasusA15', 'M', [1, 2, 3, 4, 5]));
shoes.push(new Shoe('PegasusX_555', 'X', [6, 7, 8]));


// console.log(shoes);

for (let i = 0; i < 6; i++) {
    try {
        console.log(i + ': ' + shoes[i].getDetails());
        console.log(`Successfully processed shoe at index ${i}`);
    } catch(err) {
        console.error(err.message);
        console.error(`Failed to process shoe at index ${i}`);
        // throw err;
    } finally {
        console.log(`Processed index ${i}`);
    }
}


// console.log(shoe5.getDetails());
// console.log(shoe1.getDetails());

// console.log(shoe6.getDetails());

// console.log(shoe2.getDetails());
// console.log(shoe3.getDetails());
// console.log(shoe4.getDetails());
