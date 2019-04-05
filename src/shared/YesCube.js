import React, { Component } from 'react'

class YesCube extends Component {
  render() {
    return (
<svg viewBox="-3 -8 45 33" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%"  className="main-cube"> 
<defs>
 <line id="sqr-stroke" x1="0" y1="0" x2="5" y2="5" className="sqr-stroke" />
 <rect id="lil-sqr1" x="0" y="0" width="10" height="10" />
 <rect id="lil-sqr1" x="0" y="0" width="10" height="10" />
 <rect id="lil-sqr2" x="10" y="0" width="10" height="10" />
 <rect id="lil-sqr3" x="20" y="0" width="10" height="10" />
</defs>
<g id="layer">
<g className="left-side left-left-twist">
  <use href="#lil-sqr1" />
  <use href="#lil-sqr2" />
  <use href="#lil-sqr3" />
</g>
<g className="left-side left-right-twist">
  <use href="#lil-sqr1" />
  <use href="#lil-sqr2" />
  <use href="#lil-sqr3" />
</g>
<g className="left-side bottom1">
  <use href="#lil-sqr1" />
  <use href="#lil-sqr2" />
  <use href="#lil-sqr3" />
</g>
<g className="right-side bottom2">
  <use href="#lil-sqr1" />
  <use href="#lil-sqr2" />
  <use href="#lil-sqr3" />
</g>
<g className="right-side right-right-twist">
  <use href="#lil-sqr1" />
  <use href="#lil-sqr2" />
  <use href="#lil-sqr3" />
</g>
<g className="right-side right-left-twist">
  <use href="#lil-sqr1" />
  <use href="#lil-sqr2" />
  <use href="#lil-sqr3" />
</g>
<g className="top row1">
  <use href="#lil-sqr1" />
  <use href="#lil-sqr2" />
  <use href="#lil-sqr3" />
</g>
<g className="top row2">
  <use href="#lil-sqr1" />
  <use href="#lil-sqr2" />
  <use href="#lil-sqr3" />
</g>
<g className="top row3">
  <use href="#lil-sqr1" />
  <use href="#lil-sqr2" />
  <use href="#lil-sqr3" />
</g>
</g>
<use href="#sqr-stroke" className="top-stroke1"/>
<use href="#sqr-stroke" className="top-stroke2"/>

</svg>
    )
  }
}

export default YesCube 
