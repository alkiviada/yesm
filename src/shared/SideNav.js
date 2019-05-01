import React, { Component } from 'react'
import { sideNav } from './constants'
import YesmLink from './YesmLink'

class SideNav extends Component {
  render() {
    const { page, lang } = this.props
    return (
      <nav className="yesm-sidenav" role="navigation" area-label="Yesmart List of Services">
        <ul className="yesm-nav-ul">
        { Object.keys(sideNav).map((sn, i) => 
            <li key={sn.toString()} className={'yesm-nav-link bg-' + sideNav[sn].color }>
              <YesmLink what={sn} how={{'title': sideNav[sn].title[lang]}} lang={lang} onClickFn={this.props.onClickFn}/>
            </li>) 
        }
        </ul>
      </nav>
    )
  }
}

export default SideNav
