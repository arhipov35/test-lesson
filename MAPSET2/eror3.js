function createBigObject() {
  const bigObject = { data: new Array(1000000).fill('some data') };
  return bigObject;
}

const weakCache = new WeakMap();

function storeInWeakCache(key, obj) {
  weakCache.set(key, obj);
}

let obj1 = createBigObject();
let obj2 = createBigObject();

let key1 = {}; // Оголошуємо змінну key1 для ключа об'єкта obj1
let key2 = {}; // Оголошуємо змінну key2 для ключа об'єкта obj2

storeInWeakCache(key1, obj1);
storeInWeakCache(key2, obj2);

// Відпускаємо посилання на об'єкти
// key1 = null;
key2 = null;

// Об'єкти можуть бути видалені з пам'яті, коли більше немає інших посилань
setTimeout(() => {
  console.log(weakCache.has(key1)); // undefined
  console.log(weakCache.has(key2)); // undefined
}, 1000);
