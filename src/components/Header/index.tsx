import React from 'react';
import ReactDOM from 'react-dom';
import LogoHeader from '../../assets/Logo principal - fundo preto.png';
import './index.css';

function Header() {
    return (
        <header>
            <div className="container">
                <div className="logo">
                    <a href="/">
                        <img src={LogoHeader} alt="Logo" className="logo-img" />
                    </a>
                </div>
                <div>
                    <ul>
                        <li><a href="/">HOME</a></li>
                        <li><a href="/sobre">SOBRE NÓS</a></li>
                        <li><a href="/produtos">PRODUTOS</a></li>
                        <li><a href="/servicos">SERVIÇOS</a></li>
                        <li><a href="/contato">CONTATO</a></li>
                    </ul>
                </div>
            </div>
        </header>
    );
}

export default Header;