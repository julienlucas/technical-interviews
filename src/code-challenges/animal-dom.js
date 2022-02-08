const animals = Array.from(document.querySelectorAll(".mammal-value"));
const mammals = animals.filter(animal => animal.innerHTML === "true");
const mammalsNode = document.querySelector("#only-mammals");
mammals.forEach(mammal => {
  let grandparent = mammal.parentElement.parentElement;
  mammalsNode.appendChild(grandparent);
});
