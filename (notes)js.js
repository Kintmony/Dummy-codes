/*FUNCTIONS */
// function lgon(/*parameters */) {
//   console.log("hi");
// }

// lgon(); //function call

// function signup(User) {
//   console.log(`hi ${User}`);
// }
// signup("Tmony");

// function double(num) {
//   console.log(num * 2);
// }

// variables created outside the function can also be parameters as shown in code below
// function login(user) {
//   console.log(`Hi, ${user}`);
// }
// let myUser = `Tmony`;
// login(myUser);

// let Purchase = 500;
// function discount() {
//   if (Purchase >= 1500) {
//     let discounted = Purchase * 0.85;
//     console.log(`Purchase valid for discount of value ${discounted}`);
//   } else {
//     console.log(`Purchase of ${Purchase} not valid for discount`);
//   }
// }

// discount(200);

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

/****************************SWITCH CASES!!!!!!!!! */
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

// ****************************TERNARY OPERATOR
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

/**************************Objects ****/
//Objects can be referred to as variables but are containers of many values(with values written as "name:value" pairs), where "name" is a property of the object
//sample object
// var person = {
//   name: "John Doe",
//   age: 31,
//   address: "1st Street",
// };

//Accessing object properties
// var x = person.age;
// var y = person["age"];

//length property to count the number of characters in a string(property)
// var one = { name: "John Doe", age: 31 };
// document.write(person.name.length);

/*********************Object method(object literal/initializer)*/
//refers to a property that contains a function definition. methods are functions that are stored as object properties
// var cuboid = {
//   height: 10,
//   width: 12,
//   length: 8,
// };
// // the cuboid object property is accessed as shown below using dot notation
// console.log(cuboid.length * cuboid.width * cuboid.height);

/**********************OBJECT CONSTRUCTOR */
//allows you to set an object type that can be used to create anumber of objects of a single type. the standard way of creating an object type is to usee an object constructor function

// function person(name, age, address) {
//   this.name = name;
//   this.age = age;
//   this.address = address;
// }
//the above function(person) is called an object constructor. It takes the specified parameters and assigns them to the properties using the "this" keyword

//once an object constructor is created, it can be called using the "new" keyword and used to create objects.
// var p1 = new person("Peter Fletcher", 412, "Full-Remote");
// var p2 = new person("James Fletcher", 22, "Full-Remote");
// console.log(p1); //display object on cosnole
// document.write(p2); // used for HTML document.. not showing on console.

// function car(Manufacturer, Model, Prize) {
//   this.Manufacturer = Manufacturer;
//   this.Model = Model;
//   this.Prize = Prize;
// }

// const car1 = new car("Ferrari", "Fxx", "$200,000");
// console.log(car1);
/**ACCESSING OBJECT PROPERTIES */
//properties can be accessed using the dot notation
// console.log(car1.Model, car1.Prize);/* option 1 */
// properties can also be accessed using the below accessing syntax
// console.log(car1['Manufacturer'])/* option 2 */

/*************************METHODS */
/*functions stored as object properties, NB: a method is a function belonging to an object and can referrenced using the "this" keyword to access the objects properties. the methods are defined inside the object constructor function*/
// function user(name, age) {
//   this.name = name;
//   this.age = age;
//   this.changename = function (name) {
//     this.name = name;
//   };
// }

// let user1 = new user("Kujo", 21);
// console.log(user1["name"]); //before c
// user1.changename("Tmony");
// console.log(user1.name);

// function shopping(items, price) {
//   this.items = items;
//   this.price = price;
//   this.discount = discountPrice; // method outside constructor
// }
// // methods can also be defined outside the constructor function
// function discountPrice() {
//   if (price >= 1500) {
//     return this.price * 0.8;
//   }
// }

// let shop1 = new shopping(21, 1500);
// console.log(shop1);

// /* CONTACT APP coding challenge */
// function contact(name, number) {
//   this.name = name;
//   this.number = number;
//   this.print = function () {
//     console.log(`${name}: ${number}`);
//   };
// }
// let c1 = new contact("John", 255557659);
// let c2 = new contact("Pete", 550558585);
// c1.print();
// c2.print();

/********************************************************* */

/**ARRAYS */
//arrays store multiple values in a variable['new Array' are the keywords for creating an array]
// let courses = new Array("html", "css", "js");
//Accessing an Array(arrays are accessed through their indexes starting count from "0" as are with indexes.
//courses[0] = "Reactjs"; //<-- selects the first value which is index "0" and sets it to Reactjs.
// console.log(courses);
//Declaring array with fixed size
// let course = new Array(3); //<-- creates an array with space for three elements.[0,1,2]<-- Indexes for 3 values.

/**ARRAY LITERAL (recommended way to declare arrays*/
// let languages = ["html", "css", "javascript"];

/**ARRAY properties and methods */
//length property returns the number of elements in the array. It returns "0" when the array is empty. NB:AN ARRAY IS CONSIDERED AN OBJECT IN JS
// console.log(courses.length);

//combining arrays with "concat()" method
// let c1 = ["abc"];
// let c2 = ["def"];
// let c3 = ["ghi"];
// let alphabets = c1.concat(c2, c3); // combines specified arrays into new array(alphabets)
// console.log(alphabets);

//***************ASSOCIATIVE ARRAYS */
//NB; Javascript does not support associative arrays, however a named array syntax.
// let person = []; // treated as object
// person["name"] = "john"; //property of person(named index)
// person["age"] = 46; //property of person(named index)
// console.log(person["age"]);// the use of the default indexes ie. "0,1.." returns undefined. Also "person" is now treated just as an object!!!
/**simply put, associative arrays in Js are treated just like objects. However it is not a good practice and hence should not be adopted */

/**THE MATH OBJECT */
// console.log(Math.PI);
// //random number generation(quick coding challenge)
// function randNum(num) {
//   if ((num > 0, num <= 10)) {
//     console.log(`random number is: ${Math.ceil(Math.random() * 10)}`);
//   }
//   console.log(`enter a number greater than 0`);
// }
// randNum(5);
// console.log(Math.sqrt(81));

/**DATE OBJECT */
// let date = new Date();
// alert(date.getMinutes());

/** store manager coding challenge */
function main() {
  var increase = parseInt(prompt(`enter a number`), 10);
  let prices = [98.99, 15.2, 20, 1026];
  for (let i = 0; i < prices.length; i++) {
    prices[i] += increase;
  }
  console.log(prices);
}
main();
