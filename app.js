//#region Task#1 Global Scope
// var a = "declare";
// let b = "declare";
// const c = "declare";

// let = arrFunc = () => {
//     console.log(a) // declare
//     console.log(b) // declare
//     console.log(c) // declare
// }

// arrFunc()
// Yes all three are accessible globally in functuion scope as well//
//#endregion

//#region Task#2 Function Scope
// let = arrFunc = () => {
    //     var a = "declare";
    //     let b = "declare";
    //     const c = "declare";
//     }
//         console.log(a) // not defined
//         console.log(b) // not defined
//         console.log(c) // not defined

// arrFunc()
// I observe declare a variable of inside function is no accesible outside the function its a function scope.
//#endregion

//#region Task#3 Block Scope
// if (true){
    //     var a = 1;
    //     let b = 2;
    //     const c = 3;
    // }
    // console.log(a) // 1
    // console.log(b) // nt defined
    // console.log(c) // not defined
    
    //`var` its a global scope and `let` & `const` its block scope accesible outside a block scope.
    
    //#endregion
    
//#region Task#4 Hoisting with var
// console.log(a)//undefined
// var a = "variable" ;
// using `var` variable is hoisted means its before declare move on the top of code globally scope of it.
//#endregion

//#region Task#5 Hoisting with let and const
// console.log(log)//Cannot access 'log' before initialization//
// let log = variable;
// console.log(constant)//Cannot access 'constant' before initialization//
// const constant = variable;
//#endregion

//#region Task#6 Re-declaration
// var name;
// var name;
// console.log(name) // var can re-declared

// let name;
// let name;
// console.log(name) // already been declared // in let can't be re-declared

// const name;
// const name;
// console.log(name) // already been declared // in const can't be re-declared

//#endregion

// #region Task#7 Re-assignment
// var name = "abir";
// var name = "abeer";
// console.log(name) // abeer // *var can re-assign*

// let name = amer;
// let name = amir;
// console.log(name) // already been declared // in let can't be re-assign

// const name = razzak;
// const name = razzaq;
// console.log(name) // already been declared // in const can't be re-assign

//#endregion

// #region Task#8 Temporal Dead Zone (TDZ):

//`let` example:
// if (true){
//     console.log(letMe); // ReferenceError: Cannot access 'letMe' before initialization
//     let letMe = 'mai aik variable hon';
// }
//`const` example:
// if(true){
//     console.log(myConst); // ReferenceError: Cannot access 'myConst' before initialization
//     const myConst = 'constant variable';
// }

//#endregion

// #region Task#9 When to use `var`, `let`, and  `const`
//`var`Example:
// function oldFunctionScope() {
    //     if (true) {
        //         var message = 'Hello, World!';
        //     }
        //     // `message` is accessible here because `var` is function-scoped
        //     console.log(message); // Hello, World!
        // }
        
        // oldFunctionScope();
        
//`let`Example:
// for (let i = 0; i < 5; i++) {
//     console.log(i); // 0, 1, 2, 3, 4
// }
// console.log(i); // ReferenceError: i is not defined//
            
//`const`Example:
// const fruits = ['apple', 'banana', 'orange'];
// fruits.push('grape');
// console.log(fruits); // ['apple', 'banana', 'orange', 'grape']
// fruits.pop();
// console.log(fruits); // ['apple', 'banana', 'orange']
// fruits = ['kiwi', 'pineapple']; // TypeError: Assignment to constant variable
          
//#endregion
            
// #region Task#10 String Interpolation:
// let firstName = "abeer";
// let lastName = "iqbal";

// const fullName = `my nme is ${firstName} ${lastName}`;
// console.log(fullName)
//#endregion

// #region Task#11 Multi-line Strings:

// const address = `13-A/2 Shalmar Garden, DHA-City,
// Lahore, Pakistan, 6800.`
// console.log(address)

//#endregion

// #region Task#12 Simple Expressions:

// let sum = (a,b) => {
//     var a = 1
//     var b = 1    
//     console.log(`${a+b}`) // 2
// }

// sum()

//#endregion

// #region Task#13 Function Calls:

// function multiply(num1, num2) {
//     return num1 * num2;
// }

// const num1 = 5;
// const num2 = 3;
// const product = multiply(num1, num2);

