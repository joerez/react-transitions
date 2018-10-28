//Home should display links to all transition components
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Home extends Component {
  render() {
    return (
      <div className="home react-transition swipe-left">
        <h1>Demo</h1>
        <section className="transition-links">

          <Link to="/projects/react-transitions/swipe-up">Swipe Up</Link>
          <Link to="/projects/react-transitions/swipe-left">Swipe Left</Link>
          <Link to="/projects/react-transitions/swipe-right">Swipe Right</Link>
          <Link to="/projects/react-transitions/swipe-down">Swipe Down</Link>

          <Link to="/projects/react-transitions/fade-in">Fade In</Link>

          <Link to="/projects/react-transitions/scale-in">Scale In</Link>
          <Link to="/projects/react-transitions/scale-in-left">Scale In Left</Link>
          <Link to="/projects/react-transitions/scale-in-right">Scale In Right</Link>

          <Link to="/projects/react-transitions/drop-in">Drop In</Link>
          <Link to="/projects/react-transitions/drop-in-right">Drop In Right</Link>
          <Link to="/projects/react-transitions/drop-in-left">Drop In Left</Link>

          <Link to="/projects/react-transitions/flip-in-x">Flip In X</Link>
          <Link to="/projects/react-transitions/flip-in-x-reverse">Flip In X Reverse</Link>

          <Link to="/projects/react-transitions/flip-in-y">Flip In Y</Link>
          <Link to="/projects/react-transitions/flip-in-y-reverse">Flip In Y Reverse</Link>

          <Link to="/projects/react-transitions/rotate-in">Rotate In</Link>
          <Link to="/projects/react-transitions/rotate-in-reverse">Rotate In Reverse</Link>

          <Link to="/projects/react-transitions/woah">Woah</Link>

        </section>
      </div>
    )
  }
}

export default Home;
