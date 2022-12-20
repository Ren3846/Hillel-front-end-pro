// Створити функцію яка очікує аргументом масив та повертає випадковий елемент масива

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function randomElement(arr) {
  if (Array.isArray(arr)) {
    rand = Math.floor(Math.random() * arr.length);
  } else {
    console.log('ops..');
  }
  return arr[rand];
}
const result = randomElement(array);
console.log(result);
