const inputRef = document.getElementById("name-input");
const outputRef = document.getElementById("name-output");

inputRef.addEventListener("input", (event) => {
  console.log(event.target.value);
  const userInputRef = event.target.value;

  if (userInputRef.length !== 0) {
    outputRef.textContent = userInputRef;
  } else {
    outputRef.textContent = "незнакомец";
  }
});
