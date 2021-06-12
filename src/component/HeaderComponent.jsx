import React, { Component } from 'react'

class HeaderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    logoutCustomer= (event) => {
        window.localStorage.clear();
        
    }

    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <a href="/" className="navbar-brand">Dry Cleaning App</a>
                    <button className="btn btn-success" onClick={this.logoutCustomer}><a href="/">Logout</a></button>
                    </nav>
                </header>
            </div>
        )
    }
}

export default HeaderComponent