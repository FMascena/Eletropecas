import LogoHeader from "../../assets/Marca-Dagua-principal.png";
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
                        <li><a href="#about">SOBRE</a></li>
                        <li><a href="#products">PRODUTOS</a></li>
                        <li><a href="#partners">PARCEIROS</a></li>
                        <li><a href="#avaliations">DEPOIMENTOS</a></li>
                        <li><a href="#contact">CONTATO</a></li>
                    </ul>
                </div>
            </div>
        </header>
    );
}

export default Header;