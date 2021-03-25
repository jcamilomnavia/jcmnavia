import React, {Component} from 'react'
import './Portfolio.css'
import Item from './Items/Item'

import betlab from '../../assets/img/betlab.png';
import goggles from '../../assets/img/goggles.png';
import lar from '../../assets/img/lar.png';



export default class Portfolio extends Component {
  render () {
    return (
      <div id='portfolio' className="portfolioContent">

        <div className='firstRow'>
          <div className='title'>
            <h1>Portfolio</h1>
          </div>
        </div>

        <div className='projectItemsContainer'>
          <div className="projectItems">
            <Item
              img={lar}
              link='https://larproyectos-app-test.netlify.com/'
              name='Lar Proyectos APP'
              description={`A data finance data management developed for a startUp. Made in react and GraphQL.For test use user permi@permi.com and password permi`}
            />
            <Item
              img={goggles}
              link='https://googles-jcmn.netlify.com/'
              name='Goggles'
              description='An e-commerce made of pure HTML, CSS and JS app. All the views are fully responsive. The api doesnt work for everyone due to privacy of the owner'
            />
            <Item
              img={betlab}
              link='https://betlab.netlify.com/'
              name='betlab'
              description='A streaming application made in React that uses the twitch api for fetch the top 50 streamings'
            />
            </div>
            
            <div className="projectItems">

          </div>
        </div>

      </div>
    )
  }
}