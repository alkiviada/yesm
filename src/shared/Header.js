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
      <header className="yesm-header">
        <div className="yesm-header1">
          { !page ? '' : 
            <div className="yesm-logo">
              <a href={'/' + lang} onClick={(e) => this.props.onClickFn(e, '/')}>
                <YesBrandName page={page} lang={lang} />
                <img src="/cube.png" alt="small rubik cube"  title="Link to YeSmart Main Page" className='yesm-main-cube-logo' />
              </a>
            </div>
          }
        <h2 className="yesm-about">
        <YesmLink what='about' how={{'title': headerNav['about'].title[lang] }} lang={lang} onClick={(e) => this.props.onClickFn(e, 'about')}/>
        </h2>
      </div>
        <div className="yesm-header2">
        <h2 className="yesm-contact">
        <YesmLink what='contact' how={{'title': headerNav['contact'].title[lang] }} lang={lang} onClick={(e) => this.props.onClickFn(e, 'contact')} />
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
