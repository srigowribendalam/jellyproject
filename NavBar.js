import { React, Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Navbar } from "react-bootstrap";
import jellylogo from './images/jellylogo.svg';
import './NavBar.css';

export default class NavBar extends Component {
  state = { clicked: false }

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked })
  }
  render() {
    return (
      <Navbar bg="white" style={{ boxShadow: "0px 1px 15px #999 " }} className="nav-height" fixed="top">
        <nav>
          <Link to="/">
            <img className="navbar-logo" src={jellylogo} /></Link>
          <div className="menu-icon" onClick={this.handleClick}>
            <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
          </div>
          <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
            <li>
              {/* <b className='nav-links'>Our Services <span>	<i class="fa fa-angle-down" aria-hidden="true"></i></span></b> */}
              <Link to="/" className='nav-links'>Articles</Link>
              <Link to="/aboutus"  className='nav-links'>About Us</Link>
              <Link to="/contact" className='nav-links nav-marginright'>Contact</Link>
              <Button className='nav-links-jellybtn'><b>Jellyit now</b></Button>
              <Button className='nav-links-loginbtn'><b>Login</b></Button>
            </li>
          </ul>
        </nav>
      </Navbar>
    )
  }
}