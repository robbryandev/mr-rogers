// Buisiness logic
String.prototype.parseInt = function() {
  return this.trim() !== "" ? parseInt(this.trim()) : 0;
}

// User interface logic
function submitForm(event) {
  event.preventDefault();
  console.log(document.getElementById("user-number").value.parseInt());
}

// Page load
addEventListener("load", function() {
  const numberForm = document.querySelector("form");
  numberForm.addEventListener("submit", submitForm);
});