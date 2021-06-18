import React, { Component } from 'react';
import '../App.css';
//import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent';
import NavigationComponent from './NavigationComponent';
import { Button,ButtonGroup, Container, Table } from 'reactstrap';
import { Link } from 'react-router-dom';
import CustomerService from '../service/CustomerService';

class CustomerComponent extends Component{
    constructor(props){
        super(props)
        this.state = {
            userId:window.localStorage.getItem("userId"),
            customer:'',
            doorNo:'', 
            street:'',
            area:'',
            city:'',
            state:'',
            pincode:''
        }
    }
    componentDidMount(){
        if(this.state.userId==null){
            this.props.history.push('/');
        }
        CustomerService.getCustomer(this.state.userId).then(res=>{
            this.setState({customer:res.data});
            this.setState({doorNo:res.data.address.doorNo});
            this.setState({street:res.data.address.street});
            this.setState({area:res.data.address.area});
            this.setState({city:res.data.address.city});
            this.setState({state:res.data.address.state});
            this.setState({pincode:res.data.address.pincode});

        });
    }
    // deleteItems=(itemId)=>{
    //     CustomerItemService.deleteItems(itemId).then(res=>{
    //     this.setState({customerItems: this.state.customerItems.filter((item) => item.itemId !== itemId)});
    //   });
    //   this.props.history.push('/customerItem');
    // }

    render(){
    
        return(
            <div>
                <div>
                    <NavigationComponent></NavigationComponent>
                </div>
                <Container fluid>
          <h3>My Details</h3>
          <Table className="mt-4">
            <thead>
              <tr>
                <td>User Name: <b>{this.state.customer.userId}</b></td>
              </tr><tr>
                <td> Name: <b>{this.state.customer.name}</b></td>
              </tr>
              <tr>
                <td>Email:<b> {this.state.customer.email}</b></td>
              </tr>
              <tr>
                <td>Contact Number: <b>{this.state.customer.contactNo}</b></td>
              </tr>
              <tr>
                <td>Date of Birth: <b>{this.state.customer.dob}</b></td>
              </tr>
              <tr>
                <td>Door Number: <b>{this.state.doorNo}</b></td>
              </tr>
              <tr>
                <td>Street: <b>{this.state.street}</b></td>
              </tr>
              <tr>
                <td>Area: <b>{this.state.area}</b></td>
              </tr>
              <tr>
                <td>City:<b> {this.state.city}</b></td>
              </tr>
              <tr>
                <td>State: <b>{this.state.state}</b></td>
              </tr>
              <tr>
                <td>Pincode: <b>{this.state.pincode}</b></td>
              </tr>
            </thead>
          </Table>
          <ButtonGroup>
          <Button size="sm" color="primary" tag={Link} to={"/profile/update"}>Update</Button><span>
          <Button size="sm" color="secondary" tag={Link} to={"/profile/changePassword"}>Change Password</Button>
          </span>
          </ButtonGroup>
          <br></br><br></br>
        </Container>
                <div className="App-footer">
                    <FooterComponent></FooterComponent>
                </div>
            </div>
        );
    }
}
export default CustomerComponent;