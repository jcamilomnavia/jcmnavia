import React, { Component } from 'react'
import './Skills.css'

import awsLogo from '../../assets/svg/aws.svg'
import gitLogo from '../../assets/svg/git.svg'
import graphqlLogo from '../../assets/svg/graphql.svg'
import cssLogo from '../../assets/svg/css.svg'
import htmlLogo from '../../assets/svg/html.svg'
import linuxLogo from '../../assets/svg/linux.svg'
import dockerLogo from '../../assets/svg/docker.svg'
import nodeLogo from '../../assets/svg/nodejs.svg'
import reactLogo from '../../assets/svg/react.svg'
import mongoLogo from '../../assets/svg/mongo.svg'
// import jsLogo from '../../assets/svg/js.svg'
// import bootstrapLogo from '../../assets/svg/bootstrap.svg'


export default class Skills extends Component {
  render() {
    return (
      <div id='skills' className="skillsContent">
        <div className='firstRow'>
          <div className='title'>
            <h1 className=''>Skills</h1>
          </div>
        </div>

        <section>
          <h2 className='subtitle'>Programming Languages</h2>
          <div className='dotContainer'>
            <div className='dot'>
              <div className='dotText'>
                <span className='dotTitle' >
                JavaScript 
                </span>
                <br></br>
                <span className='dotDescription'>
                (2 Years)
                </span>
              </div>
            </div>
            <div className='dot'>
              <div className='dotText'>
                <span className='dotTitle' >
                Java 
                </span>
                <br></br>
                <span className='dotDescription'>
                (3 Years)
                </span>
              </div>
            </div>
            <div className='dot'>
              <div className='dotText'>
                <span className='dotTitle' >
                Python
                <br></br>
                PHP
                <br></br>
                C++  
                </span>
                <br></br>
                <span className='dotDescription'>
                (6 months)
                </span>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className='subtitle'>Techonologies</h2>
          <div className='skillsImageContainer'>
            <div className="skillsImage">
              <img src={reactLogo} alt='node' title='ReactJS' />
              <img src={nodeLogo} alt='node' title='Node.JS' />
              <img src={mongoLogo} alt='mongo' title='MongoDB' />
              <img src={graphqlLogo} alt='Grapql' title='GraphQl' />
              <img src={dockerLogo} alt='Docker' title='Docker' />
            </div>
          </div>
          <div className='skillsImageContainer'>
            <div className="skillsImage">
              <img src={gitLogo} alt='Git' title='Git'/>
              <img src={awsLogo} alt='AWS' title='AWS' />
              <img src={linuxLogo} alt='Linux' title='Linux'/>
              <img src={htmlLogo} alt='HTML' title='HTML'/>
              <img src={cssLogo} alt='CSS' title='CSS' />
            </div>
          </div>
        </section>
        
        
      </div>
    )
  }
}