// const message = `The product of ${num1} and ${num2} is ${product}.`;
// console.log(message); // The product of 5 and 3 is 15.

//#endregion

// #region Task#14 Creating a Tagged Template

// function logTemplate(strings, ...values) {
//     console.log('Template parts:', strings);
//     console.log('Values:', values);
// }

// const name = 'John';
// const age = 30;

// logTemplate`My name is ${name} and I am ${age} years old.`;
// // Template parts: ["My name is ", " and I am ", " years old."]
// // Values: ["John", 30]

//#endregion

// #region Task#15 Formatting:




//#endregion

// #region Task#16 Conditional Logic:

// let displayTimeMessage = () => {
//     const now = new Date();
//     let currentHour = now.getHours();
    
//     let period = currentHour < 12 ? 'morning' : 'afternoon';
//     let adjustedHour = currentHour % 12 || 12; // Convert 0 to 12 for 12 AM/PM
//     let amPm = currentHour < 12 ? 'AM' : 'PM';

//     const message = `Good ${period}! The current time is ${adjustedHour} ${amPm}.`;

//     console.log(message);
// };

// displayTimeMessage();



//#endregion

// #region Task#17 Loops within Template Literals:
// const shoppingList = ['Apples', 'Bananas', 'Oranges', 'Milk', 'Bread'];

// const generateHtmlList = (items) => {
//     const listItems = items.map(item => `<li>${item}</li>`).join('');
//     const htmlList = `<ul>${listItems}</ul>`;
//     return htmlList;
// };

// const htmlShoppingList = generateHtmlList(shoppingList);
// console.log(htmlShoppingList);

//#endregion

// #region Task#18 Escaping Backticks:
// let string = `Create a string that includes a backtick character using a template 
// literal.`
// console.log(string);

//#endregion

// #region Task#19 Nested Template Literals:
 

//#endregion

// #region Task#20 Simple Condition:

// let ageDetec = () => {
//     let age = 18;
//     const canVote = age >= 18 ? `Yes` : `No`;
//     console.log(canVote)
// }

// ageDetec();


//#endregion

// #region Task#21 Even or Odd:

// let numberDetec = () => {
//     let number = 8;
//     const evenOrOdd = (number % 2 === 0) ? 'even' : 'odd';
//     console.log(evenOrOdd);
// }

// numberDetec();  // "even"


//#endregion

// #region Task#22 Grade Evaluation:

// let gradeDetec = () => {
//     let score = 90;
//     const grade = score >= 90 ? 'A' :
//                   score >= 80 ? 'B' :
//                   score >= 70 ? 'C' :
//                   score >= 60 ? 'D' : 'F';

//     console.log(grade);
// }

// gradeDetec();  // "A"


//#endregion

// #region Task#23 Login Status

// let isLoggodIn = true;
// let statusMessage = () => {
//     const statusMsg = isLoggodIn ? "Welcome back" : "Please log in"; 
//     console.log(statusMsg)
// }

// statusMessage() //"Welcome back"



//#endregion
// #region Task#24 Discount Eligibility

// let isMember = true;
// let purchaseAmount = 150;
// let discElegibility = () => {
//     const discount = (isMember && purchaseAmount > 100) ? purchaseAmount * 0.10 : 0;    console.log(discount)
// }

// discElegibility() //15

//#endregion

// #region Task#25 Determine Max Value:

// let maxValue = (a, b) => (a > b ? a : b)

// console.log(maxValue( 24 , 1)) // 24 is larger
// console.log(maxValue( 6 , 8)) // 8 is larger
// console.log(maxValue( 200 , 20000)) // 20000 is larger

//#endregion

// #region Task#26 Greeting Message:

// let greet = (name) => !name ? (`Hello, guest!`) : (`Hello, ${name}!`);
// console.log(greet('John')); // Hello, John!.
// console.log(greet('')); // Hello, guest!.

//#endregion

// #region Task#27 Mapping Values:

// const arrOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newArrOfNumbers = arrOfNumbers.map(arrOfNumbers => 
//     arrOfNumbers % 2 === 0 ? arrOfNumbers * 2 : arrOfNumbers * 3
// );

// console.log(newArrOfNumbers); // [3, 4, 9, 8, 15, 12, 21, 16, 27, 20]

//#endregion
// #region Task# 


//#endregion
// #region Task# 


//#endregion
  