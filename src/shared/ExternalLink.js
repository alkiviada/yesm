import React, { Component } from 'react'
import { Link } from "react-router-dom";

class ExternalLink extends Component {
  render() {
    const { what, how } = this.props
    return (
      <a href={how.to} target='_blank'>{how.title}</a>
    )
  }
}

export default ExternalLink
