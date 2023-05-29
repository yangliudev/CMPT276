function submitNewGrade() {
  // Uncomment to run provided test data
  // populateWithSampleData();
  // return;

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

  // Check for empty string
  if (userInput === "") {
    alert("Please enter a value.");
    return;
  }

  // Make sure the userInput is a valid number that is not negative
  // Check for string instead of number OR a negative number
  if (isNaN(userInput) || userInput < 0) {
    alert("Please enter a valid number greater than 0.");
    return;
  }

  // Make sure userInput is less than the Max Bound number
  if (userInput > maxBound) {
    alert("Please enter a number less than the Max Bound!");
    return;
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

function updateHistogram(elementToUpdate) {
  let outputElement = document.getElementById(elementToUpdate);
  let existingText = outputElement.textContent;
  let newText = existingText + "O";
  outputElement.textContent = newText;
}

function populateWithSampleData() {
  let grades = [
    65.95, 56.98, 78.62, 96.1, 90.3, 72.24, 92.34, 60.0, 81.43, 86.22, 88.33,
    9.03, 49.93, 52.34, 53.11, 50.1, 88.88, 55.32, 55.69, 61.68, 70.44, 70.54,
    90.0, 71.11, 80.01,
  ];

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

  for (let i = 0; i < grades.length; i++) {
    let userInput = grades[i];
    console.log("enter loop", userInput);
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
}
