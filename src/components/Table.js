import React, { Component } from "react";
import { DropdownButton } from "react-bootstrap";
import Table from 'react-bootstrap/Table'
import '../App.css';
import { FaStar } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import DropdownItem from "react-bootstrap/esm/DropdownItem";


export default class Table1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
data:[
    {supplierName:"ABC P Ltd",supplierId:12300,partnerId:"00000",typeOfEngagement:"Empaneled",servicesCategory:"Buildings and Construction",scaleOfEngagement:"Small/Medium",location:"Mysore",contactPhone: "+91-9848011224",email:"abc@xyz.com",website:"www.abc.in",bankingWith:"SBI, HDFC",rating:2},
    {supplierName:"XYZ P Ltd",supplierId:45600,partnerId:65757,typeOfEngagement:"Partnership",servicesCategory:"Aerospace and Defense",scaleOfEngagement:"Large",location:"Gulbarga",contactPhone:"+91-9848011224",email:"abc@xyz.com",website:"www.abc.in",bankingWith:"ICICI",rating:4},
    {supplierName:"CCCC",supplierId:23400,partnerId:12211,typeOfEngagement:"Individual",servicesCategory:"Heavy Engineering",scaleOfEngagement:"Small",location:"Tumkur",contactPhone:"+91-9848011224",email:"abc@xyz.com",website:"www.abc.in",bankingWith:"Yes Bank",rating:1},
    {supplierName:"TTTT",supplierId:44400,partnerId:"00000",typeOfEngagement:"Individual",servicesCategory:"Electrical",scaleOfEngagement:"Small",location:"Hospet",contactPhone:"+91-9848011224",email:"abc@xyz.com",website:"www.abc.in",bankingWith:"IDFC, SBI",rating:3},
    {supplierName:"BBBB",supplierId:33300,partnerId:"00000",typeOfEngagement:"Sub-vendor",servicesCategory:"Electronics",scaleOfEngagement:"Small",location:"Davengiri",contactPhone:"+91-9848011224",email:"abc@xyz.com",website:"www.abc.in",bankingWith:"HDFC",rating:2},
    {supplierName:"ABC P Ltd",supplierId:12300,partnerId:"00000",typeOfEngagement:"Empaneled",servicesCategory:"Hightech Engineering/Manufacturing",scaleOfEngagement:"Small/Medium",location:"Mysore",contactPhone: "+91-9848011224",email:"abc@xyz.com",website:"www.abc.in",bankingWith:"SBI, HDFC",rating:2},
    {supplierName:"XYZ P Ltd",supplierId:45600,partnerId:65757,typeOfEngagement:"Partnership",servicesCategory:"Light Engineering",scaleOfEngagement:"Large",location:"Gulbarga",contactPhone:"+91-9848011224",email:"abc@xyz.com",website:"www.abc.in",bankingWith:"ICICI",rating:2},
    {supplierName:"CCCC",supplierId:23400,partnerId:12211,typeOfEngagement:"Individual",servicesCategory:"Learning and Development",scaleOfEngagement:"Small",location:"Tumkur",contactPhone:"+91-9848011224",email:"abc@xyz.com",website:"www.abc.in",bankingWith:"Yes Bank",rating:3},
    {supplierName:"TTTT",supplierId:44400,partnerId:"00000",typeOfEngagement:"Individual",servicesCategory:"Education",scaleOfEngagement:"Small",location:"Hospet",contactPhone:"+91-9848011224",email:"abc@xyz.com",website:"www.abc.in",bankingWith:"IDFC, SBI",rating:1},
    {supplierName:"BBBB",supplierId:33300,partnerId:"00000",typeOfEngagement:"Sub-vendor",servicesCategory:"Vendor Administration",scaleOfEngagement:"Small",location:"Davengiri",contactPhone:"+91-9848011224",email:"abc@xyz.com",website:"www.abc.in",bankingWith:"HDFC",rating:0},
    {supplierName:"ABC P Ltd",supplierId:12300,partnerId:"00000",typeOfEngagement:"Empaneled",servicesCategory:"Banking Finance Services",scaleOfEngagement:"Small/Medium",location:"Mysore",contactPhone: "+91-9848011224",email:"abc@xyz.com",website:"www.abc.in",bankingWith:"SBI, HDFC",rating:1},
    {supplierName:"XYZ P Ltd",supplierId:45600,partnerId:65757,typeOfEngagement:"Partnership",servicesCategory:"Insurance-Angel Investor, VC",scaleOfEngagement:"Large",location:"Gulbarga",contactPhone:"+91-9848011224",email:"abc@xyz.com",website:"www.abc.in",bankingWith:"ICICI",rating:2},
    {supplierName:"CCCC",supplierId:23400,partnerId:12211,typeOfEngagement:"Individual",servicesCategory:"Allied Industries",scaleOfEngagement:"Small",location:"Tumkur",contactPhone:"+91-9848011224",email:"abc@xyz.com",website:"www.abc.in",bankingWith:"Yes Bank",rating:1},
    {supplierName:"TTTT",supplierId:44400,partnerId:"00000",typeOfEngagement:"Individual",servicesCategory:"Plastics Industries",scaleOfEngagement:"Small",location:"Hospet",contactPhone:"+91-9848011224",email:"abc@xyz.com",website:"www.abc.in",bankingWith:"IDFC, SBI",rating:2},
    {supplierName:"BBBB",supplierId:33300,partnerId:"00000",typeOfEngagement:"Sub-vendor",servicesCategory:"FMCG",scaleOfEngagement:"Small",location:"Davengiri",contactPhone:"+91-9848011224",email:"abc@xyz.com",website:"www.abc.in",bankingWith:"HDFC",rating:3},
    {supplierName:"ABC P Ltd",supplierId:12300,partnerId:"00000",typeOfEngagement:"Empaneled",servicesCategory:"Hospitality",scaleOfEngagement:"Small/Medium",location:"Mysore",contactPhone: "+91-9848011224",email:"abc@xyz.com",website:"www.abc.in",bankingWith:"SBI, HDFC",rating:4},
    {supplierName:"XYZ P Ltd",supplierId:45600,partnerId:65757,typeOfEngagement:"Partnership",servicesCategory:"Hospitals",scaleOfEngagement:"Large",location:"Gulbarga",contactPhone:"+91-9848011224",email:"abc@xyz.com",website:"www.abc.in",bankingWith:"ICICI",rating:2},
    {supplierName:"CCCC",supplierId:23400,partnerId:12211,typeOfEngagement:"Individual",servicesCategory:"Logistics",scaleOfEngagement:"Small",location:"Tumkur",contactPhone:"+91-9848011224",email:"abc@xyz.com",website:"www.abc.in",bankingWith:"Yes Bank",rating:3},
    {supplierName:"TTTT",supplierId:44400,partnerId:"00000",typeOfEngagement:"Individual",servicesCategory:"Agriculture",scaleOfEngagement:"Small",location:"Hospet",contactPhone:"+91-9848011224",email:"abc@xyz.com",website:"www.abc.in",bankingWith:"IDFC, SBI",rating:0},
    {supplierName:"BBBB",supplierId:33300,partnerId:"00000",typeOfEngagement:"Sub-vendor",servicesCategory:"IT Industry- Alliance Contracts",scaleOfEngagement:"Small",location:"Davengiri",contactPhone:"+91-9848011224",email:"abc@xyz.com",website:"www.abc.in",bankingWith:"HDFC",rating:1},
    {supplierName:"CCCC",supplierId:23400,partnerId:12211,typeOfEngagement:"Individual",servicesCategory:"Energy",scaleOfEngagement:"Small",location:"Tumkur",contactPhone:"+91-9848011224",email:"abc@xyz.com",website:"www.abc.in",bankingWith:"Yes Bank",rating:1},
    {supplierName:"TTTT",supplierId:44400,partnerId:"00000",typeOfEngagement:"Individual",servicesCategory:"Office Automation",scaleOfEngagement:"Small",location:"Hospet",contactPhone:"+91-9848011224",email:"abc@xyz.com",website:"www.abc.in",bankingWith:"IDFC, SBI",rating:2},
    {supplierName:"BBBB",supplierId:33300,partnerId:"00000",typeOfEngagement:"Sub-vendor",servicesCategory:"Others",scaleOfEngagement:"Small",location:"Davengiri",contactPhone:"+91-9848011224",email:"abc@xyz.com",website:"www.abc.in",bankingWith:"HDFC",rating:0},
]
        }
        this.onSortAsc = this.onSortAsc.bind(this)
        this.onSortDsc = this.onSortDsc.bind(this)
        this.onSortAscNumbers = this.onSortAscNumbers.bind(this)
        this.onSortDscNumbers = this.onSortDscNumbers.bind(this)
        }
        onSortAsc(event, sortKey){
            const data = this.state.data;
            data.sort((a,b) => a[sortKey].localeCompare(b[sortKey]))
            this.setState({data})
          }
          onSortDsc(event, sortKey){
            const data = this.state.data;
            data.sort((a,b) => b[sortKey].localeCompare(a[sortKey]))
            this.setState({data})
          }
          onSortAscNumbers(event,sortKey){
            const data = this.state.data;
            data.sort((a,b) => a[sortKey] - b[sortKey])
            this.setState({data})
          }
          onSortDscNumbers(event,sortKey){
            const data = this.state.data;
            data.sort((a,b) => b[sortKey] - a[sortKey])
            this.setState({data})
          }
