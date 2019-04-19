import React, { Component } from 'react'
import { sideNav } from './constants'
import YesmLink from './YesmLink'

class SideNav extends Component {
  render() {
    const { page, lang } = this.props
    return (
      <div className="yesm-sidenav">
      { Object.keys(sideNav).map((sn, i) => 
          <div key={sn.toString()} className={'yesm-nav-link bg-' + sideNav[sn].color }>
            <YesmLink what={sn} how={{'title': sideNav[sn].title[lang]}} lang={lang} />
          </div>) 
      }
      </div>
    )
  }
}

export default SideNav
