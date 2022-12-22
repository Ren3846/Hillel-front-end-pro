function greeting(person) {
  person.name = person.name.toUpperCase();
  person.cities = person.cities.split(',');
  // if (typeof person.money === 'string') {
  //   person.money = Number.parseInt(person.money);
  //   person.money = Math.round(person.money);
  //   if (Number.isNaN(person.money)) {
  //     console.log('Ops..');
  //   } else {
  //     Math.round(person.money);
  //   }
  // }
  return person;
}

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

for (let i = 0; i < peoples.length; i++) {
  const person = peoples[i];
  greeting(person);
}

console.log(peoples);

// for (let j = 0; j < peoples.children.length; j++) {
//   const child = peoples.children[j];
//   greeting(child);
// }

// for(i<users.length) {
//   const element = users[i]
//   for(element< users.children.length) {
// }
