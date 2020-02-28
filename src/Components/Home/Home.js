import React, {Component} from 'react'
import './Home.css'

export default class Home extends Component {
  
  render () {
    return (
      <div id='home' className="containerHome">
        {/* <img alt='home' src={logo} className='parallaxImg' /> */}
        {/* <div className='parallaxImg'/> */}
        <div className="gridHome row">
          <div id='startbracket' className="col-sm startBracket">
            <h1>{`<`}</h1>
          </div>
          <div className="col- mainHome">
              <h1 className="row">HELLO,</h1>
              <h1 className="row">I'M</h1>
              <h1 className="row">JUAN CAMILO</h1>
            <div className="row">
              <p>Full Stack Developer</p>
            </div>
          </div>
          <div id='endbracket' className="col-sm endBracket">
            <h1>{`/>`}</h1>
          </div>
        </div>
      </div>
    )
  }
}