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

const product = {
  name: 'Товар',
  price: 100,
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
  selectedProducts(item.name, item.price);
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

///////////////////////////////////////

const orders = JSON.parse(sessionStorage.getItem('orders')) || [];
const buyButton = document.querySelector('#buy-button');
const orderForm = document.querySelector('#order-form');
const orderFormSubmit = document.querySelector('#order-form-data');
const orderInfo = document.querySelector('#order-info');
const errorMessage = document.querySelector('#error-message');
const ordersButton = document.querySelector('#orders-button');
const ordersTable = document.querySelector('#orders-table tbody');

buyButton.addEventListener('click', (e) => {
  e.preventDefault();
  orderForm.style.display = 'block';
});

const selectedProducts = (nameOfSelectedProduct, priceOfSelectedProduct) => {
  console.log(nameOfSelectedProduct);
  orderFormSubmit.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.querySelector('#name-input').value;
    const city = document.querySelector('#city-select').value;
    const quantity = document.querySelector('#quantity-input').value;
    const comment = document.querySelector('#comment-input').value;
    if (!name || !city || !quantity) {
      errorMessage.textContent = 'Всі поля повинні бути заповнені';
      return;
    }

    const order = {
      nameOfSelectedProduct,
      city,
      quantity,
      comment,
      name,
      total: priceOfSelectedProduct * quantity,
    };

    orders.push(order);
    sessionStorage.setItem('orders', JSON.stringify(orders));

    //   orderForm.reset();

    document.querySelector('#name-input').value = '';
    document.querySelector('#city-select').value = '';
    document.querySelector('#quantity-input').value = '';
    document.querySelector('#comment-input').value = '';

    orderForm.style.display = 'none';

    orderInfo.innerHTML = `<p>Товар: ${nameOfSelectedProduct}</p> <p>Кількість: ${order.quantity}</p> <p>Загальна вартість: ${order.total}</p> <p>ПІБ: ${order.name}</p> <p>Місто: ${order.city}</p> <p>Коментар: ${order.comment}</p>`;

    orderForm.style.display = 'none';
  });
};

ordersButton.addEventListener('click', () => {
  ordersTable.innerHTML = '';

  orders.forEach((order) => {
    const row = ordersTable.insertRow();
    const productNameCell = row.insertCell();
    const customerNameCell = row.insertCell();
    productNameCell.textContent = order.nameOfSelectedProduct;
    customerNameCell.textContent = order.name;
  });
});
