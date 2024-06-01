const obj = {
  name: "Vadim",
  age: 26,
  job: "Fullstack",
};

const entries = [
  ["name", "Vadim"],
  ["age", 26],
  ["job", "Fullsatck"],
];
// Object.entries зручно використовувати для перетворення
// об'єкта в масив пар "ключ-значення", аналогічно до того, як ви це зробили вручну в entries.
// console.log(Object.entries(obj));
// З масива в обєкт
// console.log(Object.fromEntries(entries));

const map = new Map(entries);
// console.log(map);
console.log(map.get("job"));

map.set("newField", 42).set(obj, "Value of object").set(NaN, "Nan??");
console.log(map);
// console.log(map.get(obj));
// console.log(map.get(NaN));

// map.delete("job");
// console.log(map.has("job"));

// console.log(map.size);
// map.clear();
// console.log(map.size);

// =================

// for (const entr of map) {
//   console.log(entr);
// }

// for (let val of map.values()) {
//   console.log(val);
// }

// for (let key of map.keys()) {
//   console.log(key);
// }

// map.forEach((val, key, m) => {
//   console.log(val, key);
// });

// ========================

// const array = [...map];

// const mapObj = Object.fromEntries(map.entries());

// console.log(mapObj);

// ========================

const users = [{ name: "Elena" }, { name: "Alex" }, { name: "Irina" }];

const visits = new Map();

visits
  .set(users[0], new Date())
  .set(users[1], new Date(new Date().getTime() + 1000))
  .set(users[2], new Date(new Date().getTime() + 2000));

for (const iterator of visits.keys()) {
  console.log(iterator);
}
// function lastVisit(user) {
//   return visits.get(user);
// }

// console.log(lastVisit(users[1]));
