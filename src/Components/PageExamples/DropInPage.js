import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Page from './Page';

class DropInPage extends Component {
  render() {
    return (
      <div className="react-transition drop-in">
        <Page title="Drop In" background={{background: 'blue'}} docs={`<div className="react-transition drop-in"></div>`} />
      </div>
    )
  }
}
export default DropInPage
