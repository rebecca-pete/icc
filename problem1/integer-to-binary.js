"use strict";

let x = 128;
let arr = [];

function binaryConvert() {
  let num = x;

  if (num != Math.floor(num)) {
    console.log("Please enter a number");
  } else if (num < 0) {
    console.log("Please enter a positive number");
  } else {
    while (num !== 0) {
      let rem = num % 2;
      num = Math.floor(num / 2);
      arr.unshift(rem);
    }
    let bitIdx = arr.length;
    while (bitIdx > 4) {
      console.log(arr);
      arr.splice(bitIdx - 4, 0, " ");
      bitIdx = bitIdx - 4;
    }
    // arr = arr.join("").toString(2);
    arr = arr.join("");
    return arr;
  }
}

console.log(binaryConvert(x));