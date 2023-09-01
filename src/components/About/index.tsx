import React from 'react';
import ReactDOM from 'react-dom';
import LogoBanner from '../../assets/logo principal-com-slogan-horizontal.png';
import './index.css';

function About() {
    return (
        <div className="container-about">
            <img src={LogoBanner} alt="Logo Banner" className="logo-banner" />
            <p className='about-text'>
                Nós somos a Eletropeças, uma distribuidora de peças automotivas, localizada em Fortaleza. <br />
                Fundada em 2016, e com apenas 7 anos estamos crescendo e expandindo para outros locais. <br />
                Somos especialistas em motores de partida e alternadores. Mas oferecemos também uma variedade <br />
                de outras peças de grandes marcas.
            </p>
            <a href="https://api.whatsapp.com/message/GQAS7KR2YX66E1?autoload=1&app_absent=0" className='about-button'>
                Fale com um consultor!
            </a>
        </div>
    );
}

export default About;
