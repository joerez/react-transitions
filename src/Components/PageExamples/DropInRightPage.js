import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Page from './Page';

class DropInRightPage extends Component {
  render() {
    return (
      <div className="react-transition drop-in-right">
        <Page title="Drop In Right" />
      </div>
    )
  }
}
export default DropInRightPage
