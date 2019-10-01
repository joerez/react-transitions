import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Page from './Page';

class BlackWashInPage extends Component {
  render() {
    return (
      <div className="react-transition black-wash-in">
        <Page title="Black Wash In" docs={`<div className="react-transition black-wash-in"></div>`}/>
      </div>
    )
  }
}
export default BlackWashInPage
