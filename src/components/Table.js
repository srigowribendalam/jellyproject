import React, { Component } from "react";
import { Card, Container, Row, Col, Button } from "react-bootstrap";
import Table from 'react-bootstrap/Table'
import '../App.css';
import { FaStar } from "react-icons/fa";


export default class Table1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
data:[
    {supplierName:"ABC P Ltd",supplierId:12300,partnerId:"00000",typeOfEngagement:"Empaneled",servicesCategory:"Buildings and Construction",scaleOfEngagement:"Small/Medium",location:"Mysore",contactPhone: "+91-9848011224",email:"abc@xyz.com",website:"www.abc.in",bankingWith:"SBI, HDFC",rating:<><FaStar/><FaStar/><FaStar/><FaStar/></>},
    {supplierName:"XYZ P Ltd",supplierId:45600,partnerId:65757,typeOfEngagement:"Partnership",servicesCategory:"Aerospace and Defense",scaleOfEngagement:"Large",location:"Gulbarga",contactPhone:"+91-9848011224",email:"abc@xyz.com",website:"www.abc.in",bankingWith:"ICICI",rating:<><FaStar/><FaStar/><FaStar/></>},
    {supplierName:"CCCC",supplierId:23400,partnerId:12211,typeOfEngagement:"Individual",servicesCategory:"Heavy Engineering",scaleOfEngagement:"Small",location:"Tumkur",contactPhone:"+91-9848011224",email:"abc@xyz.com",website:"www.abc.in",bankingWith:"Yes Bank",rating:<FaStar/>},
    {supplierName:"TTTT",supplierId:44400,partnerId:"00000",typeOfEngagement:"Individual",servicesCategory:"Electrical",scaleOfEngagement:"Small",location:"Hospet",contactPhone:"+91-9848011224",email:"abc@xyz.com",website:"www.abc.in",bankingWith:"IDFC, SBI",rating:"New"},
    {supplierName:"BBBB",supplierId:33300,partnerId:"00000",typeOfEngagement:"Sub-vendor",servicesCategory:"Electronics",scaleOfEngagement:"Small",location:"Davengiri",contactPhone:"+91-9848011224",email:"abc@xyz.com",website:"www.abc.in",bankingWith:"HDFC",rating:"NA"},
    {supplierName:"ABC P Ltd",supplierId:12300,partnerId:"00000",typeOfEngagement:"Empaneled",servicesCategory:"Hightech Engineering/Manufacturing",scaleOfEngagement:"Small/Medium",location:"Mysore",contactPhone: "+91-9848011224",email:"abc@xyz.com",website:"www.abc.in",bankingWith:"SBI, HDFC",rating:<><FaStar/><FaStar/><FaStar/><FaStar/></>},
    {supplierName:"XYZ P Ltd",supplierId:45600,partnerId:65757,typeOfEngagement:"Partnership",servicesCategory:"Light Engineering",scaleOfEngagement:"Large",location:"Gulbarga",contactPhone:"+91-9848011224",email:"abc@xyz.com",website:"www.abc.in",bankingWith:"ICICI",rating:<><FaStar/><FaStar/><FaStar/></>},
    {supplierName:"CCCC",supplierId:23400,partnerId:12211,typeOfEngagement:"Individual",servicesCategory:"Learning and Development",scaleOfEngagement:"Small",location:"Tumkur",contactPhone:"+91-9848011224",email:"abc@xyz.com",website:"www.abc.in",bankingWith:"Yes Bank",rating:<FaStar/>},
    {supplierName:"TTTT",supplierId:44400,partnerId:"00000",typeOfEngagement:"Individual",servicesCategory:"Education",scaleOfEngagement:"Small",location:"Hospet",contactPhone:"+91-9848011224",email:"abc@xyz.com",website:"www.abc.in",bankingWith:"IDFC, SBI",rating:<><FaStar/><FaStar/></>},
    {supplierName:"BBBB",supplierId:33300,partnerId:"00000",typeOfEngagement:"Sub-vendor",servicesCategory:"Vendor Administration",scaleOfEngagement:"Small",location:"Davengiri",contactPhone:"+91-9848011224",email:"abc@xyz.com",website:"www.abc.in",bankingWith:"HDFC",rating:"NA"},
    {supplierName:"ABC P Ltd",supplierId:12300,partnerId:"00000",typeOfEngagement:"Empaneled",servicesCategory:"Banking Finance Services",scaleOfEngagement:"Small/Medium",location:"Mysore",contactPhone: "+91-9848011224",email:"abc@xyz.com",website:"www.abc.in",bankingWith:"SBI, HDFC",rating:<><FaStar/><FaStar/><FaStar/><FaStar/></>},
    {supplierName:"XYZ P Ltd",supplierId:45600,partnerId:65757,typeOfEngagement:"Partnership",servicesCategory:"Insurance-Angel Investor, VC",scaleOfEngagement:"Large",location:"Gulbarga",contactPhone:"+91-9848011224",email:"abc@xyz.com",website:"www.abc.in",bankingWith:"ICICI",rating:<><FaStar/><FaStar/><FaStar/></>},
    {supplierName:"CCCC",supplierId:23400,partnerId:12211,typeOfEngagement:"Individual",servicesCategory:"Allied Industries",scaleOfEngagement:"Small",location:"Tumkur",contactPhone:"+91-9848011224",email:"abc@xyz.com",website:"www.abc.in",bankingWith:"Yes Bank",rating:<FaStar/>},
    {supplierName:"TTTT",supplierId:44400,partnerId:"00000",typeOfEngagement:"Individual",servicesCategory:"Plastics Industries",scaleOfEngagement:"Small",location:"Hospet",contactPhone:"+91-9848011224",email:"abc@xyz.com",website:"www.abc.in",bankingWith:"IDFC, SBI",rating:"New"},
    {supplierName:"BBBB",supplierId:33300,partnerId:"00000",typeOfEngagement:"Sub-vendor",servicesCategory:"FMCG",scaleOfEngagement:"Small",location:"Davengiri",contactPhone:"+91-9848011224",email:"abc@xyz.com",website:"www.abc.in",bankingWith:"HDFC",rating:"NA"},
    {supplierName:"ABC P Ltd",supplierId:12300,partnerId:"00000",typeOfEngagement:"Empaneled",servicesCategory:"Hospitality",scaleOfEngagement:"Small/Medium",location:"Mysore",contactPhone: "+91-9848011224",email:"abc@xyz.com",website:"www.abc.in",bankingWith:"SBI, HDFC",rating:<><FaStar/><FaStar/><FaStar/><FaStar/></>},
    {supplierName:"XYZ P Ltd",supplierId:45600,partnerId:65757,typeOfEngagement:"Partnership",servicesCategory:"Hospitals",scaleOfEngagement:"Large",location:"Gulbarga",contactPhone:"+91-9848011224",email:"abc@xyz.com",website:"www.abc.in",bankingWith:"ICICI",rating:<><FaStar/><FaStar/><FaStar/></>},
    {supplierName:"CCCC",supplierId:23400,partnerId:12211,typeOfEngagement:"Individual",servicesCategory:"Logistics",scaleOfEngagement:"Small",location:"Tumkur",contactPhone:"+91-9848011224",email:"abc@xyz.com",website:"www.abc.in",bankingWith:"Yes Bank",rating:<><FaStar/><FaStar/><FaStar/></>},
    {supplierName:"TTTT",supplierId:44400,partnerId:"00000",typeOfEngagement:"Individual",servicesCategory:"Agriculture",scaleOfEngagement:"Small",location:"Hospet",contactPhone:"+91-9848011224",email:"abc@xyz.com",website:"www.abc.in",bankingWith:"IDFC, SBI",rating:"New"},
    {supplierName:"BBBB",supplierId:33300,partnerId:"00000",typeOfEngagement:"Sub-vendor",servicesCategory:"IT Industry- Alliance Contracts",scaleOfEngagement:"Small",location:"Davengiri",contactPhone:"+91-9848011224",email:"abc@xyz.com",website:"www.abc.in",bankingWith:"HDFC",rating:<><FaStar/><FaStar/></>},
    {supplierName:"CCCC",supplierId:23400,partnerId:12211,typeOfEngagement:"Individual",servicesCategory:"Energy",scaleOfEngagement:"Small",location:"Tumkur",contactPhone:"+91-9848011224",email:"abc@xyz.com",website:"www.abc.in",bankingWith:"Yes Bank",rating:<FaStar/>},
    {supplierName:"TTTT",supplierId:44400,partnerId:"00000",typeOfEngagement:"Individual",servicesCategory:"Office Automation",scaleOfEngagement:"Small",location:"Hospet",contactPhone:"+91-9848011224",email:"abc@xyz.com",website:"www.abc.in",bankingWith:"IDFC, SBI",rating:<><FaStar/><FaStar/><FaStar/><FaStar/></>},
    {supplierName:"BBBB",supplierId:33300,partnerId:"00000",typeOfEngagement:"Sub-vendor",servicesCategory:"Others",scaleOfEngagement:"Small",location:"Davengiri",contactPhone:"+91-9848011224",email:"abc@xyz.com",website:"www.abc.in",bankingWith:"HDFC",rating:"NA"},
]
        }
        }
