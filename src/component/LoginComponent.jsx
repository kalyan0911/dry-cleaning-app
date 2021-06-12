import React, { Component } from 'react';
import '../App.css';
import HeaderComponent from './HeaderComponent';
import CustomerService from '../service/CustomerService';
import FooterComponent from './FooterComponent';

class LoginComponent extends Component {
    constructor(props){
        super(props)
        this.state={
            userId:'',
            password:'',
            error:''
        }
    }
    changeUserIdHandler= (event) => {
        this.setState({userId: event.target.value});
    }
    changePasswordHandler= (event) => {
        this.setState({password: event.target.value});
    }
    loginCustomer= (event) => {
        event.preventDefault();
        let user={userId:this.state.userId, password:this.state.password};
        CustomerService.loginCustomer(user).then((response)=>{
            window.localStorage.setItem('userId',(response.data.userId));
            this.props.history.push('/dashboard');},
            (error)=>{
                this.setState({error:"UserId or password is not valid"});
                console.log(this.state.error);
            });
    }
    cancel(){
        this.props.history.push('/');
    }
    render(){
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
                                            <input placeholder="UserId" name="UserId" className="form-control" 
                                                value={this.state.userId} onChange={this.changeUserIdHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Password </label>
                                            <input placeholder="Password" name="Password" className="form-control" 
                                                value={this.state.password} onChange={this.changePasswordHandler}/>
                                        </div>
                                        <div className="error"> {this.state.error}</div>
                                        <br></br>
                                        <button className="btn btn-success" onClick={this.loginCustomer}>Login</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                </div>
                <div className="App-footer">
                    <FooterComponent></FooterComponent>
                </div>
            </div>
        );
    }
}
export default LoginComponent