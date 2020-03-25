import React, {Component} from 'react';

import userInfo from '../data/User.json';
import userImage from '../data/background.jpeg';
import resume from '../data/resume.pdf';
import mobileIcon from '../data/icons/mobile.png';
import linkedinIcon from '../data/icons/linkedin.png';
import hackerrankIcon from '../data/icons/hackerrank.png';
import githubIcon from '../data/icons/github.png';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return(
            <div className='contact-page page'>
                <h1 className='title'>
                    {userInfo.contact.title}
                </h1>
                <div className='description'>
                    <div className='user'>
                        <img src={userImage} className='user-image' alt={userInfo.contact.name} />
                        <h3 className='user-name'>{userInfo.contact.name}</h3>
                        <h3 className='call-section'><img src={mobileIcon} alt='mobile' />{userInfo.contact.mobile}</h3>
                        <h3>
                            <a href={resume} download className='active-link'>
                                {userInfo.contact.resume_label}
                            </a>
                        </h3>
                        <div className='social-profile'>
                            <a href={userInfo.contact.linkedin_url} target='_blank' rel="noopener noreferrer">
                                <img src={linkedinIcon} alt='linkedin' />
                            </a>
                            <a href={userInfo.contact.github_url} target='_blank' rel="noopener noreferrer">
                                <img src={githubIcon} alt='github' />
                            </a>
                            <a href={userInfo.contact.hackerrank_url} target='_blank' rel="noopener noreferrer">
                                <img src={hackerrankIcon} alt='hackerrank' />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;