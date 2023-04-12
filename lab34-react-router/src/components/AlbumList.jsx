import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function AlbumList() {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    const userId = window.location.pathname.split('/')[2];
    fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`)
      .then((response) => response.json())
      .then((data) => setAlbums(data));
  }, []);

  return (
    <div>
      <h1>Альбоми користувача</h1>
      <ul>
        {albums.map((album) => (
          <li key={album.id}>
            {album.title}
            <ul>
              <li>
                <Link to={`/photos/${album.id}`}>Photos</Link>
              </li>
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}
