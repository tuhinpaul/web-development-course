'use strict';

// anonymous function
// array
// array functions
// json

// Next Day (Day 09):
// reference
// lambda function
// class
// promise
// promise chain
// async/await


function basicsOfArrayAndObjects() {
    const intData = -5;
    const boolData = true;
    const strData = 'some string';

    const obj = { a: -10, b: 2, c: 'cccc', boolData, d: !boolData, 0: 45, 'a  . b': 'strange' };
    // obj.a is -10

    const someArr = [1, 5, 6, 7, -2, 24, 5, obj];

    console.log({ intData, boolData, strData, obj, unsortedMarks: someArr });

    console.log(`Number of elements in array someArr is ${someArr.length}`);
    console.log(`1st element in someArr is ${someArr[0]}`);
    console.log(`3rd element in someArr is ${someArr[2]}`);
    // someArr[someArr.length - 1]) is the last element in array someArr
    // use JSON.stringify function
    console.log(`Last element in someArr is ${JSON.stringify(someArr[someArr.length - 1])}`);
}

function execute() {
    const printArrayAndObjBasics = false;

    // print some basic output using array and objects
    // if variable printArrayAndObjBasics is truthy:
    if (printArrayAndObjBasics) {
        basicsOfArrayAndObjects();
    }

    const marks = [1, 5, 6, 7, -2, 14, 5];
    let studentMarks = [
        {
            name: 'David',
            marks: 1
        },
        {
            name: 'Ladya',
            marks: 5
        },
        {
            name: 'Charlotte',
            marks: 6
        },
        {
            name: 'Chih',
            marks: 7
        },
        {
            name: 'Jonathon',
            marks: -2
        },
        {
            name: 'Remya',
            marks: 14
        },
        {
            name: 'Brian',
            marks: 5
        }
    ];


    // function compAsc(a, b) { return a - b; }
    const compDesc = function (a, b) { return b - a; };

    // console.log(marks.sort(compAsc));
    console.log(marks.sort(
        function (a, b) {
            return a - b;
        }
    ));
    console.log(marks.sort(compDesc));

    console.log(studentMarks);
    console.log(studentMarks.sort(
        function (a, b) {
            return a.marks - b.marks;
        }
    ));

    // not returning anything returns undefined:
    console.log((function (a, b) { return a - b; })(3, 5));
    // if no return statement is specified, undefined is returned:
    console.log((function (a, b) { a - b; })(3, 5));

    // get an array of names of students from studentMarks array:
    console.log(studentMarks.map(
        function(v) { return v.name; }
    ));

    // get an array of names of students from studentMarks array:
    console.log(studentMarks.map(
        function(v) { return v.marks; }
    ));

    // find names of student whose marks are greater than 5:
    console.log(studentMarks.filter(
        function(v) { return v.marks > 5; }
    ));

    console.log(JSON.stringify(studentMarks, null, 2));

    const newMarks = JSON.parse('[{"name":"Jo","marks":20},{"name":"Dav","marks":100},{"name":"La","marks":50},{"name":"Bri","marks":75},{"name":"Char","marks":60},{"name":"Chi","marks":70},{"name":"Remya","marks":14}]');

    console.log(newMarks);
    console.log(JSON.stringify(newMarks));

}

execute();
