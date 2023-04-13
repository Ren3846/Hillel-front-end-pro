import './App.css';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import UserList from './components/UserList';
import AlbumList from './components/AlbumList';
import PhotoList from './components/PhotoList';

function App() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Список користувачів</NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="/albums/:userId" element={<AlbumList />} />
          <Route path="/photos/:albumId" element={<PhotoList />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
