import React, { Component, } from 'react'
import { Link } from "react-router-dom";
import YesCube from "./YesCube";
import YesmLink from "./YesmLink";
import YesmBrandName from "./YesmBrandName";
import { headerNav, langs } from './constants'

class Header extends Component {
  render() {
    const { lang, page } = this.props 
    return (
      <header className="yesm-header" role="banner">
        <div className="yesm-header1">
          { !page ? '' : 
            <h1 className="yesm-logo">
              <a href={'/' + lang} onClick={(e) => this.props.onClickFn(e, '/' + lang)}>
                <YesmBrandName page={page} lang={lang} />
                <img src="/cube-logo.png" alt=""  className='yesm-main-cube-logo' alt="Yesmart main"/>
              </a>
            </h1>
          }
        <h2 className="yesm-about">
        <YesmLink what='about' how={{'title': headerNav['about'].title[lang] }} lang={lang} onClickFn={this.props.onClickFn}/>
        </h2>
      </div>
        <div className="yesm-header2">
        <h2 className="yesm-contact">
        <YesmLink what='contact' how={{'title': headerNav['contact'].title[lang] }} lang={lang} onClickFn={this.props.onClickFn} />
        </h2>
        <div className="yesm-localize">
          { langs.filter(l => l != lang).map(l => 
              <Link key={l.toString()} to={page ? ('/' + page + '/' + l) : ('/' + l) } className="yesm-localize-link">{l}</Link>)
          }
        </div>
        </div>
      </header>
    )
  }
}

export default Header
