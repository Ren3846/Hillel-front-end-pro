// Реалізуйте функцію removeElement(array, item), щоб видалити елемент item з масиву array.

const array = [9, 8, 7, 6, 5, 4, 3, 2, 1];
function removeElement(array, item) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] == item) {
      array.splice(i, 1);
      break;
    }
  }
}
removeElement(array, 8);

console.log(array);
