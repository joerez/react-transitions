import React, { Component } from 'react';

// Import the Markdown component
import Markdown from 'react-markdown';

class Docs extends Component {
  constructor(props, context) {
    super(props, context);
    // Define some Markdown content
    this.ContentMarkdown = `# React Transitions \n  Many single page web applications don't use transitions on their different routes. \n  This unopinionated librry changes that.` ;
  }

  render() {
    return (
      <div className="docs react-transition drop-in">
        {/* Render the markdown component */}
        <Markdown
          source={this.ContentMarkdown}
        />
      </div>
    );
  }
}

export default Docs
