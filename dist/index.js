"use strict";
// interface Human {
//   name: string;
//   age: number;
//   gender: string;
// }
Object.defineProperty(exports, "__esModule", { value: true });
class Human {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}
// const me = { name: "이대현", age: 23, gender: "male" };
const me = new Human("이대현", 23, "male");
const sayHi = (me) => {
    return `Hello ${me.name}, you are ${me.age}, you are a ${me.gender}`;
};
console.log(sayHi(me));
//# sourceMappingURL=index.js.map