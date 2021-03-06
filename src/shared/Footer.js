import React, { Component } from 'react'
import { footerNav } from './constants'
import RipeMemberSVG from './RipeMemberSVG'

const footerArr = [
  'privacy', 'faq', 'email', 
  'terms', 'help', 'tel', 
  'user', 'copyright', 'fb'
]

class Footer extends Component {
  render() {
    const { lang, onClickFn } = this.props 
    return (
      <footer className="yesm-footer" role="contentinfo">
        <div className="yesm-footer-links">
        {
          footerArr.map(l => {
            const FooterComponent = footerNav[l].component
            return (
              <div key={l.toString()} className="yesm-footer-link">
                <FooterComponent what={l} how={footerNav[l]} lang={lang} onClickFn={onClickFn} />
              </div>)
          }) 
        }
        </div>
        <div className="yesm-footer-ripe">
        <RipeMemberSVG />
        </div>
      </footer>
    )
  }
}

export default Footer
