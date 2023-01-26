// Реалізовуємо форму для реєстрації.
// Поля:
// Ім'я, Прізвище (Текстові поля)
// Дата народження (Текстове поле)
// Стать (radio)
// Місто (select)
// Адреса (textarea)
// Мови, якими володіє (checkbox)
// ….
// Кнопка “Зберегти”
// За натисканням на кнопку замість форми повинна виводитися “таблиця” з даними, які ввів користувач.

// const myForm = document.getElementsByTagName('form')[0];
// myForm.addEventListener('submit', func);
// function func() {
//   event.preventDefault();
//   console.log(myForm.name.value);
//   console.log(myForm.name.value);
// }

button.onclick = function () {
  event.preventDefault();
  let row = table.insertRow();
  row.insertCell().innerHTML = userName.value;
  row.insertCell().innerHTML = userLastName.value;
  row.insertCell().innerHTML = userBirth.value;
};
