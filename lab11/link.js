// На сторінці є дві кнопки. - переадресовується на інший сайт (за раніше введеним посиланням).
//Реалізувати перевірку на http/https. Якщо протокол не вказаний - додаємо

const btnGetLink = document.getElementById('btnPrompt');
const btnGoToLink = document.getElementById('btnLink');
let link;
let linkArr;
let stringLink;

btnGetLink.onclick = function () {
  link = prompt('Write link');
  linkArr = link.split('');
  let arrText = [];
  const checkHttp = ['h', 't', 't', 'p'];
  const checkHttps = ['h', 't', 't', 'p', 's'];

  for (let i = 0; i < 5; i++) {
    arrText.push(linkArr[i]);
  }

  for (let i = 0; i < arrText.length; i++) {
    if (arrText[i] === checkHttps[i] || arrText[i] === checkHttp[i]) {
      continue;
    } else {
      linkArr.unshift('h', 't', 't', 'p', 's', ':', '/', '/');
      break;
    }
  }

  stringLink = linkArr.join('');
  console.log(stringLink);
};

btnGoToLink.onclick = function () {
  location.href = stringLink;
};
