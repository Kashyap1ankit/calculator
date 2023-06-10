"use strict";

const input = document.querySelector("input");

let string = "";

//Adding event listener to calculator section just becaus if clicked elsewhere then no functio will be performed

document.querySelector(".calculator").addEventListener("click", function (e) {
  e.preventDefault();

  const target = e.target;

  if (e.target.classList.contains("btn")) {
    if (e.target.value === "=") {
      string = eval(string);
      input.value = string;
    } else if (e.target.value === "C") {
      string = "";
      input.value = string;
    } else if (e.target.value === "%") {
      const string1 = string / 100;
      input.value = string1;
      string = string1;
    } else if (e.target.value === "CE") {
      string = string.slice(0, string.length - 1);
      input.value = string;
    } else {
      string += target.value;
      input.value = string;
    }
  }
});
