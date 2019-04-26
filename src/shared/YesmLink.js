import React, { Component } from 'react'
import { withRouter, Link, Redirect } from "react-router-dom";

class YesmLink extends Component {

  render() {
    const { what, how, location, lang } = this.props
    const where = '/' + what + '/' + lang
    const className = how.className || ''
    return (
      <Link to={where} className={(location.pathname === '/' + what || location.pathname === where) ? 
        className + (className ? ' ' : '') + 'active' : className } onClick={(e) => this.props.onClickFn(e, where)}>
      {how.title}
      </Link>
    )
  }
}


export default withRouter(YesmLink)
