import './App.css';
import Header from './components/Header';
import EmojiList from './components/List';

function App() {
  const handleWinner = (winner) => {
    console.log(`The winner is ${winner.emoji}`);
  };
  return (
    <div>
      <Header />
      <EmojiList onWinner={handleWinner} />
    </div>
  );
}

export default App;
