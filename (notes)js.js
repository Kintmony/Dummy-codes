/*FUNCTIONS */
function lgon(/*parameters */) {
  console.log("hi");
}

lgon(); //function call

function signup(User) {
  console.log(`hi ${User}`);
}
signup("Tmony");

function double(num) {
  console.log(num * 2);
}

// variables created outside the function can also be parameters as shown in code below
function login(user) {
  console.log(`Hi, ${user}`);
}
let myUser = `Tmony`;
login(myUser);

let Purchase = 500;
function discount() {
  if (Purchase >= 1500) {
    let discounted = Purchase * 0.85;
    console.log(`Purchase valid for discount of value ${discounted}`);
  } else {
    console.log(`Purchase of ${Purchase} not valid for discount`);
  }
}

discount(200);

// //function to find the max number from a list of numbers
// function find_max(nums) {
//   let max_num = Number.NEGATIVE_INFINITY;
//   for (let num of nums) {
//     if (num > max_num) {
//       //check to see if this program is correct
//       max_num = num;
//     }
//   }
//   return max_num;
// }

// const numbers = [12, 213, 4, 3, 3141, 21, 32, 3434, 54, 32, 12];
// const maxNumber = find_max(numbers);

// console.log(`the max number is ${maxNumber}`);
// console.log(55/5);
// let num=5;
// num =8
// console.log(num)
/*function call */
// function find_maxx (){
// // declare operations
// // }
// let x = 2,
//   y = 3;
// let ans = (x *= y);
// console.log(ans);

// let txt="ama is a girl", txt1='kofi is a boy';
// console.log(`${txt} and "${txt13}"`)

// console.log("b" < "d");

// class Users extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return (
//       <div>
//         <h1>return type</h1>
//       </div>
//     );
//   }
// }

/* SWITCH CASES!!!!!!!!! */
//switch expression is evaluated once, even though the same code can be written using if-else statements, switch cases makes the code more readable and organised(best coding practice)
// let choice = 1;
// switch (choice) {
//   case 1:
//     console.log("Sports");
//     break;
//   case 2:
//     console.log("Business");
//     break;
//   case 3:
//     console.log("third break");
//     break;
//   // for when the cases are not met, the default keyword is used
//   default:
//     console.log("not found!");
// }

// TERNARY OPERATOR
// let num = "1";
// num == 1 ? console.log(`${num} is valid`) : console.log(`${num} is not valid`);

// let color = "blue";
// color = "blue"
//   ? console.log(`${color} is valid`)
//   : console.log(`${color} is not valid`);

// let num1 = 2;
// let isZero = num1 == 0 ? "zero" : "Not Zero";
// console.log(isZero);

// let bill = 1000;
// if (bill >= 1500) {
//   console.log(`${bill * 0.85} is your discounted price`);
// } else {
//   console.log("bill is not discounted");
// }

// let score = 95;
// console.log(score > 120);
// //above code in ternary
// score >= 120
//   ? console.log(`${score} is high`)
//   : console.log(`${score} is below 120`);

//FOR LOOP
// for (let i = 10; i <= 50; i += 2 /*output only even numbers */) {
//   console.log(i);
// }

// let x = 10;
// while (x < 10) {
//   console.log(x);
//   x++;
// }

// do {
//   console.log(`hello`);
//   x++;
// } while (x < 10);

//for loops are usually employed when the number of time we need to the loop is known.

//the break statement allows the loop to end prematurely when a certain specified condition is met
// for (i = 1; i < 5; i++) {
//   if (i == 3) {
//     break;
//   }
//   console.log(i);
// }

//the continue allows the loop to skip an iteration based on certain parameters

// for (let a = 0; a < 10; a++) {
//   if (a == 5) {
//     continue;
//   }
//   console.log(a);
// }

// let sum = 0;
// for (let i = 1; i <= 3; i++) {
//   if (i == 2) {
//     continue;
//   }
//   sum += i;
// }
// console.log(sum);

// for (i = 1; i < 7; i++) {
//   if (i == 4) {
//     break;
//   }
//   console.log(i);
// }

// for (i = 1; i <= 100; i++) {
//   if (i % 2 != 0) {
//     continue;
//   }
//   console.log(i);
// }

/****Objects ****/
//Objects can be referred to as variables but are containers of many values(with values written as "name:value" pairs), where "name" is a property of the object
//sample object
var person = {
  name: "John Doe",
  age: 31,
  address: "1st Street",
};

//Accessing object properties
var x = person.age;
var y = person["age"];

// length property to count the number of characters in a string(property)
var one ={ name:'John Doe', age:31}
document.write(person.name.length)