render(){
    var newdata = this.state.data;
        return (
            <div>
            <Table striped bordered hover size="sm" >
                <thead>
                    <tr style={{backgroundColor:"#FFC000"}}>
                        <th>Supplier Name</th>
                        <th>Supplier ID</th>
                        <th>Partner ID</th>
                        <th>Type of Engagement</th>
                        <th>Services Category <DropdownButton variant="warning" className="mb-2" style={{float:"right"}}>
                            <DropdownItem onClick={e => this.onSortAsc(e, 'servicesCategory')}>Sort A to Z</DropdownItem>
                            <DropdownItem onClick={e => this.onSortDsc(e, 'servicesCategory')}>Sort Z to A</DropdownItem></DropdownButton></th>
                        <th>Scale of Engagement</th>
                        <th style={{width:"150px"}}>Location<DropdownButton variant="warning" className="mb-2" style={{float:"right"}}>
                            <DropdownItem onClick={e => this.onSortAsc(e, 'location')}>Sort A to Z</DropdownItem>
                            <DropdownItem onClick={e => this.onSortDsc(e, 'location')}>Sort Z to A</DropdownItem></DropdownButton></th>
                        <th>Contact Phone</th>
                        <th>Email</th>
                        <th>Website</th>
                        <th>Banking with</th>
                        <th style={{width:"100px"}}>Rating<DropdownButton variant="warning" className="mb-2" style={{float:"right"}}>
                            <DropdownItem onClick={e => this.onSortAscNumbers(e, 'rating')}>Sort Low to High</DropdownItem>
                            <DropdownItem onClick={e => this.onSortDscNumbers(e, 'rating')}>Sort High to Low</DropdownItem></DropdownButton></th>
                    </tr>
                </thead>
                <tbody> {newdata.map((item,idx)=>
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
                        <td key={idx}>{Array(item.rating).fill(<FaStar />)}</td>
                    </tr>
                )}
                    
                </tbody>
                </Table>
            </div>
        );
    }
}