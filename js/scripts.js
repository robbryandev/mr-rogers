// Buisiness logic
String.prototype.parseInt = function() {
  return this.trim() !== "" ? parseInt(this.trim()) : 0;
}

Number.prototype.countArray = function() {
  let res = [];
  for (let i = 0; i <= this; i++) {
    res.push(i);
  }
  return res;
}

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

class RogerArray {
  constructor(numCountArray, replaceObject) {
    this.numCountArray = numCountArray.map(function(num) {
      return Number(num);
    });
    this.replaceObject = typeof replaceObject === ReplaceObject ? replaceObject : ReplaceObject([0], [""]);
  }

  replace() {
    
  }
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