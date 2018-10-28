import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import SyntaxHighlighter from 'react-syntax-highlighter/prism';
import { dark } from 'react-syntax-highlighter/styles/prism';



import './styles.css';

class Page extends Component {
  render() {
    return (
      <div  className="page">
        <h1>{this.props.title}</h1>
        <Link to="/">Back To Home</Link>

        <SyntaxHighlighter language='javascript' style={dark}>
          {this.props.docs}
        </SyntaxHighlighter>

      </div>
    )
  }
}

export default Page;
