import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Page from './Page';

class RotateInReversePage extends Component {
  render() {
    return (
      <div className="react-transition rotate-in-reverse">
        <Page title="Rotate In Reverse" docs={`<div className="react-transition rotate-in-reverse"></div>`}/>
      </div>
    )
  }
}
export default RotateInReversePage
