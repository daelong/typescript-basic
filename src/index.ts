// interface Human {
//   name: string;
//   age: number;
//   test: string;
// }

class Human {
  public name: string;
  public age: number;
  public test: string;
  constructor(name: string, age: number, test?: string) {
    this.name = name;
    this.age = age;
    this.test = test;
  }
}

// const me = { name: "이대현", age: 23, test: "male" };
const me = new Human("이대현", 23, "male");

const sayHi = (me: Human): string => {
  return `Hello ${me.name}, you are ${me.age}, you are a ${me.test}`;
};

console.log(sayHi(me));
// test branch merge test
// gogogogogogo
export {};
