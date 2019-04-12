import React, { Component } from 'react'
import BodyClassName from 'react-body-classname';
import Main from "./Main";
import SideNav from "./SideNav";
import Header from "./Header";
import Footer from "./Footer";

class Address extends Component {
  render() {
    return (
      <BodyClassName className="address">
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

export default Address
