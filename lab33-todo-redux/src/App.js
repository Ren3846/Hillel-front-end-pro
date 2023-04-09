import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './store/reducers/todoReducer';
import TodoList from './components/TodoList.jsx';
import TodoForm from './components/TodoForm.jsx';

const store = createStore(rootReducer);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <TodoList />
        <TodoForm />
      </div>
    </Provider>
  );
}

export default App;
