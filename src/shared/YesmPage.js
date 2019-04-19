import React, { Component } from 'react'
import { withRouter } from "react-router-dom";
import Main from "./Main";
import YesmLink from "./YesmLink";
import YesmSVGFilters from "./YesmSVGFilters";
import SideNav from "./SideNav";
import Header from "./Header";
import Footer from "./Footer";

class YesmPage extends Component {
  render() {
    let page, lang = '';

    const { location } = this.props
    const stringLocation = location.pathname.substr(1)
    const params = stringLocation.split('/')

    if (stringLocation) { 
// we are on some page - not ROOT page
      if (!params[0].match('^(en|ru|ua)$')) {
// we are on a NOT home page
        page = params[0]
        if (params[1]) {
          lang = params[1]
        }
        else
          lang = 'en' 
      }
      else {
// we are on HOME page
// the language was supplied in the url
        lang = params[0]
      }
    }
    else {
// let us default to 'english' language
// the page must be a HOME page
      lang = 'en'
    }

    return (
      <div className="yesm-container">
        <YesmSVGFilters />
        <Header page={page} lang={lang} />
        <YesmLink what='login' how={{'title': 'Login', 'className': 'yesm-login'}} lang={lang} />
        <div className="yesm-body">
        <Main page={page} lang={lang} />
        <SideNav page={page} lang={lang} /> 
        </div>
        <Footer lang={lang} />
     </div>
    )
  }
}

export default withRouter(YesmPage)
