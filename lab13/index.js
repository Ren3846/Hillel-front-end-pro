// Дано 3 блоки

//     В лівій частині сторінки - перелік категорій.
//     При натисканні на категорію в середній блок виводиться список товарів цієї категорії.
//     Клік на товар - інформацію про товар у правому блоці.
//     В інформації товару - кнопка “купити”.
//     При натисканні на “купити” з'являється повідомлення, що товар куплений
//     і повернення у вихідний стан програми ( коли відображається лише список категорій).

const arr = [{ name: 'wedwed', description: 'wdewfwef', price: 'wdwefwe' }];
const cat = document.getElementsByClassName('cat')[0];
const dog = document.getElementsByClassName('dog')[0];
const bird = document.getElementsByClassName('bird')[0];
const category = document.getElementsByClassName('category')[0];
category.addEventListener('click', addDivInfo);

const catalog = document.getElementsByClassName('catalog')[0];
catalog.addEventListener('click', addDivCatalog);

const button = document.getElementsByClassName('button');
button.addEventListener('click', buyItem);

const mainBlock = document.getElementsByClassName('mainBlock')[0];
mainBlock.addEventListener('click', clear);

const possible = [cat, dog, bird];

const items = document.getElementsByClassName('items')[0];

const h1 = document.getElementById('h3');
const p = document.getElementById('p');
const span = document.getElementById('span');

function pushText(el) {
  h1.innerText = arr[el].name;
  p.innerText = arr[el].description;
  span.innerText = arr[el].price;
}

function addDivInfo(event) {
  event.stopPropagation();
  const nameLink = event.target.innerText;
  if (nameLink === 'dog') {
    showElement(dog);
  } else if (nameLink === 'cat') {
    showElement(cat);
  } else if (nameLink === 'bird') {
    showElement(bird);
  }
}

function addDivCatalog(event) {
  event.stopPropagation();
  const nameLink = e.target.innerText;
  const index = arr.findIndex((el) => el.name === nameLink);
  pushText(index);
  items.style.display = 'block';
}

function showElement(el) {
  el.style.display = 'block';
  possible
    .filter((item) => item !== el)
    .forEach((item) => {
      item.style.display = 'block';
    });
}

function show(element) {
  items.style.display = 'none';
  element.style.display = 'block';
}

function displayNone(arr) {
  arr.forEach((element) => {
    element.style.display = 'none';
  });
}
