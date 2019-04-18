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
    const { lang } = this.props 
    return (
      <div className="yesm-footer">
        <div className="yesm-footer-links">
        {
          footerArr.map(l => {
            const FooterComponent = footerNav[l].component
            return <div key={l.toString()} className="yesm-footer-link"><FooterComponent what={l} how={footerNav[l]} lang={lang} /></div>
          }) 
        }
        </div>
        <div className="yesm-footer-ripe">
        <RipeMemberSVG />
        </div>
      </div>
    )
  }
}

export default Footer
