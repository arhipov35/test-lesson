// function createBigObject() {
//   const bigObject = { data: new Array(1000000).fill("some data") };
//   return bigObject;
// }

const weakCache = new WeakMap();

function storeInWeakCache(key) {
  weakCache.set(key, Date.now());
  // console.log(key);
}

let key1 = {};
let key2 = {};

storeInWeakCache(key1);
storeInWeakCache(key2);

// Відпускаємо посилання на об'єкти
key1 = null;
// obj2 = null;

// Об'єкти можуть бути видалені з пам'яті, коли більше немає інших посилань
setTimeout(() => {
  console.log(weakCache.get(key1)); // false
  console.log(weakCache.get(key2)); // false
}, 1000);

// console.log(weakCache);
