const fn1 = function(a, b) {
    return a + b;
}

const fn2 = (a, b) => a + b;

const fn3 = (a, b) => a*a + b*b;

const fn4 = (a, b) => {
    // option 1:
    // const result = a*a + b*b;

    // option 2:
    let result = a * a;
    result += b*b;

    // if you don't return, undefined will be returned (similar to regular function/method)
    return result;
};

console.log(fn1(4, 5));
console.log(fn2(4, 5));
console.log(fn3(4, 5));
console.log(fn4(4, 5));
