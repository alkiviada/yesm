import React, { Component, Fragment } from 'react'
import YesCube from "./YesCube";
import YesBrandName from "./YesBrandName";
import MainContent from "./MainContent";
import { sideNav, headerNav, footerNav } from './constants'
import { connect } from 'react-redux';
import { setOnMain, clearOffMain } from './actions/mainActions';

class Main extends Component {
  render() {
    const { page, lang, offMain, onMain} = this.props
    console.log(onMain)
    console.log(offMain)
    let mainCubeClass = 'yesm-main-cube'

    if (!page) {
      if (offMain) 
        mainCubeClass += ' yesm-main-cube-animate'
      
      else if (!onMain) {
        this.props.setOnMain() 
      }
      
      return (
        <main role="main" className="yesm-main">
          <img src="/cube-main.png" alt="rubik cube" title="YeSmart Main Page" className={mainCubeClass} id="yesm-main-cube" />
          <YesBrandName page={page} /> 
        </main>) 
    }
    else 
      this.props.clearOffMain() 
      return sideNav[page] || headerNav[page] || footerNav[page] ? <MainContent page={page} lang={lang} /> : '' 
  }
}

const mapStateToProps = state => ({
  offMain: state.main.offMain,
  onMain: state.main.onMain,
});

export default connect(mapStateToProps, { setOnMain, clearOffMain })(Main)
