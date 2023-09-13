import LogoFooter from '../../assets/SUBLOGO-PRINCIPAL-SEM-FUNDO-3.png';
import LogoFB from "../../assets/facebook.svg"
import LogoInsta from "../../assets/instagram.svg"
import './index.css';

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="logo">
                    <a href="/">
                        <img src={LogoFooter} alt="Logo" className="logo-img" />
                    </a>
                </div>
                <div className='rights'>
                    <p> <br />
                        Eletropeças Distribuidora Comercio e Servicos LTDA <br />
                        CNPJ 25.101.773/0001-95 <br />
                        <br />
                        <br />
                        &copy; Copyright 2023. Todos os direitos reservados.
                    </p>
                </div>
                <div className='maps'>
                    <h1>Nossos endereços</h1>
                    <p>
                        Rua General Lima da Silva, 85 - Aerolândia, <br />
                        Fortaleza - CE. CEP  60850-430. <br />
                        (85) 98663-1361 <br />
                        <br />
                        Av. das Fronteiras, loja 01, N° 1221 - <br />
                        Nossa Sra. da Apresentação, Natal - RN, CEP 59114-275 <br />
                        (84) 99972-4831
                    </p>
                </div>
                <div className='social'>
                    <h1>Redes Sociais</h1>
                    <a href="#">
                        <img src={LogoFB} alt="facebook" className='logo-social' />
                    </a>
                    <a href="https://www.instagram.com/eletropecasdistribuidora/">
                        <img src={LogoInsta} alt="instagram" className='logo-social' />
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;