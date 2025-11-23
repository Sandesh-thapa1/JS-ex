"use strict";

const input = document.getElementById("calculation");
const button = document.getElementById("start");
const result = document.getElementById("result");
button.addEventListener("click", function () {
  const text = input.value.replace(/\s+/g, ""); // remove spaces
  let a;
  let b;
  let answer;
  if (text.includes("+")) {
    const parts = text.split("+");
    a = Number(parts[0]);
    b = Number(parts[1]);
    answer = a + b;
  } else if (text.includes("-")) {
    const parts = text.split("-");
    a = Number(parts[0]);
    b = Number(parts[1]);
    answer = a - b;
  } else if (text.includes("*")) {
    const parts = text.split("*");
    a = Number(parts[0]);
    b = Number(parts[1]);
    answer = a * b;
  } else if (text.includes("/")) {
    const parts = text.split("/");
    a = Number(parts[0]);
    b = Number(parts[1]);
    if (b === 0) {
      answer = "Cannot divide by zero";
    } else {
      answer = a / b;
    }
  } else {
    answer = "Invalid calculation";
  }
  result.textContent = "Result: " + answer;
});