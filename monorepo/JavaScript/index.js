// Get the form and checkbox inputs
const form = document.getElementById("checkboxForm");
const checkboxes = form.getElementsByTagName("input");


function shuffleValues() {
  const values = Array.from(checkboxes).map((checkbox) => checkbox.value);
  const shuffledValues = shuffleArray(values);
  Array.from(checkboxes).forEach((checkbox, index) => {
    checkbox.value = shuffledValues[index];
  });
}


function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}


function changeValues() {
  Array.from(checkboxes).forEach((checkbox, index) => {
    checkbox.value = "New Value " + (index + 1);
  });
}


function showSelectedValues() {
  const selectedValues = Array.from(checkboxes)
    .filter((checkbox) => checkbox.checked)
    .map((checkbox) => checkbox.value);
  document.getElementById("result").textContent =
    "Selected Values: " + selectedValues.join(", ");
}


document.getElementById("shuffleBtn").addEventListener("click", shuffleValues);
document.getElementById("changeBtn").addEventListener("click", changeValues);
document
  .getElementById("showSelectedBtn")
  .addEventListener("click", showSelectedValues);

