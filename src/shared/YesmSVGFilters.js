import React, { Component } from 'react'

class YesmSVGFilters extends Component {
  render() {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" className="svg-filters" width="0" height="0" >
      <defs>
       <filter id="colorMeBlueMatrix">
    <feColorMatrix in="SourceGraphic" colorInterpolationFilters="sRGB"
        type="matrix"
        values="1 0 0 0 -1
                0 1 0 0 .4
                0 0 1 0 .6
                0 0 0 .6 0" />
  </filter>
       <filter id="colorMeYellowMatrix">
    <feColorMatrix in="SourceGraphic" colorInterpolationFilters="sRGB"
        type="matrix"
        values="1 0 0 0 -.01
                0 1 0 0 .5
                0 0 1 0 -.1
                0 0 0 1 0" />
  </filter>
       <filter id="colorMeFleshMatrix">
    <feColorMatrix in="SourceGraphic" colorInterpolationFilters="sRGB"
        type="matrix"
        values="1 0 0 0 .38
                0 1 0 0 .8
                0 0 1 0 .54
                0 0 0 1.9 0" />
  </filter>
     </defs>
    </svg>
    )
  }
}

export default YesmSVGFilters
