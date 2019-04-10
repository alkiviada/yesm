import React, { Component, Fragment } from 'react'

class AboutMain extends Component {
  render() {
    return (
      <div className="yesm-main-about">
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" className="svg-filters" width="0" height="0" >
      <defs>
      <filter id="brush-main">
      <feTurbulence type="fractalNoise" baseFrequency=".08 5" numOctaves="2" result="warp" />
      <feDisplacementMap xChannelSelector="R" yChannelSelector="G" scale="25" in="SourceGraphic" in2="warp" />

     </filter>
     </defs>
    </svg>
     <div className="yesm-main-about-text">
      This company is the shit!
      Играет бас. Играет соло. Она поет как она брови наколола
      </div>
      </div>
    )
  }
}

export default AboutMain 
