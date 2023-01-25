// Пишемо свій слайдер зображень.

//     Відображаємо зображення та кнопки Next, Prev з боків від зображення.
//     При кліку на Next - показуємо наступне зображення.
//     При кліку на Prev - попереднє .
//     При досягненні останнього зображення - ховати кнопку Next. Аналогічно з першим зображенням і кнопкою Prev.

var previousButton = document.getElementById('slide-left'),
  nextButton = document.getElementById('slide-right'),
  total_img = document.getElementsByTagName('img'),
  index = 0;

nextButton.addEventListener('click', moveLeft);
function moveLeft() {
  previousButton.style.display = 'block';
  total_img[index].style.display = 'none';
  total_img[++index].style.display = 'block';
  if (index === total_img.length - 1) {
    nextButton.style.display = 'none';
  }
}

previousButton.addEventListener('click', moveRight);
function moveRight() {
  nextButton.style.display = 'block';
  total_img[index].style.display = 'none';
  total_img[--index].style.display = 'block';
  if (index === 0) {
    previousButton.style.display = 'none';
  }
}
