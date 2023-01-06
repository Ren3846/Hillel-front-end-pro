// Реалізуйте функцію generateKey(length, characters), яка повертає рядок випадкових символів із набору characters довжиною length. span>

// Наприклад:

const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

function generateKey(count, characters) {
  const array = Array.from(characters);
  const clone = array.slice(),
    output = [];
  count = parseInt(count);
  if (isNaN(count)) {
    count = 1;
  } else {
    if (count > array.length) count = array.length;
  }
  for (var i = 0; i < count; i++) {
    output.push(clone.splice(Math.floor(Math.random() * clone.length), 1));
  }
  return output.join('');
}

const key = generateKey(16, characters);
console.log(key); // eg599gb60q926j8i
