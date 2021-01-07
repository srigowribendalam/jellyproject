import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import { Form, Col, Row, Card, Button, ProgressBar } from 'react-bootstrap';
import { FaFacebook, FaInstagramSquare, FaYoutubeSquare } from "react-icons/fa";
import jellyicon from './images/jellylogo.svg';
import { AiFillTwitterCircle } from "react-icons/ai";
import { RiFacebookCircleFill } from "react-icons/ri";
import './Footer.css';

export default function Footer() {
    return (
        <Card className="footerBackground">
            <Row>
                <Col sm={4} className="text-white footer-top footer-col2">
                    <img src={jellyicon} className="footer-icon" />
                    <div className="text-white footer-fa-icon"><br />
                    <h6>JellyKi is a service which has made<br />
                        all your needsat one place.</h6>
                    </div>
                </Col>
                <Col sm={2} className="text-white footer-col footer-top footer-text" >
                    <p><b>Offerings</b></p>
                    <h6><a href="#management" className="footer-link">Management</a></h6>
                    <h6><a href ="#art" className="footer-link">Art</a></h6>
                    <h6><a href="#science" className="footer-link">Science</a></h6>
                    <h6><a href="#technology" className="footer-link">Technology</a></h6>
                    <h6><a href="#engineering" className="footer-link">Engineering</a></h6>
                    <h6><a href="#research" className="footer-link">Research</a></h6>
                    <h6><a href="#you" className="footer-link">You</a></h6>
                </Col>
                <Col sm={2} className="text-white footer-top footer-text"  >
                    <p><b>Support</b></p>
                    <Link to="/faq" className="footer-link" >
                        <h6>FAQ's</h6></Link>
                    <Link to="/contact" className="footer-link">
                        <h6>Contact</h6></Link>
                    <Link to="/aboutus" className="footer-link">
                        <h6>About us</h6></Link>
                    <Link to="/privacypolicy" className="footer-link">
                        <h6>Privacy Policy</h6></Link>
                    <Link to="/terms" className="footer-link">
                        <h6>Terms and Conditions</h6></Link>
                    <h6>How it Works?</h6>
                    <h6>Pricing</h6>
                </Col>
                <Col sm={3} className="text-white footer-col1 footer-text">
                </Col>
            </Row><br />
            <hr color="white" />
            <Row className="footer" >
                <Col xs={12} md={6} className="text-white footer-top1">
                <p><b>Support </b></p>
                <p><b>support@jellyki.com</b></p>
                </Col>
                <Col xs={12} md={6} className="text-white footer-top1">
                    <p><b>Address</b></p>
                    <h6>21 Ananya Chaitanya Layout, Seegahalli Kadugodi Post,<br />
                        Banglore 560037</h6>
                </Col>
            </Row><br /><br />
            <div className="bottom-footer">
                <b> &#169; JellyKi | All rights reserved 2021</b>
            </div><br />
        </Card>
    )
}