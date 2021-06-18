import React, { Component } from 'react';
import '../App.css';
//import HeaderComponent from './HeaderComponent';
import BookingService from '../service/BookingService';
import CustomerItemService from '../service/CustomerItemService';
import FooterComponent from './FooterComponent';
import NavigationComponent from './NavigationComponent';
// import { Button, ButtonGroup, Container, Table } from 'reactstrap';
// import { Link } from 'react-router-dom';

class AddBookingComponent extends Component{
    constructor(props){
        let dd=new Date().getDate();
        let mm=new Date().getMonth();
        let yy=new Date().getFullYear();
        let hh=new Date().getHours();
        let min=new Date().getMinutes();
        super(props)
        this.state={
            customerItemId:this.props.match.params.id,
            bookingDate:yy+'-0'+mm+'-'+dd,
            bookingTime:hh+':'+min+':00',
            serviceType:'DryClean',
            customerItem:''
        }
        
    }
    addBooking=(event)=>{
        event.preventDefault();
        let booking = {bookingId:Math.floor(Math.random()*1000),bookingDate:this.state.bookingDate,
        bookingTime:this.state.bookingTime,
        serviceType:this.state.serviceType,
        customerItem:this.state.customerItem};
        BookingService.addBooking(booking);
        this.props.history.push('/booking');
        this.props.history.go();
    }
    cancel(){
        this.props.history.push('/customerItem');
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
        if(userId==null){
            this.props.history.push('/');
        }
        CustomerItemService.getItembyId(this.state.customerItemId).then(res=>{
            this.setState({customerItem:res.data});
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
                                <h1>Book Item</h1>
                                <div className = "card-body">
                                    <form method="post" onSubmit={this.addBooking}>
                                    <div className = "form-group">
                                            <label>Booking Date: </label>
                                            <input placeholder="Booking Date" name="Booking Date"  className="form-control" readOnly
                                            value={this.state.bookingDate}
                                            required/>
                                        </div>
                                        <div className = "form-group">
                                            <label>Booking Time: </label>
                                            <input placeholder="Booking Time" readOnly name="Booking Time"  className="form-control" 
                                                value={this.state.bookingTime} onChange={this.changeBookingTime} required/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Service Type: </label>
                                            {/* <input type="select" name="Service Type" className="form-control" 
                                                value={this.state.serviceType} onChange={this.changeServiceType} required/> */}
                                                <select name="Service Type" className="form-control" onChange={this.changeServiceType} value={this.state.serviceType}>
                                                <option value="DryClean" defaultValue>DryClean</option>
                                                <option value="Bleach">Bleach</option>
                                                <option value="Polish">Polish</option>
                                                <option value="Iron">Iron</option>
                                                </select>
                                        </div>
                                            <br></br>
                                        <input type="submit" id="addbookingbtn" className="btn btn-success" value="Add"></input>
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