import React, {Component} from 'react'
import './Navbar.css'

export default class Navbar extends Component {
  state = { hidden: 0 };

  constructor(props) {
    super(props);

    // Bind the function to this component, so it has access to this.state
    this.handleScroll = this.handleScroll.bind(this);
  }
  componentDidMount() {
    // When this component mounts, begin listening for scroll changes
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    // If this component is unmounted, stop listening
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(e) {
    let navHeigth = window.innerHeight 
    let currentScrollTop = window.pageYOffset

    if (currentScrollTop >= navHeigth) {
      this.setState({ hidden: 1 })
    } else if (currentScrollTop === 0){
      this.setState({ hidden: (0) })
    } else if (currentScrollTop < (navHeigth)){
      this.setState({ hidden: (currentScrollTop/navHeigth) })
    }
  }

  toggleNavBar() {
    let navbar = document.getElementById('nav-icon3')
    let dropdown = document.getElementById('mobileNavContent')
    if (navbar.className.includes('open')){
      navbar.classList.remove('open')
      dropdown.classList.remove('show')
    } else {
      navbar.classList.add('open')
      dropdown.classList.add('show')
    }
  }

  render() {
    return (
      <div>
        <nav style={{opacity: this.state.hidden}} className="navbar navbar-dark bg-primary desktopNav">
          {/* <span className="navbar-brand">Navbar</span> */}
          <i class="fa fa-code fa-2x logoNav"></i>
          <div className='navOptions'>
            {/* eslint-disable-next-line */}
            <span><a href='index.html#home' >Home</a></span>
              {/* eslint-disable-next-line */}
              <span><a href='index.html#about' >About</a></span>
              {/* eslint-disable-next-line */}
              <span><a href='index.html#skills' >Skills</a></span>
              {/* eslint-disable-next-line */}
              <span><a href='index.html#education' >Education</a></span>
              {/* eslint-disable-next-line */}
              <span><a href='index.html#contact' >Contact</a></span>
          </div>
          
          <ul className='persoNavIcon'>
            <li className='nav-item'>
              <a className="nav-link" href='https://github.com/jcamilomnavia/'>
                <i className='fa fa-github fa-2x iconNavBar' />
              </a>
            </li>
            <li className='nav-item'>
              <a className="nav-link" href='https://www.instagram.com/camilonavia99/'>
                <i className='fa fa-instagram fa-2x iconNavBar' />
              </a>
            </li>
            <li className='nav-item'>
              <a className="nav-link" href='https://www.linkedin.com/in/juan-camilo-marín-navia/'>
                <i className='fa fa-linkedin fa-2x iconNavBar' />
              </a>
            </li>
          </ul>
        </nav>

        <div>
          <nav style={{ opacity: this.state.hidden }} className="navbar navbar-dark bg-primary mobileNav">
            <i class="fa fa-code fa-2x logoNav"></i>
            <div id="nav-icon3" onClick={this.toggleNavBar}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </nav>
          <div id='mobileNavContent'>
            <div className='mobileContent'>
              {/* eslint-disable-next-line */}
              <span><a href='index.html#home' >Home</a></span>
              {/* eslint-disable-next-line */}
              <span><a href='index.html#about' >About</a></span>
              {/* eslint-disable-next-line */}
              <span><a href='index.html#skills' >Skills</a></span>
              {/* eslint-disable-next-line */}
              <span><a href='index.html#education' >Education</a></span>
              {/* eslint-disable-next-line */}
              <span><a href='index.html#contact' >Contact</a></span>
            </div>
          </div>
        </div>
        
      </div>
    )
  }
}