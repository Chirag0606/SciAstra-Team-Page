import React, { Component } from 'react';
import "./NavbarStyles.css";
import Logo from "../Pictures/logo.webp";

class Navbar extends Component {
    state = { clicked: false }
    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }
    render() {
        return (
            <nav>
                <a class="navbar-brand" href="#">
                    <img src={Logo} width="70" height="70" alt="logo" />
                </a>
                <div>
                    <ul id="navbar" className={this.state.clicked ? "#navbar active" : "#navbar"}>
                        <li><a href="/">HOME</a></li>
                        <li><a href="/">COURSES</a></li>
                        <li><a href="/">SELECTIONS</a></li>
                        <li><a href="/">BLOGS</a></li>
                        <li><a href="/">MATERIALS</a></li>
                        <li><a className="active" href="/">TEAM</a></li>
                        <li><a href="/">CONTACT US</a></li>
                        <a class="btn btn-primary" href="#" role="button">LOGIN</a>
                    </ul>
                </div>
                <div id="mobile" onClick={this.handleClick}>
                    <i id="bar" className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
                </div>
            </nav>
        )
    }
}

export default Navbar