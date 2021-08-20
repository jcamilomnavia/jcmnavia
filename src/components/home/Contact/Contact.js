import React, { Component } from 'react'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Contact.css'

export default class About extends Component {
  render() {
    return (
      <div id="contact" className="contactContent">
        <div className="innerContent">
          <div className="firstRowContact">
            <div className="titleContact">
              <h1>Contact</h1>
              <i
                id="contactIcon"
                className="fa fa-code fa-2x logoNavContact float-right"
              />
            </div>
            <div className="contactDescription">
              <FontAwesomeIcon icon={faEnvelope} />{' '}
              <span>jcmavia@hotmail.com</span>
            </div>
            <br />
            <div className="contactDescription">
              <FontAwesomeIcon icon={faPhoneAlt} />{' '}
              <span>+57 3003 345 3662</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
