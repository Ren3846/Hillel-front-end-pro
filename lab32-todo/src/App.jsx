import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Container from './components/Container';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <Header />
      <Container></Container>
      <TodoList></TodoList>

      <Footer />
    </div>
  );
}

export default App;
