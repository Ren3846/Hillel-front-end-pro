function generateList(array) {
  // Створюємо елемент <ul> для списку
  const ul = document.createElement('ul');

  // Перебираємо елементи масиву
  for (let i = 0; i < array.length; i++) {
    const item = array[i];

    // Створюємо елемент <li> для поточного елементу масиву
    const li = document.createElement('li');

    // Якщо поточний елемент масиву є масивом, рекурсивно викликаємо функцію generateList() для генерації списку з його елементів
    if (Array.isArray(item)) {
      li.appendChild(generateList(item));
    } else {
      // Інакше, якщо поточний елемент масиву є числом, створюємо текстовий вузол для його значення і додаємо його до елементу <li>
      const text = document.createTextNode(item);
      li.appendChild(text);
    }

    // Додаємо елемент <li> до елементу <ul>
    ul.appendChild(li);
  }

  // Повертаємо елемент <ul>
  return ul;
}

// function generateList(array, indentation = '') {
//   let html = '<ul>';
//   for (let item of array) {
//     if (Array.isArray(item)) {
//       html += `<li>${indentation}<ul>${generateList(item, `${indentation}  `)}</ul></li>`;
//     } else {
//       html += `<li>${indentation}${item}</li>`;
//     }
//   }
//   html += '</ul>';
//   return html;
// }
// Створюємо масив з числами та масивами чисел
const array = [1, 2, [3, 4, [5, 6, 7, 8]], 1, 2];

// Отримуємо елемент HTML, до якого будемо додавати список
const listContainer = document.getElementById('list-container');

// Генеруємо список з елементів масиву за допомогою функції generateList()
const list = generateList(array);

// Додаємо згенерований список до елементу HTML
listContainer.appendChild(list);
