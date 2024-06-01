// const obj = {
//   name: "Vadim",
//   age: 26,
//   job: "Fullstack",
// };

// const entr = [
//   ["name", "Vladilen"],
//   ["age", 26],
//   ["job", "Fullstack"],
// ];
// приймає об'єкт obj і повертає масив масивів
// console.log(Object.entries(obj));
// приймає масив масивів entr, де кожний підмасив містить пару ключ-значення, і створює новий об'єкт з цих пар
// console.log(Object.fromEntries(entr));

// const map = new Map(entr);

// Встановлення значення
// console.log(map.get("job"));
// map.set(NaN, 'Nan ??');
// map.set(obj, 'Value of object');
// map.set(NaN,'Value');
// console.log(map);

// Видалення
// map.delete('job')
// console.log(map.has('job'));
// map.clear();
// console.log(map.size);

// ==============

// for (const entr of map.entries() ) {
//     console.log(entr);
// }

// Переибраємо значення
// for (const val of map.values()) {
//     console.log(val)
// }

// Перебираємо ключі
// for (const val of map.keys()) {
//   console.log(val);
// }

// m - це теж саме що й map
// map.forEach((val, key, m) => {
//   console.log(val, key);
// });

// =============
// Перетворення з мапи в масив два способи

// const array = [...map];
// console.log(array);

// const array = Array.from(map);
// console.log(array);

// Перетворення з мапи в обєкт
// const mapObj = Object.fromEntries(map.entries());
// console.log(mapObj);

// Практичний приклад
// const users = [{ name: "Elena" }, { name: "Alex" }, { name: "Irina" }];
// const visits = new Map();
// visits
//   .set(users[0], new Date())
//   .set(users[1], new Date().getTime() + 1000 * 60)
//   .set(users[2], new Date().getTime() + 5000 * 60);

// function lastVisit(user) {
//   return visits.get(user);
// }

// console.log(lastVisit(users[0]));
