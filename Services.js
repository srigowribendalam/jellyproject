import { React, Component } from 'react';
import { Button, Row, Col, Container } from "react-bootstrap";
import management from './images/management.png';
import art from './images/art.png';
import science from './images/science.png';
import technology from './images/technology.png';
import engineering from './images/engineering.png';
import research from './images/research.png';
import knowledge from './images/7.png';
import Footer from './Footer';
import Progressbar from './images/progressbrown.svg';
import './Services.css';
import Aos from 'aos';
import "aos/dist/aos.css";

export default class Service extends Component {

    componentDidMount() {
        Aos.init({
          duration : 3000
        });
      }
      
render(){
    return (
        <div >
            <Container id="management">
                <Row data-aos="fade-up" className="service-top ">
                    <Col md={6} xs={12}  >
                        <h2>Knowledge of</h2>
                        <h2 className="textcolor">Management</h2>
                        <img src={Progressbar} /><br />
                        <b>Management includes the activities of setting the strategy of an organization and coordinating the efforts of its employees
                        (or of volunteers) to acomplish its objectives through the application of available resources, such  as financial, natural, technological, and human resources.</b><br /><br />
                        <Button className="homebutton">
                            <h6><b>Read more</b></h6>
                        </Button>
                    </Col>
                    <Col md={6} xs={12} className="image-top">
                        <img src={management} className="imagewidth" />
                    </Col>
                </Row >
            </Container>
            <Container id="art">
                <Row data-aos="fade-up" className="service-top">
                    <Col md={6} xs={12} >
                        <img src={art} className="imagewidth" />
                    </Col>
                    <Col md={6} xs={12}  >
                        <h2>Knowledge of</h2>
                        <h2 className="textcolor">Art</h2>
                        <img src={Progressbar} /><br />
                        <b>Art is a diverse range of human activities involving the creation of visual, auditory or performing
                        artifacts (artworks) which express the creator's imagination, conceptual ideas, or technical skill, intended to be appreciated primarily for their beauty or emotional power</b><br /><br />
                        <Button className="homebutton">
                            <h6><b>Read more</b></h6>
                        </Button>
                    </Col>
                </Row>
            </Container>
            <Container id="science">
                <Row data-aos="fade-up" className="service-top">
                    <Col md={6} xs={12}>
                        <h2>Knowledge of</h2>
                        <h2 className="textcolor">Science</h2>
                        <img src={Progressbar} /><br />
                        <b>Science (from the Latin word scientia, meaning "
                        knowledge") is a systematic enterprise that builds
                        and organizes knowledge in the form of testable
                        explanations and predications about the universe</b><br /><br />
                        <Button className="homebutton">
                            <h6><b>Read more</b></h6>
                        </Button>
                    </Col>
                    <Col md={6} xs={12} className="image-top">
                        <img src={science} className="imagewidth" />
                    </Col>
                </Row>
            </Container>
            <Container id="technology">
                <Row data-aos="fade-up" className="service-top">
                    <Col md={6} xs={12}>
                        <img src={technology} className="imagewidth" />
                    </Col>
                    <Col md={6} xs={12}>
                        <h2>Knowledge of</h2>
                        <h2 className="textcolor">Technology</h2>
                        <img src={Progressbar} /><br />
                        <b>Technology "art, skill, cunning of hand" is the sum of techniques, skills, methods, and processess used in the production of goods or services or in the
                         accomplishment of objectives, such as scientific investigation</b><br /><br />
                        <Button className="homebutton">
                            <h6><b>Read more</b></h6>
                        </Button>
                    </Col>
                </Row>
            </Container>
            <Container id="engineering">
                <Row data-aos="fade-up" className="service-top">
                    <Col md={6} xs={12}>
                        <h2>Knowledge of</h2>
                        <h2 className="textcolor">Engineering</h2>
                        <img src={Progressbar} /><br />
                        <b> The discipline of engineering encompasses a broad range of more specialized fields of engineering, each
                        with a more specific emphasis on particular areas of applied mathematics, applied science, and  types of application.</b><br /><br />
                        <Button className="homebutton">
                            <h6><b>Read more</b></h6>
                        </Button>
                    </Col>
                    <Col md={6} xs={12} className="image-top">
                        <img src={engineering} className="imagewidth" />
                    </Col>
                </Row>
            </Container>
            <Container id="research">
                <Row data-aos="fade-up" className="service-top">
                    <Col md={6} xs={12}>
                        <img src={research} className="imagewidth" />
                    </Col>
                    <Col md={6} xs={12}>
                        <h2>Knowledge of</h2>
                        <h2 className="textcolor">Research</h2>
                        <img src={Progressbar} /><br />
                        <b>It involves the collection, organization, and analysis of information to increase understanding of a
                        topic or issue. A research project may be an expansion on past work in the field. Research projects can be used to
                        develop furtherknowledge on a topic,or for education.</b><br /><br />
                        <Button className="homebutton">
                            <h6><b>Read more</b></h6>
                        </Button>
                    </Col>
                </Row>
            </Container>
            <Container id="you">
                <Row data-aos="fade-up" className="service-top">
                    <Col md={6} xs={12}  >
                        <h2>Knowledge about</h2>
                        <h2 className="textcolor">You</h2>
                        <img src={Progressbar} /><br />
                        <b>Science (from the Latin word scientia, meaning "
                        knowledge") is a systematic enterprise that builds
                        and organizes knowledge in the form of testable
                        explanations and predications about the universe</b><br /><br />
                        <Button className="homebutton">
                            <h6><b>Read more</b></h6>
                        </Button>
                    </Col>
                    <Col md={6} xs={12} className="image-top" >
                        <img src={knowledge} className="imagewidth" />
                    </Col>
                </Row>
            </Container ><br /><br />
            <Footer />
        </div>
    );
};
}

