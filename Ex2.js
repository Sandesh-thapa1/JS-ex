//1.

// let list = [];
//
// for (let i = 1; i <= 5; i++) {
//   let value = Number(prompt("Give number " + i + ":"));
//   list.push(value);
// }

// console.log("Reversed:");
// for (let j = list.length - 1; j >= 0; j--) {
//   console.log(list[j]);
// }



//2.
// let total = Number(prompt("Number of participants:"));
// let people = [];
//
// for (let i = 0; i < total; i++) {
//   people[i] = prompt("Participant " + (i + 1) + ":");
// }
//
// people.sort();
//
// document.write("<ol>");
// for (let p of people) {
//   document.write("<li>" + p + "</li>");
// }
// document.write("</ol>");



//3.

// let dogList = [];
//
// for (let i = 0; i < 6; i++) {
//   dogList[i] = prompt("Dog name " + (i + 1) + ":");
// }
//
// dogList.sort().reverse();
//
// document.write("<ul>");
// dogList.forEach(name => document.write("<li>" + name + "</li>"));
// document.write("</ul>");



//4.

// let arr = [];
// let val;
//
// while ((val = Number(prompt("Number (0 ends):"))) !== 0) {
//   arr.push(val);
// }
//
// arr.sort((a, b) => b - a);
//
// console.log("Sorted descending:");
// arr.forEach(n => console.log(n));



//5.

// let items = [];
//
// while (true) {
//   let num = Number(prompt("Enter a number:"));
//   if (items.includes(num)) {
//     console.log("Duplicate detected!");
//     break;
//   }
//   items.push(num);
// }
//
// items.sort((a, b) => a - b);
// console.log("Numbers you gave:");
// console.log(items);


// 6.
// function dice() {
//   return Math.floor(Math.random() * 6) + 1;
// }
//
// document.write("<ul>");
// let roll = 0;
//
// while (roll !== 6) {
//   roll = dice();
//   document.write("<li>" + roll + "</li>");
// }
// document.write("</ul>");



//7.
// function roll(sides) {
//   return Math.floor(Math.random() * sides) + 1;
// }
//
// let sides = Number(prompt("Dice sides:"));
// let result = 0;
//
// document.write("<ul>");
// while (result !== sides) {
//   result = roll(sides);
//   document.write("<li>" + result + "</li>");
// }
// document.write("</ul>");


//8.
// function joinText(words) {
//   let out = "";
//   for (let w of words) out += w;
//   return out;
// }
//
// let arrNames = ["Leo", "Kira", "Maya", "Soren"];
// let combined = joinText(arrNames);
//
// document.write("<p>" + combined + "</p>");




//9.
// function getEven(list) {
//   let ev = [];
//   list.forEach(n => {
//     if (n % 2 === 0) ev.push(n);
//   });
//   return ev;
// }
//
// let nums = [3, 8, 15, 4, 22];
//
// console.log("Original:", nums);
// console.log("Even numbers:", getEven(nums));



//10.
// let cCount = Number(prompt("How many candidates?"));
// let cList = [];
//
// for (let i = 0; i < cCount; i++) {
//   let n = prompt("Candidate " + (i + 1) + " name:");
//   cList.push({ n: n, v: 0 });
// }
//
// let vCount = Number(prompt("How many voters?"));
//
// for (let i = 0; i < vCount; i++) {
//   let choice = prompt("Vote (enter name, empty = no vote):");
//   if (choice === "") continue;
//   let found = cList.find(c => c.n === choice);
//   if (found) found.v++;
// }
//
// cList.sort((a, b) => b.v - a.v);
//
// console.log("Winner:", cList[0].n, "with", cList[0].v, "votes");
// console.log("Results:");
// cList.forEach(c => console.log(c.n + ": " + c.v + " votes"));










































