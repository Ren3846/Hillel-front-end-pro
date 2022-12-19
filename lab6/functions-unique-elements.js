// Створити функцію яка отримує два аргументи, і обидва є масивами.
// Функція повинна повернути масив елементів які не є спільними для обох масивів.

const firstArr = [1, 2, 3, 4, 5];
const secondArr = [5, 6, 7, 8, 9];

function uniqueElements(arr1, arr2) {
  const uniqueArr = firstArr.concat(secondArr);
  for (let i = 0; i < firstArr.length; i++) {
    if ((firstArr[i] = secondArr[i])) {
      uniqueArr.push();
    }
  }
  return uniqueArr;
}

const uniqueArr = uniqueElements(firstArr, secondArr);
console.log(uniqueArr);
