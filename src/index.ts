// interface Human {
//   name: string;
//   age: number;
//   qwe: string;
// }

class Human {
  public name: string;
  public age: number;
  public qwe: string;
  constructor(name: string, age: number, qwe?: string) {
    this.name = name;
    this.age = age;
    this.qwe = qwe;
  }
}

// const me = { name: "이대현", age: 23, qwe: "male" };
const me = new Human("이대현", 23, "male");

const sayHi = (me: Human): string => {
  return `Hello ${me.name}, you are ${me.age}, you are a ${me.qwe}`;
};

console.log(sayHi(me));
// qwe branch merge qwe
// gogogogogogo
export {};
