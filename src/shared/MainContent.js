import React, { Component, Fragment } from 'react'
import BodyClassName from 'react-body-classname';
import { sideNav, headerNav, footerNav } from './constants'
import RipeMemberSVG from './RipeMemberSVG'

class MainContent extends Component {
  render() {
    const { page, lang } = this.props
    const linkMap = [sideNav, footerNav, headerNav].find(m => m[page])
    const pageClass = linkMap[page].pageClass + ' ' + lang
    const text = linkMap[page].text[lang]

    return (
      <BodyClassName className={pageClass}>
      <div className="yesm-main-content">
        <div className="yesm-main-text">
         {text}
        </div>
        { page == 'about' ? <RipeMemberSVG /> : '' }
      </div>
     </BodyClassName>
    )
  }
}

export default MainContent 
