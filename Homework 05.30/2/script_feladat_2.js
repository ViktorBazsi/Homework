let tiger = {
  name: "Beátrix",
  faj: "macska",
};

let elephant = {
  name: "Médeia",
  faj: "elefánt",
};

let animals = [tiger, elephant];

console.log(animals);

let newanimal = {
  name: "Viktor",
  faj: "kutya",
};

animals.push(newanimal);

if (newanimal.faj == "kutya") {
  console.log(`Az új állat egy kutya, a neve: ${newanimal.name}`);
} else {
  console.log(
    `Az új állat nem egy kutya, hanem: ${newanimal.faj}, a neve pedig ${newanimal.name}`
  );
}
