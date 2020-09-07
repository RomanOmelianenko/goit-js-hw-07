const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const listRef = document.querySelector("#ingredients");
// console.log(listRef);

const addListsItem = ingredients.reduce((acc, element) => {
  const li = document.createElement("li");
  li.textContent = element;
  acc.push(li);
  return acc;
}, []);

listRef.append(...addListsItem);

console.log(listRef);
