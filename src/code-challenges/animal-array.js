const animals = [
  {
    type: "Dog",
    mammal: true
  },
  {
    type: "Snake",
    mammal: false
  },
  {
    type: "Cheetah",
    mammal: true
  },
  {
    type: "Turtle",
    mammal: false
  },
  {
    type: "Frog",
    mammal: false
  },
  {
    type: "Cat",
    mammal: true
  },
  {
    type: "Badger",
    mammal: true
  }
];

/*
  Brute-force method with a for-loop
  O(n) where n = length of animals
*/
function findMammalsForLoop(animals) {
  const mammals = [];
  for (let i = 0; i < animals.length; i++) {
    if (animals[i].mammal === true) {
      mammals.push(animals[i]);
    }
  }
  return mammals;
}

/*
  Using array.filter() method to test whether each
  animal is a mammal
   O(n) where n = length of animals but more readable
*/
function findMammalsArrayFilter(animals) {
  return animals.filter(animal => animal.mammal === true);
}

/*
  Using array.filter() method to test whether each
  animal is a mammal but de-structure mammal out of animal
   O(n) where n = length of animals but more readable
*/
function findMammalsArrayDestructureFilter(animals) {
  return animals.filter(({ mammal }) => mammal === true);
}

console.log(findMammalsArrayDestructureFilter(animals));
