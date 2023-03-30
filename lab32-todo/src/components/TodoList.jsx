import React, { useState, useEffect } from 'react';

export default function TodoList() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Вы нажали ${count} раз`;
  });

  return (
    <div>
      <h1> Content </h1>
      <ul>
        <li></li>
        <li></li>
        <li></li>
      </ul>

      <p>Вы кликнули {count} раз</p>
      <button onClick={() => setCount(count + 1)}>Click</button>
    </div>
  );
}
