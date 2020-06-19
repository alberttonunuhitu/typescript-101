// Explicit Types
let title: string;
let price: number;
let isDiscount: boolean;

title = 'Book';
price = 10;
isDiscount = false;

// Arrays
let categories: string[] = ['book'];

categories.push('pencil');

// Union Types
let mixed2: (string | number | boolean)[] = [];

mixed2.push('Hello');
mixed2.push(1);
mixed2.push(true);

let uid: string | number;

uid = 1;
uid = 'abcd1234';
// uid = false; will error

// Objects
let product: object;

product = {name: 'Book', price: 10};

let product2: {
  name: string;
  price: number;
};

product2 = {name: 'Fruit', price: 15};
// product2 = {name: 'Car'}; will error