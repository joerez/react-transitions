//Home should display links to all transition components
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Home extends Component {
  render() {
    return (
      <div className="home react-transition swipe-left">
        <h1>Home</h1>
        <section className="transition-links">
          <Link to="/swipe-up">Swipe Up</Link>
          <Link to="/swipe-left">Swipe Left</Link>
          <Link to="/swipe-right">Swipe Right</Link>
          <Link to="/swipe-down">Swipe Down</Link>
        </section>
      </div>
    )
  }
}

export default Home;
