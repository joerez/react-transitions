import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Front extends Component {
  componentDidMount() {

  }
  render() {
    return (
      <div className="front react-transition swipe-down">
        <h1>React Transitions</h1>
        <p>Add transitions to your React Router Components</p>
        <Link className="front-btn" to="/">View Demo</Link>
        <br />
        <Link className="front-btn" to="/documentation">View Docs</Link>
        <section className="git">

          <iframe src="https://ghbtns.com/github-btn.html?user=joerez&type=follow&count=true&size=large" frameborder="0" scrolling="0" width="220px" height="30px"></iframe>

          <iframe src="https://ghbtns.com/github-btn.html?user=joerez&repo=react-navigation-transitions&type=star&count=true&size=large" frameborder="0" scrolling="0" width="160px" height="30px"></iframe>

        </section>

      </div>
    )
  }
}

export default Front;
