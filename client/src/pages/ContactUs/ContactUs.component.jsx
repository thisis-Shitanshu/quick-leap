import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './ContactUs.styles.scss';

const ContactUs = () => {
    return (
        <div className="contact-container">
            <div className="contact-context">
                <p>I am happy to share more information and look forward to the opportunity to work together.</p>
                <br />
                <p>
                    Call/ WhatsApp: <a href="tel:+918179501645">+91-8179501645</a>
                </p>
                <p>
                    Email: <a href="mailto:krishna@quickleap.co.in">krishna@quickleap.co.in</a>
                </p>
            </div>
        </div>
    );
}

export default ContactUs;