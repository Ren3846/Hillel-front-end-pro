// Створіть функцію яка розвертає число
// в функцію буде передано один аргумент, якщо цей аргумент не є числовим вивести повідомлення в консоль та повернути 0

function reverseNumber(number) {
  if (typeof number === 'number') {
    const str = String(number);
    const array = str.split('');
    const rev = array.reverse().join('');
    return rev;
  } else {
    console.log('Not a number..');
    return 0;
  }
}

console.log(reverseNumber(123456789.34234));
