import React, { Component } from 'react';
import '../App.css';
//import HeaderComponent from './HeaderComponent';
import PaymentService from '../service/PaymentService';
import FooterComponent from './FooterComponent';
import NavigationComponent from './NavigationComponent';
import {  Container, Table } from 'reactstrap';

class PaymentComponent extends Component{
    constructor(props){
        super(props)
        this.state = {
            userId:window.localStorage.getItem("userId"),
            payments:[]
        }
    }
    componentDidMount(){
        if(this.state.userId==null){
            this.props.history.push('/');
        }
        PaymentService.getPaymentbyCustomer(this.state.userId).then(res=>{
            this.setState({payments:res.data});
        });
    }
    
    render(){
        const paymentList = this.state.payments.map(p => {
            return <tr key={p.paymentId}>
            <td>{p.paymentId}</td>
            <td>{p.type}</td>
            <td>{p.status}</td>
            <td>{p.card.cardName}</td>
            <td>{p.card.cardNumber}</td>
            <td>{p.card.expiryDate}</td>
            <td>{p.card.bankName}</td>
          
            </tr>
          });
        
    
        return(
            <div>
                <div>
                    <NavigationComponent></NavigationComponent>
                </div>
                <Container fluid>
          
          <h3>Payment History</h3>
          <Table className="mt-4">
            <thead>
              <tr>
                <th>Payment Id</th>
                <th>Type</th>
                <th>Status</th>
                <th>Card Name</th>
                <th>Card Number</th>
                <th>Expiry Date</th>
                <th>Bank Name</th>
              </tr>
            </thead>
            <tbody>
            {paymentList}
            </tbody>
          </Table>
        </Container>
                <div className="App-footer">
                    <FooterComponent></FooterComponent>
                </div>
            </div>
        );
    }
}
export default PaymentComponent;