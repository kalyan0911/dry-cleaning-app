import React, { Component } from 'react';
import '../App.css';
//import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent';
import NavigationComponent from './NavigationComponent';
import PaymentService from '../service/PaymentService';
// import { Button, ButtonGroup, Container, Table } from 'reactstrap';
// import { Link } from 'react-router-dom';

class AddPaymentComponent extends Component{
    constructor(props){
        super(props)
            this.state={
                customerId:window.localStorage.getItem('userId'),
                 type:'online',
                 status:'Completed',
                 cardName:'',
                 cardNumber:'',
                 expiryDate:'',  
                 bankName:''          
            }     
    }
    addPayment=(event)=>{
        event.preventDefault();
        let payment = {paymentId:Math.floor(Math.random()*1000),
            type:this.state.type,
            status:this.state.status,
            customerId:this.state.customerId,
            card:{
            id:Math.floor(Math.random()*1000),   
            cardName:this.state.cardName,
            cardNumber:this.state.cardNumber,
            expiryDate:this.state.expiryDate,
            bankName:this.state.bankName
            }
        };
        PaymentService.addPayment(payment);
        this.props.history.push('/payment');
        this.props.history.go();
    }
    changeCardName=(event)=>{
        this.setState({cardName:event.target.value});
    }
    changeCardNumber=(event)=>{
        this.setState({cardNumber:event.target.value});
    }
    changeExpiryDate=(event)=>{
        this.setState({expiryDate:event.target.value});
    }
    changeBankName=(event)=>{
        this.setState({bankName:event.target.value});
    }
    cancel(){
        this.props.history.push('/booking');
    }
    componentDidMount(){
        let userId=window.localStorage.getItem("userId");
        if(userId==null){
            this.props.history.push('/');
        } 
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
                               <h1>Complete your Payment</h1>
                                <div className = "card-body">
                                    <form method="post" onSubmit={this.addPayment}>
                                    <div className = "form-group">
                                            <label>Type: </label>
                                            <input placeholder="Payment Type" name="type" readOnly className="form-control"
                                            value={this.state.type}
                                            required/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Card Name: </label>
                                            <input placeholder="Card Name" name="cardName"  className="form-control" 
                                            onChange={this.changeCardName}
                                                value={this.state.cardName}  required/>
                                        </div>
                                        <div className = "form-group">
                                            <label>Card Number: </label>
                                            <input placeholder="Card Number" name="cardNumber"  className="form-control" 
                                            onChange={this.changeCardNumber}
                                                value={this.state.cardNumber}  required/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Expiry Date: </label>
                                            <input placeholder="Expiry Date" name="expiryDate"  className="form-control" 
                                            onChange={this.changeExpiryDate}
                                                value={this.state.expiryDate}  required/>
                                        </div>
                                        <div className = "form-group">
                                            <label>Bank Name: </label>
                                            <input placeholder="Bank Name" name="bankName"  className="form-control" 
                                            onChange={this.changeBankName}
                                                value={this.state.bankName}  required/>
                                        </div>
                                       <br></br> 
                                        <input type="submit" id="addPaymentbtn" className="btn btn-success" value="Order"></input>
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
export default AddPaymentComponent;