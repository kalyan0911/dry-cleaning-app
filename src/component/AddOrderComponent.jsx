import React, { Component } from 'react';
import '../App.css';
//import HeaderComponent from './HeaderComponent';
import BookingService from '../service/BookingService';
import CustomerService from '../service/CustomerService';
import FooterComponent from './FooterComponent';
import NavigationComponent from './NavigationComponent';
import OrderService from '../service/OrderService';
// import { Button, ButtonGroup, Container, Table } from 'reactstrap';
// import { Link } from 'react-router-dom';

class AddBookingComponent extends Component{
    constructor(props){
        let dd=new Date().getDate();
        let mm=new Date().getMonth();
        let yy=new Date().getFullYear();
        super(props)
        this.state={
            amount:'',
            billingDate:yy+'-0'+(mm+1)+'-'+dd,
            paymentMethod:'Debit Card',
            bookingId:this.props.match.params.id,
            customerDetails:'',
            booking:''
        }
        
    }
    addOrder=(event)=>{
        event.preventDefault();
        let order = {orderId:Math.floor(Math.random()*1000),amount:this.state.amount,
            billingDate:this.state.billingDate,
            paymentMethod:this.state.paymentMethod,
            bookingDetails:this.state.booking};
        OrderService.addOrder(order);
        this.props.history.push('/payment/pay');
        this.props.history.go();
    }
    cancel(){
        this.props.history.push('/booking');
    }
    changePaymentMethod=(event)=>{
        this.setState({paymentMethod:event.target.value});
    }
    changeAmount=(event)=>{
        this.setState({amount:event.target.value});
    }
    componentDidMount(){
        let userId=window.localStorage.getItem("userId");
        if(userId==null){
            this.props.history.push('/');
        }
        CustomerService.getCustomer(userId).then(res=>{
            this.setState({customerDetails:res.data});
        })
        BookingService.getBookingbyId(this.state.bookingId).then(res=>{
            this.setState({booking:res.data});

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
                                <h1>Place Order</h1>
                                <div className = "card-body">
                                    <form method="post" onSubmit={this.addOrder}>
                                    <div className = "form-group">
                                            <label>Amount: </label>
                                            <input placeholder="Amount" type="number" name="Amount"  className="form-control" onChange=
                                            {this.changeAmount}
                                            value={this.state.amount}
                                            required/>
                                        </div>
                                        <div className = "form-group">
                                            <label>Billing Date: </label>
                                            <input placeholder="Billing Date" name="Billing Date"  className="form-control" 
                                                value={this.state.billingDate} readOnly required/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Payment Method: </label>
                                                <select name="Payment Method" className="form-control" onChange={this.changePaymentMethod} value={this.state.paymentMethod}>
                                                <option value="Debit Card" selected>Debit Card</option>
                                                <option value="Credit Card">Credit Card</option>
                                                </select>
                                        </div>
                                        <br></br>
                                        <input type="submit" id="addorderbtn" className="btn btn-success" value="Proceed to Pay"></input>
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