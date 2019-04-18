import React, { Component } from 'react'
import SideNav from "./SideNav";
import YesmLink from "./YesmLink";
import Main from "./Main";
import Header from "./Header";
import Footer from "./Footer";

class Home extends Component {
  render() {
    return (
      <div className="yesm-container">
        <Header />
        <YesmLink what='login' how={{'title': 'Login', 'className': 'yesm-login'}} />
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
