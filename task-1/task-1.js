const listRef = document.querySelector("#categories");
const itemsRef = document.querySelectorAll(".item");
// console.log(itemsRef);
console.log(`В списке ${itemsRef.length} категории`);

itemsRef.forEach((arr) => {
  const h3 = arr.querySelector("h3");
  const li = arr.querySelectorAll("li");
  console.log(`Категория: ${h3.textContent}`);
  console.log(`Количество элементов: ${li.length}`);
});
