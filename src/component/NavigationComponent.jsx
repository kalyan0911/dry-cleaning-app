import React, { Component } from 'react'
import { Navbar, Nav,} from 'react-bootstrap'
import logo from '../Drycleanlogo.jpg';
import '../CSS/navigation.css';

export class NavigationComponent extends Component {  
    
    logoutCustomer= (event) => {
        window.localStorage.clear();
        
    }

    render() {
        return (
            <div>
                <Navbar className="sticky-nav" collapseOnSelect expand='xl' variant='dark' bg='dark'>
                        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                        <Navbar.Collapse id='responsive-navbar-nav'>
                            <img className="img-responsive" src={logo}  alt='cg logo'/>
                            <h2 className="heading">Dry Cleaning App </h2>
                            <Nav className="ml-auto">
                                <Nav.Link href='/dashboard'>Home</Nav.Link>
                                <Nav.Link href='/booking'>Booking</Nav.Link>
                                <Nav.Link href='/customerItem'> CustomerItem</Nav.Link>
                                <Nav.Link href='/order'>Order</Nav.Link>
                                <Nav.Link href="/payment">Payments</Nav.Link>
                                <Nav.Link href="/profile">Profile</Nav.Link>
                                {/* <Link to='footer' className="contact">Contact Us</Link> */}
                                <Nav.Link href="/" onClick={this.logoutCustomer}>Logout</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                </Navbar>
            </div>
            )
        }
    }
        
export default NavigationComponent;
        