const addUid = <T extends {name: string}>(payload: T) => {
  let uid = Math.floor(Math.random() * 1000);
  return {...payload, uid};
}

let docOne = addUid({name: 'yoshi', age: 10});

console.log(docOne.age);

interface Resource<T> {
  uid: number;
  entity: string;
  data: T;
}

const docThree: Resource<string> = {
  uid: 1,
  entity: 'Person',
  data: 'mario'
}

const docFour: Resource<string[]> = {
  uid: 2,
  entity: 'Cart',
  data: ['bread', 'milk', 'fish']
}

console.log(docThree, docFour);