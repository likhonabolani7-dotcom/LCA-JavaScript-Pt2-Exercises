function sum(value) {
    if (typeof value !== 'number' || Number.isNaN(value) || value % 1 !== 0) {
        return 'The value passed is not a number';
    }

    let total = 0;
    for (let i = 0; i <= value; i++) {
        total += i;
    }
    return total;
}

function factorial(number) {
    if (typeof number !== 'number' || Number.isNaN(number) || number % 1 !== 0) {
        console.log('The value passed is not a number');
        return null;
    }

    if (number < 0) {
        console.log('Factorial is not defined for negative numbers');
        return null;
    }

    let product = 1;
    let factors = [];

    for (let i = number; i > 0; i--) {
        product *= i;
        factors.push(i);
    }

    const output = factors.join('*');
    console.log(`${number}! -> ${output} = ${product}`);
    return product;
}

function funkyMath(...args) {
    if (args.length === 2) {
        return args[1] - args[0];
    }

    if (args.length === 3) {
        return args[0] + args[1] + args[2];
    }

    if (args.length === 4) {
        const firstPair = args[0] + args[1];
        const secondPair = args[2] + args[3];
        return firstPair / secondPair;
    }

    return 'funkyMath expects 2, 3, or 4 arguments';
}

const numbers = [1, 2, 33, 45, 6, 44];
const oddNumbers = [];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0) {
        oddNumbers.push(numbers[i]);
    }
}

oddNumbers.sort((a, b) => a - b);

const me = {
    firstName: 'John',
    lastName: 'Doe',
    age: 29,
    favouriteColour: 'blue',
    dreamCar: 'Tesla Model S',
};

me.favouriteFood = 'pizza';
delete me.age;

console.log('---sum tests---');
console.log(sum(5)); // 15
console.log(sum(0)); // 0
console.log(sum(10)); // 55
console.log(sum('hello')); // The value passed is not a number

console.log('---factorial tests---');
factorial(4); // 4*3*2*1 = 24
factorial(1); // 1 = 1
factorial(0); // 0! = 1
factorial(3.5); // The value passed is not a number

console.log('---funkyMath tests---');
console.log(funkyMath(2, 5)); // 3
console.log(funkyMath(1, 2, 3)); // 6
console.log(funkyMath(8, 2, 3, 5)); // 1.25
console.log(funkyMath(1)); // funkyMath expects 2, 3, or 4 arguments

console.log('---odd numbers extracted---');
console.log(oddNumbers); // [1, 33, 45]

console.log('---me object---');
console.log(me);
