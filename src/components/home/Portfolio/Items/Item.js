import React, { Component } from 'react'
import './Item.css'

export default class Item extends Component {
  constructor(props) {
    super()
    this.state = {
      img: props.img,
      name: props.name,
      link: props.link,
      description: props.description,
    }
  }

  render() {
    return (
      // <div className='projects'>
      <div className="contentProject">
        <p className="nameProject">{this.state.name}</p>
        <a href={this.state.link} target="_blank" rel="noopener noreferrer">
          <img className="projectImg" src={this.state.img} alt="project" />
        </a>
        <div className="superDescription">
          <p className="descriptionProject">{this.state.description}</p>
        </div>
      </div>
      // </div>
    )
  }
}
