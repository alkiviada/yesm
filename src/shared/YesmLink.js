import React, { Component } from 'react'
import { withRouter, Link } from "react-router-dom";

class YesmLink extends Component {
  render() {
    const { what, how, location } = this.props
    console.log(what)
    return (
      <Link to={'/' + what} className={location.pathname === '/' + what ? 'active' : ''}>
      {how.title}
      </Link>
    )
  }
}

export default withRouter(YesmLink)
