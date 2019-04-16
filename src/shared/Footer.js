import React, { Component } from 'react'
import { footerNav } from './constants'

const footerArr = [
  'privacy', 'faq', 'email', 
  'terms', 'help', 'tel', 
  'user', 'copyright', 'fb'
]

class Footer extends Component {
  render() {
    return (
      <div className="yesm-footer">
        <div className="yesm-footer-links">
        {
          footerArr.map(l => {
            const FooterComponent = footerNav[l].component
            return <div key={l.toString()} className="yesm-footer-link"><FooterComponent what={l} how={footerNav[l]} /></div>
          }) 
        }
        </div>
        <div className="yesm-footer-ripe">
        </div>
      </div>
    )
  }
}

export default Footer
