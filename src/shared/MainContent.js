import React, { Component, Fragment } from 'react'
import BodyClassName from 'react-body-classname';
import { sideNav } from './constants'

class MainContent extends Component {
  render() {
    console.log(this.props.page)
    console.log('main content')
    console.log(sideNav)
    const pageClass = sideNav[this.props.page].pageClass
    const text = sideNav[this.props.page].text
    return (
      <div className={"yesm-main-content " + pageClass}>
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" className="svg-filters" width="0" height="0" >
      <defs>
      <filter id="brush-main">
      <feTurbulence type="fractalNoise" baseFrequency=".01 .01" numOctaves="8" result="warp" />
      <feDisplacementMap xChannelSelector="R" yChannelSelector="G" scale="20" in="SourceGraphic" in2="warp" />

     </filter>
     </defs>
    </svg>
     <div className="yesm-main-text">
     {text}
     </div>
     </div>
    )
  }
}

export default MainContent 
