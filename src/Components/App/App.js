import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import Home from '../Home/Home'
import About from '../About/About'
import Navbar from '../Navbar/Navbar'
import Skills from '../Skills/Skills'
import Education from '../Education/Education'
import Contact from '../Contact/Contact'

export default class App extends Component {
  render () {
    return (
      <div className="App">
        <Navbar />
        <Home id='home' />
        <About id='about' />
        <Skills id='skills' />
        <Education />
        <Contact />
      </div>
    )
  }
}
