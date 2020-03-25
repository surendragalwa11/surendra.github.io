import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
  

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return(
            <div className='header'>
                <NavLink to='/' exact  activeClassName='active-link' >Home</NavLink>
                <NavLink to='/about' activeClassName='active-link'>About</NavLink>
                <NavLink to='/work' activeClassName='active-link'>Work</NavLink>
                <NavLink to='/gallery' activeClassName='active-link'>Gallery</NavLink>
            </div>
        );
    }
}

export default Header;