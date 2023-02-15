// Дано 3 блоки

//     В лівій частині сторінки - перелік категорій.
//     При натисканні на категорію в середній блок виводиться список товарів цієї категорії.
//     Клік на товар - інформацію про товар у правому блоці.
//     В інформації товару - кнопка “купити”.
//     При натисканні на “купити” з'являється повідомлення, що товар куплений
//     і повернення у вихідний стан програми ( коли відображається лише список категорій).

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

const createMenuItem = (name) => {
  const liElement = document.createElement('li');
  liElement.innerText = name;
  return liElement;
};

const showDesc = (item) => {
  formElement.style.display = 'block';
  formElement.lastElementChild.innerHTML = `Модель:${item.name} </br> Ціна: $${item.price} </br> Опис: ${item.description}`;
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

formElement.addEventListener('submit', (event) => {
  alert('Куплено');
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
