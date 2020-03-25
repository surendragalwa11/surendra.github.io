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
                <NavLink to='/portfolio' exact  activeClassName='active-link' >Home</NavLink>
                <NavLink to='/portfolio/about' activeClassName='active-link'>About</NavLink>
                <NavLink to='/portfolio/work' activeClassName='active-link'>Work</NavLink>
                <NavLink to='/portfolio/gallery' activeClassName='active-link'>Gallery</NavLink>
            </div>
        );
    }
}

export default Header;