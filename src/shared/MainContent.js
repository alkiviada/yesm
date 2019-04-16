import React, { Component, Fragment } from 'react'
import BodyClassName from 'react-body-classname';
import { sideNav, headerNav, footerNav } from './constants'

class MainContent extends Component {
  render() {
    console.log('i ma main content')
    const linkMap = [sideNav, footerNav, headerNav].find(m => m[this.props.page])
    const pageClass = linkMap[this.props.page].pageClass
    const text = linkMap[this.props.page].text
    console.log(text)
    console.log(pageClass)
    return (
      <BodyClassName className={pageClass}>
      <div className="yesm-main-content">
        <div className="yesm-main-text">
         {text}
        </div>
      </div>
     </BodyClassName>
    )
  }
}

export default MainContent 
