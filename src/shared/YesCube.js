import React, { Component } from 'react'
import { withRouter } from "react-router-dom";

class YesCube extends Component {
  render() {
    const { location } = this.props
    const className = location.pathname === '/' ? 'yesm-main-cube' : 'yesm-main-cube-logo' 
    return (
<svg viewBox="-14 -10 43 39" xmlns="http://www.w3.org/2000/svg" className={className}> 
<g id="cube" className="cube">
<g id="top-layer-left-twist" className="top-layer-left-twist">
<g id="right-side-left-twist" className="right-side left-twist-right-side">
<rect x="0" y="0" width="10" height="10" />
<rect x="10" y="0" width="10" height="10" />
<rect x="20" y="0" width="10" height="10" />
</g>
<g id="left-side-left-twist" className="left-side left-twist-left-side">
<rect x="0" y="0" width="10" height="10" />
<rect x="10" y="0" width="10" height="10" />
<rect x="20" y="0" width="10" height="10" />
</g>
<g id="top-left-twist" className="top-left-twist">
<path d="M 30 30 h -30 v -30 h 30 z" />
</g>
</g>
<g id="right-side-left-twist-bottom" className="right-side right-bottom">
<rect x="0" y="0" width="10" height="10" />
<rect x="10" y="0" width="10" height="10" />
<rect x="20" y="0" width="10" height="10" />
</g>
<g id="left-side-left-twist-bottom" className="left-side left-bottom">
<rect x="0" y="0" width="10" height="10" />
<rect x="10" y="0" width="10" height="10" />
<rect x="20" y="0" width="10" height="10" />
</g>
<g id="right-side-right-twist" className="right-side right-side-right-twist">
<rect x="0" y="0" width="10" height="10" />
<rect x="10" y="0" width="10" height="10" />
<rect x="20" y="0" width="10" height="10" />
</g>
<g id="left-side-right-twist" className="left-side left-side-right-twist">
<rect x="0" y="0" width="10" height="10" />
<rect x="10" y="0" width="10" height="10" />
<rect x="20" y="0" width="10" height="10" />
</g>
<g id="top-right-twist" className="top-right-twist top-right-twist-row1">
<rect x="0" y="0" width="10" height="10" />
<rect x="10" y="0" width="10" height="10" />
<rect x="20" y="0" width="10" height="10" />
</g>
<g id="top-right-twist" className="top-right-twist top-right-twist-row2">
<rect x="0" y="0" width="10" height="10" />
<rect x="10" y="0" width="10" height="10" />
<rect x="20" y="0" width="10" height="10" />
</g>
<g id="top-right-twist" className="top-right-twist top-right-twist-row3">
<rect x="0" y="0" width="10" height="10" />
<rect x="10" y="0" width="10" height="10" />
<rect x="20" y="0" width="10" height="10" />
</g>
</g>

</svg>
    )
  }
}

export default withRouter(YesCube)
