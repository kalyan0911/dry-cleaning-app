import React, { Component } from 'react';
import '../App.css';
import NavigationComponent from './NavigationComponent';
import CustomerService from '../service/CustomerService';
import FooterComponent from './FooterComponent';

class ChangePasswordComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            userId:window.localStorage.getItem('userId'),
            password: ''
        }
    }
    passwordHandler=(event)=>{
        this.setState({password:event.target.value});
    }

    changePassword=(event) =>{
        event.preventDefault();
        let user={  userId:this.state.userId, password:this.state.password };
        CustomerService.changePassword(user).then(res=>{this.props.history.push('/profile');});
    }

    cancel=()=>{
        this.props.history.push('/profile');
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
                                    <h1>Change Password</h1>
                                    <div className = "card-body">
                                        <form method="post" onSubmit={this.changePassword}>
                                            <div className = "form-group">
                                                <label>New Password: </label>
                                                <input placeholder="New Password" type="password" name="password"  className="form-control" 
                                                    value={this.state.password} onChange={this.passwordHandler} required/>
                                            </div>
                                            
                                            <br></br>
                                            <input type="submit" id="ChangePasswordBtn" className="btn btn-success" value="Update"></input>
                                            {/* <button className="btn btn-success" onClick={this.registerCustomer}>Register</button> */}
                                            <button className="btn btn-danger" onClick={this.cancel} style={{marginLeft: "10px"}}>Cancel</button>
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
export default ChangePasswordComponent;
