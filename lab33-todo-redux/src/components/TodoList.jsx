// TodoList.jsx

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

function TodoList() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  function handleToggle(index) {
    dispatch({ type: 'TOGGLE_TODO', payload: index });
  }

  return (
    <ul>
      {todos.map((todo, index) => (
        <li
          key={index}
          style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
          onClick={() => handleToggle(index)}>
          {todo.text}
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
