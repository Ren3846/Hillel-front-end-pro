import { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <h1>My React App</h1>
        <nav>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
