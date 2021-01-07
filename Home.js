import { React, useEffect } from 'react';
import { Button } from "react-bootstrap";
import NavBar from './NavBar';
import Services from './Services';
import landingimage from './images/landing-image.jpg';
import Progressbar from './images/progressbrown.svg';
import backgroundimage from './images/background-image1.svg';
import './Home.css';
import Aos from 'aos';
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    Aos.init({
      duration: 1500,
    });
    Aos.refresh();
  }, []);
  return (
    <div>
      <NavBar />
      <div>
        <img data-aos="zoom-out" src={landingimage} className="homeimage" />
        <div className="imageleft">
          <b className="mainheading">JellyKi</b><br />
          <img src={Progressbar} /><br />
          <h3 className="subheading">Plant your tree of knowledge</h3>
          <p>JellyKi is a service which has made all your needs<br /> at one place</p>
          <Button className="homebutton">
            <h6><b>Jellyit now</b></h6>
          </Button>
        </div>
        <Services />
      </div><br />
    </div>
  );
};

