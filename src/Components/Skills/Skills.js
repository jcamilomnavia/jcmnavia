import React, { Component } from 'react'
import './Skills.css'

import awsLogo from '../../assets/svg/aws.svg'
import gitLogo from '../../assets/svg/git.svg'
import graphqlLogo from '../../assets/svg/graphql.png'
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
      <div className="skillsContent">
        <div className='firstRow'>
          <div className='title'>
            <h1 className=''>Skills</h1>
          </div>
        </div>

        <section>
          <h2>Programming Languages</h2>
          <ul>
            <li>
            Javascript
            </li>
            <li>
              Java
            </li>
            <li>
              Python
            </li>
            <li>
              PHP
            </li>
            <li>
              C++
            </li>
          </ul>
        </section>

        <section>
          <h2>Techonologies</h2>
          <div className='skillsImageContainer'>
            <div class="skillsImage">
              <img src={reactLogo} alt='node' />
              <img src={nodeLogo} alt='node' />
              <img src={mongoLogo} alt='mongo' />
              <img src={graphqlLogo} alt='graphql' />
              <img src={dockerLogo} alt='docker' />
            </div>
          </div>
          <div className='skillsImageContainer'>
            <div class="skillsImage">
              <img src={gitLogo} alt='docker' />
              <img src={awsLogo} alt='docker' />
              <img src={linuxLogo} alt='docker' />
              <img src={htmlLogo} alt='node' />
              <img src={cssLogo} alt='node' />
            </div>
          </div>
        </section>
        
        
      </div>
    )
  }
}