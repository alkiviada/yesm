import React, { Component, Fragment } from 'react'
import YesCube from "./YesCube";
import YesBrandName from "./YesBrandName";
import MainContent from "./MainContent";
import { sideNav, headerNav, footerNav } from './constants'

class Main extends Component {
  render() {
    const { page, lang } = this.props
    console.log(page)
    
    return !page ? (
      <div className="yesm-main">
        <img src="/cube-main.png" alt="" title="YeSmart" className='yesm-main-cube' />
        <YesBrandName page={page} /> 
      </div>) : 
      sideNav[page] || headerNav[page] || footerNav[page] ? (<MainContent page={page} lang={lang} />) : ''
  }
}

export default Main
