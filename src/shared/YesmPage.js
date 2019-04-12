import React, { Component } from 'react'
import Main from "./Main";
import SideNav from "./SideNav";
import Header from "./Header";
import Footer from "./Footer";

class YesmPage extends Component {
  render() {
    return (
      <div className="yesm-container">
        <Header />
        <div className="yesm-body">
        <Main />
        <SideNav /> 
        </div>
        <Footer />
     </div>
    )
  }
}

export default YesmPage
