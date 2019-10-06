import React, { Component } from 'react'
import './Skills.css'

import awsLogo from '../../assets/svg/aws.svg'
import gitLogo from '../../assets/svg/git.svg'
import cssLogo from '../../assets/svg/css.svg'
import htmlLogo from '../../assets/svg/html.svg'
import jsLogo from '../../assets/svg/js.svg'
import linuxLogo from '../../assets/svg/linux.svg'
import dockerLogo from '../../assets/svg/docker.svg'
import nodeLogo from '../../assets/svg/nodejs.svg'
import reactLogo from '../../assets/svg/react.svg'
import mongoLogo from '../../assets/svg/mongo.svg'
import bootstrapLogo from '../../assets/svg/bootstrap.svg'


export default class Skills extends Component {
  render() {
    return (
      <div className="gridAbout">
        <div className='row firstRow'>
          <div className='col-sm'>
            <h1 className='title'>Skills</h1>
          </div>
        </div>
        <div className='row'>
          <div id='skillsContainer' className='col-sm'>
            <p className='description'>
            <div className='imageAnimation'>
              <img src={nodeLogo} alt='node' />
              <img src={dockerLogo} alt='docker' />
              <img src={mongoLogo} alt='mongo' />
              <img src={jsLogo} alt='node' />
              <img  src={gitLogo} alt='docker' />
            </div>
            <div className='imageAnimationRigth'>
              <img src={reactLogo} alt='node' />
              <img src={htmlLogo} alt='node' />
              <img src={cssLogo} alt='node' />
              <img src={bootstrapLogo} alt='docker' />
              <img src={awsLogo} alt='docker' />
              <img src={linuxLogo} alt='docker' />
            </div>
              
            </p>
          </div>
        </div>
      </div>
    )
  }
}