import React, { Component } from 'react';
import '../App.css';
import NavigationComponent from './NavigationComponent';
import CustomerService from '../service/CustomerService';
import FooterComponent from './FooterComponent';

class UpdateCustomerComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            userId:window.localStorage.getItem('userId'),
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
            pincode:''
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

    componentDidMount(){
        if(this.state.userId==null){
            this.props.history.push('/');
        }
        CustomerService.getCustomer(this.state.userId).then(res=>{
            this.setState({name:res.data.name});
            this.setState({email:res.data.email});
            this.setState({contactNo:res.data.contactNo});
            this.setState({dob:res.data.dob});
            this.setState({password:res.data.password});
            this.setState({doorNo:res.data.address.doorNo});
            this.setState({street:res.data.address.street});
            this.setState({area:res.data.address.area});
            this.setState({city:res.data.address.city});
            this.setState({state:res.data.address.state});
            this.setState({pincode:res.data.address.pincode});

        });
    }
    validateUserId=(event) => {
        event.preventDefault();
        this.setState({userId: event.target.value});
        CustomerService.getCustomer(event.target.value).then((response)=>{
            this.setState({error:"UserId already exists"});
        },(error)=>{
            this.setState({error:''});
        })
    }
    updateCustomer= (event) => {
        event.preventDefault();
        let customer={name:this.state.name,email:this.state.email,contactNo:this.state.contactNo,
        dob:this.state.dob,password:this.state.password,userId:this.state.userId,address:{doorNo:this.state.doorNo,
        street:this.state.street, area:this.state.area, city:this.state.city,state:this.state.state,
        pincode:this.state.pincode}};
        CustomerService.updateCustomer(customer).then(res=>{this.props.history.push('/profile');});
    }
    cancel(){
        this.props.history.push('/profile');
    }
    render() {
      return(
        <div>
        <div>
            <NavigationComponent></NavigationComponent>
        </div> 
        <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h1>Update Profile</h1>
                                <div className = "card-body">
                                    <form method="post" onSubmit={this.updateCustomer}>
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
                                            <input placeholder="Contact Number" pattern="[7-9]{1}[0-9]{9}" 
                                            title="Phone number with 7-9 and remaing 9 digit with 0-9"
                                             name="contact" className="form-control" 
                                                value={this.state.contactNo} onChange={this.changeContactHandler} required/>
                                        </div>
                                        <div className = "form-group">
                                            <label> DOB: </label>
                                            <input placeholder="DOB" name="DOB" type="date" max="2021-12-31" className="form-control" 
                                                value={this.state.dob} onChange={this.changeDobHandler} required/>
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
                                        <input type="submit" id="UpdateProfileBtn" className="btn btn-success" value="Update"></input>
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
      );
    }
}
export default UpdateCustomerComponent;
