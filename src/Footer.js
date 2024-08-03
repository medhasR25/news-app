// src/Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="contact-details">
                    <h3>Contact Us</h3>
                    <p>Email: kmrnews@gmail.com</p>
                    <p>Phone: 98982 25252</p>
                </div>
                <div className="social-media">
                    <h3>Follow Us</h3>
                    <div className="social-icons">
                        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                            <img src="./fblogo.png" alt="FaceBook" />
                        </a>
                        
                        <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
                            <img src="./xlogo.png" alt="X" />
                        </a>
                        <a href="https://www.instagram.com/medhas_reddy/?hl=en" target="_blank" rel="noopener noreferrer">
                            <img src="./instalogo.png" alt="Instagram" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
