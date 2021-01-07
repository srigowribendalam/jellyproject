import { React, useState } from 'react';
import { Card, Col, Row, Button, Accordion } from "react-bootstrap";
import NavBar from './NavBar';
import { FaqData } from './FaqData';
import { Link } from 'react-router-dom';
import aboutus01 from './images/aboutus01.jpeg';
import progressbar from './images/progressbar.svg';
import Footer from './Footer';
import './Faq.css';

export default function FAQ() {

    return (
        <div>
            <NavBar />
            <h2 className="faq-top"><b>FAQ</b></h2>
            <Row className="faq-left" >
                <Col xs={12} md={6}>
                    <h3 className="faq-fontsize"><b>Frequently asked questions</b></h3>
                    <img src={progressbar} />
                    <p>When you receive payment for a reservation, we call that payment to you a 'payout'.
                    Our secure payment system supports several payout methods, which can be set up
                    below.<br />Go to FAQ.
                    </p>
                    <Accordion defaultActiveKey="1">{FaqData.map((data, idx) =>
                        <Card>
                            <Accordion.Toggle as={Card.Header} style={{ color: "#4FD84F" }} eventKey={data.number}>
                                {data.question}<span style={{ color: "#4FD84F" }}><i className="fa fa-angle-right angleright" aria-hidden="true"></i></span>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey={data.number}>
                                <Card.Body>{data.answer}</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    )}
                    </Accordion><br />
                    <Link to='/contact'>
                      <Button className='signupbutton'><b>Contact us</b></Button>
                    </Link><br /><br />
                </Col>
                <Col xs={12} md={6} >
                <img src={aboutus01} className="faq-image" />
                </Col>
            </Row><br />
            <Footer />
        </div>
    );
};

