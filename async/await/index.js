const delay = (ms) => {
  return new Promise((r) => setTimeout(() => r(), ms));
};

// delay(2000).then(() => console.log("2 sec"));

const url = "https://jsonplaceholder.typicode.com/todos";

// function fetchTodos() {
//   console.log("Fetch todo started....");
//   return delay(2000)
//     .then(() => {
//       return fetch(url);
//     })
//     .then((response) => response.json());
// }
// fetchTodos()
//   .then((data) => {
//     console.log("Data: ", data);
//   })
//   .catch((e) => console.error(e));

//await перед викликом асинхронної функції чи методу, виконання коду призупиняється до того моменту,
//  поки не буде отриманий результат або помилка з цієї асинхронної операції.

async function fetchAsyncTodos() {
  console.log("Fetch todo started....");
  try {
    await delay(2000);
    const response = await fetch(url);
    const data = await response.json();
    console.log("Data: ", data);
  } catch (e) {
    console.log(error(e));
  } finally {
    
  }
}
fetchAsyncTodos();
// const delay = (ms) => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         // Якщо виникає помилка, викликаємо reject з цією помилкою
//         reject(new Error('Час виконання сплив'));
//       }, ms);
//     });
//   };

//   // Виклик функції delay з обробкою помилок
//   delay(2000)
//     .then(() => console.log('2 секунди пройшло успішно'))
//     .catch(error => console.error('Помилка:', error.message));
