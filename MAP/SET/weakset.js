const users = [{ name: "Elena" }, { name: "Alex" }, { name: "Irina" }];
const visits = new WeakSet();
visits.add(users[0]).add(users[1]);
// Використовується тільки один метод has
users.splice(1, 1);
console.log(visits.has(users[1]));
// Перший елмент індекс, наступне к-сть елементів яку я хочу видалити
