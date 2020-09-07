let countervalue = 0;

const decrementBtnRef = document.querySelector("[data-action ='decrement']");
const incrementBtnRef = document.querySelector("[data-action ='increment']");
const totalRef = document.getElementById("value");

decrementBtnRef.addEventListener("click", () => {
  countervalue -= 1;
  totalRef.textContent = countervalue;
});

incrementBtnRef.addEventListener("click", () => {
  countervalue += 1;
  totalRef.textContent = countervalue;
});
