import { React } from 'react';
import { Button } from "react-bootstrap";
import privacy from './images/privacy.PNG';
import Progressbar from './images/progressbrown.svg';
import NavBar from './NavBar';
import terms1 from './images/terms1.png';
import Footer from './Footer';
import './PrivacyPolicy.css';
import FabServices from './FabServices';

export default function PrivacyPolicy() {
  return (
    <div>
      <NavBar />
      <img src={privacy} className="privacyImage" />
      <div className="privacyleft">
        <b>Privacy Policy</b><br />
        <img src={Progressbar} /><br />
      </div>
      <div className="privacytext">
        <b className="heading">You are Information is <span style={{ color: "#4FD84F" }}>Safe</span></b><br />
        <p style={{ lineHeight: "30px" }}>We at Nebutech Analytics LLP (hereinafter mentioned as "NEBUTECH") are committed to protect our customer's personal information and/or sensitive personal data<br />
      and strive to maintain the privacy of your personal informtion.<br />For your information, "Personal information" is any information that can be used by itself to
      uniquely identify,contact,or locate a person,or can be used with information<br />available from other sources to uniquely identify an individual. For the purpose of
       this policy, sensitive personal data or information has been considered as apart of<br />personal information.</p><br />
        <p style={{ fontSize: "18px", lineHeight: "35px" }}>NEBUTECH's Privacy Policy is designed and developed to address the privacy and security of your personal information provided to us.<br />
       This Privacy Policy describes the personal information which we may collect and provides our approach towards handling or<br />
       dealing with the same.<br />The policy is designed to make you understand:</p><br />
        <p><span className="circle"></span>kinds of personal information that may be collected by us</p>
        <p><span className="circle"></span>measures taken by us to ensure its privacy and security</p>
        <p><span className="circle"></span>duration for which it may be retained by us; and</p>
        <p><span className="circle"></span>how you may access and control its use</p><br />
        <h1 className="heading">Collection of <span style={{ color: "#4FD84F" }}>Personal Information</span></h1><br />
        <p style={{ fontSize: "18px", lineHeight: "35px" }}>NEBUTECH and its authorized third parties will connect information pertaining to your identity, demographics, and related evidentiary<br />
      documentation.<br />For the purpose of this document, a 'Third Party' is a service provider who associates with NEBUTECH and is involved in handling, managing,<br />
      storing, processing, protecting and transmitting information of NEBUTECH.<br />
      This definition also includes all sub-contractors, consultants and/or representatives of the Third party.<br />
      We may also collect your personal information when you use our service or websites or otherwise interact with us during the<br />
      course of our relationship.<br />
      Personal information collected and held by us may include tour name, date of birth, current addresses, mobilephone number,<br />
      email address, occupation and information contained for any payments if required. NEBUTECH and its authorized third parties collect, store,<br />
      process following types of Sensitive Personal Information such as password, financial information ( details of Bank account, credit card,<br />
      debit card, or other payment instrument details), physiological information for providing our products, services and for use of our website.<br />
      We may also hold information related to your utilization of our services which may include your browsing history on our website, location details<br />
      and additional information provided by you while using our services.<br />
      We may keep a log of the activities performed by you on our network and websites by using various internet techniques such as web cookies,<br />
      web beacons, server log files, etc. for analytical purposes and for analysis of the amiability of various features on our site.This information<br />
      may be used to provide you with a better experience at our portal along with evidentiary purposes. At any time while you are surfing our site,<br />
      if you do not wish to share surfing information, you may opt out of receiving the cookies from our site by making appropriate changes to your<br />
      browser privacy settings.<br />
      In case you do not provide your information or consent for usuage of personal information or later on withdraw your consent for usuage of the<br />
      personal information so collected, NEBUTECH reserves the right to not provide the services or to withdraw the services for which the said<br />
      information was sought.</p><br />
        <h1 className="heading" style={{ color: "#4FD84F" }}>Disclosure and Transfer <span style={{ color: "black" }}>of Personal Information</span></h1><br />
        <p style={{ fontSize: "18px", lineHeight: "35px" }}>Internal Use: As explained in the section “Collection of Personal Information” NEBUTECH and its employees may utilize some or all available<br />
      personal information for internal assessments, measures, operations and related activities.<br />
      Authorized Third Parties: NEBUTECH may at its discretion employ, contract or include third parties (as defined in section 1: Collection of<br />
        personal information) external to itself for strategic, tactical and operational purposes. Such agencies though external to NEBUTECH, will<br />
        always be entities which are covered by contractual agreements. These agreements in turn include NEBUTECH’s guidelines to the management,<br />
        treatment and secrecy of personal information.<br />
        We may transfer your personal information or other information collected, stored, processed by us to any other entity or organization located<br />
        in India or outside India only in case it is necessary for providing services to you or if you have consented<br />
        (at the time of collection of information) to the same. This may also include sharing of aggregated information with them in order for them <br />
        to understand our environment and consequently, provide you with better services. While sharing your personal information with third parties, <br />
        adequate measures shall be taken to ensure that reasonable security practices are followed at the third party.<br />
        We may obtain your consent for sharing your personal information in several ways, such as in writing, online, through “click-through” <br />
        agreements; orally, including through interactive voice response; or when your consent is part of the terms and conditions pursuant to <br />
        which we provide you service. We, however assure you that NEBUTECH does not disclose your personal information to unaffiliated <br />
        third parties (parties outside NEBUTECH corporate network and its Strategic and Business Partners) which could lead to invasion of your privacy.<br />
        Government Agencies: We may also share your personal information with Government agencies<br />
        or other authorized law enforcement agencies (LEAs) mandated under law to obtain such information for the purpose of verification of <br />
        identity or for prevention, detection, investigation including but not limited to cyber incidents, prosecution, and punishment of offences.</p><br />
        <h1 className="heading">Security <span style={{ color: "#4FD84F" }}>Practices and Procedures</span></h1><br />
        <p style={{ fontSize: "18px", lineHeight: "35px" }}>We adopt reasonable security practices and procedures, in line with international standard, to include, technical, operational, managerial <br />
        and physical security controls in order to protect your personal information from unauthorized access, or disclosure while it is under our control.<br />
        Our security practices and procedures limit access to personal information on need-only basis. Further, our employees are bound by <br />
        Code of Conduct and Confidentiality Policies which obligate them to protect the confidentiality of personal information.<br />
        We take adequate steps to ensure that our third parties adopt reasonable level of security practices and procedures to ensure security of <br />
        personal information.<br />
        We may retain your personal information for as long as required to provide you with services or if otherwise required under any law.<br />
        When we dispose of your personal information, we use reasonable procedures to erase it or render it unreadable (for example, shredding <br />
        documents and wiping electronic media).<br />
        Internet Use - We maintain the security of our internet connections, however for reasons outside of our control, security risks may still arise. <br />
        Any personal information transmitted to us or from our online products or services will therefore be your own risk. However, we will strive to <br />
        ensure the security of your information. We observe reasonable security measures to protect your personal information against hacking <br />
        and virus dissemination.</p><br />
        <h1 className="heading">Update of <span style={{ color: "#4FD84F" }}>Personal Information</span></h1><br />
        <p style={{ fontSize: "18px", lineHeight: "35px" }}>We strive to keep our records updated with your latest information. To this end, if you see any discrepancy in your personal information or <br />
        if a part of your personal information changes, we request you to write to us at support@nebutech.in and communicate the change(s) <br />
        for updating our records.<br />
        In case of non-compliance with the terms and conditions and privacy policy, NEBUTECH reserves the right to remove your non-compliant <br />
        information from its systems. Further, depending on the seriousness of the non-compliance, we may choose to discontinue some or all of <br />
        the services being provided to you by us.</p><br />
        <h1 className="heading">Feedback and <span style={{ color: "#4FD84F" }}>Concerns</span></h1><br />
        <p style={{ fontSize: "18px", lineHeight: "35px" }}>We are committed to safeguard your personal information collected and handled by us and look forward to your continued support for the <br />
        same. In case of any feedback or concern regarding protection of your personal information, you can contact us at support@nebutech.in. <br />
        We will strive to address your feedback and concerns in a timely and effective manner.<br />
        NEBUTECH reserves the right to amend or modify this Privacy Policy at any time, as and when the need arises. We request you to visit our <br />
        website http://nebutech.company.in/ periodically for contemporary information and changes.</p>
      </div><br />
     <FabServices/>
      <Footer />
    </div>
  )
}