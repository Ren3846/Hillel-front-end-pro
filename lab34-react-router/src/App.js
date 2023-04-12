import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import UserList from './components/UserList';
import AlbumList from './components/AlbumList';
import PhotoList from './components/PhotoList';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Список користувачів</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/">
            <UserList />
          </Route>
          <Route exact path="/albums/:userId">
            <AlbumList />
          </Route>
          <Route exact path="/photos/:albumId">
            <PhotoList />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
export default App;
