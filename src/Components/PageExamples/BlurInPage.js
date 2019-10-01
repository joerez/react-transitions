import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Page from './Page';

class BlurInPage extends Component {
  render() {
    return (
      <div className="react-transition blur-in">
        <Page title="Blur In" docs={`<div className="react-transition blur-in"></div>`}/>
      </div>
    )
  }
}
export default BlurInPage
