// interface Human {
//   name: string;
//   age: number;
<<<<<<< HEAD
//   gender: string;
=======
//   qwe: string;
>>>>>>> test2
// }

class Human {
  public name: string;
  public age: number;
<<<<<<< HEAD
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
=======
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
>>>>>>> test2
// gogogogogogo
export {};
