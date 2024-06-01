function createBigObject() {
    const bigObject = { data: new Array(1000000).fill('some data') };
    return bigObject;
  }
  
  const cache = {};
  
  function storeInCache(key, obj) {
    cache[key] = obj;
  }
  
  let obj1 = createBigObject();
  let obj2 = createBigObject();
  
  storeInCache('obj1', obj1);
  storeInCache('obj2', obj2);
  
  // Відпускаємо посилання на об'єкти
  obj1 = null;
  obj2 = null;
  
  // Об'єкти все ще знаходяться в пам'яті через посилання в `cache`
  console.log(cache);
 


// function createBigObject() {
//   const bigObject = { data: new Array(1000000).fill('some data') };
//   return bigObject;
// }

// const cache = {};

// function storeInCache(key, obj) {
//   cache[key] = obj;
// }

// let largeObject1 = createBigObject();
// let largeObject2 = createBigObject();

// let cacheKey1 = 'largeObject1';
// let cacheKey2 = 'largeObject2';

// storeInCache(cacheKey1, largeObject1);
// storeInCache(cacheKey2, largeObject2);

// // Відпускаємо посилання на об'єкти
// largeObject1 = null;
// largeObject2 = null;

// // Об'єкти все ще знаходяться в пам'яті через посилання в `cache`
// console.log(cache);


// function createBigObject() {
//   const bigObject = { data: new Array(1000000).fill('some data') };
//   return bigObject;
// }

// const weakCache = new WeakMap();

// function storeInWeakCache(key, obj) {
//   weakCache.set(key, obj);
// }

// let largeObject1 = createBigObject();
// let largeObject2 = createBigObject();

// let cacheKey1 = {}; // Ключ для об'єкта largeObject1
// let cacheKey2 = {}; // Ключ для об'єкта largeObject2

// storeInWeakCache(cacheKey1, largeObject1);
// storeInWeakCache(cacheKey2, largeObject2);

// // Відпускаємо посилання на об'єкти
// largeObject1 = null;
// largeObject2 = null;

// // // Відпускаємо посилання на ключі
// // cacheKey1 = null;
// // cacheKey2 = null;

// // Перевірка кешу після певного часу
// setTimeout(() => {
//   console.log(weakCache.has(cacheKey1)); // false, оскільки ключі були видалені
//   console.log(weakCache.has(cacheKey2)); // false, оскільки ключі були видалені
// }, 1000);
