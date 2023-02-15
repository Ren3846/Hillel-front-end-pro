// Робимо на підставі минулого дз.

//     В інформації товару - кнопка "купити".

//     При натисканні на "купити" нижче з'являється форма оформлення замовлення з наступними полями:
//     ПІБ покупця
//     Місто (вибір зі списку)
//     Кількість продукції, що купується
//     Коментар до замовлення

// 2. Реалізувати перевірку всіх даних користувача під час підтвердження замовлення - обов'язкові поля заповнені. Інакше - виводити помилку на сторінку

// 3. Виводити інформацію про замовлення на сторінку (інформація про товар та про доставку)

// 4 Створені замовлення повинні зберігатися у sessionStorage.

// 5 Додати кнопку мої замовлення, по кліку повинна зявитися таблиця з моїми замовленнями, в таблиці два поля: назва товару та ПІБ покупця

import config from './config.js';

const ulElement = document.querySelector('ul');
const descElement = document.getElementById('desc');
const formElement = document.forms[0];
const button = document.querySelector('button');

formElement.addEventListener('submit', async (event) => {
  event.preventDefault();
  const data = {
    name: formElement.name.value,
    quantity: formElement.quantity.value,
    deliverTo: formElement.deliverTo.value,
  };
  await createOrder(data);
  formElement.name.value = '';
  formElement.quantity.value = 0;
  formElement.deliverTo.value = '';
  formElement.style.display = 'none';
  alert('Bought');
});

const createMenuItem = (name) => {
  const liElement = document.createElement('li');
  liElement.innerText = name;
  return liElement;
};

const showDescForm = (item) => {
  descElement.style.display = 'block';
  descElement.firstElementChild.innerHTML = `Модель:${item.name} </br> Ціна: $${item.price} </br> Опис: ${item.description}`;
  descElement.name.value = item.name;
};

const showBuyForm = (item) => {
  formElement.style.display = 'block';
};

const createItems = (items) => {
  const previousList = document.getElementById('items');
  if (previousList) {
    previousList.remove();
  }
  const listOfItems = document.createElement('ul');
  listOfItems.id = 'items';

  items.forEach((item) => {
    const stringToDisplay = `${item.name}: $${item.price}`;
    const element = createMenuItem(stringToDisplay);
    element.addEventListener('click', () => {
      showDescForm(item);
    });
    listOfItems.append(element);
  });
  ulElement.parentNode.append(listOfItems);
};

button.addEventListener('click', () => {
  showBuyForm();
});

const handleMenuClick = (event) => {
  const category = event.target.innerHTML;
  const items = config[category];
  createItems(items);
};

for (const key in config) {
  const liElement = createMenuItem(key);
  liElement.addEventListener('click', handleMenuClick);
  ulElement.append(liElement);
}

// var d = document,
//   itemBox = d.querySelectorAll('.item_box'), // блок каждого товара
//   cartCont = d.getElementById('cart_content'); // блок вывода данных корзины
// // Функция кроссбраузерной установка обработчика событий
// function addEvent(elem, type, handler) {
//   if (elem.addEventListener) {
//     elem.addEventListener(type, handler, false);
//   } else {
//     elem.attachEvent('on' + type, function () {
//       handler.call(elem);
//     });
//   }
//   return false;
// }
// // Получаем данные из LocalStorage
// function getCartData() {
//   return JSON.parse(localStorage.getItem('cart'));
// }
// // Записываем данные в LocalStorage
// function setCartData(o) {
//   localStorage.setItem('cart', JSON.stringify(o));
//   return false;
// }
// // Добавляем товар в корзину
// function addToCart(e) {
//   this.disabled = true; // блокируем кнопку на время операции с корзиной
//   var cartData = getCartData() || {}, // получаем данные корзины или создаём новый объект, если данных еще нет
//     parentBox = this.parentNode, // родительский элемент кнопки "Добавить в корзину"
//     itemId = this.getAttribute('data-id'), // ID товара
//     itemTitle = parentBox.querySelector('.item_title').innerHTML, // название товара
//     itemPrice = parentBox.querySelector('.item_price').innerHTML; // стоимость товара
//   if (cartData.hasOwnProperty(itemId)) {
//     // если такой товар уже в корзине, то добавляем +1 к его количеству
//     cartData[itemId][2] += 1;
//   } else {
//     // если товара в корзине еще нет, то добавляем в объект
//     cartData[itemId] = [itemTitle, itemPrice, 1];
//   }
//   if (!setCartData(cartData)) {
//     // Обновляем данные в LocalStorage
//     this.disabled = false; // разблокируем кнопку после обновления LS
//   }
//   return false;
// }
// // Устанавливаем обработчик события на каждую кнопку "Добавить в корзину"
// for (var i = 0; i < itemBox.length; i++) {
//   addEvent(itemBox[i].querySelector('.add_item'), 'click', addToCart);
// }
// // Открываем корзину со списком добавленных товаров
// function openCart(e) {
//   var cartData = getCartData(), // вытаскиваем все данные корзины
//     totalItems = '';
//   // если что-то в корзине уже есть, начинаем формировать данные для вывода
//   if (cartData !== null) {
//     totalItems =
//       '<table class="shopping_list"><tr><th>Наименование</th><th>Цена</th><th>Кол-во</th></tr>';
//     for (var items in cartData) {
//       totalItems += '<tr>';
//       for (var i = 0; i < cartData[items].length; i++) {
//         totalItems += '<td>' + cartData[items][i] + '</td>';
//       }
//       totalItems += '</tr>';
//     }
//     totalItems += '</table>';
//     cartCont.innerHTML = totalItems;
//   } else {
//     // если в корзине пусто, то сигнализируем об этом
//     cartCont.innerHTML = 'В корзине пусто!';
//   }
//   return false;
// }
// /* Открыть корзину */
// addEvent(d.getElementById('checkout'), 'click', openCart);
// /* Очистить корзину */
// addEvent(d.getElementById('clear_cart'), 'click', function (e) {
//   localStorage.removeItem('cart');
//   cartCont.innerHTML = 'Корзина очишена.';
// });
