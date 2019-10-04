import React, {Component} from 'react'
import './Navbar.css'

export default class Navbar extends Component {
  state = { hidden: 'none' };

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
      this.setState({ hidden: '' })
    } else if (currentScrollTop < (navHeigth/2)){
      this.setState({ hidden: 'none' })
    }
  }

  render() {
    return (
      <div>
        <nav style={{display: this.state.hidden}} className="navbar navbar-dark bg-primary personav">
          {/* <span className="navbar-brand">Navbar</span> */}
          <i class="fa fa-code fa-2x logoNav"></i>
          <div className='navOptions'>
            <span>Home</span>
            <span>About</span>
            <span>Skills</span>
            <span>Education</span>
            <span>Contact</span>
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
      </div>
    )
  }
}