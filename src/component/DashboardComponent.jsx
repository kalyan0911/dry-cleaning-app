import React, { Component } from 'react';
import '../App.css';
import HeaderComponent from './HeaderComponent';
// import CustomerService from '../service/CustomerService';
import FooterComponent from './FooterComponent';

class DashboardComponent extends Component{
    constructor(props){
        super(props)
        this.state = {
            userId:window.localStorage.getItem("userId")
        }
    }
    componentDidMount(){
        if(this.state.userId==null){
            console.log("abc");
            this.props.history.push('/');
        }
    }
    render(){
        return(
            <div>
                <div className="App-header">
                    <HeaderComponent></HeaderComponent>
                </div>  
                Welcome {this.state.userId}
                <div className="App-footer">
                    <FooterComponent></FooterComponent>
                </div>
            </div>
        )
    }
}
export default DashboardComponent;