let numbers = [1, 2, 3];

let [first, second] = numbers;

console.log(first);
console.log(second);

[second, first] = [first, second];

console.log(first);
console.log(second);

[first, , second] = numbers;

console.log(first);
console.log(second);

let text = 'test';

[first, second] = text;

console.log(first);
console.log(second);

const person = {
    firstName: 'Toni',
    lastName: 'Tonković'
};

let {firstName, lastName} = person;

console.log(firstName);
console.log(lastName);

firstName = 'Stipe';

console.log(firstName);
console.log(person.firstName);

let {lastName: surname} = person;
console.log(surname);

let expandedNumbers = [...numbers, 4];
console.log(expandedNumbers);

let copiedNumbers = [...expandedNumbers];
console.log(copiedNumbers);

let multipleArraysToOne = [...numbers, ...expandedNumbers];
console.log(multipleArraysToOne);

let letters = [...text];
console.log(letters);

let copiedPerson = {...person};
let extendedPerson = {...person, age: 44};
console.log(copiedPerson);
console.log(extendedPerson);