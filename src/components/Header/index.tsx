import React from 'react';
import ReactDOM from 'react-dom';
import LogoHeader from '../../assets/logo-principal-fundo-preto-horizontal.png';
import './index.css';

function Header() {
    return (
        <header>
            <div className="container">
                <div className="logo-header">
                    <a href="/">
                        <img src={LogoHeader} alt="Logo" className="img-logo-header" />
                    </a>
                </div>
                <div>
                    <ul>
                        <li><a href="/">HOME</a></li>
                        <li><a href="/sobre">SOBRE</a></li>
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