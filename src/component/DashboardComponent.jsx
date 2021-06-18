import React, { Component } from 'react';
import '../App.css';
//import HeaderComponent from './HeaderComponent';
// import CustomerService from '../service/CustomerService';
import FooterComponent from './FooterComponent';
import NavigationComponent from './NavigationComponent';

class DashboardComponent extends Component{
    constructor(props){
        super(props)
        this.state = {
            userId:window.localStorage.getItem("userId")
        }
    }
    componentDidMount(){
        if(this.state.userId==null){
            this.props.history.push('/');
        }
    }
    render(){
        return(
            <div>
                <div>
                    <NavigationComponent></NavigationComponent>
                </div>
                <h1 style={{color:"blue"}}>Welcome {this.state.userId}</h1>
                <div className="App-footer">
                    <FooterComponent></FooterComponent>
                </div>
            </div>
        )
    }
}
export default DashboardComponent;