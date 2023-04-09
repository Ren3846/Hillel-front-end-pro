import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

function TodoForm() {
  const [todoText, setTodoText] = useState('');
  const dispatch = useDispatch();

  function handleSubmit(event) {
    event.preventDefault();
    dispatch({ type: 'ADD_TODO', payload: todoText });
    setTodoText('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={todoText} onChange={(event) => setTodoText(event.target.value)} />
      <button type="submit">Add Todo</button>
    </form>
  );
}

export default TodoForm;
