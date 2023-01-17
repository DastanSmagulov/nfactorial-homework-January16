
// first

// function checkAge(age){
//     age > 18 ? true : confirm("Родители разрешили?")
// }

// second

// const pow = function(x, n){
//     result = 1;
//     for(let i = 0; i < n; i++){
//         result *= x;
//     }
//     return result;
// }

// third

// const ask = (question, yes, no) => {
//     if (confirm(question)) yes(); 
//     else no();
// }

// ask(
//   "Вы согласны?",
//   function () {
//     alert("Вы согласились.");
//   },
//   function () {
//     alert("Вы отменили выполнение.");
//   }
// );

// fourth

// let arr = [5, 2, 1, -10, 8];
// arr.sort((a, b) => b - a);
// console.log(arr);

// fifth

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let users = [vasya, petya, masha ];

// let names = [users[0].name, users[1].name, users[2].name]

// console.log( names ); // Вася, Петя, Маша

// sixth

// let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
// let petya = { name: "Петя", surname: "Иванов", id: 2 };
// let masha = { name: "Маша", surname: "Петрова", id: 3 };

// let users = [ vasya, petya, masha ];

// let usersMapped =
//     users.map(user => (
//         { fullName: `${user.name} ${user.surname}`, id: user.id }
// ));

// seventh

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 29 };

// let arr = [ vasya, petya, masha ];

// const getAverageAge = function(arr){
//     let length = arr.length;
//     let sum = 0;
//     arr.map(person => sum += person.age)
//     return sum / length;
// }

// console.log( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28