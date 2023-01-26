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

const formElement = document.getElementById('form1');
formElement.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(formElement);
  const name = formData.get('first_name');
  const surname = formData.get('last_name');
  const birthday = formData.get('birthday');
  const sex = formData.get('sex');
  const city = formData.get('city');
  const adress = formData.get('adress');
  const selectedCheckBoxes = document.querySelectorAll('input.checkbox:checked');
  const checkedValues = Array.from(selectedCheckBoxes).map((cb) => cb.value);

  let row = table.insertRow();
  row.insertCell().innerHTML = name;
  row.insertCell().innerHTML = surname;
  row.insertCell().innerHTML = birthday;
  row.insertCell().innerHTML = sex;
  row.insertCell().innerHTML = city;
  row.insertCell().innerHTML = adress;
  row.insertCell().innerHTML = checkedValues;
});
