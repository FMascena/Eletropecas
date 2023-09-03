import React from 'react';
import ReactDOM from 'react-dom';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './index.css';
import { Carousel } from 'react-responsive-carousel';
import Logo1 from "../../assets/gbusch-logo.jpg"
import Logo2 from "../../assets/Hella_logo.png"
import Logo3 from "../../assets/hikari-logo.webp"

function Partners() {
    return (
        <div className="container-partners">
            <div className='container-background'>
                <h1 className='titulo-partners'>Parceiros</h1>
            </div>
            <div className="carousel-partners">
                <h1>Conheça alguns de nossos parceiros</h1>
                <Carousel showArrows={true}>
                    <div className='container-logos'>
                        <img src={Logo1} alt="Imagem 1" className='logo-partners' />
                    </div>
                    <div className='container-logos'>
                        <img src={Logo2} alt="Imagem 2" className='logo-partners' />
                    </div>
                    <div className='container-logos'>
                        <img src={Logo3} alt="Imagem 3" className='logo-partners'/>
                    </div>
                </Carousel>
            </div>
        </div>
    );
}

export default Partners;