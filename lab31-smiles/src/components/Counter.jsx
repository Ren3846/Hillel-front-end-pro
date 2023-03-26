import { useState } from 'react';
import { Button } from 'antd';

export default function EmojiCounter({ emoji, onVote }) {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
    onVote(emoji, count + 1);
  };

  return (
    <div className="container">
      <span>{emoji}</span>
      <Button className="margin" type="primary" onClick={handleClick}>
        Vote
      </Button>
      <span>{count}</span>
    </div>
  );
}
