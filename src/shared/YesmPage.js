import React, { Component, Fragment } from 'react'
import ReactDOM from "react-dom";
import { withRouter } from "react-router-dom";
import Main from "./Main";
import YesmLink from "./YesmLink";
import { moveOffMain } from './actions/mainActions';
import YesmSVGFilters from "./YesmSVGFilters";
import SideNav from "./SideNav";
import Header from "./Header";
import Footer from "./Footer";
import { connect } from 'react-redux';

class YesmPage extends Component {
  constructor(props) { 
    super(props)
    this.onClick = this.onClick.bind(this) 
    this.mainRef = React.createRef();
  }

  onClick(e, to) {
    e.preventDefault()
    const { onMain } = this.props
    if (onMain) {
      this.props.moveOffMain()
      this.timeout = setTimeout(() => {
        this.props.history.push(to);
      }, 500);
    }
    else
      this.props.history.push(to);
    window.scrollTo(0, 0)
    const domNode = ReactDOM.findDOMNode(this.mainRef.current)
    console.log(domNode)
  };

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
      <Fragment>
        <YesmSVGFilters />
        <Header page={page} lang={lang} onClickFn={this.onClick} />
        <YesmLink what='login' how={{'title': 'Login', 'className': 'yesm-login'}} lang={lang} />
        <section className="yesm-body">
        <Main page={page} lang={lang} mainref={this.mainRef} />
        <SideNav page={page} lang={lang} onClickFn={this.onClick} /> 
        </section>
        <Footer lang={lang} onClickFn={this.onClick} />
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  onMain: state.main.onMain,
  offMain: state.main.offMain,
});

export default withRouter(connect(mapStateToProps, { moveOffMain })(YesmPage))
