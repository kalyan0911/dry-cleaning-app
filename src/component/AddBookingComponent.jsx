import React, { Component } from 'react';
import '../App.css';
//import HeaderComponent from './HeaderComponent';
import BookingService from '../service/BookingService';
import CustomerService from '../service/CustomerService';
import FooterComponent from './FooterComponent';
import NavigationComponent from './NavigationComponent';
// import { Button, ButtonGroup, Container, Table } from 'reactstrap';
// import { Link } from 'react-router-dom';

class AddBookingComponent extends Component{
    constructor(props){
        super(props)
        this.state={
            bookingDate:'',
            bookingTime:'',
            serviceType:'',
            customerDetails:''
        }
    }
    addBooking=(event)=>{
        event.preventDefault();
        let booking = {bookingId:Math.floor(Math.random()*1000),bookingDate:this.state.bookingDate,
        bookingTime:this.state.bookingTime,
        serviceType:this.state.serviceType,
        customerDetails:this.state.customerDetails};
        BookingService.addBooking(booking);
        this.props.history.push('/booking');
    }
    cancel(){
        this.props.history.push('/booking');
    }
    changeBookingDate=(event)=>{
        this.setState({bookingDate:event.target.value});
    }
    changeBookingTime=(event)=>{
        this.setState({bookingTime:event.target.value});
    }
    changeServiceType=(event)=>{
        this.setState({serviceType:event.target.value});
    }
    componentDidMount(){
        let userId=window.localStorage.getItem("userId");
        CustomerService.validateUserId(userId).then(res=>{
            this.setState({customerDetails:res.data});
        })
        
    }
    render(){
       
        return(
            <div>
                <div>
                    <NavigationComponent></NavigationComponent>
                </div>
                 <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                Add Booking Page
                                <div className = "card-body">
                                    <form method="post" onSubmit={this.addBooking}>
                                    <div className = "form-group">
                                            <label>Booking Date: </label>
                                            <input placeholder="Booking Date" name="Booking Date"  className="form-control" onChange=
                                            {this.changeBookingDate}
                                            value={this.state.bookingDate}
                                            required/>
                                        </div>
                                        <div className = "form-group">
                                            <label>Booking Time: </label>
                                            <input placeholder="Booking Time" name="Booking Time"  className="form-control" 
                                                value={this.state.bookingTime} onChange={this.changeBookingTime} required/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Service Type: </label>
                                            <input placeholder="Service Type" name="Service Type" className="form-control" 
                                                value={this.state.serviceType} onChange={this.changeServiceType} required/>
                                        </div>
                                       
                                        <input type="submit" id="signupbtn" className="btn btn-success" value="Register"></input>
                                        {/* <button className="btn btn-success" onClick={this.registerCustomer}>Register</button> */}
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                        <br></br>
                                        <br></br>
                                    </form>
                                </div>
                            </div>
                        </div>
        </div>
        <div className="App-footer"><FooterComponent></FooterComponent></div>
        </div>
        )
    }
}
export default AddBookingComponent;