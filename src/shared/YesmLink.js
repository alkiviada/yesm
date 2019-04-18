import React, { Component } from 'react'
import { withRouter, Link } from "react-router-dom";

class YesmLink extends Component {
  render() {
    const { what, how, location, lang } = this.props
    const where = '/' + what + '/' + lang
    const className = how.className || ''
    return (
      <Link to={where} className={(location.pathname === '/' + what || location.pathname === where) ? 
        className + (className ? ' ' : '') + 'active' : className }>
      {how.title}
      </Link>
    )
  }
}

export default withRouter(YesmLink)
