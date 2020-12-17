import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Navbar, Image, Nav, Dropdown, ProgressBar } from "react-bootstrap";
import NavBar from './NavBar';
import Services from './Services';
import jelly from './images/jelly.jpg';

export default function Home() {
  return (
    <div>
  <NavBar />
    <div>
      <div >
      <img src={jelly} style={{width:"100%",marginTop:"-100px"}}/>
      <div className="imageleft">
      <b style={{ color:"#4FD84F",fontSize:"60px"}}>JellyKi</b>
      <ProgressBar  className="progress-bar" />
      <h3>Plant your tree of knowledge</h3>
      <p>JellyKi is a service which has made all your needs<br/> at one place</p>
      <Button className="button1">
        <h6><b>Jellyit now</b></h6>
     </Button>
     </div>
    </div>
    <br/>
    </div>
    <Services/>
  </div>

  );
};

