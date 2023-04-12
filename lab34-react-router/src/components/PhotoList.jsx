import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

export default function PhotoList() {
  const { albumId } = useParams();
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
      .then((response) => response.json())
      .then((data) => setPhotos(data));
  }, [albumId]);

  return (
    <div>
      <h2>Photos in Album {albumId}</h2>
      <ul>
        {photos.map((photo) => (
          <li key={photo.id}>
            <Link to={`/photos/${photo.id}`}>
              <img src={photo.thumbnailUrl} alt={photo.title} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
