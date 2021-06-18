import React, { Component } from 'react';
import '../App.css';
//import HeaderComponent from './HeaderComponent';
import OrderService from '../service/OrderService';
import FooterComponent from './FooterComponent';
import NavigationComponent from './NavigationComponent';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
//import { Link } from 'react-router-dom';

class OrderComponent extends Component{
    constructor(props){
        super(props)
        this.state = {
            userId:window.localStorage.getItem("userId"),
            orders:[]
        }
    }
    componentDidMount(){
        if(this.state.userId==null){
            this.props.history.push('/');
        }
        OrderService.getOrdersbyCustomer(this.state.userId).then(res=>{
            this.setState({orders:res.data});
        });
        this.forceUpdate();
    }
    deleteOrder=(orderId)=>{
        OrderService.deleteOrder(orderId).then(res=>{
        this.setState({orders: this.state.orders.filter((order) => order.orderId !== orderId)});
      });
      this.props.history.push('/order');
    }

    render(){
        const orderList = this.state.orders.map(o => {
            return <tr key={o.orderId}>
            <td>{o.orderId}</td>
              <td>{o.amount}</td>
              <td>{o.billingDate}</td>
              <td>{o.paymentMethod}</td>
              <td>{o.bookingDetails.bookingId}</td>
              
              <td>
                <ButtonGroup>
                  <Button size="sm" color="danger" onClick={()=>this.deleteOrder(o.orderId)}>Cancel Order</Button>
                </ButtonGroup>
              </td>
            </tr>
          });
        
    
        return(
            <div>
                <div>
                    <NavigationComponent></NavigationComponent>
                </div>
                <Container fluid>
          <h3>My Orders</h3>
          <Table className="mt-4">
            <thead>
              <tr>
                <th width="15%">Order Id</th>
                <th width="15%">Amount</th>
                <th width="15%">Billing Date</th>
                <th width="15%">Payment Method</th>
                <th >Booking Id</th>
                <th width="15%">Actions</th>
              </tr>
            </thead>
            <tbody>
            {orderList}
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
export default OrderComponent;