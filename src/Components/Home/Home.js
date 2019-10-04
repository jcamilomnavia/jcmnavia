import React, {Component} from 'react'
import './Home.css'

export default class Home extends Component {
  
  render () {
    return (
      <div className="containerHome">
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
      // <div id="gridHome">
      //   <div className='startBracket'>
      //     <h1>{`<`}</h1>
      //   </div>
      //   <div id="mainHome">
      //     <h1>HELLO,</h1>
      //     <h1>I'M</h1>
      //     <h1>JUAN CAMILO</h1>
      //     <p>Full Stack Developer</p>
      //   </div>
      //   <div className='endBracket'>
      //     <h1>{`/>`}</h1>
      //   </div>
      //   <div className='arrow bounce'>
      //   </div>
      // </div>
    )
  }
}