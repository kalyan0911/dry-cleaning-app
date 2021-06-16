import React, { Component } from 'react';
import '../App.css';
//import HeaderComponent from './HeaderComponent';
import CustomerItemService from '../service/CustomerItemService';
import CustomerService from '../service/CustomerService';
import FooterComponent from './FooterComponent';
import NavigationComponent from './NavigationComponent';
// import { Button, ButtonGroup, Container, Table } from 'reactstrap';
// import { Link } from 'react-router-dom';

class AddItemComponent extends Component{
    constructor(props){
        super(props)
        this.state={
            name:'',
            color:'',
            category:'',
            quantity:'',
            material:'',
            description:'',
            customer:''
        }
        
    }
    addItem=(event)=>{
        event.preventDefault();
        let item = {itemId:Math.floor(Math.random()*1000),
            name:this.state.name,
            color:this.state.color,
            category:this.state.category,
            quantity:this.state.quantity,
            material:this.state.material,
            description:this.state.description,
            customer:this.state.customer
        };
        CustomerItemService.addItem(item);
        this.props.history.push('/customerItem');
        this.props.history.go();
    }
    cancel(){
        this.props.history.push('/booking');
    }
    changeName=(event)=>{
        this.setState({name:event.target.value});
    }
    changeColor=(event)=>{
        this.setState({color:event.target.value});
    }
    changeCategory=(event)=>{
        this.setState({category:event.target.value});
    }
    changeQuantity=(event)=>{
        this.setState({quantity:event.target.value});
    }
    changeMaterial=(event)=>{
        this.setState({material:event.target.value});
    }
    changeDescription=(event)=>{
        this.setState({description:event.target.value});
    }
    componentDidMount(){
        let userId=window.localStorage.getItem("userId");
        if(userId==null){
            this.props.history.push('/');
        }
        CustomerService.validateUserId(userId).then(res=>{
            this.setState({customer:res.data});
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
                                    <form method="post" onSubmit={this.addItem}>
                                    <div className = "form-group">
                                            <label>Name:</label>
                                            <input placeholder="Name" name="Name"  className="form-control" onChange=
                                            {this.changeName}
                                            value={this.state.name}
                                            required/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Color: </label>
                                            <input placeholder="Color" name="Color" className="form-control" 
                                                value={this.state.color} onChange={this.changeColor} required/>
                                        </div>
                                        <div className = "form-group">
                                            <label>Category: </label>
                                            <input placeholder="Category" name="Category"  className="form-control" 
                                                value={this.state.category} onChange={this.changeCategory} required/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Quantity: </label>
                                            <input placeholder="Quantity" name="Quantity" className="form-control" 
                                                value={this.state.quantity} onChange={this.changeQuantity} required/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Material: </label>
                                            <input placeholder="Material" name="Material" className="form-control" 
                                                value={this.state.material} onChange={this.changeMaterial} required/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Description: </label>
                                            <input placeholder="Description" name="Description" className="form-control" 
                                                value={this.state.description} onChange={this.changeDescription} required/>
                                        </div>
                                       
                                        <input type="submit" id="addItem" className="btn btn-success" value="Add"></input>
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
export default AddItemComponent;