// Пишемо свій слайдер зображень.

//     Відображаємо зображення та кнопки Next, Prev з боків від зображення.
//     При кліку на Next - показуємо наступне зображення.
//     При кліку на Prev - попереднє .
//     При досягненні останнього зображення - ховати кнопку Next. Аналогічно з першим зображенням і кнопкою Prev.

const previousButton = document.getElementById('slide-left');
const nextButton = document.getElementById('slide-right');
const totalImg = document.getElementsByTagName('img');
let index = 0;

nextButton.addEventListener('click', moveLeft);
previousButton.addEventListener('click', moveRight);

function moveLeft() {
  previousButton.style.display = 'block';
  totalImg[index].style.display = 'none';
  totalImg[++index].style.display = 'block';
  if (index === totalImg.length - 1) {
    nextButton.style.display = 'none';
  }
}
function moveRight() {
  nextButton.style.display = 'block';
  totalImg[index].style.display = 'none';
  totalImg[--index].style.display = 'block';
  if (index === 0) {
    previousButton.style.display = 'none';
  }
}
