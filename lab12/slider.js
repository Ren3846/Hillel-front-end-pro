// Пишемо свій слайдер зображень.

//     Відображаємо зображення та кнопки Next, Prev з боків від зображення.
//     При кліку на Next - показуємо наступне зображення.
//     При кліку на Prev - попереднє .
//     При досягненні останнього зображення - ховати кнопку Next. Аналогічно з першим зображенням і кнопкою Prev.

const imagesUrls = ['img/img1.png', 'img/img2.png', 'img/img3.png'];

let currentIndex = 0;

const nextButton = document.querySelector('#next');
nextButton.addEventListener('click', nextImageHandler);

const previousButton = document.querySelector('#previous');
previousButton.addEventListener('click', previousImageHandler);

const imageElement = document.querySelector('#image');
imageElement.src = imagesUrls[currentIndex];

function nextImageHandler() {
  currentIndex++;
  if (currentIndex >= imagesUrls.length) {
    nextButton.style.display = 'none';
    currentIndex = 0;
  }
  nextButton.style.display = 'block';
  imageElement.src = imagesUrls[currentIndex];
}

function previousImageHandler() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = imagesUrls.length - 1;
    previousButton.style.display = 'none';
  }
  previousButton.style.display = 'block';
  imageElement.src = imagesUrls[currentIndex];
}
