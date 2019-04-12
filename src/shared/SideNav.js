import React, { Component } from 'react'
import { sideNav } from './constants'
import { Link, withRouter } from "react-router-dom";

class SideNav extends Component {
  render() {
    const { location } = this.props
    return (
      <div className="yesm-sidenav">
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" className="svg-filters" width="0" height="0" >
      <defs>
      <filter id="brush">
      <feTurbulence type="fractalNoise" baseFrequency=".001 0.3" numOctaves="2" result="warp" />
      <feDisplacementMap xChannelSelector="R" yChannelSelector="G" scale="11" in="SourceGraphic" in2="warp" />
     </filter>
     </defs>
    </svg>
      { Object.keys(sideNav).map((sn, i) => 
        <div key={sn.toString()} className={'yesm-nav-link bg-' + sideNav[sn].color }>
          <Link to={'/' + sideNav[sn].pageLink} className={location.pathname === '/' + sideNav[sn].pageLink ? 'active' : ''}>
            {sideNav[sn].title}
          </Link>
       </div>) 
      }
      </div>
    )
  }
}

export default  withRouter(SideNav)
