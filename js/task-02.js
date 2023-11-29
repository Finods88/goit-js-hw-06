const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const fragment = document.createDocumentFragment();

ingredients.forEach((ingredient) => {
  const liElement = document.createElement("li");
  liElement.classList.add("item");
  liElement.textContent = ingredient;
  fragment.appendChild(liElement);
});

const ingredientsList = document.getElementById("ingredients");
ingredientsList.appendChild(fragment);
