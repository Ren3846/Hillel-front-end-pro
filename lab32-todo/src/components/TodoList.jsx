import React, { useState } from 'react';

export default function TodoList() {
  const [todos, setTodos] = useState([]);

  const handleTodoClick = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const handleAddTodo = (event) => {
    event.preventDefault();
    const newTodoText = event.target.elements.todoText.value;
    if (newTodoText) {
      setTodos([...todos, { text: newTodoText, completed: false }]);
      event.target.reset();
    }
  };

  return (
    <div>
      <ul>
        {todos.map((todo, index) => (
          <li
            key={index}
            style={{ textDecoration: todo.completed ? 'line-through' : '' }}
            onClick={() => handleTodoClick(index)}>
            {todo.text}
          </li>
        ))}
      </ul>
      <form onSubmit={handleAddTodo}>
        <input type="text" name="todoText" placeholder="Enter a todo" />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
}
