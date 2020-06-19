let greetings: Function;

greetings = () => {
  console.log('Hello World');
}

// function signature
let add: (augend: number, addend: number) => number;
let subtract: (minuend: number, subtrahend: number) => number;
let upperCase: (value: string) => string;
let printHelloWorld: () => void;

add = (augend: number, addend: number): number => {
  return augend + addend;
};

subtract = (minuend: number, subtrahend: number) => {
  return minuend - subtrahend;
};

upperCase = (value: string) => {
  return value.toUpperCase();
}

printHelloWorld = () => {
  console.log('Hello World');
}


// types alias
type StringOrNumber = string | number;
type ObjectData = {name: string, price: number};

const updateProduct = (uid: StringOrNumber, data: ObjectData): void => {
  console.log('Uid: ', uid);
  console.log('data: ', data);
}

