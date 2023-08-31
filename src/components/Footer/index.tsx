import React from 'react';
import ReactDOM from 'react-dom';
import LogoFooter from '../../assets/Sub logo principal.png';
import './index.css';

function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="logo">
                    <a href="/">
                        <img src={LogoFooter} alt="Logo" className="logo-img" />
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;