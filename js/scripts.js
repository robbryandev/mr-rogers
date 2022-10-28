// Buisiness logic

// Classes

// ReplaceObject class contains a number array with numbers marked for replacement.
// A string array with strings used to replace the corresponding number in the number array.
// And a method to validate if both arrays have the same length.
class ReplaceObject {
  constructor(numArray, strArray) {
    this.numArray = numArray.map(function(num) {
      return Number(num);
    });
    this.strArray = strArray.map(function(str) {
      return String(str);
    });
  }

  isValid() {
    return this.numArray.length === this.strArray.length;
  }
}

// RogerArray class takes an array of numbers
// and a ReplaceObject containing the rules for how the numbers should be replaced.
class RogerArray {
  constructor(numCountArray, replaceObject) {
    this.numCountArray = numCountArray.map(function(num) {
      return Number(num);
    });
    this.replaceObject = typeof replaceObject === ReplaceObject ? replaceObject : ReplaceObject([0], [""]);
  }

  replace() {
    return this.numCountArray.map(function(num) {
      const index = num;
      if (num === this.replaceObject.numArray[index]) {
        return this.replaceObject.strArray[index];
      }
    });
  }
}

// Methods for Standard objects

// String method that returns provided string as a number or 0 instead of NaN
String.prototype.parseInt = function() {
  return !Number(this.trim()) ? 0 : parseInt(this.trim());
}

// Number method that gets an array from 0 to the number provided
Number.prototype.countArray = function() {
  let res = [];
  for (let i = 0; i <= this; i++) {
    res.push(i);
  }
  return res.length > 0 ? res : [0];
}

// User interface logic
function submitForm(event) {
  event.preventDefault();
  console.log(document.getElementById("user-number").value.parseInt().countArray());
}

// Page load
addEventListener("load", function() {
  const numberForm = document.querySelector("form");
  numberForm.addEventListener("submit", submitForm);
});