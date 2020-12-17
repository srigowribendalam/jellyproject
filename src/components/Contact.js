import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, Col, Image, Nav, Dropdown, ProgressBar } from "react-bootstrap";
import contact from './images/contact.png';
import tree from './images/tree.png';
import { IoIosMail } from "react-icons/io";
import { FaPhoneAlt, FaInstagramSquare, FaYoutubeSquare } from "react-icons/fa";
import { ImLocation } from "react-icons/im";
import { AiFillTwitterCircle } from "react-icons/ai";
import { RiFacebookCircleFill } from "react-icons/ri";


export default function Contact() {
    return (
        <div>
            <center>
                <img src={contact} style={{ width: "90%", height: "800px", marginTop: "40px" }} />
                <h1 className="contactleft">CONTACT</h1>
            </center>
            <div className="contactcard">
                <div style={{ marginTop: "40px", marginLeft: "70px" }}>
                    <h4><b>GET IN TOUCH</b></h4>
                    <p >JellyKi is a service which has made all your needs at<br />
              one place.JellyKi is a service which has made all<br /> your needs at
              one place.JellyKi is a service which has made <br />all your needs at
              one place.  </p>
                    <p className="textcolor"><IoIosMail /><span className="contacttext"> Support@jellyki.com</span></p>
                    <p className="textcolor"><FaPhoneAlt /><span className="contacttext">+910123456789</span></p>
                    <p className="textcolor"><ImLocation /><span className="contacttext">21 Ananya Chaitanya Layout, Seegahalli Kadugodi Post,<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Banglore 560037</span></p>
                </div>
                <div style={{ width: "900px", height: "320px", backgroundColor: "#BDA083" }}>
                    <img src={tree} style={{ marginLeft: "60px", marginTop: "70px" }} />
                    <p style={{ marginTop: "-120px", marginLeft: "210px", color: "white" }}>JellyKi is a service which has made all your needs at<br />
              one place.JellyKi is a service which has made all<br /> your needs at
              one place.JellyKi is a service which has made <br />all your needs at
              one place.  </p>
                    <div style={{ marginTop: "-80px", marginLeft: "650px", color: "white" }}>
                        <RiFacebookCircleFill size={30} />
                        <AiFillTwitterCircle size={30} />
                        <FaInstagramSquare size={30} style={{ borderRadius: "100%" }} />
                        <FaYoutubeSquare size={30} style={{ borderRadius: "100%" }} />
                    </div>
                    <div className="box">
                        <div style={{marginLeft:"35px"}}><br/>
                    <h4><b>SAY SOMETHING</b></h4><br/>
                    <input type="text" placeholder="Your Name" />
                    <input type="text"placeholder="Email Address"  />
                    <textarea type="text" placeholder="Message"  />
                    <button className="subbutton"><b>SEND</b></button>
                    </div>
                    </div>
                    <div className="mr-auto" style={{ marginTop: "200px",marginLeft:"80px" }}>
                        <Link to="/" className="navbar-brand ml-3">
                            <h6><b className="text1">HOME</b></h6>
                        </Link>
                        <Link className="navbar-brand  ml-5 mr-5" href="#">
                            <h6><b className="text1">SERVICES</b></h6>
                        </Link>
                        <Link className="navbar-brand ml-5" href="#">
                            <h6><b className="text1">Blog</b></h6>
                        </Link>
                        <Link to="/aboutus" className="navbar-brand" style={{marginLeft:"220px"}}>
                            <h6><b className="text1">About Us</b></h6>
                        </Link>
                        <Link to="/contact" className="navbar-brand ml-5">
                            <h6><b className="text1">JOIN US</b></h6>
                        </Link>
                    </div>
                </div>
            </div>


        </div>

    );
};

