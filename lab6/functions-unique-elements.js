// Створити функцію яка отримує два аргументи, і обидва є масивами.
// Функція повинна повернути масив елементів які не є спільними для обох масивів.

const firstArr = ['Lviv', 'Kharkiv', 'Zaporizhzhya', 'Kyiv'];
const secondArr = ['Lviv', 'Mariupol', 'Zaporizhzhya', 'Kyiv'];

function uniqueElements(arr1, arr2) {
  const uniqArr = [];

  if (Array.isArray(arr1) && Array.isArray(arr2)) {
    const generalArr = firstArr.concat(secondArr);
    for (let i = 0; i < generalArr.length; i++) {
      const element = generalArr[i];
      if (!uniqArr.includes(element)) {
        uniqArr.push(element);
      }
    }
  } else {
    console.log('ops..');
  }
  return uniqArr;
}

const res = uniqueElements(firstArr, secondArr);
console.log(res);
