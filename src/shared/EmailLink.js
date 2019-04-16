import React, { Component } from 'react'
import { Link } from "react-router-dom";

class EmailLink extends Component {
  render() {
    const { what, how } = this.props
    return (
      <a href={'mailto:' + how.title}>{how.title}</a>
    )
  }
}

export default EmailLink
