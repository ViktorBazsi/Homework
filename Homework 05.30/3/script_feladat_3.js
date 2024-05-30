let tiger = {
  name: "Ottó",
  age: 6,
  faj: "macska",
};

let elephant = {
  name: "Bendegúz",
  age: 42,
  faj: "elefánt",
};

let dog = {
  name: "Henrietta",
  age: 3,
  faj: "kutya",
};

let cat = {
  name: "Lujza",
  age: 5,
  faj: "macska",
};

let dolphin = {
  name: "Márk",
  age: 34,
  faj: "delfin",
};

let animals = [tiger, elephant, dog, cat, dolphin];
console.log(animals);

if (tiger.faj == "macska") {
  console.log(`${tiger.name} egy macskaféle.`);
} else {
  console.log(`${tiger.name} nem macskaféle, hanem egy ${tiger.faj}.`);
}
if (elephant.faj == "macska") {
  console.log(`${elephant.name} egy macskaféle.`);
} else {
  console.log(`${elephant.name} nem macskaféle, hanem egy ${elephant.faj}.`);
}
if (dog.faj == "macska") {
  console.log(`${dog.name} egy macskaféle.`);
} else {
  console.log(`${dog.name} nem macskaféle, hanem egy ${dog.faj}.`);
}
if (cat.faj == "macska") {
  console.log(`${cat.name} egy macskaféle.`);
} else {
  console.log(`${cat.name} nem macskaféle, hanem egy ${cat.faj}.`);
}
if (dolphin.faj == "macska") {
  console.log(`${dolphin.name} egy macskaféle.`);
} else {
  console.log(`${dolphin.name} nem macskaféle, hanem egy ${dolphin.faj}.`);
}
