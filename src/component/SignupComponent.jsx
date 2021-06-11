import React, { Component } from 'react';
import '../App.css';
import HeaderComponent from './HeaderComponent';
import CustomerService from '../service/CustomerService';

class SignupComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: '',
            email: '',
            contactNo: '',
            dob:'',
            address:{doorNo:"", street:"",area:"",city:"",state:"",pincode:""}
        }
        
        
    }
    changeNameHandler= (event) => {
        this.setState({name: event.target.value});
    }
    changeEmailHandler= (event) => {
        this.setState({email: event.target.value});
    }
    changeContactHandler= (event) => {
        this.setState({contactNo: event.target.value});
    }
    changeDobHandler= (event) => {
        this.setState({dob: event.target.value});
    }
    changeDoorHandler= (event) => {
        this.setState({doorNo: event.target.value});
    }
    changeStreetHandler= (event) => {
        this.setState({street: event.target.value});
    }
    changeAreaHandler= (event) => {
        this.setState({area: event.target.value});
    }
    changeCityHandler= (event) => {
        this.setState({city: event.target.value});
    }    
    changeStateHandler= (event) => {
        this.setState({state: event.target.value});
    }
    changePincodeHandler= (event) => {
        this.setState({pincode: event.target.value});
    }
    registerCustomer= (event) => {
        let customer={name:this.state.name,email:this.state.email,contactNo:this.state.contactNo,
        dob:this.state.dob,address:this.state.address};
        CustomerService.registerCustomer(customer).then(res=>{this.props.history.push('/');})
    }
    cancel(){
        this.props.history.push('/');
    }
    render() {
      return(
        <div>
        <div className="App-header">
            <HeaderComponent></HeaderComponent>
        </div>  
        <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                Registration Page
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label>Name: </label>
                                            <input placeholder="Name" name="Name" className="form-control" 
                                                value={this.state.name} onChange={this.changeNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Email: </label>
                                            <input placeholder="Email" name="email" type="email" className="form-control" 
                                                value={this.state.email} onChange={this.changeEmailHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Contact Number: </label>
                                            <input placeholder="Contact Number" name="contact" className="form-control" 
                                                value={this.state.contactNo} onChange={this.changeContactHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> DOB(yyyy-mm-dd): </label>
                                            <input placeholder="DOB" name="DOB" type="date" className="form-control" 
                                                value={this.state.dob} onChange={this.changeDobHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Door Number: </label>
                                            <input placeholder="Door Number" name="Door" className="form-control" 
                                                value={this.state.doorNo} onChange={this.changeDoorHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Street </label>
                                            <input placeholder="Street" name="Street" className="form-control" 
                                                value={this.state.street} onChange={this.changeStreetHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Area</label>
                                            <input placeholder="Area" name="Area" className="form-control" 
                                                value={this.state.area} onChange={this.changeAreaHandler}/>
                                        </div>      
                                        <div className = "form-group">
                                            <label>City</label>
                                            <input placeholder="City" name="City" className="form-control" 
                                                value={this.state.city} onChange={this.changeCityHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label>State</label>
                                            <input placeholder="State" name="State" className="form-control" 
                                                value={this.state.state} onChange={this.changeStateHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label>pincode</label>
                                            <input placeholder="Pincode" name="Pincode" className="form-control" 
                                                value={this.state.pincode} onChange={this.changePincodeHandler}/>
                                        </div>
                                        <button className="btn btn-success" onClick={this.registerCustomer}>Register</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>
        </div>
        </div>
      );
    }
}
export default SignupComponent
