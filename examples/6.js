let jsonPerson = '{"firstName":"Ivan", "lastName":"Ivić", "age":30}';

let person = JSON.parse(jsonPerson);

console.log(person);

console.log(JSON.stringify(person));

person.children = [
    {
        firstName: 'Stipe',
        age: 10
    },
    {
        firstName: 'Josipa',
        age: 18
    }
]

console.log(JSON.stringify(person));

let personFromStorage = localStorage.getItem('person');

if(!personFromStorage)
    localStorage.setItem('person', JSON.stringify(person));

localStorage.removeItem('person');

localStorage.clear();