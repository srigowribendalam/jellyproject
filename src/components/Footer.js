import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import { Form, Card, Button, ProgressBar } from 'react-bootstrap';
import { FaFacebook, FaInstagramSquare, FaYoutubeSquare } from "react-icons/fa";
import tree from './images/tree.png';
import { AiFillTwitterCircle } from "react-icons/ai";
import { RiFacebookCircleFill } from "react-icons/ri";

export default function Footer() {
    return (
        <div class="card" style={{ backgroundColor: "#BDA083" }} >
            <div class="container-fluid bg-grey" >
                <div class="row">
                    <div class="col-md-4 text-white mt-5" style={{marginLeft:"110px"}}>
                    <img
         alt=""
           src={tree}
           style={{backGroundColor:"#BDA083"}}
              className="d-inline-block align-top "
            />
                        <div ><br/><br/>
                            <RiFacebookCircleFill size={30} className="mr-2"/>
                            <AiFillTwitterCircle size={30} className="mr-2" />
                            <FaInstagramSquare size={30} className="mr-2" style={{borderRadius:"100%"}} />
                            <FaYoutubeSquare size={30} style={{borderRadius:"100%"}}/>
                        </div>
                    </div>
                    <div class="col-md-2 text-white mt-5" style={{marginLeft:"-60px"}}>
                        <p><b>Services</b></p>
                        <h6>Management</h6>
                        <h6>Art</h6>
                        <h6>Science</h6>
                        <h6>Technology</h6>
                        <h6>Engineering</h6>
                        <h6>Research</h6>
                    </div>
                    <div class="col-md-2 text-white mt-5" >
                        <p><b>Support</b></p>
                        <h6>FAQ's</h6>
                        <h6>Contact</h6>
                        <h6>About us</h6>
                        <Link to="/privacypolicy" style={{color:"white"}}>
                        <h6>Privacy Policy</h6></Link>
                        <Link to="/terms" style={{color:"white"}}>
                        <h6>Terms and Conditions</h6></Link>
                        <h6>How it Works?</h6>
                    </div>
                    <div class="col-md-3  text-white"  style={{marginRight:"-30px",marginTop:"110px"}}>
                        <p><b>Tel </b>+91 123456789</p>
                        <p><b>Hotline </b>+91 123456789</p>
                        <p><b>Support </b>support@jellyki.com</p>
                    </div>
                </div>
            </div><br />
            <hr color="white" style={{width:"1010px",marginLeft:"120px"}}/>
            <div className="row footer" >
            <div className="col-md-6 text-white mt-3">
           
                        <p><b>JELLY KI</b></p>
                        <h6>JellyKi is a service which has made<br/>
                        all your needsat one place.</h6>
                       
                    </div>
                    <div class="col-md-6  text-white mt-3" style={{marginLeft:"-20px"}}>
                        <p><b>Address</b></p>
                        <h6>21 Ananya Chaitanya Layout, Seegahalli Kadugodi Post,<br/>
                        Banglore 560037</h6> 
                    </div>
                    </div> <br/><br/>
                    <div style={{textAlign:"center",color:"white"}}>
                       <b> &#169; JellyKi | All rights reserved 2020</b>
                    </div><br/>
        </div>
    )
}