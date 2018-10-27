import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

class Page extends Component {
  render() {
    return (
      <div  className="page">
        <h1>{this.props.title}</h1>
        <Link to="/">Back To Home</Link>
      </div>
    )
  }
}

export default Page;
