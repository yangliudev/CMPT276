function submitNewGrade() {
  // Get necessary html elements using ID
  let userInput = document.getElementById("newGradeInput").value.trim();
  let maxBound = document.getElementById("maxBound").value.trim();
  let aplusBound = document.getElementById("aplusBound").value.trim();
  let aBound = document.getElementById("aBound").value.trim();
  let aminusBound = document.getElementById("aminusBound").value.trim();
  let bplusBound = document.getElementById("bplusBound").value.trim();
  let bBound = document.getElementById("bBound").value.trim();
  let bminusBound = document.getElementById("bminusBound").value.trim();
  let cplusBound = document.getElementById("cplusBound").value.trim();
  let cBound = document.getElementById("cBound").value.trim();
  let cminusBound = document.getElementById("cminusBound").value.trim();
  let dBound = document.getElementById("dBound").value.trim();
  let fBound = document.getElementById("fBound").value.trim();

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
  } else if (userInput <= aBound && userInput >= aminusBound) {
    updateHistogram("outputValueA-");
  } else if (userInput <= aminusBound && userInput >= bplusBound) {
    updateHistogram("outputValueB+");
  } else if (userInput <= bplusBound && userInput >= bBound) {
    updateHistogram("outputValueB");
  } else if (userInput <= bBound && userInput >= bminusBound) {
    updateHistogram("outputValueB-");
  } else if (userInput <= bminusBound && userInput >= cplusBound) {
    updateHistogram("outputValueC+");
  } else if (userInput <= cplusBound && userInput >= cBound) {
    updateHistogram("outputValueC");
  } else if (userInput <= cBound && userInput >= cminusBound) {
    updateHistogram("outputValueC-");
  } else if (userInput <= cminusBound && userInput >= dBound) {
    updateHistogram("outputValueD");
  } else if (userInput <= dBound && userInput >= fBound) {
    updateHistogram("outputValueF");
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
