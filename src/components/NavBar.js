import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Navbar, Image, Nav, Dropdown, ProgressBar } from "react-bootstrap";
import treewhite from './images/tree-white.png';
import Services from './Services';
import jelly from './images/jelly.jpg';
import { BiChevronDown } from "react-icons/bi";

export default function NavBar() {
  return (
    <div>
    <nav className="navbar navbar-dark bg-white mb-3" style={{height:"60px"}}>
    <a className="navbar-brand" href="#">
    <img
         alt=""
         style={{marginLeft:"80px"}}
           src={treewhite}
              className="d-inline-block align-top "
            />{' '}
      </a>
      <div className="ml-auto" style={{marginTop:"-50px"}}>
      <Link to="/" className="navbar-brand mr-3 ml-3">
        <h6><b className="text">Home</b></h6>
      </Link>
      <Link className="navbar-brand mr-3 ml-3" href="#">
        <h6><b className="text">Our Services <BiChevronDown/></b></h6>
      </Link>
      <Link className="navbar-brand mr-3 ml-3" href="#">
        <h6><b className="text">Blog</b></h6>
      </Link>
      <Link to="/aboutus" className="navbar-brand mr-3 ml-3">
        <h6><b className="text">About us</b></h6>
      </Link>
      <Link to="/contact" className="navbar-brand mr-3 ml-3">
        <h6><b className="text">Contact</b></h6>
      </Link>
         <a className="navbar-brand mr-2 ml-4" href="#">
      <Button className="button1">
        <h6><b style={{color:"white"}}>Jellyit now</b></h6>
     </Button> </a>
     <a className="navbar-brand mr-4 ml-2">
      <Button className="login-button">
        <h6><b style={{color:"white"}}>Login</b></h6>
        </Button></a>
      </div>
    </nav>
    </div>
  )
}