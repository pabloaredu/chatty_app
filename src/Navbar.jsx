import React, {Component} from 'react';


class Navbar extends Component {
    render() {
      console.log("Rendering </navbar>");
      return (
          <nav className="navbar">
            <a href="/" className="navbar-brand">Chatty</a>
            <p> {this.props.numberOfUsers} users online</p>
          </nav>
      );
    }
  }

export default Navbar;
