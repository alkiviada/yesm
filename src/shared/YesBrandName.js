import React, { Component } from 'react'

class YesBrandName extends Component {
  render() {
    return (
      <svg viewBox="-1 0 26 4.4" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" className="yesm-bname"> 
        <defs>
        <path id="bname-lower-path" d="M 0 3 L 4.4 3 M 3.5 3.5 L 9.3 3.5 M10 4.5 L24 4.5" className="yesm-text-path"/>
        <path id="bname-cap-path" d="M 3 3 L 5 3 M9 4.5 L24 4.5" className="yesm-text-path-part"/>
        <path id="bname-subhead1" d="M 0 6.5 L 9.5 6.5" className="yesm-subhead-path"/>
        <path id="bname-subhead2" d="M 0 8.6 L 13 8.6" className="yesm-subhead-path"/>
        </defs>
        <text>
          <textPath href="#bname-lower-path" className="yesm-bname-text">
            YeSmart
          </textPath>
          <textPath href="#bname-subhead1" className="yesm-bname-subhead">
            УМНЫЕ РЕШЕНИЯ 
          </textPath>
          <textPath href="#bname-subhead2" className="yesm-bname-subhead">
           ДЛЯ ВАШЕГО БИЗНЕСА 
          </textPath>
        </text>
        <g>
        <circle cx="4" cy="2.2" r="1.66" className="yesm-bname-part-cover"/>
        <rect x="10" y="1.3" width="12.5" height="4.3" className="yesm-bname-part-cover"/>
        <text letter-spacing=".3">
        <textPath href="#bname-cap-path" className="yesm-bname-text-part">
        EMART 
        </textPath>
        </text>
        </g>
      </svg>
    )
  }
}

export default YesBrandName
