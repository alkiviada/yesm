import React, { Component, } from 'react'
import { Link } from "react-router-dom";
import YesCube from "./YesCube";
import YesmLink from "./YesmLink";
import YesBrandName from "./YesBrandName";
import { headerNav, langs } from './constants'

class Header extends Component {
  render() {
    const { lang, page } = this.props 
    return (
      <div className="yesm-header">
        <div className="yesm-header1">
          { !page ? '' : 
            <div className="yesm-logo">
              <Link to={'/' + lang}>
                <YesBrandName page={page} lang={lang} />
                <img src="/cube.png" alt=""  title="YeSmart" className='yesm-main-cube-logo' />
              </Link>
            </div>
          }
        <div className="yesm-about">
        <YesmLink what='about' how={{'title': headerNav['about'].title[lang] }} lang={lang} />
        </div>
      </div>
        <div className="yesm-header2">
        <div className="yesm-contact">
        <YesmLink what='contact' how={{'title': headerNav['contact'].title[lang] }} lang={lang} />
        </div>
        <div className="yesm-localize">
          { langs.filter(l => l != lang).map(l => 
              <Link key={l.toString()} to={page ? ('/' + page + '/' + l) : ('/' + l) } className="yesm-localize-link">{l}</Link>)
          }
        </div>
        </div>
      </div>
    )
  }
}

export default Header
