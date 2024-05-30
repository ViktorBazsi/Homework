let tiger = {
  name: "Ottó",
  age: 6,
};

let elephant = {
  name: "Bendegúz",
  age: 42,
};

let dog = {
  name: "Henrietta",
  age: 3,
};

// console.log(tiger);
// console.log(elephant);
// console.log(dog);

let animals = [tiger, elephant, dog];

// console.log(animals);

let dolphin = {
  name: "Húgó",
  age: 6,
};

animals.push(dolphin);

if (dolphin.age > 5) {
  console.log(`Az 5 éves új állat neve: ${dolphin.name}`);
} else {
  console.log("Fiatal állat érkezett!");
}
