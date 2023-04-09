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
const config = {
  phones: [
    {
      name: 'Iphone 14',
      price: 1499,
      description:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,',
    },
    {
      name: 'Oneplus 10T',
      price: 999,
      description:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,',
    },
  ],
  laptops: [
    {
      name: 'Macbook Pro 13',
      price: 1699,
      description:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,',
    },
    {
      name: 'Dell XPS 13',
      price: 1399,
      description:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,',
    },
  ],
  headsets: [
    {
      name: 'Apple Airpods',
      price: 299,
      description:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,',
    },
    {
      name: 'Sennheiser HD 4.40',
      price: 230,
      description:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,',
    },
  ],
};

const ulElement = document.querySelector('ul');
const formElement = document.getElementById('desc');
const buyButt = document.querySelector('#buy');

const createMenuItem = (name) => {
  const liElement = document.createElement('li');
  liElement.innerText = name;
  return liElement;
};

const showDesc = (item) => {
  formElement.style.display = 'block';
  formElement.lastElementChild.innerHTML = `Модель:${item.name} </br> Ціна: $${item.price} </br> Опис: ${item.description} </br>`;
};

const createItems = (items) => {
  const listOfItems = document.createElement('ul');
  const previousList = document.getElementById('items');
  if (previousList) {
    previousList.remove();
  }
  listOfItems.id = 'items';
  items.forEach((item) => {
    const stringToDisplay = `${item.name}`;
    const element = createMenuItem(stringToDisplay);
    element.addEventListener('click', () => {
      showDesc(item);
    });
    listOfItems.append(element);
  });
  ulElement.parentNode.append(listOfItems);
};

// formElement.addEventListener('submit', (event) => {
//   alert('Куплено');
// });

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

//////////////////////////////

// Отримуємо елементи зі сторінки
const confirmButton = document.querySelector('#confirm-button');
const orderForm = document.querySelector('#order-form');
const ordersTable = document.querySelector('#orders-table');
const myOrdersButton = document.querySelector('#my-orders-btn');

// Отримуємо дані про товар
const product = {
  name: 'Product Name',
  price: 100,
  image: 'product.jpg',
};

// Створюємо масив для зберігання замовлень
let orders = [];

// Додаємо обробник події на кнопку "Купити"
buyButt.addEventListener('click', (e) => {
  e.preventDefault();
  orderForm.style.display = 'block'; // Показуємо форму оформлення замовлення
});

// Додаємо обробник події на подання форми замовлення
confirmButton.addEventListener('submit', (e) => {
  e.preventDefault(); // Зупиняємо стандартну поведінку форми
  // Отримуємо дані з форми
  const name = document.querySelector('#name-input').value;
  const city = document.querySelector('#city-select').value;
  const quantity = document.querySelector('#quantity-input').value;
  const comment = document.querySelector('#comment-input').value;

  // Перевіряємо, чи всі поля заповнені
  if (name && city && quantity) {
    // Додаємо замовлення до масиву і зберігаємо його в sessionStorage
    const order = { name, city, quantity, comment, product };
    orders.push(order);
    sessionStorage.setItem('orders', JSON.stringify(orders));

    // Виводимо інформацію про замовлення на сторінку
    const orderInfo = `You have ordered ${quantity} ${product.name}(s) for ${
      quantity * product.price
    } UAH. Your order will be delivered to ${city} soon.`;
    const orderInfoDiv = document.createElement('div');
    orderInfoDiv.textContent = orderInfo;
    document.body.appendChild(orderInfoDiv);

    // Очищуємо поля форми
    document.querySelector('#name-input').value = '';
    document.querySelector('#city-select').value = '';
    document.querySelector('#quantity-input').value = '';
    document.querySelector('#comment-input').value = '';

    // Ховаємо форму замовлення
    orderForm.style.display = 'none';
  } else {
    // Виводимо помилку на сторінку, якщо не всі поля заповнені
    const errorDiv = document.createElement('div');
    errorDiv.textContent = 'Please fill in all required fields.';
    document.body.appendChild(errorDiv);
  }
});

// Додаємо обробник події на кнопку "Мої замовлення"
myOrdersButton.addEventListener('click', () => {
  const orders = JSON.parse(sessionStorage.getItem('orders')) || [];

  if (orders.length === 0) {
    alert('У вас немає збережених замовлень!');
    return;
  }

  const tableBody = document.querySelector('#orders-table-body');
  tableBody.innerHTML = '';

  orders.forEach((order) => {
    const row = tableBody.insertRow();
    const productCell = row.insertCell();
    productCell.textContent = order.productName;

    const nameCell = row.insertCell();
    nameCell.textContent = order.customerName;
  });

  document.querySelector('#orders-table-container').style.display = 'block';
});
