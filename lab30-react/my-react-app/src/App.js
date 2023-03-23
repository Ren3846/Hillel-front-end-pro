import './App.css';
import Header from './components/header';
import Sidebar from './components/sidebar';
import Container from './components/container';

function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <div className="content">
        <Container />
      </div>
    </div>
  );
}

export default App;
