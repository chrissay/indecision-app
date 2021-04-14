// arguments object - no longer bound with arrow functions

const add = function (a, b) {
    console.log(arguments)
    return a + b;
};
console.log(add(55, 1));

// const add = (a, b) => {
//     console.log(arguments); // this doesn't work
//     return a + b;
// };
// console.log(add(55, 1));

// this keyword - no longer bound

const user = {
    name: 'Chris',
    cities: ['Dubai', 'DC', 'Paris'],
    printPlacesLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city);
    }
};
console.log(user.printPlacesLived());

// Challenge Area

const multiplier = {
    numbers: [2, 3, 4],
    multiplyBy: 2,
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy);
    }
};
console.log(multiplier.multiply());