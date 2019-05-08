import React, { Component } from 'react'

class YesmBrandName extends Component {
  render() {
    const { page, bnameClassName } = this.props
    const className = bnameClassName ? bnameClassName : !page ? 'yesm-bname' : 'yesm-bname-logo' 
    const descr = bnameClassName == 'yesm-bname' ? 'yesm-descr' : ''
    return (
      <svg viewBox="-2 -13 80 50" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="50%" height="50%" className={className} aria-describedby={descr}> 
        <desc id="timeline-desc">Yesmart is smart decisions for your business</desc>
        <text className="yesm-bname-text" role="presentation">
          <tspan x="0" y="0" className="yesm-bname-main">Ye</tspan>
          <tspan x="24" y="2" className="yesm-bname-main">S</tspan>
          <tspan x="36.5" y="4" className="yesm-bname-main">mart</tspan>
          <tspan x="0" y="15" className="yesm-bname-subhead yesm-bname-subhead1">УМНЫЕ РЕШЕНИЯ</tspan>
          <tspan x="0" y="26" className="yesm-bname-subhead yesm-bname-subhead2">ДЛЯ ВАШЕГО БИЗНЕСА</tspan>
        </text>
      </svg>
    )
  }
}

export default YesmBrandName
