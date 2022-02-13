let firstOrCorrect = 'test' || 'test2';
let secondOrCorrect = '' || 'test2';
let noOrCorrect = false || 0;

console.log(firstOrCorrect);
console.log(secondOrCorrect);
console.log(noOrCorrect);

let andCorrect = 'test' && 'test2';
let andIncorrectFirst = 0 && 'test2';
let andIncorrectSecond = 'test' && 0;

console.log(andCorrect);
console.log(andIncorrectFirst);
console.log(andIncorrectSecond);