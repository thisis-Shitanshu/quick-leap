import React from 'react'

import logo from '../../assets/logo-vector.svg';
import './Footer.styles.scss';

const Footer = () => {
    return (
        <footer>
            <div className="footer-primary">
                <div className="brand">
                    <div className='footer-brand'>
                        <a href="/">
                            <img src={logo} alt="logo"/>
                        </a>
                    </div>
                    <div className="copy-right">
                        <p>&copy; Quick Leap 2019</p>
                    </div>
                </div>

                <div className="navigation">
                    <div className='list-item'>
                        <a href="/about-us">
                            About Us
                        </a>
                    </div>
                    <div className='list-item'>
                        <a href="/jobseekers">
                            Jobseekers
                        </a>
                    </div>
                    <div className='list-item'>
                        <a href="/we-are-hiring">
                            We are Hiring!
                        </a>
                    </div>
                    <div className='list-item'>
                        <a href="/contact-us">
                            Contact Us
                        </a>
                    </div>
                    <div className='list-item'>
                        <a href="/admin/login">
                            Log in
                        </a>
                    </div>
                </div>

                <div className='social-link'>
                    <div className='list-item'>
                        <a href="https://medium.com/">
                            <i className="fab fa-medium-m"> Medium </i>
                        </a>
                    </div>
                    <div className='list-item'>
                        <a href="https://www.instagram.com/">
                            <i className="fab fa-instagram"> Instagram </i>
                        </a>
                    </div>
                    <div className='list-item'>
                        <a href="https://twitter.com/">
                            <i className="fab fa-twitter-square"> Twitter </i>
                        </a>
                    </div>
                    <div className='list-item'>
                        <a href="https://www.facebook.com/">
                            <i className="fab fa-facebook-square"> Facebook </i>
                        </a>
                    </div>
                </div>
            </div>

            <div className="footer-secondary">
                <div className="address">
                    <div className='address'>Vasant Kunj, New Delhi</div>
                    <div className="tel">
                        <a href="tel:+918179501645">+91-8179501645</a>
                    </div>
                    <div className="email">
                        <a href="mailto:krishna@quickleap.co.in">krishna@quickleap.co.in</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;