import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Nav extends Component {
  render() {
    return (
      <nav>
        <Link to="/projects/react-transitions">Home</Link>
        <Link to="/projects/react-transitions/demo">Demo</Link>
        <Link className="right" to="/projects/react-transitions/documentation">Docs</Link>
      </nav>
    )
  }
}
