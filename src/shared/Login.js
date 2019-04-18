import React, { Component } from 'react'
import { withRouter, Link } from "react-router-dom";

class YesmLink extends Component {
  render() {
    const { what, how, location } = this.props
    const className = how.className || ''
    console.log(className)
    console.log(what)
    return (
      <Link to={'/' + what} className={location.pathname === '/' + what ? className + (className ? ' ' : '') + 'active' : className }>
      {how.title}
      </Link>
    )
  }
}

export default withRouter(YesmLink)
