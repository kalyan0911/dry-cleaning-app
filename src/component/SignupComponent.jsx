import React, { Component } from 'react';
import '../App.css';
import HeaderComponent from './HeaderComponent';
import CustomerService from '../service/CustomerService';
import FooterComponent from './FooterComponent';

class SignupComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            userId:'',
            name: '',
            email: '',
            contactNo: '',
            dob:'',
            password:'',
            doorNo:'', 
            street:'',
            area:'',
            city:'',
            state:'',
            pincode:'',
            error:''
        }
        
        
    }
    changeUserIdHandler=(event) => {
        this.setState({userId: event.target.value});
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
    changePasswordHandler= (event) => {
        this.setState({password: event.target.value});
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
    validateUserId=(event) => {
        event.preventDefault();
        this.setState({userId: event.target.value});
        CustomerService.validateUserId(event.target.value).then((response)=>{
            this.setState({error:"UserId already exists"});
        },(error)=>{
            this.setState({error:''});
        })
    }
    registerCustomer= (event) => {
        event.preventDefault();
        let customer={name:this.state.name,email:this.state.email,contactNo:this.state.contactNo,
        dob:this.state.dob,password:this.state.password,userId:this.state.userId,address:{doorNo:this.state.doorNo,
        street:this.state.street, area:this.state.area, city:this.state.city,state:this.state.state,
        pincode:this.state.pincode}};
        console.log(JSON.stringify(customer));
        CustomerService.registerCustomer(customer).then(res=>{this.props.history.push('/');});
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
                                    <form method="post" onSubmit={this.registerCustomer}>
                                    <div className = "form-group">
                                            <label>UserId: </label>
                                            <input placeholder="UserId" name="UserId"  className="form-control" onChange=
                                            {this.changeUserIdHandler}
                                             onBlur={this.validateUserId} required/>
                                        </div>
                                        <div className="error">{this.state.error}</div>
                                        <div className = "form-group">
                                            <label>Name: </label>
                                            <input placeholder="Name" name="Name"  className="form-control" 
                                                value={this.state.name} onChange={this.changeNameHandler} required/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Email: </label>
                                            <input placeholder="Email" type="email" name="email" className="form-control" 
                                                value={this.state.email} onChange={this.changeEmailHandler} required/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Contact Number: </label>
                                            <input placeholder="Contact Number" type="number" name="contact" className="form-control" 
                                                value={this.state.contactNo} onChange={this.changeContactHandler} required/>
                                        </div>
                                        <div className = "form-group">
                                            <label> DOB(yyyy-mm-dd): </label>
                                            <input placeholder="DOB" name="DOB" type="date"  className="form-control" 
                                                value={this.state.dob} onChange={this.changeDobHandler} required/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Password: </label>
                                            <input placeholder="Password" type="password" name="Password"  className="form-control" 
                                                value={this.state.password} onChange={this.changePasswordHandler}required/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Door Number: </label>
                                            <input placeholder="Door Number" name="Door" className="form-control" 
                                                value={this.state.doorNo} onChange={this.changeDoorHandler} required/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Street </label>
                                            <input placeholder="Street" name="Street" className="form-control" 
                                                value={this.state.street} onChange={this.changeStreetHandler} required/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Area</label>
                                            <input placeholder="Area" name="Area" className="form-control" 
                                                value={this.state.area} onChange={this.changeAreaHandler} required/>
                                        </div>      
                                        <div className = "form-group">
                                            <label>City</label>
                                            <input placeholder="City" name="City" className="form-control" 
                                                value={this.state.city} onChange={this.changeCityHandler} required/>
                                        </div>
                                        <div className = "form-group">
                                            <label>State</label>
                                            <input placeholder="State" name="State" className="form-control" 
                                                value={this.state.state} onChange={this.changeStateHandler} required/>
                                        </div>
                                        <div className = "form-group">
                                            <label>pincode</label>
                                            <input type="number" placeholder="Pincode" name="Pincode" className="form-control" 
                                                value={this.state.pincode} onChange={this.changePincodeHandler} required/>
                                        </div>
                                        <br></br>
                                        <input type="submit" id="signupbtn" className="btn btn-success" value="Register"></input>
                                        {/* <button className="btn btn-success" onClick={this.registerCustomer}>Register</button> */}
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>
        </div>
        <div className="App-footer"><FooterComponent></FooterComponent></div>
        </div>
      );
    }
}
export default SignupComponent
