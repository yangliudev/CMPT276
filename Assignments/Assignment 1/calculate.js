function submitNewGrade() {
  let userInput = document.getElementById("newGradeInput").value.trim();

  if (userInput === "") {
    alert("Please enter a value.");
  }

  if (isNaN(userInput) || userInput < 0) {
    alert("Please enter a valid number greater than 0.");
  }

  document.getElementById("outputValueA+").textContent = userInput;
}
