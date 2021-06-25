console.log('Before the function definition!');

// function name is case sensitive
// lower case: a, b, c
// upper case: A, B, C
function testFn() {
    let msg; // variable declaration
    msg = 'Hello Web Development Course!'; // assignment

    let msg2 = "This is a sample program";

    // expreseeion vs statement

    // call log method on console object
    console.log(msg); // msg is the argument to console.log method

    console.log(msg2);

    let x = 4; // variable declaration and assignment in the same line

    console.log(x);
    console.log(`x+2 is ${x + 2}`); // variable replacement: ${} can contain expresseions
    console.log(`x*x is ${x * x}`);


    // string concatenation:
    console.log(msg + msg2);

    console.log(msg + ' ' + msg2);

    console.log(msg + ' Today is day' + 6);

    console.log('');
    console.log(msg + ' x is ' + x);

    console.log(msg + ' x+2 is ' + x + 2);
    console.log(msg + ' x+2 is ' + (x + 2));

    // precedence and associativity of operators
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

    y = x + 3 * 5;
    console.log('y is ' + y);

    document.getElementById('testBtnId').style.fontSize = '3rem';
    document.getElementById('testBtnId').style.color = 'maroon';
}

console.log('After the function definition!');
