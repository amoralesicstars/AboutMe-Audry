// // let, var, const
// // let allows value to change

// let name = "collin";
// name = "vince";

// // console.log(name); // print to the console, prints anything in the paranthesis

// console.log("hello world");

// console.log(1 + 1);
// // string is a sequence of characters
// // 3 days to declare a string, "", '', ``

const name = "pizza";
const topping = "pineapple";
console.log(name);

/* adding two strings;
concactenation */
console.log(name, topping);

// template literals, turn/pull everything into a string, ability to show into your HTML document

console.log(`${name} ${topping}`);

console.log("string" + 32);
//  string plus integer will = a string.

console.log("32" + "1" + "str");

// integer

console.log(1.5 + 0.3);

/* undefnd value false value. anyting that has a value in it, is TRUE */

// booleans
// if value is false, undefined, null 0 will be false statements

// const num = undefined;
// console.log(Boolean(num));

// let prompt1 = prompt("what is your name");
// let whereDidHeGo = prompt("where did he go?");
// console.log(`${prompt1} went to the ${whereDidHeGo}`);

// alert(`${prompt1} went to the ${whereDidHeGo}`);

// promt user for their name, age and hobby & store them & create an alert personalized introduction message
// hi my name is variablename, variableage, and i like too variablehobby

let variableName = prompt("what is your name?");
let variableAge = prompt("what is your age?");
let variableHobby = prompt("what is your favorite hobby?");

alert(
  `Hi my name is ${variableName} and my age is ${variableAge} and my favorite hobby is ${variableHobby}`
);
