// Використовуючи API https://jsonplaceholder.typicode.com/posts зробити пошук поста за ід.
// Ід має бути введений в інпут (валідація: ід від 1 до 100) Якщо знайдено пост,
// то вивести на сторінку блок з постом і зробити кнопку для отримання комкоментарів до посту.
// Зробити завдання використовуючи проміси, перехопити помилки.

const getInput = () => {
  const inputValue = document.getElementsByTagName('input')[0];
  return `https://jsonplaceholder.typicode.com/posts/${inputValue.value}`;
};

const getPosts = () => {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res) => res.json())
    .then((res) => res.slice(0, 10))
    .then(createList)
    .catch();
};

const getComments = (id) => {
  fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
    .then((res) => res.json())
    .then((res) => console.log(res));
};

const ulElement = document.querySelector('ul');

const createList = (arr) => {
  arr.forEach((el) => {
    const element = document.createElement('li');
    element.addEventListener('click', () => {
      getComments(el.id);
    });
    element.innerText = el.title;
    ulElement.append(element);
  });
};
getPosts();

// const fetchPosts = () => {
//   fetch(getInput()).then(async (res) => {
//     if (res.status === 200) {
//       const response = await res.json();
//       div.insertAdjacentHTML('afterend', '<button id="btn">Переглянути коментар</button>');
//       div.insertAdjacentHTML('afterend', `<p>${response.body}</p>`);
//       div.insertAdjacentHTML('afterend', `<h1>${response.id}. ${response.title}</h1>`);
//     } else {
//       alert('error');
//     }
//   });
// };

const form = document.getElementsByTagName('form')[0];
form.addEventListener('submit', (event) => {
  event.preventDefault();
  getPosts();
});

// const fetchComments = (id) => {
//   fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`).then(async (res) => {
//     if (res.status === 200) {
//       const response = await res.json();
//       console.log(response);
//     } else {
//       alert('error');
//     }
//   });
// };

// btn.addEventListener('click', (event) => {
//   fetchComments();
// });
