import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import Home from '../Home/Home'
import About from '../About/About'
import Navbar from '../Navbar/Navbar'
import Skills from '../Skills/Skills'

export default class App extends Component {
  render () {
    return (
      <div className="App">
        <Navbar />
        <a name='home'><Home id='home' /></a>
        <a name='about'><About /></a>
        <a name='skills'><Skills /></a>
      </div>
    )
  }
}
