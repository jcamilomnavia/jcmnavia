import React, {Component} from 'react'
import './Education.css'


export default class About extends Component {
  render () {
    return (
      <div id='education' className="educationContent">

        <div className='firstRow'>
          <div className='title'>
            <h1>Education</h1>
          </div>
        </div>

        <div className='content'>

        <div className="degrees">
          <div className="contentDegree">
              <h4>EAFIT University</h4>
              <p className='float-right'>Graduation date: July 2021</p>
              <h5>Medellin, Colombia</h5>
              <span>Bachelor's in Computer Engineering</span><br></br>
          </div>

          <div className="contentDegree">
              <h4> University La Salle Ramon Llull</h4>
              <p className='float-right'>September 2019 - January 2020</p>
              <h5>Barcelona, Spain</h5> 
              <span>Bachelor's in Computer Engineering</span><br></br>
              <span>Exchange Program</span><br></br>
              <span>Courses: Data mining, Computer Architecture, Operative Systems, Project Management, Project Web </span>
          </div>

        </div>
        </div>

      </div>
    )
  }
}