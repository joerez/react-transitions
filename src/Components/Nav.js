import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Nav extends Component {
  render() {
    return (
      <nav>
        <Link to="/">Demo</Link>
        <Link to="documentation">Docs</Link>
      </nav>
    )
  }
}
