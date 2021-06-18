import React, { Component } from 'react';
import '../App.css';
//import HeaderComponent from './HeaderComponent';
import CustomerItemService from '../service/CustomerItemService';
import FooterComponent from './FooterComponent';
import NavigationComponent from './NavigationComponent';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import { Link } from 'react-router-dom';

class CustomerItemComponent extends Component{
    constructor(props){
        super(props)
        this.state = {
            userId:window.localStorage.getItem("userId"),
            customerItems:[]
        }
    }
    componentDidMount(){
        if(this.state.userId==null){
            this.props.history.push('/');
        }
        CustomerItemService.getCustomerItems(this.state.userId).then(res=>{
            this.setState({customerItems:res.data});
        });
        this.forceUpdate();
    }
    deleteItems=(itemId)=>{
        CustomerItemService.deleteItems(itemId).then(res=>{
        this.setState({customerItems: this.state.customerItems.filter((item) => item.itemId !== itemId)});
      });
      this.props.history.push('/customerItem');
    }

    render(){
        const customerItemList = this.state.customerItems.map(c => {
            return <tr key={c.itemId}>
            <td>{c.itemId}</td>
              <td>{c.name}</td>
              <td>{c.color}</td>
              <td>{c.category}</td>
              <td>{c.quantity}</td>
              <td>{c.material}</td>
              <td>{c.description}</td>
              <td>
                <ButtonGroup>
                <Button size="sm" color="secondary" tag={Link} to={"/booking/add/"+c.itemId}>Book</Button>
                  <Button size="sm" color="primary" tag={Link} to={"/CustomerItem/" + c.itemId}>Update</Button>
                  <Button size="sm" color="danger" onClick={()=>this.deleteItems(c.itemId)}>Delete</Button>
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
          <div className="float-right">
            <Button color="success" tag={Link} to="/customerItem/add">Add Item</Button>
          </div>
          <h3>CustomerItem List</h3>
          <Table className="mt-4">
            <thead>
              <tr>
                <th width="10%">Item Id</th>
                <th width="10%">Name</th>
                <th width="10%">Color</th>
                <th width="10%">Category</th>
                <th width="10%">Quantity</th>
                <th width="10%">Material</th>
                <th >Description</th>
                <th width="10%">Actions</th>
              </tr>
            </thead>
            <tbody>
            {customerItemList}
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
export default CustomerItemComponent;