import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Page from './Page';

class WoahPage extends Component {
  render() {
    return (
      <div className="react-transition woah">
        <Page title="Woah" docs={`<div className="react-transition woah"></div>`}/>
      </div>
    )
  }
}
export default WoahPage
