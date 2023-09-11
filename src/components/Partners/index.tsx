import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './index.css';
import { Carousel } from 'react-responsive-carousel';
import Logo1 from "../../assets/gbusch-logo.jpg";
import Logo2 from "../../assets/Hella_logo.png";
import Logo3 from "../../assets/hikari-logo.webp";
import Logo4 from "../../assets/ikro-logo.png";
import Logo5 from "../../assets/sulcarbon.jpg";
import Logo6 from "../../assets/cinoy.png"
import Logo7 from "../../assets/cobix.jpg";
import Logo8 from "../../assets/edanti.png";
import Logo9 from "../../assets/radnaq.jpg";

const Partners = () => {
    return (
        <div className="container-partners" id="partners">
            <div className='partners-background'>
                <h1 className='titulo-partners'>Nossos Parceiros</h1>
            </div>
            <div className="carousel-partners">
                <h1>Conheça alguns de nossos parceiros</h1>
                <Carousel showArrows={true} autoPlay={true} interval={3000} infiniteLoop={true} stopOnHover={false}>
                    <div className='container-logos'>
                        <img src={Logo1} alt="Imagem 1" className='logo-partners' />
                    </div>
                    <div className='container-logos'>
                        <img src={Logo2} alt="Imagem 2" className='logo-partners' />
                    </div>
                    <div className='container-logos'>
                        <img src={Logo3} alt="Imagem 3" className='logo-partners'/>
                    </div>
                    <div className='container-logos'>
                        <img src={Logo4} alt="Imagem 4" className='logo-partners'/>
                    </div>
                    <div className='container-logos'>
                        <img src={Logo5} alt="Imagem 5" className='logo-partners'/>
                    </div>
                    <div className='container-logos'>
                        <img src={Logo6} alt="Imagem 6" className='logo-partners'/>
                    </div>
                    <div className='container-logos'>
                        <img src={Logo7} alt="Imagem 7" className='logo-partners'/>
                    </div>
                    <div className='container-logos'>
                        <img src={Logo8} alt="Imagem 8" className='logo-partners'/>
                    </div>
                    <div className='container-logos'>
                        <img src={Logo9} alt="Imagem 9" className='logo-partners'/>
                    </div>
                </Carousel>
            </div>
        </div>
    );
}

export default Partners;