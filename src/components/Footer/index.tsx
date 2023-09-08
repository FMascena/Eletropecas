import LogoFooter from '../../assets/Sub-logo-principal2.png';
import LogoFB from "../../assets/facebook.svg"
import LogoInsta from "../../assets/instagram.svg"
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
                <div className='maps'>
                    <h1>Nossos endereços</h1>
                    <p>Lojas: CE | RN <br />
                       Rua General Lima da Silva, 85 - Aerolândia, <br />
                       Fortaleza - CE. CEP  60850-430. <br />
                       (85) 98663-1361
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