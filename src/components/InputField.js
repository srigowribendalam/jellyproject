import React, { Component } from 'react';
import { Button } from "react-bootstrap";
import '../App.css';

class InputField extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputField: false
        }
        this.changeHandler = this.changeHandler.bind(this)
    }

    submitHandler = (e) => {
        e.preventDefault();
        alert("Submitted Successfully");
    }
    changeHandler(e) {
        if(e.target.value === "0"){
            this.setState({inputField: true});
           
        }else
            this.setState({inputField: false}); 
        }

    render() {
        const { inputField } = this.state;
        return (
            <div>
                <div className="Login margintop">
                    <center>
                        <form onSubmit={this.submitHandler}>
                            <div className="form-group text-left ">
                                <label>Supplier Name</label><br />
                                <input
                                    className="form-control"
                                    type="text"
                                    placeholder="Enter supplier name"
                                />
                            </div>
                            <div className="form-group text-left ">
                                <label>Type of Engagement</label><br />
                                <select type="name"
                                    className="form-control">
                                    <option >--select--</option>
                                    <option >Empaneled</option>
                                    <option>Partnership</option>
                                    <option >Individual</option>
                                    <option>Sub-vendor</option>
                                </select>
                            </div>
                            <div className="form-group text-left ">
                                <label>Services Category</label><br />
                                <select type="name"
                                    className="form-control">
                                    <option >--select--</option>
                                    <option >Building and Construction</option>
                                    <option>Metal and Steel</option>
                                    <option >Electrical and Electronics</option>
                                </select>
                            </div>
                            <div className="form-group text-left ">
                                <label>Scale of Engagement</label><br />
                                <select type="name"
                                    className="form-control">
                                    <option >--select--</option>
                                    <option >Small</option>
                                    <option>Small/Medium</option>
                                    <option>Medium</option>
                                    <option>Large</option>
                                    <option>Enterprise</option>
                                </select>
                            </div>
                            <div className="form-group text-left ">
                                <label>Location</label><br />
                                <input
                                    className="form-control"
                                    type="text"
                                    placeholder="Enter location"
                                />
                            </div>
                            <div className="form-group text-left ">
                                <label>Contact Number</label><br />
                                <input type="number"
                                    className="form-control"
                                    id="number" name="phone"
                                    placeholder="Enter contact number" />
                            </div>
                            <div className="form-group text-left ">
                                <label>Email</label><br />
                                <input type="email"
                                    className="form-control"
                                    id="email"
                                    name="emailId"
                                    placeholder="Enter email" />
                            </div>
                            <div className="form-group text-left ">
                                <label>Website</label><br />
                                <input
                                    className="form-control"
                                    type="text"
                                    placeholder="Enter website"
                                />
                            </div>
                            <div className="form-group text-left ">
                                <label>Banking With</label><br />
                                <select  type="name" onChange={this.changeHandler}
                                 name="otherbank"
                                    className="form-control" >
                                    <option >--select--</option>
                                    <option value="1">HDFC</option>
                                    <option value="2">SBI</option>
                                    <option value="3">ICICI</option>
                                    <option value="4">IDFC</option>
                                    <option value="5">Axis Bank</option>
                                    <option value="6">Yes Bank</option>
                                    <option value="7">Bank of Baroda</option>
                                    <option value="8">City Union Bank</option>
                                    <option value="9">Canara Bank</option>
                                    <option value="0">Others</option>
                                </select>
                               <br/>
                                {inputField ?  <input
                                    className="form-control"
                                    type="text"
                                    placeholder="Enter bank name"/> 
                                : ""}
                            </div>
                            <Button
                                type="submit"
                                className="btn btn-primary"
                            >Submit
                                </Button>
                        </form>
                    </center>
                </div>
            </div>
        );
    }
}
export default InputField;
