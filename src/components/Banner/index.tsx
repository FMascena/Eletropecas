import React from 'react';
import ReactDOM from 'react-dom';
import IMGBanner from '../../assets/banner-cia.jpg';
import './index.css';

function Banner() {
    return (
        <div className="container-banner">
            <img src={IMGBanner} alt="Banner" className="banner-img" />
        </div>
    );
}

export default Banner;