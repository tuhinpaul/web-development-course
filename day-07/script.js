'use strict';

const clickMe = function () {
    console.log('Inside clickMe()');
};

let clickMe2 = clickMe;

// console.log(clickMe2);
clickMe2();

// multi line comment: everthing between /* and */

/**
 * assigning a non-function to clickMe2:
 * now error will be raised if clickMe2 is treated as a function:
 * */
// clickMe2 = 2;
// console.log(clickMe2);


const c7 = {
    // property:
    color: 'blue',

    // method
    setColor(newColor) {
        this.color = newColor;
    },

    // apply method
    apply: function() {
        // use this to access other methods/properties.
        //
        // this is a reference to the object
        // on which the method is being called

        document.getElementById('testBtn').style.color = this.color;
    }
};

const execute = function() {
    c7.setColor(
        document.getElementById('btnColor').value
    );
    c7.apply();
}

// if else
// loop

// Javascript Falsy values: https://developer.mozilla.org/en-US/docs/Glossary/Truthy

let x = 11; // integer
// boolean: true false
// = and == and ===  are different

if (x == 0) {
    console.log(`x is 0`);
} else if (x % 3 == 0) {
    console.log(`x is divisible by 3.`);
} else if (x % 3 == 1) {
    console.log(`remainder of x/3 is 1.`);
} else {
    console.log(`remainder of x/3 is 2.`);
}

// loop: for, while, do..while
// https://www.w3schools.com/js/js_loop_while.asp


for(let i = 1; i <= 50; i++) {
    if (i % 2 == 0) {
        console.log(`${i} is even`);
    }
}
