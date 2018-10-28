import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Page from './Page';

class DropInLeftPage extends Component {
  render() {
    return (
      <div className="react-transition drop-in-left">
        <Page title="Drop In Left" docs={`<div className="react-transition drop-in-left"></div>`}/>
      </div>
    )
  }
}
export default DropInLeftPage
