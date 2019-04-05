import React, { Component } from 'react'

class YesCube extends Component {
  render() {
    return (
<svg viewBox="-2 -14 50 50" xmlns="http://www.w3.org/2000/svg" > 
<style>

.left-right-twist {
  transform: rotateX(10deg) rotateY(30deg) translate(-3px,-9px);
}

.left-side {
  fill: blue;
  stroke: white;
  stroke-width: 1;
}

.left-left-twist {
  transform: rotateX(10deg) rotateY(60deg);
}
.bottom1 {
  transform: rotateX(10deg) rotateY(60deg) translate(0,10px);
}

.right-side {
  fill: yellow;
  stroke: white;
  stroke-width: .5;
}

.right-right-twist {
  transform: rotateX(-10deg) rotateY(60deg) translate(47.5px,.6px);
}


.top {
 stroke: white;
 fill: red;
 stroke-width: 1; 
}

.row1 {
  transform: rotateZ(-17deg) rotateY(60deg) rotateX(70deg) translate(47.5px,-8.5px);
}
.row2 {
  transform: rotateZ(-17deg) rotateY(60deg) rotateX(70deg) translate(47.5px,-18.5px);
}
.row3 {
  transform: rotateZ(-17deg) rotateY(60deg) rotateX(70deg) translate(47.5px,-28.5px);
}

.right-left-twist {
  transform: rotateX(-10deg) rotateY(30deg) translate(18px,6px);
}
.bottom2 {
  transform: rotateX(-10deg) rotateY(30deg) translate(18px,16.3px);
}

.top-stroke1 {
  transform: rotate(-39.3deg) translate(17px, 4.7px);
}
.top-stroke2 {
  transform: rotate(-39.3deg) translate(10.6px, -1.7px);
}
</style>
<defs>
 <line id="sqr-stroke" x1="0" y1="0" x2="5" y2="5" style="stroke:black;stroke-width:.2" />
 <rect id="lil-sqr1" x="0" y="0" width="10" height="10" />
 <rect id="lil-sqr1" x="0" y="0" width="10" height="10" />
 <rect id="lil-sqr2" x="10" y="0" width="10" height="10" />
 <rect id="lil-sqr3" x="20" y="0" width="10" height="10" />
</defs>
<g id="layer" stroke="black" stroke-width="1">
<g class="left-side left-left-twist">
  <use href="#lil-sqr1" />
  <use href="#lil-sqr2" />
  <use href="#lil-sqr3" />
</g>
<g class="left-side left-right-twist">
  <use href="#lil-sqr1" />
  <use href="#lil-sqr2" />
  <use href="#lil-sqr3" />
</g>
<g class="left-side bottom1">
  <use href="#lil-sqr1" />
  <use href="#lil-sqr2" />
  <use href="#lil-sqr3" />
</g>
<g class="right-side bottom2">
  <use href="#lil-sqr1" />
  <use href="#lil-sqr2" />
  <use href="#lil-sqr3" />
</g>
<g class="right-side right-right-twist">
  <use href="#lil-sqr1" />
  <use href="#lil-sqr2" />
  <use href="#lil-sqr3" />
</g>
<g class="right-side right-left-twist">
  <use href="#lil-sqr1" />
  <use href="#lil-sqr2" />
  <use href="#lil-sqr3" />
</g>
<g class="top row1">
  <use href="#lil-sqr1" />
  <use href="#lil-sqr2" />
  <use href="#lil-sqr3" />
</g>
<g class="top row2">
  <use href="#lil-sqr1" />
  <use href="#lil-sqr2" />
  <use href="#lil-sqr3" />
</g>
<g class="top row3">
  <use href="#lil-sqr1" />
  <use href="#lil-sqr2" />
  <use href="#lil-sqr3" />
</g>
</g>
<use href="#sqr-stroke" class="top-stroke1"/>
<use href="#sqr-stroke" class="top-stroke2"/>

</svg>
    )
  }
}

export default YesCube 
