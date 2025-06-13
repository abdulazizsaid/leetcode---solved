// const person = {
//   firstName:"John",
//   lastName: "Doe",
//   fullName: function () {
//     return this.firstName + " " + this.lastName;
//   }
// }

// const member = {
//   firstName:"Hege",
//   lastName: "Nilsen",
// }

// let fullName = person.fullName.bind(member);


// const person = {
//   firstName:"John",
//   lastName: "Doe",
//   fullName: function () {
//     return this.firstName + " " + this.lastName;
//   },
//   something: () => {
//     return this.firstName + " " + this.lastName;
//   }
// }



// let fullName = person.something()

// console.log(fullName);


// let a = 10

'use strict'
// const person = {
//   name: "Jigar",
//   greet: function() {
//     console.log(`Salom, men ${this.name}`);
//   }
// };

// person.greet(); // Salom, men Jigar

// // Ammo metod boshqa o'zgaruvchiga o'tkazilsa:
// const greetFunc = person.greet;
// greetFunc(); // Brauzerda: Salom, men undefined (chunki this global ob'ektga ishora qiladi)

function greet(greeting) {
  console.log(`${greeting}, men ${this.name}`);
}

const person = { name: "Jigar" };

// call
greet.call(person, "Salom"); // Salom, men Jigar

// apply
greet.apply(person, ["Assalom"]); // Assalom, men Jigar

// bind
const boundGreet = greet.bind(person);
boundGreet("Hayrli kun"); // Hayrli kun, men Jigar


