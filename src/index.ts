// interface Human {
//   name: string;
//   age: number;
//   gender: string;
// }

class Human {
  public name: string;
  public age: number;
  public gender: string;
  constructor(name: string, age: number, gender?: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}

// const me = { name: "이대현", age: 23, gender: "male" };
const me = new Human("이대현", 23, "male");

const sayHi = (me: Human): string => {
  return `Hello ${me.name}, you are ${me.age}, you are a ${me.gender}`;
};

console.log(sayHi(me));
// gender branch merge gender
// gogogogogogo
export {};
