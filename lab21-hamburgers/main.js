// Мережа фастфудів пропонує кілька видів гамбургерів:

//     маленький (50 грн, 20 калорій);
//     великий (100 грн, 40 калорій).

// Гамбургер може бути з одним із декількох видів начинок:

//     сиром (+ 10 грн, + 20 калорій);
//     салатом (+ 20 грн, + 5 калорій);
//     картоплею (+ 15 грн, + 10 калорій).

// Можна додати добавки:

//     посипати приправою (+15 грн, 0 калорій)
//      полити майонезом (+ 20 грн, +5 калорій).

// Напишіть програму, яка розраховує вартість та калорійність гамбургера.

//  Використовуйте ООП підхід

// Усі розміри бургера, добавки , начинки повинні бути доступні у вигляді статичних властивосте

class Hamburger {
  static SIZE_SMALL = { price: 50, calories: 20 };
  static SIZE_LARGE = { price: 100, calories: 40 };
  static STUFFING_CHEESE = { price: 10, calories: 20 };
  static STUFFING_SALAD = { price: 20, calories: 5 };
  static STUFFING_FRIES = { price: 15, calories: 10 };
  static TOPPING_SAUCE = { price: 15, calories: 0 };
  static TOPPING_MAYO = { price: 20, calories: 5 };

  constructor(size, stuffing) {
    this.size = size;
    this.stuffing = stuffing;
    this.toppings = [];
  }

  addTopping(topping) {
    this.toppings.push(topping);
  }

  calculatePrice() {
    let totalPrice = this.size.price + this.stuffing.price;
    for (let i = 0; i < this.toppings.length; i++) {
      totalPrice += this.toppings[i].price;
    }
    return totalPrice;
  }

  calculateCalories() {
    let totalCalories = this.size.calories + this.stuffing.calories;
    for (let i = 0; i < this.toppings.length; i++) {
      totalCalories += this.toppings[i].calories;
    }
    return totalCalories;
  }
}

// маленький гамбургер з начинкою з сиру
const hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);

// добавка з майонезу
hamburger.addTopping(Hamburger.TOPPING_MAYO);

// запитаємо скільки там калорій
console.log('Calories: ' + hamburger.calculateCalories());

// скільки коштує
console.log('Price: ' + hamburger.calculatePrice());

// я тут передумав і вирішив додати ще приправу
hamburger.addTopping(Hamburger.TOPPING_SAUCE);

// А скільки тепер коштує?
console.log('Price with sauce: ' + hamburger.calculatePrice());

console.log(hamburger);
