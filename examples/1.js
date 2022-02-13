let today = new Date();

console.log(today);

let myBirthday = new Date(1996, 07, 18); // index is 7, but month is August

console.log(myBirthday);

myBirthday = new Date('1996-08-18');
myBirthday = new Date('1996-08-18 12:45:00');

console.log(myBirthday);

console.log(myBirthday.getDate());
console.log(myBirthday.getDay());
console.log(myBirthday.getHours());
console.log(typeof(myBirthday));

console.log(myBirthday.getTime());
console.log(today.getTime());

console.log(today.getTimezoneOffset());
console.log(today.getUTCHours());


console.log(today.toString());
console.log(today.toUTCString());
console.log(today.toLocaleString());