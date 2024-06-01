// Оголошуємо об'єкт з властивістю name
let obj = { name: "waekmap" };

// // Створюємо масив, до якого додаємо посилання на об'єкт obj
// const arr = [obj];

// // Присвоюємо змінній obj значення null, зберігаючи масив arr незмінним
// obj = null;

// // Виводимо перший елемент масиву arr, який все ще посилається на об'єкт, який був створений раніше
// console.log(arr[0]);

// В стуркутрі WeakMap ключами можуть бути тільки об'єкти
// const map = new WeakMap([[obj, "obj data"]]);
// має тільки 4 методи get set delete has

// Приклад
const cache = new WeakMap();
function cacheUser(user) {
  if (!cache.has(user)) {
    cache.set(user, Date.now());
  }
  return cache.get(user);
}
let lena = { name: "Elena" };
let alex = { name: "Alex" };

cacheUser(lena);
cacheUser(alex);

console.log(cacheUser(alex));
console.log(cache.has(lena));

console.log(cache);
