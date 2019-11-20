import React from 'react';

import logo from '../../assets/logo-vector.svg';
import './Header.styles.scss';

const Header = () => {
    return (
        <nav>
            <div className='nav-brand'>
                <a href="/">
                    <img src={logo} alt="logo"/>
                </a>
            </div>
            <div className='navigation'>
                <div className='nav-list'>
                    <div className='list-item'>
                        <a href="/">
                            HOME
                        </a>
                    </div>
                    <div className='list-item'>
                        <a href="/about-us">
                            ABOUT US
                        </a>
                    </div>
                    <div className='list-item'>
                        <a href="/jobseekers">
                            JOBSEEKERS
                        </a>
                    </div>
                    <div className='list-item'>
                        <a href="/contact-us">
                            CONTACT US
                        </a>
                    </div>
                </div>

                <div className='social-link'>
                    <div className='list-item'>
                        <a href="https://medium.com/">
                            <i className="fab fa-medium-m"></i>
                        </a>
                    </div>
                    <div className='list-item'>
                        <a href="https://www.instagram.com/">
                            <i className="fab fa-instagram"></i>
                        </a>
                    </div>
                    <div className='list-item'>
                        <a href="https://twitter.com/">
                            <i className="fab fa-twitter-square"></i>
                        </a>
                    </div>
                    <div className='list-item'>
                        <a href="https://www.facebook.com/">
                            <i className="fab fa-facebook-square"></i>
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Header;