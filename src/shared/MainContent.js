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
        <div className="yesm-main-text">
         {text}
        </div>
      </div>
    )
  }
}

export default MainContent 
