import React, { Fragment, Component } from 'react'
import { Link } from "react-router-dom";

class YesmStudio extends Component {
  render() {
    return (
      <Fragment>
      <span className="yesm-copyright">&copy; 2019</span>
      <svg viewBox="0 0 50 5" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="100%" height="100%" className="yesm-studio"> 
        <defs>
        <path id="yesm-studio-path" d="M 0 3 L 16 3 M 16 5 L 42 5" className="yesm-studio-path"/>
        </defs>
        <text className="yesm-studio-text" textLength="40">
          <textPath xlinkHref="#yesm-studio-path" className="yesm-studio-text-path">
            YeStudio
          </textPath>
        </text>
      </svg>
      </Fragment>
    )
  }
}

export default YesmStudio
