// Використовуючи API https://jsonplaceholder.typicode.com/posts зробити пошук поста за ід.
// Ід має бути введений в інпут (валідація: ід від 1 до 100) Якщо знайдено пост,
// то вивести на сторінку блок з постом і зробити кнопку для отримання комкоментарів до посту.
// Зробити завдання використовуючи проміси, перехопити помилки.

const getInput = () => {
  const inputValue = document.getElementsByTagName('input')[0];
  return `https://pokeapi.co/api/v2/pokemon/${inputValue.value}`;
};

const fetchPosts = () => {
  fetch(getInput(), { method: 'GET' }).then(async (res) => {
    if (res.status === 200) {
      const response = await res.json();
      console.log(response);
      const imageSrc = response.sprites.front_default;
      const imgEl = document.getElementsByTagName('img')[0];
      imgEl.src = imageSrc;
      console.log(imageSrc);
    } else {
      console.log('error');
    }
  });
};

const form = document.getElementsByTagName('form')[0];
form.addEventListener('submit', (event) => {
  event.preventDefault();
  fetchPosts();
});
