//1
// console.log("I'm printing to console!");


//2
// let name = prompt("What is your name?");
// document.body.innerHTML = "Hello, " + name + "!";


//3

// let n1 = Number(prompt("first number:"));
// let n2 = Number(prompt("Second number:"));
// let n3 = Number(prompt("Third number:"));
// let sum = n1 + n2 + n3;
// let product = n1 * n2 * n3;
// let average = sum / 3;
// document.body.innerHTML =
//     "Sum: " + sum + "<break>" +
//     "Product: " + product + "<break>" +
//     "Average: " + average;


//4
// let name = prompt("What is your name?");
// let number = Math.floor(Math.random() * 4) + 1;
// let house;
// if (number === 1) {
//     house = "Gryffindor";
// }
// else if (number === 2) {
//     house = "Slytherin";
// }
// else if (number === 3) {
//     house = "Hufflepuff";
// }
// else {
//     house = "Ravenclaw";
// }
// document.body.innerHTML = name + ", you are " + house + ".";



//5
// let year = Number(prompt("Enter a year:"));
// let message;
// if (year % 400 === 0) {
//     message = year + " is a leap year.";
// }
// else if (year % 100 === 0) {
//     message = year + " is NOT a leap year.";
// }
// else if (year % 4 === 0) {
//     message = year + " is a leap year.";
// }
// else {
//     message = year + " is not a leap year.";
// }
// document.body.innerHTML = message;




//6
// let answer = confirm("Should I calculate the square root?");
//
// if (answer === true) {
//     let num = Number(prompt("Enter a number:"));
//
//     if (num < 0) {
//         document.body.innerHTML = "The square root of a negative number is not defined";
//     } else {
//         let result = Math.sqrt(num);
//         document.body.innerHTML = "The square root is " + result;
//     }
// }
// else {
//     document.body.innerHTML = "The square root is not calculated.";
// }



//7
// let rolls = Number(prompt("How many dice rolls?"));
// let sum = 0;
//
// for (let i = 1; i <= rolls; i++) {
//     let roll = Math.floor(Math.random() * 6) + 1;  // gives 1–6
//     sum = sum + roll;
// }
//
// document.body.innerHTML = "The sum of the dice rolls is: " + sum;




//8
// let startText = prompt("Enter the start year:");
// let startYear = Number(startText);
// let endText = prompt("Enter the end year:");
// let endYear = Number(endText);
// let listHtml = "<ul>";
// for (let year = startYear; year <= endYear; year++) {
//     let isLeap = false;
//     if (year % 400 === 0) {
//         isLeap = true;
//     }
//     else if (year % 100 === 0) {
//         isLeap = false;
//     }
//     else if (year % 4 === 0) {
//         isLeap = true;
//     }
//     if (isLeap === true) {
//         listHtml = listHtml + "<li>" + year + "</li>";
//     }
// }
// listHtml = listHtml + "</ul>";
// document.body.innerHTML = listHtml;



//9
// let numberText = prompt("Give an integer:");
// let number = Number(numberText);
// let isPrime = true;
// if (number < 2) {
//     isPrime = false;
// }
// for (let i = 2; i < number; i++) {
//     if (number % i === 0) {
//         isPrime = false;
//         break;
//     }
// }
// if (isPrime === true) {
//     document.body.innerHTML = number + " is a prime number.";
// }
// else {
//     document.body.innerHTML = number + " is not a prime number.";
// }



//10
// let diceText = prompt("How many dice?");
// let diceCount = Number(diceText);
//
// let sumText = prompt("What sum are you interested in?");
// let targetSum = Number(sumText);
//
// let repeats = 10000;
// let successCount = 0;
//
// for (let r = 0; r < repeats; r++) {
//     let currentSum = 0;
//
//     for (let d = 0; d < diceCount; d++) {
//         let roll = Math.floor(Math.random() * 6) + 1;
//         currentSum = currentSum + roll;
//     }
//
//     if (currentSum === targetSum) {
//         successCount = successCount + 1;
//     }
// }
//
// let probability = (successCount / repeats) * 100;
// let probabilityText = probability.toFixed(2);
//
// document.body.innerHTML =
//     "Probability to get sum " + targetSum +
//     " with " + diceCount +
//     " dice is " + probabilityText + "%";



































































