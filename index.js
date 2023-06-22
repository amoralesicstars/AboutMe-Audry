// // // let, var, const
// // // let allows value to change

// // // console.log(name); // print to the console, prints anything in the paranthesis

// // console.log("hello world");

// // // console.log(1 + 1);
// // // // string is a sequence of characters
// // // // 3 days to declare a string, "", '', ``

// // const name = "pizza";
// // const topping = "pineapple";
// // console.log(name);

// // /* adding two strings;
// // concactenation */
// // console.log(name, topping);

// // // template literals, turn/pull everything into a string, ability to show into your HTML document

// // // console.log(`${name} ${topping}`);

// // // console.log("string" + 32);
// // // //  string plus integer will = a string.

// // // console.log("32" + "1" + "str");

// // // // integer

// // // console.log(1.5 + 0.3);

// // // /* undefnd value false value. anyting that has a value in it, is TRUE */

// // // // booleans
// // // // if value is false, undefined, null 0 will be false statements

// // // // const num = undefined;
// // // // console.log(Boolean(num));

// // // // let prompt1 = prompt("what is your name");
// // // // let whereDidHeGo = prompt("where did he go?");
// // // // console.log(`${prompt1} went to the ${whereDidHeGo}`);

// // // // alert(`${prompt1} went to the ${whereDidHeGo}`);

// // // // promt user for their name, age and hobby & store them & create an alert personalized introduction message
// // // // hi my name is variablename, variableage, and i like too variablehobby

// // // let variableName = prompt("what is your name?");
// // // let variableAge = prompt("what is your age?");
// // // let variableHobby = prompt("what is your favorite hobby?");

// // // alert(
// // //   `Hi my name is ${variableName} and my age is ${variableAge} and my favorite hobby is ${variableHobby}`
// // // );

// // // CONDITIONALS //////////////////////

// // // truthy values
// // //  undefined, null , NaN, 0

// // // let x = 1;
// // // console.log(Boolean(x));

// // // CONDITIONAL OPERATORS
// // // === ; strict equals; datatype equals the datatype 1 === 1
// // // ==; loose equals; 1 == '1' they equal the same thing regardless of datatype
// // // loose equals checks if value is the same, regardles of datatype
// // // different types of datatype: string, number, boolean,
// // // 1 !== 2; true
// // // <, >, !== (not equals syntax), <=, >=
// // // more than or equal to
// // // 1 <= 1
// // // 'collin

// // //if statement

// // // if (this is true) {then run this}

// // // if (condition){action}

// // // if('collin' === 'collin') {
// // //     console.log("hello world")
// // // }

// // // = ; assignment operator
// // // == ;loose equals comparing two values let x = "0";
// // // ===; exactly equal

// // // logical operators ; can be used in sae if statement

// // // || && ??

// // // || OR
// // // && AND  checks to see if all conditions are true
// // // ?? NULLISH

// // let x = 0;

// // let y = 1;

// // // does x equal 0 and y equal 1

// // if (x == 0 && y === 1) {
// //   console.group("hello world");
// // }

// // // OR OPERATOR

// // let questComplete = false;
// // let questComplete2 = false;
// // let slimesDefeated = 0;

// // if ((slimesDefeated = 10)) {
// //   questComplete = true;
// // }

// // // or  if thirst statement is false, will move onto next statement

// // let i = 0;

// // let k = 1;

// // // if (i === 1 || k === 1) {
// // //   console.log("hello world");

// // // if this happens or this

// // // ELSE; if the the statement is false

// // // let v = 10;
// // // let u = 8;

// // // let login = false;

// // // if (v === 9) {
// // //   console.log("its a hollow world");
// // // } else {
// // //   console.log("goodbye world");
// // // }

// // // if (login === true) {
// // //   //redirect to page
// // // } else {
// // //   alert("account does not exist");
// // // }

// // // // else if
// // // /* will run if conditions before it are false and specifies a new condtion */

// // // let q = 3;
// // // if (q === 1) {
// // //   console.log("hello world");
// // // } else if (q === 0) {
// // //   console.log("goodbye world");
// // // } else {
// // //   console.log("something");
// // // }
// // // // will default to last 'something' bc statement is true

// // // let q = 0;
// // // if (q === 1) {
// // //   console.log("hello world");
// // // } else if (q === 0) {
// // //   console.log("goodbye world");
// // // }
// // // // will default to goodbye world

// // // let user = "guest";

// // // if (user === "admin") {
// // //   //redirect to admi page
// // // } else if (user === "user") {
// // //   // redirect to user page
// // // } else {
// // //   alert("account not found");
// // // }

// // let userName = prompt("Enter your username");

// // if (userName === "collin123") {
// //   alert("logged in!");
// // } else if (userName === "lucy321") {
// //   alert("logged in!");
// // } else {
// //   alert("no account found");
// // }

// // if (userName === "collin123" || userName2 === "audry123") {
// //   alert("login in!");
// // } else {
// //   alert("no account found");
// // }

// // math.floor rounds it down
// //math.random gives you random

// let randomNumber = Math.floor(Math.random() * 4);
// console.log(randomNumber);

// let arr = [
//   "liv",
//   "kamar",
//   "derrick",
//   "jimmy",
//   "lucy",
//   "louis",
//   "deisy",
//   "shadi",
//   "edwin",
// ];

// console.log(arr[randomNumber]);

// if (arr[randomNumber] === "liv") {
//   console.log("hello world");
// } else if (arr[randomNumber] === "kamar") {
//   console.log("whats poppin");
// } else {
//   console.log("tech your wrong");
// }

// let ar = ["shadi", "lucy", "kite"];

// if (ar[0] === "shadi") {
//   console.log("shadi");
// } else if (ar[1] === "lucy") {
//   console.log("lucy");
// } else {
//   console.log("everyone else");
// }

// CHALLENGE: GUESS THE NUMBER

//  The program generates a random number between 1 and 10.
let randomNumber = Math.floor(Math.random() * 11);
console.log(randomNumber);
//// The user is prompted to guess the number.

let userQuestion = prompt("what number are you guessing?");

// If the user's guess matches the generated number, an alert is shown with a success message.
if (userQuestion == randomNumber) {
  alert("correct!");
} else {
  alert("incorrect");
}

// If the user's guess is incorrect, an alert is shown with a failure message.
