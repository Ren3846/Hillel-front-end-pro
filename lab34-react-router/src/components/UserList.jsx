import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div>
      <h1>Список користувачів</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name}
            <ul>
              <li>
                <Link to={`/albums/${user.id}`}>Albums</Link>
              </li>
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}
