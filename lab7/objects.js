// Створити функцію яка очікує аргумент типу масив. Масив буде містити обєкти.
// Функція повинна проходити циклом по масиві і для кожного елемента виконати наступне
// властивість name повинна бути приведена до верхнього регістра
// властивість cities повинна бути розбита по комі і перетворена в масив
// властивість money повинна бути округлена до цілого числа.
// Якщо властивість money передано у вигляді стрічки повинно привести її до числового типу, якщо після приведення до типу значення рівне NaN вивести повідомлення в консоль
// в властивість children додати новий елемент з імям 'Stepan' і згенерувати випадковий вік до 18 років
// Після виконання змін вивести кожен елемент масиву в консоль

const peoples = [
  {
    name: 'Alina',
    money: 2700.32,
    cities: 'Lviv, Kyiv, Ternopil',
    children: [
      {
        name: 'Oliver',
        age: 6,
      },
    ],
  },
  {
    name: 'Andrii',
    money: 9301.32,
    cities: 'Paris, Madrid, Rivne',
    children: [],
  },
  {
    name: 'George',
    money: '35000',
    cities: 'Stambul',
    children: [
      {
        name: 'Olha',
        age: 8,
      },
      {
        name: 'Olena',
        age: 2,
      },
    ],
  },
];

function editPeoples(peoples) {
  for (let i = 0; i < peoples.length; i++) {
    const person = peoples[i];
    const ageStepanRand = Math.floor(Math.random() * 18);
    const obj = { name: 'Stepan', age: ageStepanRand };

    person.name = person.name.toUpperCase();
    person.cities = person.cities.split(',');
    person.children.push(obj);

    for (let j = 0; j < person.children.length; j++) {
      person.children[j].name = person.children[j].name.toUpperCase();
    }

    if (typeof person.money === 'string') {
      person.money = Number.parseInt(person.money);
      person.money = Math.round(person.money);
      if (Number.isNaN(person.money)) {
        console.log('Ops..');
      }
    } else {
      person.money = Math.round(person.money);
    }

    console.log(person);
  }
  return peoples;
}
editPeoples(peoples);
