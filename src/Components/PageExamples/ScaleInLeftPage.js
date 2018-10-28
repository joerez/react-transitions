import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Page from './Page';

class ScaleInLeftPage extends Component {
  render() {
    return (
      <div className="react-transition scale-in-left">
        <Page title="Scale In" docs={`<div className="react-transition scale-in-left"></div>`}/>
      </div>
    )
  }
}
export default ScaleInLeftPage