render(){

        return (
            <div>
            <Table striped bordered hover size="sm" >
                <thead>
                    <tr style={{backgroundColor:"#FFC000"}}>
                        <th>Supplier Name</th>
                        <th>Supplier ID</th>
                        <th>Partner ID</th>
                        <th>Type of Engagement</th>
                        <th>Services category</th>
                        <th>Scale of Engagement</th>
                        <th>Location</th>
                        <th>Contact Phone</th>
                        <th>Email</th>
                        <th>Website</th>
                        <th>Banking with</th>
                        <th style={{width:"100px"}}>Rating</th>
                    </tr>
                </thead>
                <tbody> {this.state.data.map((item,idx)=>
                    <tr>
                        <td key={idx}>{item.supplierName}</td>
                        <td key={idx}>{item.supplierId}</td>
                        <td key={idx}>{item.partnerId}</td>
                        <td key={idx}>{item.typeOfEngagement}</td>
                        <td key={idx}>{item.servicesCategory}</td>
                        <td key={idx}>{item.scaleOfEngagement}</td>
                        <td key={idx}>{item.location}</td>
                        <td key={idx}>{item.contactPhone}</td>
                        <td key={idx}>{item.email}</td>
                        <td key={idx}>{item.website}</td>
                        <td key={idx}>{item.bankingWith}</td>
                        <td key={idx}>{item.rating}</td>
                    </tr>
                )}
                    
                </tbody>
                </Table>
            </div>
        );
    }
}