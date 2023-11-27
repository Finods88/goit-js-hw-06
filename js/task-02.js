const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ingredientsList = document.getElementById("ingredients");

const liElements = ingredients
  .map((ingredient) => `<li class="item">${ingredient}</li>`)
  .join("");
ingredientsList.insertAdjacentHTML("beforeend", liElements);
