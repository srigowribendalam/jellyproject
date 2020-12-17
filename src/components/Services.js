import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Navbar, Nav,Card, Row,Col, ProgressBar, Container } from "react-bootstrap";
import Management from './images/Management.jpg';
import Art from './images/Art.jpg';
import Technology from './images/Technology.jpg';
import Science from './images/Science.jpg';
import Engineering from './images/Engineering.jpg';
import Research from './images/Research.jpg';
import Footer from './Footer';


export default function Services() {
    return (
        <div>
        <Container className="top">
         <Row>
            <Col  sm={6}>
                <h2>Knowledge of</h2>
                <h2 className="textcolor">Management</h2>
                <ProgressBar className="progress-bar1" />
                <b>Management includes the activities of setting the strategy of<br />an organization and coordinating the efforts of its employees<br />
      (or of volunteers) to acomplish its objectives through the <br />application of available resources, such  as financial, natural,<br />technological, and human resources.</b><br/><br/>
                <Button className="button1">
                    <h6><b>Learn more</b></h6>
                </Button>
            </Col>
            <Col sm={6}>
                <img src={Management} className="imagewidth"/>
            </Col>
        </Row>
        </Container>
        <Container className="top">
        <Row>
        <Col sm={6}>
               <img src={Art}  className="imagewidth2"/>
           </Col>
           <Col  sm={6}>
               <div className="space">
               <h2>Knowledge of</h2>
               <h2 className="textcolor">Art</h2>
               <ProgressBar className="progress-bar1" />
               <b>Art is a diverse range of human activities involving<br />the creation of visual, auditory or performing<br />
     artifacts (artworks) which express the <br />creator's imagination, conceptual ideas,<br />or technical skill, intended to be<br/> appreciated primarily for their<br/>beauty or emotional power</b><br/><br/>
               <Button className="button1">
                   <h6><b>Learn more</b></h6>
               </Button>
               </div>
           </Col>
       </Row>
       </Container>
       <Container className="top">
         <Row>
            <Col  sm={6}>
                <h2>Knowledge of</h2>
                <h2 className="textcolor">Science</h2>
                <ProgressBar className="progress-bar1" />
                <b>Science (from the Latin word scientia, meaning "<br/>
                knowledge") is a systematic enterprise that builds<br/>
                and organizes knowledge in the form of testable<br/>
                explanations and predications about the universe</b><br/><br/>
                <Button className="button1">
                    <h6><b>Learn more</b></h6>
                </Button>
            </Col>
            <Col sm={6}>
                <img src={Science}  className="imagewidth"/>
            </Col>
        </Row>
        </Container>
        <Container className="top">
        <Row>
        <Col sm={6}>
               <img src={Technology} className="imagewidth1"/>
           </Col>
           <Col  sm={6}>
               <div className="space">
               <h2>Knowledge of</h2>
               <h2 className="textcolor">Technology</h2>
               <ProgressBar className="progress-bar1" />
               <b>Technology "art, skill, cunning of hand" is the sum<br />of techniques, skills, methods, and processess used<br/>in the production of goods or services or in the<br />
     accomplishment of objectives, such as <br />scientific investigation</b><br/><br/>
               <Button className="button1">
                   <h6><b>Learn more</b></h6>
               </Button>
               </div>
           </Col>
       </Row>
       </Container>
       <Container  className="top">
         <Row>
            <Col  sm={6}>
                <h2>Knowledge of</h2>
                <h2 className="textcolor">Engineering</h2>
                <ProgressBar className="progress-bar1" />
                <b> The discipline of engineering encompasses a broad<br />range of more specialized fields of engineering, each<br />
     with a more specific emphasis on particular areas of<br />applied mathematics, applied science, and <br />types of application.</b><br/><br/>
                <Button className="button1">
                    <h6><b>Learn more</b></h6>
                </Button>
            </Col>
            <Col sm={6}>
                <img src={Engineering}  className="imagewidth"/>
            </Col>
        </Row>
        </Container>
        <Container  className="top">
        <Row>
        <Col sm={6}>
               <img src={Research}  className="imagewidth1"/>
           </Col>
           <Col  sm={6}>
               <div className="space">
               <h2>Knowledge of</h2>
               <h2 className="textcolor">Research</h2>
               <ProgressBar className="progress-bar1" />
               <b>It involves the collection, organization, and analysis<br />of information to increase understanding of a<br />
     topic or issue. A research project may be<br />an expansion on past work in the field.<br />Research projects can be used to<br/>
     develop furtherknowledge on a topic,<br/>or for education.</b><br/><br/>
               <Button className="button1">
                   <h6><b>Learn more</b></h6>
               </Button>
               </div>
           </Col>
       </Row>
       </Container>
       <br/><br/>
       <Footer/>
       </div>
    );
};

