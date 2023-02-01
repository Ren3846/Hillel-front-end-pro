// Дано 3 блоки

//     В лівій частині сторінки - перелік категорій.
//     При натисканні на категорію в середній блок виводиться список товарів цієї категорії.
//     Клік на товар - інформацію про товар у правому блоці.
//     В інформації товару - кнопка “купити”.
//     При натисканні на “купити” з'являється повідомлення, що товар куплений
//     і повернення у вихідний стан програми ( коли відображається лише список категорій).

// const listElement = document.getElementsByTagName('ul')[0];
// const inputElement = document.getElementsByTagName('input')[0];
// let items = [];
// console.log(localStorage.getItem('list'));
// if (localStorage.getItem('list')) {
//   items - localStorage.getItem('list').split(',');
// }
// console.log(items);
// items.forEach(addElement);

// function addElement(text) {
//   const itemElement = document.createElement('li');
//   itemElement.innerText = text;
//   listElement.append(itemElement);
// }

// function addListElement(event) {
//   event.preventDefault();
//   console.log(event);
//   const value = inputElement.value;
//   if (items.includes(value)) {
//     console.log('i have it');
//     return;
//   }
//   addElement(value);
//   items.push(value);
//   inputElement.value = '';
//   localStorage.setItem('list', items);
// }

// document.forms[0].addEventListener('submit', addListElement);

// // Write JavaScript here
// function app() {
//   const buttons = document.querySelectorAll('.button');
//   const cards = document.querySelectorAll('.card');

//   function filter(category, items) {
//     items.forEach((item) => {
//       const isItemFiltered = !item.classList.contains(category);
//       const isShowAll = category.toLowerCase() === 'all';
//       if (isItemFiltered && !isShowAll) {
//         item.classList.add('anime');
//       } else {
//         item.classList.remove('displa');
//         item.classList.remove('anime');
//       }
//     });
//   }

//   buttons.forEach((button) => {
//     button.addEventListener('click', () => {
//       const currentCategory = button.dataset.filter;
//       filter(currentCategory, cards);
//     });
//   });

//   cards.forEach((card) => {
//     card.ontransitionend = function () {
//       if (card.classList.contains('anime')) {
//         card.classList.add('hide');
//       }
//     };
//   });
// }

// app();
