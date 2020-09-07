const listRef = document.querySelector("#categories");
const itemsRef = document.querySelectorAll(".item");
// console.log(itemsRef);
console.log(`В списке ${itemsRef.length} категории`);

itemsRef.forEach((arr) => {
  const h2 = arr.querySelector("h2");
  const li = arr.querySelectorAll("li");
  console.log(`Категория: ${h2.textContent}`);
  console.log(`Количество элементов: ${li.length}`);
});
