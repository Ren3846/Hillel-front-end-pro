// Задано

//     інпут в який користувач черезз кому вводить числа.
//     radio-button з варіантами зростання і спадання
//     кнопка посортувати

// При кліці на кнопку потрібно з введених чисел створити масив та посортувати його в залежності від обраного напрямку(спадаючий чи зростаючий)

const form = document.getElementsByTagName('form')[0];
form.addEventListener('submit', (e) => {
  e.preventDefault();
  sortNumbers();
});

function sortNumbers() {
  const input = document.getElementById('numbers-input');
  const sortDirection = document.querySelector('input[name="sort-direction"]:checked').value;

  const arrOfNumbers = input.value.split(',').map(Number);

  if (sortDirection == 'asc') {
    arrOfNumbers.sort((a, b) => {
      return b - a;
    });
  } else {
    arrOfNumbers.sort((a, b) => {
      return a - b;
    });
  }
  console.log(arrOfNumbers);
}
