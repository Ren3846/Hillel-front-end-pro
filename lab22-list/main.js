function generateList(array) {
  const ul = document.createElement('ul');

  for (let i = 0; i < array.length; i++) {
    const item = array[i];

    const li = document.createElement('li');

    if (Array.isArray(item)) {
      li.appendChild(generateList(item));
    } else {
      const text = document.createTextNode(item + i);

      li.appendChild(text);
    }

    ul.appendChild(li);
  }

  return ul;
}

const array = [1, 2, [3, 4, [5, 6, 7, 8]], 1, 2];

const listContainer = document.getElementById('list-container');

const list = generateList(array);

listContainer.appendChild(list);
