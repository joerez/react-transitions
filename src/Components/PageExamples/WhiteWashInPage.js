import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Page from './Page';

class WhiteWashInPage extends Component {
  render() {
    return (
      <div className="react-transition white-wash-in">
        <Page title="White Wash In" docs={`<div className="react-transition white-wash-in"></div>`}/>
      </div>
    )
  }
}
export default WhiteWashInPage
