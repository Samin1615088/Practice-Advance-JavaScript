//map
let numbers = [1, 2, 3, 4, 5, 6, 7];
let output = [];

console.log(numbers.map(n => n + 1));
output = numbers.map(n => n + 1);
console.log(output);


//filter
console.log(numbers.filter(n => n > 5));
//find 
console.log(numbers.find(n => n > 5));

//reduced
console.log(numbers);
const result = numbers.reduce((accumulator, currentValue) => accumulator + currentValue);
result;


//object manupulation using map, filter,find,reduced
const students = [
    { id: 21, name: 'Omar Sunny' },
    { id: 31, name: 'Maannaaaa' },
    { id: 41, name: 'Moyouri' },
    { id: 71, name: 'DeepJol' }
];

console.log(
    students.map(element => element.id)
);

console.log(
    students.filter(element => element.id>40)
);

console.log(
    students.find(element => element.id>40)
);

