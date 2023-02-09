// Написати функцію, яка приймає 1 параметр. з тим, що передали перший раз і т. д. Все це із замиканнями, наприклад:

function sum(initialNumber) {
  let num = initialNumber;
  return function (anotherNum) {
    return (num += anotherNum);
  };
}

const sumator = sum(0);

console.log(sumator(3));
console.log(sumator(5));
console.log(sumator(20));
