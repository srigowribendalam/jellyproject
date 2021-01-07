import { React, Component } from 'react';
import { Link } from 'react-router-dom';
import { Form,Button } from "react-bootstrap";
import contact from './images/contact.png';
import jellylogo from './images/jellylogo.svg';
import { IoIosMail } from "react-icons/io";
import { FaPhoneAlt, FaInstagramSquare, FaYoutubeSquare } from "react-icons/fa";
import { ImLocation } from "react-icons/im";
import { AiFillTwitterCircle } from "react-icons/ai";
import { RiFacebookCircleFill } from "react-icons/ri";
import './Contact.css';
import NavBar from './NavBar';


export default class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            message: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    handleSubmit(event) {
        event.preventDefault();
        if (this.state.name.length > 0 && this.state.email.length > 0 && this.state.message.length > 0) {
            alert("Submitted Successfully!");
            console.log("Submitted Successfully!");
        } else {
            alert("Please Enter the Details");
            console.log("Please Enter the Details");
        }
    }
    render() {
        return (
            <div>
                <NavBar/>
                <center className="mt-5">
                    <img src={contact} className="contact-card" />
                    <h1 className="contactleft">CONTACT</h1>
                </center>
                <div className="contactcard">
                    <div className="contact-text">
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
                    <div className="contact-bottom-text">
                        <img src={jellylogo} className="contact-bottom-img" />
                        <p className="contact-bottomtext">JellyKi is a service which has made all your needs at<br />
              one place.JellyKi is a service which has made all<br /> your needs at
              one place.JellyKi is a service which has made <br />all your needs at
              one place.  </p>
                        <div className="contact-icons">
                            <RiFacebookCircleFill size={30} />
                            <AiFillTwitterCircle size={30} />
                            <FaInstagramSquare size={30} style={{ borderRadius: "100%" }} />
                            <FaYoutubeSquare size={30} style={{ borderRadius: "100%" }} />
                        </div>
                        <div className="box">
                            <div className="input-box"><br />
                                <h4><b>SAY SOMETHING</b></h4><br />
                                <Form onSubmit={this.handleSubmit}>
                                    <input type="text" placeholder="Your Name" value={this.state.name} name="name"
                                        onChange={this.onChange} />
                                    <input type="email" placeholder="Email Address" value={this.state.email} name="email"
                                        onChange={this.onChange} />
                                    <textarea type="text" placeholder="Message" value={this.state.message} name="message"
                                        onChange={this.onChange} />
                                        <center>
                                    <Button className="aboutbutton mr-4"><b>SEND</b></Button>
                                    </center><br /><br />
                                </Form>
                            </div>
                        </div>
                        <div className="mr-auto contact-links" >
                            <Link to="/" className="navbar-brand ml-3">
                                <h6><b className="text1">HOME</b></h6>
                            </Link>
                            <Link className="navbar-brand  ml-5 mr-5" href="#">
                                <h6><b className="text1">SERVICES</b></h6>
                            </Link>
                            <Link className="navbar-brand ml-5" href="#">
                                <h6><b className="text1">Blog</b></h6>
                            </Link>
                            <Link to="/aboutus" className="navbar-brand contact-link">
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
}

