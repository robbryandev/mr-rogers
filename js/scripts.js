// Buisiness logic

// Classes

// ReplaceObject class contains a number array with numbers marked for replacement.
// A string array with strings used to replace the corresponding number in the number array.
// And a method to validate if both arrays have the same length.
class ReplaceObject {
  constructor(numArray, strArray) {
    this.numArray = numArray.map(function (num) {
      return Number(num);
    });
    this.strArray = strArray.map(function (str) {
      return String(str);
    });
  }

  isValid() {
    return this.numArray.length === this.strArray.length;
  }
}

// RogerArray class takes an array of numbers.
// A ReplaceObject containing the rules for how the numbers should be replaced.
// And a replace method to conditionally replace numbers in the number array with strings provided.
class RogerArray {
  constructor(numCountArray, repObject) {
    this.numCountArray = numCountArray.map(function (num) {
      return Number(num);
    });
    this.repObject = typeof repObject === "object" ? repObject : new ReplaceObject([0], [""]);
  }
}

RogerArray.prototype.replace = function () {
  let self = this;
  let res = [];
  this.numCountArray.forEach(function (num) {
    const rep = self.repObject;
    let replaced = false;
    for (let i = rep.numArray.length - 1; i >= 0; i--) {
      if (`${num}`.includes(`${rep.numArray[i]}`) && !replaced) {
        replaced = true;
        res.push(rep.strArray[i]);
      }
    }
    if (!replaced) {
      res.push(num);
    }
  });
  return res;
};

// Methods for Standard objects

// String method that returns provided string as a number or 0 instead of NaN
String.prototype.parseInt = function () {
  return !Number(this.trim()) ? 0 : parseInt(this.trim());
};

// Number method that gets an array from 0 to the number provided
Number.prototype.countArray = function () {
  let res = [];
  for (let i = 0; i <= this; i++) {
    res.push(i);
  }
  return res.length > 0 ? res : [0];
};

// User interface logic
function submitForm(event) {
  event.preventDefault();
  console.log(
    document.getElementById("user-number").value.parseInt().countArray()
  );
}

// Page load
addEventListener("load", function () {
  const numberForm = document.querySelector("form");
  numberForm.addEventListener("submit", submitForm);
});
