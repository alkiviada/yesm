import React, { Component } from 'react'
import { Link } from "react-router-dom";

class TelLink extends Component {
  render() {
    const { what, how } = this.props
    return (
      <a href={'tel:' + how.title}>{how.title}</a>
    )
  }
}

export default TelLink
