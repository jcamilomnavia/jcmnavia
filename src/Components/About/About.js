import React, {Component} from 'react'
import './About.css'

import profile from '../../assets/img/profile.jpg';

export default class About extends Component {
  render () {
    return (
      <div id='about' className="aboutContent">

        <div className='firstRow'>
          <div className='title'>
            <h1>About</h1>
          </div>
        </div>

        <div className='content'>

          <div className='description'>

            <p className='descriptionText'>
            I’m a 20-year-old guy born in Colombia, always interested in learning and improving myself in every way.
            I’m a passionate person in what I do and always do my best.
            I’ve been always into computers and stuff, also reading books and articles. I really believe in self-taught learning, 
            that's why even since I started the university, I like to taking the knowledge to the next level
            and now I’m proud to say that I've become a developer,
            more specific a full-stack Developer.
            I started some projects about a year ago as a Freelancer and now I’m looking forward to acquire
            more experience in the world of development with new technologies
            </p>
            
          </div>

          <div className='profilePic'>
            <img src={profile} alt="profile" />
          </div>

        </div>

      </div>
    )
  }
}