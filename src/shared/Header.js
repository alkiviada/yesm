import React, { Component, } from 'react'
import { Link, withRouter } from "react-router-dom";
import YesCube from "./YesCube";
import YesBrandName from "./YesBrandName";

class Header extends Component {
  render() {
    const { location } = this.props
    return (
      <div className="yesm-header">
        <div className="yesm-header1">
          { location.pathname === '/' ? '' : 
            <div className="yesm-logo">
              <Link to="/">
                <YesBrandName />
                <img src="/cube.png" alt="rubik cube" className='yesm-main-cube-logo' />
              </Link>
            </div>
          }
        <div className="yesm-about">
          <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>
            Компания
          </Link>
        </div>
      </div>
        <div className="yesm-header2">Связаться</div>
      </div>
    )
  }
}

export default withRouter(Header)
