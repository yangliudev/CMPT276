function submitNewGrade() {
  // Get necessary html elements using ID
  let userInput = document.getElementById("newGradeInput").value.trim();
  let maxBound = document.getElementById("maxBound").value.trim();
  let aplusBound = document.getElementById("aplusBound").value.trim();
  let aBound = document.getElementById("aBound").value.trim();

  // Check for invalid inputs
  if (userInput === "") {
    alert("Please enter a value.");
  }

  if (isNaN(userInput) || userInput < 0) {
    alert("Please enter a valid number greater than 0.");
  }

  userInput = parseInt(userInput);

  // Calculate where to place the new grade on histogram
  if (userInput <= maxBound && userInput >= aplusBound) {
    updateHistogram("outputValueA+");
  } else if (userInput <= aplusBound && userInput >= aBound) {
    updateHistogram("outputValueA");
  }
}

function updateBound(bound) {
  if (bound === "maxBound") {
    console.log("max bound");
  } else if (bound === "aplusBound") {
    console.log("a plus bound");
  } else {
    console.log("hello world");
  }
}

function updateHistogram(elementToUpdate) {
  let outputElement = document.getElementById(elementToUpdate);
  let existingText = outputElement.textContent;
  let newText = existingText + "O";
  outputElement.textContent = newText;
}
