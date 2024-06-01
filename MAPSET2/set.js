const set = new Set([1, 2, 3, 4, 3, 2, 4, 7]);
// set.add(10).add(20);
// console.log(set);
// console.log(set.has(30));
// console.log(set.size);
// console.log(set.delete(1));
// console.log(set.size);
// console.log(set.clear());
// console.log(set.size);

// console.log(set.keys());
// console.log(set.values());

for (const key of set) {
  console.log(key);
}

// Practice

function uniqValues(array) {
  return [...new Set(array)];
}

console.log(uniqValues([1, 2, 3, 2, 2, 3, 2, 5, 5, 6, 7]));
