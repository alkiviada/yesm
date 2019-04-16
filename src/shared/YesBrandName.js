import React, { Component } from 'react'
import { withRouter } from "react-router-dom";

class YesBrandName extends Component {
  render() {
    const { location } = this.props
    const className = location.pathname === '/' ? 'yesm-bname' : 'yesm-bname-logo' 
    return (
      <svg viewBox="-5 -3 26 24.4" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="100%" height="100%" className={className}> 
        <defs>
        <path id="bname-lower-path" d="M 0 3 L 5.8 3 M 6 3.5 L 10 3.5 M 10 4.5 L26 4.5" className="yesm-text-path"/>
        <path id="bname-cap-path" d="M 3.9 3 L 5.3 3 M 9.2 4.5 L26 4.5" className="yesm-text-path-part"/>
        <path id="bname-subhead1" d="M -1 8.1 L 13.5 8.1" className="yesm-subhead-path"/>
        <path id="bname-subhead2" d="M -1 11.2 L 18 11.2" className="yesm-subhead-path"/>
        </defs>
        <text className="yesm-bname-text" textLength="27">
          <textPath xlinkHref="#bname-lower-path" className="yesm-bname-text-path">
            YeSmart
          </textPath>
        </text>
        <text className="yesm-bname-subhead-text" textLength="14">
          <textPath xlinkHref="#bname-subhead1" className="yesm-bname-subhead">
            УМНЫЕ РЕШЕНИЯ 
          </textPath>
        </text>
        <text className="yesm-bname-subhead-text" textLength="19">
          <textPath xlinkHref="#bname-subhead2" className="yesm-bname-subhead yesm-bname-subhead2">
           ДЛЯ ВАШЕГО БИЗНЕСА 
          </textPath>
        </text>
      </svg>
    )
  }
}

export default withRouter(YesBrandName)
