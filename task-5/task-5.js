const inputRef = document.getElementById("name-input");
const outputRef = document.getElementById("name-output");
// console.log(inputRef);
// console.dir(outputRef.innerText);

inputRef.addEventListener("input", (event) => {
  console.log(event.target.value);
  if (inputRef.textContent !== " ") {
    outputRef.textContent = event.target.value;
  } else {
    // outputRef.textContent = textContent; ???
  }
});
