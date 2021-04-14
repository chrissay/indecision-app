const square = function (x) {
    return x * x;
};

const squareArrow = (x) => {
    return x * x
};

const squareArrowShorthand = (x) => x * x;

console.log(square(2));
console.log(squareArrow(3));
console.log(squareArrowShorthand(4));

// Challenge

const getFirstName = (fullName) => {
    return fullName.split(' ')[0];
};

console.log(getFirstName('Mike Smith'));

const getFirstNameShorthand = (fullName) => fullName.split(' ')[0];

console.log(getFirstNameShorthand('Mike Smith'));