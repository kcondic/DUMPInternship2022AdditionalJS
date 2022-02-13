const uniqueNumbers = new Set();

uniqueNumbers.add(1);
uniqueNumbers.add(5);
uniqueNumbers.add(-20);
uniqueNumbers.add('text');

console.log(uniqueNumbers);
uniqueNumbers.add(1);
console.log(uniqueNumbers);

console.log(uniqueNumbers.has(5));

for(let number of uniqueNumbers)
    console.log(number);

const firstSet = new Set([1, 2, 3, 4, 5]);
const secondSet = new Set([3, 5, 7]);

let union = new Set(firstSet);
for (let element of secondSet)
    union.add(element);

console.log(union);

console.log(union.size);

union.delete(3);
console.log(union);

union.clear();
console.log(union);

let duplicates = [1, 1, 3, 5, 9, 10, 8, 10, 8, 7, 3, 3, 3, 3];
console.log(new Set(duplicates));
console.log([...new Set(duplicates)]);

const map = new Map();

map.set('a', 1);
map.set('b', 2);
map.set('c', 3);

console.log(map);
console.log(map.get('a'));

console.log(map.size);
console.log(map.has(1));

map.set('a', 5);
console.log(map);

for (const [key, value] of map) {
    console.log(key + ' = ' + value);
}

class Person {
    #age;

    constructor(firstName, lastName, age) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.#age = age;
    }

    get fullName() {
        return this.getFullName();
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    getAge() {
        return this.#age;
    }
}

let newPerson = new Person('Mate', 'Matić', 25);

console.log(newPerson);
console.log(newPerson.fullName);

console.log(newPerson.age); // doesn't work - private!
console.log(newPerson.getAge());