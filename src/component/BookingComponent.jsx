import React, { Component } from 'react';
import '../App.css';
//import HeaderComponent from './HeaderComponent';
import BookingService from '../service/BookingService';
import FooterComponent from './FooterComponent';
import NavigationComponent from './NavigationComponent';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import { Link } from 'react-router-dom';

class BookingComponent extends Component{
    constructor(props){
        super(props)
        this.state = {
            userId:window.localStorage.getItem("userId"),
            booking:[],
            customerItemName:''
        }
    }
    componentDidMount(){
        if(this.state.userId==null){
            this.props.history.push('/');
        }
        BookingService.getBookings(this.state.userId).then(res=>{
            this.setState({booking:res.data});
        });
    }
    deleteBooking=(bookingId)=>{
      BookingService.deleteBooking(bookingId).then(res=>{
        this.setState({booking: this.state.booking.filter((item) => item.bookingId !== bookingId)});
      });
      this.props.history.push('/booking');
    }

    render(){
        const bookingList = this.state.booking.map(b => {
            return <tr key={b.bookingId}>
            <td>{b.bookingId}</td>
            <td>{b.customerItem.name}</td>
              <td style={{whiteSpace: 'nowrap'}}>{b.bookingDate}</td>
              <td style={{whiteSpace: 'nowrap'}}>{b.bookingTime}</td>
              <td>{b.serviceType}</td>
              <td>
                <ButtonGroup>
                  <Button size="sm" color="secondary" tag={Link} to={"/order/add/" + b.bookingId}>Order</Button>
                  <Button size="sm" color="primary" tag={Link} to={"/booking/" + b.bookingId}>Update</Button>
                  <Button size="sm" color="danger" onClick={()=>this.deleteBooking(b.bookingId)}>Delete</Button>
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
          
          <h3>Booking List</h3>
          <Table className="mt-4">
            <thead>
              <tr>
                <th width="20%">Booking Id</th>
                <th width="20%">Customer Item</th>
                <th width="20%">Booking Date</th>
                <th width="10%">Booking Time</th>
                <th>Service Type</th>
                <th width="10%">Actions</th>
              </tr>
            </thead>
            <tbody>
            {bookingList}
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
export default BookingComponent;