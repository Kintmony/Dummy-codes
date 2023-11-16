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
// function main() {
//   var increase = parseInt(prompt(`enter a number`), 10);
//   let prices = [98.99, 15.2, 20, 1026];
//   for (let i = 0; i < prices.length; i++) {
//     prices[i] += increase;
//   }
//   console.log(prices);
// }
// main();

/**DOCUMENT OBJECT MODEL(DOM)
/webpages are loaded and rendered using an object oriented model of its logical structure(DOM). DOM tree refers to the nodes which have some kind of relationship with each other and make up the DOM. Nodes can have siblings(node on the same level), children(nodes below) and parents(nodes above).NB:it is vital to understand the relationship between elements in order to manipulate them using Js.*/
//the "document" object is a predefined object which is used to access all elements in the DOM. it always starts the syntax used in accessing elements in the DOM.---
//document.body.innerHTML = "something here"; <--this is to change the content of the "innerHTML" property

//SELECTING ELEMENTS(the document object has methods that enable desired HTML elements to be selected)
/*document.getElementById();
document.getElementsByClassName();*/
// let elem = document.getElementById("demo");
// elem.innerHTML = "Hello World";

/**IMAGE SLIDER */
// var images = ["./images/1.jpg", "./images/2.jpg", "./images/3.jpg"];
// var num = 0;

// function next() {
//   var slider = document.getElementById("slider");
//   num++;
//   if (num >= images.length) {
//     num = 0;
//   }
//   slider.src = images[num];
// }

// function prev() {
//   var slider = document.getElementById("slider");
//   num--;
//   if (num < 0) {
//     num = images.length - 1;
//   }
//   slider.src = images[num];
// }
/**---------------------------intro to ECMAScript (6) => { ES6 } which introduced new conventions and OOP concepts. In ES6 there are three ways of declaring variables "var","const", and "let" and is influenced by the scope of the variable. "var" defines a variable globally and "let" declares variables limited to the block, statement or epression its been used.  */
//eg using var
// if (true) {
//   var name = `Jack`;
// }
// alert(name); //generates the alert succesfully

// if (true) {
//   let names = [`Esi`, `Kujo`];
// }
// alert(names); //generates an error on console

/*LOOPS in ES6*/

/**FUNCTIONS IN ES6 */
//computed property names: allows the creation of objects based on user data.
// let prop = `name`;
// let id = `1234`;
// let mobile = `12314`;
// let user = {
//   [prop]: `user`,
//   [`user${id}`]: `${mobile}`,
// };
//eg 2. allows concatenations to be used in naming a property ie.( [`mobile` + ...])
// var param = `size`;
// var config = {
//   [param]: 12,
//   [`mobile` + param.charAt(0).toUpperCase() + param.slice(1)]: 3,
// };
// console.log(config.mobileSize);

/*OBJECT DESTRUCTURING IN ES6*/
const obj = { one: 1, two: 2 };
let { one: first, two: second } = obj;
//console.log(one); //error as variable has be renamed to first.
console.log(first + ` destructured!!!!!!!!!!!`); // execute

//ES6 Rest Parameters
//<!--start highlighting from here to remove comment-->

// function magic(...nums) {
//   let sum = 0;
//   nums.filter((n) => n % 2 == 0).map((el) => (sum += el));
//   return sum; // the filter method creates a new array with the elements that satisfy the condition given by the function || the map method creates a new array with the results of the "n%2 ==0" which is then summed up.
// }
// console.log(magic(1, 2, 3, 4, 5, 6)); // returns the sum of even numbers.

// //Spread operator in function calls
// //without spread
// function myFunction(w, x, y, z) {
//   console.log(w + x + y + z);
// }
// var args = [1, 2, 3];
// myFunction.apply(null, args.concat(4));
// //with spread operator
// function myFunction(w, x, y, z) {
//   console.log(w + x + y + z);
// }
// var args = [1, 2, 3];
// myFunction(...args, 4);

// //spread operator in array literals
// //without spread operator
// var arr = [`One`, `Two`, `Three`];
// arr.splice(2, 0, `nine`); //replaces "three" with "nine" causing "three" to move to end of array
// arr.splice(3, 0, `ten`); // adds "ten" to the array
// console.log(arr);
// //NB:splice() removes a elemenst from an array and replaces them if specified

// //with spread
// let newArr = [`Four`, `Five`, `Six`];
// let arrr = [`One`, `Two`, `Three`, ...newArr, `Seven`];
// console.log(arrr);
// //coding challenge below--> what's the output?
// let nums = [3, 4, 5];
// let all = [1, 2, ...nums, 6];
// console.log(all[3]);

/**CLASSES IN ES6 */
//class can be used to create multiple objects of the same structure.
class box {
  constructor(height, width) {
    //the constructor is a special method used to create and initialize an object created in a class and there can be ONLY ONE constructor in a class.
    this.height = height;
    this.width = width;
  }
}
//above class can be used to create multiple objects using the keyword "new"
const Rec = new box(4, 2);
//class declarations are not hoisted and hence a class cannot be accessed before it's declared.

//CLASS METHODS IN ES6
//prototype class method
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  get area() {
    //getter
    return this.calcArea();
  }
  calcArea() {
    //method
    return this.height * this.width;
  }
}
const rec1 = new Rectangle(5, 6);
console.log(rec1.area);
//static method. cannot be called through a class instance. often used to create utility functions
//the below method is used to find the distance between two points
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  static distance(a, b) {
    //defined as a static method hence should be called on the class itself, not on the instance of the class
    const dx = a.x - b.x;
    const dy = a.y - b.y;
    return Math.hypot(dx, dy);
  }
}
const p1 = new Point(7, 2);
const p2 = new Point(10, 2);
console.log(Point.distance(p1, p2));

