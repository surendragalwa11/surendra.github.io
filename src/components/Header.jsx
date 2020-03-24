import React, {Component} from 'react';
import {Link} from "react-router-dom";
  

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return(
            <div className='header'>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/work'>Work</Link>
                <Link to='/gallery'>Gallery</Link>
            </div>
        );
    }
}

export default Header;