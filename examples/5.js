let abcRegex = /abc/;
let alternativeAbcRegex = new RegExp('abc');

let firstTest = 'abc';
let secondTest = 'abbbbca bc';
let thirdTest = 'acfghiqrstuvwxyz';

console.log(abcRegex.test(firstTest));
console.log(abcRegex.test(secondTest));
console.log(abcRegex.test(thirdTest));

console.log(alternativeAbcRegex.test(firstTest));
console.log(alternativeAbcRegex.test(secondTest));
console.log(alternativeAbcRegex.test(thirdTest));

let abcRegexWithWhitespace = /a\s*b*c/;

console.log(abcRegexWithWhitespace.test(secondTest));

let abcRegexWithOptionalBs = /ab*c/;
let abcRegexWithMultipleBs = /ab+c/;

console.log(abcRegexWithOptionalBs.test(secondTest));
console.log(abcRegexWithOptionalBs.test(thirdTest));

console.log(abcRegexWithMultipleBs.test(secondTest));
console.log(abcRegexWithMultipleBs.test(thirdTest));

let withoutLowercaseLettersRegex = /[^a-z]/;

console.log(withoutLowercaseLettersRegex.test(firstTest));
console.log(withoutLowercaseLettersRegex.test(secondTest));
console.log(withoutLowercaseLettersRegex.test(thirdTest));

let fifthTest = 'ABC';

console.log(abcRegex.test(fifthTest));

let caseInsensitiveAbcRegex = /abc/i;

console.log(caseInsensitiveAbcRegex.test(fifthTest));

let aAndCWIthSomethingBetween = /a.c/;

console.log(aAndCWIthSomethingBetween.test(firstTest));
console.log(aAndCWIthSomethingBetween.test(secondTest));
console.log(aAndCWIthSomethingBetween.test(thirdTest));

let abcSplit = secondTest.split(abcRegexWithOptionalBs);
console.log(abcSplit);

console.log(firstTest.match(abcRegexWithWhitespace));

let abcRegexWithWhitespaceGlobal = /a\s*b*c/g;
console.log(secondTest.match(abcRegexWithWhitespace));
console.log(secondTest.match(abcRegexWithWhitespaceGlobal));