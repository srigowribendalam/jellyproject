import { React,useEffect } from 'react';
import { Button, Row, Col, Container, Card } from "react-bootstrap";
import NavBar from './NavBar';
import aboutus from './images/aboutus.PNG';
import aboutus01 from './images/aboutus01.jpeg';
import icon01 from './images/icon-01.svg';
import icon02 from './images/icon-02.svg';
import icon03 from './images/icon-03.svg';
import icon04 from './images/icon-04.svg';
import Progressbar from './images/progressbrown.svg';
import Footer from './Footer';
import AboutCarousel from './AboutCarousel';
import { Data } from './Data';
import './Aboutus.css';
import WordCloud from './WordCloud';
import FabServices from './FabServices';
import {SettingsData} from './SettingsData';
import Aos from 'aos';
import "aos/dist/aos.css";

export default function Aboutus() {
  useEffect(() => {
    Aos.init({
        duration: 2000,
    });
}, []);
  return (
    <div>
      <NavBar />
      <img src={aboutus} className="about-image" />
      <div className="aboutus-textalign">
        <b>About Us</b><br />
        <img src={Progressbar} /><br />
      </div>
      <br />
      <Container>
        <Row data-aos="fade-up">
          <Col xs={12} sm={12} md={6} >
            <h1 className="about-fontsize">We are a creative</h1>
            <h1 className="textcolor about-fontsize">Management</h1><br />
            <p style={{ lineHeight: "35px" }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem
            Ipsum has been the industry's standard dummy text ever since the 1500s, when an
            unknown printer took a galley of type and scrambled it to make a type specimen book.
            It has survived not only five centuries, but also the leap into electronic typesetting, remaining
            essentially unchanged. It has survived not only five centuries, but also the leap into electronic typesetting,
                remaining essentially unchanged.</p><br />
          </Col>
          <Col xs={12} sm={12} md={6}>
            <img src={aboutus01} className="management-image" />
          </Col>
        </Row>
      </Container><br /><br /><br />
      <div data-aos="fade-up">
        <Row className="marginLeft">
          <Col md={4} xs={12} sm={12}>
            <h1 className="about-fontsize">Trending <span className="textcolor">#Hashtags</span></h1>
            <h4 className="about-fontsize-xs">Plant your tree of knowledge</h4>
            <p>JellyKi is a service which has made all your needs<br /> at one place</p>
            <Button className="jellyit-btn">
              <h6><b>Jellyit now</b></h6>
            </Button>
          </Col>
          <Col md={8} xs={12} sm={12} className="mb-2" style={{height:"34rem"}}>
            < WordCloud />
          </Col>
        </Row>
        <h1 data-aos="fade-up" className="carousel-heading about-fontsize text-black">Top <span className="textcolor">publication houses</span></h1><br />
      </div><br />
      <div data-aos="fade-up">
        <AboutCarousel />
      </div>
      <div data-aos="fade-up">
        <h1 className="about-fontsize trends">Jelly <span className="textcolor">Trends</span></h1><br />
        <Container>
          <Row>{SettingsData.map((data,id)=>
            <Col xs={12} sm={12} md={3}>
                <Card className="about-card"><br />
                  <img src={icon01} className="settings-icon"/>
                  <h1>{data.number}</h1>
                  <b className="settings-icon-textcolor">{data.text}</b><br/>
                </Card><br/>
            </Col>
            )}
            {/* <Col xs={12} sm={12} md={3}>
              <Card className="element"><br />
                  <img src={icon02} className="settings-icon"/>
                  <h1>5K+</h1>
                  <b className="settings-icon-textcolor">BLOGS</b><br/>
                </Card><br/>
            </Col>
            <Col xs={12} sm={12} md={3}>
                <Card className="element"><br />
                  <img src={icon03} className="settings-icon"/>
                  <h1>100+</h1>
                  <b className="settings-icon-textcolor">PUBLISHERS</b><br/>
                </Card><br/>
            </Col>
            <Col xs={12} sm={12} md={3}>
                <Card className="element"><br />
                  <img src={icon04} className="settings-icon"/>
                  <h1>20K+</h1>
                  <b className="settings-icon-textcolor">JELLYKI VISITS</b><br/>
                </Card><br/>
            </Col> */}
          </Row>
        </Container>
      </div><br /><br />
     <FabServices />
      <Footer />
    </div>
  );
};

