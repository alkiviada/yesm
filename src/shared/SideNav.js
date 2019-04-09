import React, { Component } from 'react'

const links = ['Адреса тра ла ла', 'Автономные системы', 'Мониторинг ресурсов клиента',
  'Регистрация', 'Регистрация доменов', 'IP-консалтинг' 
]

class SideNav extends Component {
  render() {
    return (
      <div className="yesm-sidenav">
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" className="svg-filters" width="0" height="0" >
      <defs>
      <filter id="brush">
      <feTurbulence type="fractalNoise" baseFrequency=".001 0.3" numOctaves="2" result="warp" />
      <feDisplacementMap xChannelSelector="R" yChannelSelector="G" scale="11" in="SourceGraphic" in2="warp" />
     </filter>
     </defs>
    </svg>
      { links.map((l, i) => 
        <div key={l.toString()} className={'yesm-nav-link ' + (i%3 ? i%2 ? 'bg-blue' : 'bg-yellow' : 'bg-red')}>{l}</div>) 
      }
      </div>
    )
  }
}

export default SideNav
