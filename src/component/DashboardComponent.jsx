import React, { Component } from 'react';
import '../App.css';
//import HeaderComponent from './HeaderComponent';
// import CustomerService from '../service/CustomerService';
import FooterComponent from './FooterComponent';
import NavigationComponent from './NavigationComponent';
import logo from '../Dry clean img.png'
import logo2 from '../drygif.gif'
class DashboardComponent extends Component{
    constructor(props){
        super(props)
        this.state = {
            userId:window.localStorage.getItem("userId"),
            
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
                <div>
                <h1 style={{color:"blue"}}>Welcome {this.state.userId}</h1>
                <br></br>
                <br></br>
                <span className="otherimage">
                <img src={logo2} width="500" height="300"  alt="logo"/>
                </span>
                <span className="homeimage">
                <img src={logo} width="300" height="300"  alt="logo"/>
                </span>
                </div>

                <div className="App-footer">
                    <FooterComponent></FooterComponent>
                </div>
            
            </div>
        )
    }
}
export default DashboardComponent;