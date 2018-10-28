import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Page from './Page';

class RotateInPage extends Component {
  render() {
    return (
      <div className="react-transition rotate-in">
        <Page title="Rotate In" docs={`<div className="react-transition rotate-in"></div>`}/>
      </div>
    )
  }
}
export default RotateInPage
