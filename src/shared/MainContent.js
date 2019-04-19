import React, { Component, Fragment } from 'react'
import BodyClassName from 'react-body-classname';
import { sideNav, headerNav, footerNav } from './constants'
import RipeMemberSVG from './RipeMemberSVG'

class MainContent extends Component {
  render() {
    const { page, lang } = this.props
    console.log(lang)
    const linkMap = [sideNav, footerNav, headerNav].find(m => m[page])
    const pageClass = linkMap[page].pageClass
    const text = linkMap[page].text[lang]

    console.log(text)

    console.log(pageClass)
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
