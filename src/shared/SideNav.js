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
       <filter id="colorMeBlueMatrix">
    <feColorMatrix in="SourceGraphic"
        type="matrix"
        values="1 0 0 0 -1
                0 1 0 0 .4
                0 0 1 0 .6
                0 0 0 .6 0" />
  </filter>
       <filter id="colorMeYellowMatrix">
    <feColorMatrix in="SourceGraphic"
        type="matrix"
        values="1 0 0 0 .39
                0 1 0 0 .6
                0 0 1 0 -.14
                0 0 0 .7 0" />
  </filter>
       <filter id="colorMeFleshMatrix">
    <feColorMatrix in="SourceGraphic"
        type="matrix"
        values="1 0 0 0 .33
                0 1 0 0 .6
                0 0 1 0 .4
                0 0 0 1.9 0" />
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
