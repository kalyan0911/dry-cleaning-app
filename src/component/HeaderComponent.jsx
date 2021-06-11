import React, { Component } from 'react'

class HeaderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <a href="localhost:3000/" className="navbar-brand">Dry Cleaning App</a>
                    </nav>
                </header>
            </div>
        )
    }
}

export default HeaderComponent