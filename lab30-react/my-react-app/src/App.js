import './App.css';
import Header from './components/header';
import Sidebar from './components/sidebar';
import Container from './components/container';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <Sidebar />
        <Container />
      </div>
    </div>
  );
}

export default App;
