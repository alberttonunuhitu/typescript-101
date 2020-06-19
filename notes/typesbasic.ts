// types basic
let text = 'Hello World';
let age = 10;
let isLoading = false;

text = 'Typescript';
// text = 1; will error
age = 5;
// age = 'Hello'; will error
isLoading = true;
// isLoading = 'A'; will error 
// isLoading = 1; will error

// arrays
let names = ['luigi', 'mario', 'yoshi'];

names.push('toad');
// names.push(3); will error
// names[0] = 3; will error

let numbers = [0, 1, 2, 3];

numbers.push(4);
// numbers.push('A'); will error
// numbers[0] = 'A'; will error

let mixed = ['a', 1, 'b', 2];

mixed.push(3);
mixed.push('c');
mixed[1] = 0;
// mixed.push(true); will error

// object
let person = {
  name: 'mario',
  age: 20,
  profession: 'doctor'
};

person.name = 'ryu';
person.age = 25;
person.profession = 'teacher';
// person.skills = ['fighting']; will error

person = {
  name: 'yoshi',
  age: 25,
  profession: 'student'
};