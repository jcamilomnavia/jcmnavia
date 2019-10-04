import React, {Component} from 'react'
import './About.css'

import profile from '../../assets/img/profile.jpg';

export default class About extends Component {
  render () {
    return (
      <div className="gridAbout">
        <div className='row firstRow'>
          <div className='col-sm'>
            <h1 className='title'>About</h1>
          </div>
        </div>
        <div className='row'>
          <div className='col-sm'>
            <p className='description'>
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
          <div className='col-sm profilePic'>
            <img src={profile} alt="profile" />
          </div>
        </div>
        {/* <div id="AboutTitle">
          <h1>About</h1>
        </div>
        <div id="InfoTitle">
          <p>
            I'm a 20 year old boy interested in always keep learning and improving myself to the next level. I like programming and I'm expecting to aquire
            some experience soon and begin this adventure in the world of developing. Im a front-end React developer and also a Back-end developer, 
            best known as a Full Stack Developer
          </p>
        </div>
        <div id="Image">
          <img src={profile} alt="profile" />
        </div> */}
      </div>
    )
  }
}