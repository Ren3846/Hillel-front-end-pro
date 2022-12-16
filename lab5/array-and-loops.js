const array = [
  16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4,
  47,
];

console.group('Знайти суму та кількість позитивних елементів.');
let counter = 0;
let sum = 0;
for (let i = 0; i <= array.length; i++) {
  if (array[i] > 0) {
    sum += array[i];
    counter++;
  }
}
console.log(`Сумма: ${sum}, Кількість: ${counter}`);
console.groupEnd();

console.group('Знайти мінімальний елемент масиву та його порядковий номер.');
let min = array[0];
for (let i = 1; i <= array.length; i++) {
  if (array[i] < array[min]) {
    min = i;
  }
}
console.log(`Елемент: ${array[min]}, Номер: ${min + 1}`);
console.groupEnd();

console.group('Знайти максимальний елемент масиву та його порядковий номер.');
let max = array[0];
for (let i = 1; i <= array.length; i++) {
  if (array[i] > array[max]) {
    max = i;
  }
}
console.log(`Елемент: ${array[max]}, Номер: ${max + 1}`);
console.groupEnd();

console.group('Визначити кількість негативних елементів');
let count = 0;
for (let i = 0; i <= array.length; i++) {
  if (array[i] < 0) {
    count++;
  }
}
console.log(count);
console.groupEnd();

console.group('Знайти добуток позитивних елементів.');
let res = 1;
for (let i = 0; i <= array.length; i++) {
  if (array[i] > 0) {
    res = res * array[i];
  }
}
console.log(res);
console.groupEnd();