//coding challenge
class dog {
  constructor(name) {
    this.name = name;
  }
  bark() {
    console.log(this.name + " barks.");
  }
}

let d = new dog("Rex");
d.bark();

//INHERITANCE IN ES6
//the extend keyword is used to create a child of a class. The child inherits the properties and methods of the parent.
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(this.name + ` makes a noise.`);
  }
}
// child class which inherits from Animal class
class Dog extends Animal {
  speak() {
    super.speak(); //called the parent "speak()" method
    console.log(this.name + ` barks`);
  }
}
let dog1 = new Dog(`Tom`);
dog1.speak();

//coding challenge
class Human {
  constructor(name) {
    this.name = name;
  }
}

class student extends Human {
  constructor(name, age) {
    super(name);
    this.age = age;
  }
}

let stud1 = new student(`Nick`, 12);
console.log(stud1);

//ES6 MAPS AND SETS
//map objects can be used to hold key-value pairs. map creates an array or object whose elements are arrays.NB: keys can be of any type from functions to any primitive, can directly iterate over a map, and map performance is better in situations involving frequent addition and removal of key-value pairs

let map = new Map([
  [`k1`, `v1`], //key-value pair
  [`k2`, `k2`],
]);
console.log(`the map is of size ` + map.size);

//demonstration of some map methods

let map1 = new Map([
  [`k0`, `v0`],
  [`k3`, `k3`],
]);
map1.set(`k5`, `v5`).set(`k9`, `v9`);
console.log(map1.get(`k9`));
console.log(map1.get(`k0`));

for (let kv of map1.entries()) console.log(kv[0] + " : " + kv[1]);
//maps support different data types

const map3 = new Map();
map3.set(`one`, 1).set(`2`, `two`);
if (map.has(`two`)) {
  console.log(`two`);
} else {
  console.log(map3.get(`one`));
}

//ES6 SET: object can be used to hold unique values(no duplicates are allowed).
let set = new Set([1, 2, 4, 3, 5, 6, 7, 8]);
console.log(set.size);
//ES6 SET METHODS:
let set1 = new Set();
set1.add(5).add(9).add(59);
console.log(set1.has(5));

for (let v of set1.values()) console.log(v);

//coding challenge
const set3 = new Set();
set3.add(1).add(2).add(3);
for (let v of set3.values()) console.log(v);

//ES6 PROMISES: is a more preferred way for asynchronous programming when compared to the common way of using a "setTimeout()"
//setTimeout() PROMISE asynchronous syntax
setTimeout(function () {
  console.log("work 1");
  setTimeout(function () {
    console.log("work 2");
  }, 1000);
}, 1000);
console.log(`end`);

//ES6 PROMISE
// new Promise(function (resolve, reject) {
//   //work
//   if (success) resolve(result);
//   else reject(Error("failed"));
// });

//method that returns a promise
function asyncFunc(work) {
  return new Promise(function (resolve, reject) {
    if (work === "") reject(Error("Nothing"));
    setTimeout(function () {
      resolve(work);
    }, 1000);
  });
}

asyncFunc("Work 101") //Task 1
  .then(
    (result) => {
      console.log(result);
      return asyncFunc("Work 202");
    },
    function (error) {
      console.log(error);
    }
  )
  .then(
    function (result) {
      console.log(result);
    },
    function (error) {
      console.log(error);
    }
  );

console.log("End");

//ITERATORS AND GENERATORS
//Symbol.iterator is the default iterator for an object. The for..of loops are based on this type of iterator.
//GENERATOR FUNCTION DEMONSTRATION
let myIterableObj = {
  [Symbol.iterator]: function* () {
    yield 1;
    yield 2;
    yield 3;
  },
};
console.log([...myIterableObj]);

//object creation using Symbol.iterator and filling with generator function

function* idMaker() {
  let index = 0;
  while (index < 5) yield index++;
}
var gen = idMaker();
console.log(gen.next().value); // subsequent calls will log the other values to console

/*MODULES. considerations when using modules include *maintainability* ie.=> a module is independent of other modules. *namespacing* modules create a private space for variables to prevent namespace pollution as a result of variable scope. *reusability* modules allow different parts of code to be used in other projects*/

//Modules demonstration
//written in a file separate from app.js eg math.js
// export let sum = (x, y) => {
//   return x + y;
// };
// export let pi = 3.14;

//called in app.js
// import *as math from math.js
// console.log(`2p= +${math.sum(math.pi,math.pi)}`)
//NB: some browsers do not support modules natively hence the use of bundlers such as webpack or Browserfly are used to run the code

//NOTE AND STUDY ES6 BUILT-IN METHODS(arrays...)
//searching strings in ES6
"Testimony".includes("test");

//locating elements in array and repeating them
const arrr = ["3", "4", "98"];
console.log(arrr.find((x) => x == "4").repeat(2));

//coding challenge on spread operator
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6, 7, 8];
let arr3 = [...arr1, 4, ...arr2];
console.log(arr3);

const arrr1 = [1, 2, 3, 4, 5];
const arrr2 = [...arrr1, 6];
const func = (...rest) => {
  console.log(rest.length);
};
func(...arrr1);
func(...arrr2);

//coding challenge on arrow function
const square = (num) => num * num;
console.log(square(6) + 6);

//coding challenge on object destructuring
const user = {
  name: "David",
  age: 28,
  id: 1234,
};
let newUser = Object.assign({}, ({ name, age } = user), { id: 9999 });
console.log(newUser);

let newMap = new Map();
newMap.set(`zero`, 0);
newMap.set(`one`, 1);
for (let [key, value] of newMap) {
  console.log(`key: ${key}, value: ${value}`);
}
