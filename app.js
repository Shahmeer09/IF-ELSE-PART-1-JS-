//question 1

// let number = prompt("Enter a number:");

// if (!isNaN(number)) {
//     if (number % 3 === 0) {
//         console.log(number + " is divisible by 3.");
//     } else {
//         console.log(number + " is not divisible by 3.");
//     }
// } else {
//     console.log("Invalid input. Please enter a valid number.");
// }


//question 2

// let number = prompt("Enter a number:");

// if (!isNaN(number)) {
//     if (number % 2 === 0) {
//         console.log(number + " is an even number.");
//     } else {
//         console.log(number + " is an odd number.");
//     }
// } else {
//     console.log("Invalid input. Please enter a valid number.");
// }


//question 3

//  let age = 16; 

//  if (age > 18) {
//      console.log("Old enough");
//  } else {
//      console.log("Too young");
//  }


//question 4

//  let userName = prompt("Enter your name:");

//  if (userName = "Shahmeer") {
//      console.log("Hello, Shahmeer! It's great to see you!");
//  } else {

//  }


//question 6

// let input = prompt("Enter a character:");

// if (input.length === 1) {
//     let charCode = input.charCodeAt(0);
    
//     if (charCode >= 48 && charCode <= 57) {
//         console.log("The input is a number.");
//     }
//     else if (charCode >= 65 && charCode <= 90) {
//         console.log("The input is an uppercase letter.");
//     }
//     else if (charCode >= 97 && charCode <= 122) {
//         console.log("The input is a lowercase letter.");
//     }
//     else {
//         console.log("The input is neither a number nor a letter.");
//     }
// } else {
//     console.log("Invalid input. Please enter a single character.");
// }


//question 7

// let number1 = prompt("Enter the first number:");
// let number2 = prompt("Enter the second number:");
// let operator = prompt("Enter the operator (+, -, *, /, %):");

// let result;
// switch (operator) {
//     case '+':
//         result = number1 + number2;
//         console.log("Result: " + result);
//         break;
//     case '-':
//         result = number1 - number2;
//         console.log("Result: " + result);
//         break;
//     case '*':
//         result = number1 * number2;
//         console.log("Result: " + result);
//         break;
//     case '/':
//         if (number2 !== 0) {
//             result = number1 / number2;
//             console.log("Result: " + result);
//         } else {
//             console.log("Error: Division by zero is not allowed.");
//         }
//         break;
//     case '%':
//         if (number2 !== 0) {
//             result = number1 % number2;
//             console.log("Result: " + result);
//         } else {
//             console.log("Error: Modulus by zero is not allowed.");
//         }
//         break;
//     default:
//         console.log("Invalid operator. Please enter a valid operator (+, -, *, /, %).");
// }


//question 8

// let age = 14
// console.log(age);
// if (age>18){
//     console.log('you are allowed');

// }
// else{ console.log('you are not allow');}


//question 9


//  let year = prompt("Enter a year");

//  if (!isNaN(year) && year.toString().length === 4) {
//      if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
//          console.log(year + " is a leap year.");
//      } else {
//          console.log(year + " is not a leap year.");
//      }
//  } else {
//      console.log("Invalid input. Please enter a valid year in YYYY format.");
//  }


//question 10

//  let correctPassword = "pass123";

//  let userPassword = prompt("Enter your password:");

//  if (userPassword === "") {
//      console.log("Please enter your password.");
//  } else if (userPassword === correctPassword) {
//      console.log("Correct! The password you entered matches the original password.");
//  } else {
//      console.log("Incorrect password.");
//  }
