import TodoList from './TodoList';

export default function Container() {
  return (
    <main className="main-container">
      <h2>Hello!</h2>
      <p>What do you need to do?</p>
      <TodoList></TodoList>
    </main>
  );
}
