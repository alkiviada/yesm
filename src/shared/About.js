import React, { Component } from 'react'
import BodyClassName from 'react-body-classname';
import Main from "./Main";
import SideNav from "./SideNav";
import Header from "./Header";
import Footer from "./Footer";

class About extends Component {
  render() {
    return (
      <BodyClassName className="about">
      <div className="yesm-container">
        <Header />
        <div className="yesm-body">
        <Main />
        <SideNav /> 
        </div>
        <Footer />
     </div>
     </BodyClassName>
    )
  }
}

export default About
