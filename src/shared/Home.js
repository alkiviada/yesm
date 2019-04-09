import React, { Component } from 'react'
import SideNav from "./SideNav";
import Main from "./Main";
import Header from "./Header";
import Footer from "./Footer";

class Home extends Component {
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

export default Home
