//Home should display links to all transition components
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Home extends Component {
  render() {
    return (
      <div className="home react-transition flip-in-y">
        <h1>Home</h1>
        <section className="transition-links">

          <Link to="/swipe-up">Swipe Up</Link>
          <Link to="/swipe-left">Swipe Left</Link>
          <Link to="/swipe-right">Swipe Right</Link>
          <Link to="/swipe-down">Swipe Down</Link>

          <Link to="/fade-in">Fade In</Link>

          <Link to="/scale-in">Scale In</Link>
          <Link to="/scale-in-left">Scale In Left</Link>
          <Link to="/scale-in-right">Scale In Right</Link>

          <Link to="/drop-in">Drop In</Link>
          <Link to="/drop-in-right">Drop In Right</Link>
          <Link to="/drop-in-left">Drop In Left</Link>

          <Link to="/flip-in-x">Flip In X</Link>
          <Link to="/flip-in-x-reverse">Flip In X Reverse</Link>
          
          <Link to="/flip-in-y">Flip In Y</Link>
          <Link to="/flip-in-y-reverse">Flip In Y Reverse</Link>

        </section>
      </div>
    )
  }
}

export default Home;
