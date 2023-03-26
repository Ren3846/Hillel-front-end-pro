import EmojiCounter from './Counter';
import { useState } from 'react';
import { Button } from 'antd';

export default function EmojiList({ onWinner }) {
  const [winner, setWinner] = useState(null);
  const [emojis, setEmojis] = useState([
    { emoji: '😀', count: 0 },
    { emoji: '😂', count: 0 },
    { emoji: '😍', count: 0 },
  ]);

  const handleVote = (emoji, count) => {
    const newEmojis = emojis.map((e) => (e.emoji === emoji ? { ...e, count } : e));
    setEmojis(newEmojis);
  };

  const handleShowResults = () => {
    const winningEmoji = emojis.reduce((prev, current) =>
      prev.count > current.count ? prev : current,
    );
    setWinner(winningEmoji);
    onWinner(winningEmoji);
  };

  return (
    <div className="container">
      {emojis.map((e) => (
        <EmojiCounter key={e.emoji} emoji={e.emoji} onVote={handleVote} />
      ))}

      <Button type="primary" danger onClick={handleShowResults}>
        Show Results
      </Button>
      {winner && (
        <div>
          <p>The winner is:</p>
          <span>{winner.emoji}</span>
          <span>{winner.count}</span>
        </div>
      )}
    </div>
  );
}
