// Створити класс  Person class з властивостями name, age, і occupation.
// Створити в  Person  метод introduction котрий повертає текст "Hi, my name is John. I'm 25 years old and I work as a software engineer."
// Створіть класс Form котрий в конструкторі очікує html форму.
// В Form створіть метод handleSubmitкотрий дістає значення з полів форми, та створією нового представника класу Person , і виводить представлення себе( introduction) в  DOM.
// Коли по html формі відбувся submit подія викликайте метод handleSubmit
// Форма повинна мати поля name, age, і occupation, та кнопку підтвердження.
// Усі поля обов'язкові до заповнення, мінімальна довжина імені 10 символів,
// Після успішного додавання користувача форма повинна очиститись і знову бути готова до роботи

class Person {
  constructor(name, age, occupation) {
    this.name = name;
    this.age = age;
    this.occupation = occupation;
  }

  introduction() {
    return "Hi, my name is John. I'm 25 years old and I work as a software engineer.";
  }
}

class Form {
  constructor(form) {
    this.form = form;
  }
  handleSubmit() {
    this.form.value1 = value1;
    this.form.value2 = value2;
    this.form.value3 = value3;

    const person1 = new Person(value1, value2, value3);
  }
}
