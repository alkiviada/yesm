import React, { Component } from 'react'

const footerLinks = [
  'Privacy', 'FAQ', 'info@email', 
  'Terms and conditions', 'Help', '+38123456789', 
  'User agreement', 'YeStudio', 'Facebook'
]

class Footer extends Component {
  render() {
    return (
      <div className="yesm-footer">
        <div className="yesm-footer-links">
        { footerLinks.map(l => <div key={l.toString()} className="yesm-footer-link">{l}</div>) }
        </div>
        <div className="yesm-footer-ripe">
        </div>
      </div>
    )
  }
}

export default Footer
