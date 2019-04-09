import React, { Component } from 'react'
import SideNav from "./SideNav";
import Header from "./Header";
import Footer from "./Footer";

class About extends Component {
  render() {
    return (
      <div className="yesm-container">
        <Header />
        <div className="yesm-body">
        <SideNav /> 
        </div>
        <Footer />
     </div>
    )
  }
}

export default About
