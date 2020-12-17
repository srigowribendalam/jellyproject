import { React} from 'react';
import { Link } from 'react-router-dom';
import { Button,Row,Col,Container,Card, ProgressBar } from "react-bootstrap";
import NavBar from './NavBar';
import aboutus1 from './images/aboutus1.PNG';
import about2 from './images/about2.jpeg';
import about44 from './images/about44.PNG';
import aboutus33 from './images/aboutus33.png';
import icon from './images/icon.PNG';
import icon1 from './images/icon1.PNG';
import icon3 from './images/icon3.PNG';
import icon4 from './images/icon4.PNG';
import aboutus5 from './images/aboutus5.PNG';
import Footer from './Footer';


export default function Aboutus() {
  return (
    <div>
  <NavBar />
      
     <img src={aboutus1} style={{width:"100%",marginTop:"100px"}}/>
     <div  className="about1left"> 
      <b style={{ color:"#4FD84F",fontSize:"60px"}}>About us</b>
      <ProgressBar  className="progress-bar" />
      </div>
    <br/>
    <Container>
         <Row>
            <Col  sm={8} style={{marginTop:"20px"}}>
                <h1>We are a creative</h1>
                <h1 className="textcolor">Management</h1><br/>
                <p style={{lineHeight:"35px"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br/>Lorem 
                Ipsum has been the industry's standard dummy text ever since the 1500s, when an<br/> 
                unknown printer took a galley of type and scrambled it to make a type specimen book.<br/>
                It has survived not only five centuries, but also the leap into electronic typesetting, remaining <br/>essentially unchanged. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p><br/>
            </Col>
            <Col sm={4}>
                <img src={about2} style={{width:"480px",height:"350px",marginLeft:"-50px"}}/>
            </Col>
        </Row>
        </Container><br/><br/><br/>
        <div>
      <img src={about44} style={{width:"100%"}}/>
      <div className="aboutleft">
      <h1 >Trending <span style={{ color:"#4FD84F"}}>#Hashtags</span></h1>
      <h4>Plant your tree of knowledge</h4>
      <p>JellyKi is a service which has made all your needs<br/> at one place</p>
      <Button className="button1">
        <h6><b>Jellyit now</b></h6>
     </Button>
     </div>
  </div><br/>
  <div>
    <img src={aboutus33} style={{width:"100%",marginTop:"-40px"}}/>
    <div className="about2left">
      <h2>Top publication houses</h2><br/>
      <p style={{lineHeight:"35px"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br/>Lorem 
                Ipsum has been the industry's standard dummy text ever since the 1500s, when an<br/> 
                unknown printer took a galley of type and scrambled it to make a type specimen book.<br/>
                It has survived not only five centuries, but also the leap into electronic typesetting, remaining <br/>essentially unchanged.</p><br/><br/>
                <p style={{fontSize:"18px"}}>Forbes</p>
                <p style={{marginTop:"-10px"}}>Publication house</p>
  </div>
  </div>
  <div>
  <h1 style={{textAlign:"center"}} >Jelly <span style={{ color:"#4FD84F"}}>Trends</span></h1><br/>
  <Container>
    <Row>
    <Col sm={3}>
      <Card style={{width:"240px",height:"160px",textAlign:"center"}}><br/>
<img src={icon} style={{width:"40px",height:"36px",marginLeft:"100px"}}/>
<h1>1K+</h1>
<b style={{color:"grey"}}>AUTHORS</b>
</Card>
      </Col>
      <Col sm={3}>
      <Card style={{width:"240px",height:"160px",textAlign:"center"}}><br/>
<img src={icon1} style={{width:"40px",height:"38px",marginLeft:"100px"}}/>
<h1>5K+</h1>
<b style={{color:"grey"}}>BLOGS</b>
</Card>
      </Col>
      <Col sm={3}>
      <Card style={{width:"240px",height:"160px",textAlign:"center"}}><br/>
<img src={icon3} style={{width:"40px",height:"36px",marginLeft:"100px"}}/>
<h1>100+</h1>
<b style={{color:"grey"}}>CLIENTS</b>
</Card>
      </Col>
      <Col sm={3}>
      <Card style={{width:"240px",height:"160px",textAlign:"center"}}><br/>
<img src={icon4} style={{width:"40px",height:"36px",marginLeft:"100px"}}/>
<h1>20K+</h1>
<b style={{color:"grey"}}>JELLYKI VISITS</b>
</Card>
      </Col>
    </Row>
  </Container>
  </div><br/><br/><br/><br/>
  <div>
    <img src={aboutus5} style={{width:"100%"}}/>
    <div className="about3left">
      <h2>In need of a fabulous Services?</h2>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>  <Button className="signupbutton signup">
                    <h6><b>Sign up</b></h6>
                </Button>
    </div>
  </div>
  <Footer/>
  </div>

  );
};

