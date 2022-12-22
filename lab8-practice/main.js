// 'Заповнювач масива',
// `Створити функцію яка заповнить масив до заданого розміру заданим символом
// func(8, 'ak') => ['ak','ak','ak','ak','ak','ak','ak','ak']`,

// Створити функцію яка задає користувачу 5 запитань, Імя, Місто, Вік, Країна, Улюблений колір, значення записує в обєкт та поверта
// є його
// Імя повинно бути приведено до верхнього регістру
// Місто повинно бути приведено до нижнього регістру,
// Улюблений колір повиннен чергувати великий та нижній регісти бути ЖоВтИй

const object = {
  name: 'Ivan',
  city: 'Lviv',
  age: 18,
  country: 'Ukraine',
  color: 'White',
};

function mainFunc(user) {
  user.name = user.name.toUpperCase();
  user.city = user.city.toLowerCase();

  const colorIsArray = user.color.split('');

  for (let i = 0; i < colorIsArray.length; i++) {
    if (!(i % 2)) {
      colorIsArray[i] = colorIsArray[i].toUpperCase();
    } else {
      colorIsArray[i] = colorIsArray[i].toLowerCase();
    }
  }
  user.color = colorIsArray.join('+');
  return user;
}

console.log(mainFunc(object));

// 'Калькулятор',
// `Створити функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x і y, строку znak.
//  У змінному знаку можуть бути: +, -, *, /, %, ^ (степіть).
//  Вивести результат математичного дії, зазначеного в змінному знаку.
//  Обидва числа і знак отримуються від користувача.`,

function doMath(x, znak, y) {
  result = 0;
  switch (znak) {
    case '+': {
      result = x + y;
      break;
    }
    case '-': {
      result = x - y;
      break;
    }
    case '*': {
      result = x * y;
      break;
    }
    case '/': {
      result = x / y;
      break;
    }
    case '^': {
      result = x ** y;
      break;
    }
    default: {
      console.log('no result');
    }
  }
  return result;
}

console.log(doMath(1, '*', 2));

// 'Очисник масива'
//   `Створити функцію яка видаляє з масива усі елементи які рівні заданому символу
// func([2,3,5,6,6,7], 6) => [2,3,5,7]`

const array = [1, 2, 2, 3, 4, 5, 6, 7, 8, 9];

function deleteElement(arr, del) {
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (element === del) {
      arr.slice();
    }
  }
  return arr;
}

console.log(deleteElement(array, 2));
