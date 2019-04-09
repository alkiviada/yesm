import React, { Component } from 'react'
import { withRouter } from "react-router-dom";

class YesBrandName extends Component {
  render() {
    const { location } = this.props
    const className = location.pathname === '/' ? 'yesm-bname' : 'yesm-bname-logo' 
    return (
      <svg viewBox="-5 -3 26 24.4" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="100%" height="100%" className={className}> 
        <defs>
        <path id="bname-lower-path" d="M 0 3 L 5.4 3 M 5.5 3.5 L 8.3 3.5 M 8.1 4.5 L26 4.5" className="yesm-text-path"/>
        <path id="bname-cap-path" d="M 3.6 3 L 5 3 M 8.8 4.5 L26 4.5" className="yesm-text-path-part"/>
        <path id="bname-subhead1" d="M -3 7.7 L 13.5 7.7" className="yesm-subhead-path"/>
        <path id="bname-subhead2" d="M -3 10.5 L 18 10.5" className="yesm-subhead-path"/>
        </defs>
        <text className="yesm-bname-text">
          <textPath xlinkHref="#bname-lower-path" className="yesm-bname-text-path">
            YeSmart
          </textPath>
          <textPath xlinkHref="#bname-subhead1" className="yesm-bname-subhead">
            УМНЫЕ РЕШЕНИЯ 
          </textPath>
          <textPath xlinkHref="#bname-subhead2" className="yesm-bname-subhead yesm-bname-subhead2">
           ДЛЯ ВАШЕГО БИЗНЕСА 
          </textPath>
        </text>
        <g>
        <circle cx="4.8" cy="1.8" r="1.75" className="yesm-bname-part-cover"/>
        <rect x="9.7" y="1" width="14.5" height="4.3" className="yesm-bname-part-cover"/>
        <text className="yesm-bname-part-text">
        <textPath xlinkHref="#bname-cap-path" className="yesm-bname-text-part">
        EMART 
        </textPath>
        </text>
        </g>
      </svg>
    )
  }
}

export default withRouter(YesBrandName)
