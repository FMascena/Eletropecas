import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './index.css';
import Logo1 from "../../assets/gbusch.png";
import Logo2 from "../../assets/hella-2.png";
import Logo3 from "../../assets/hikari-2.png";
import Logo4 from "../../assets/ikro-2.png";
import Logo5 from "../../assets/sulcarbon.jpg";
import Logo6 from "../../assets/cinoy-2.png"
import Logo7 from "../../assets/cobix-2.png";
import Logo8 from "../../assets/edanti-2.png";
import Logo9 from "../../assets/radnaq-2.png";

const Partners = () => {
    const settings = {
        arrows: true,
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        pauseOnHover: false,
        slidesToShow: 3,
        slidesToScroll: 1,
    };

    return (
        <div className="container-partners" id="partners">
            <div className='partners-background'>
                <h1 className='titulo-partners'>Nossos Parceiros</h1>
            </div>
            <div className="carousel-partners">
                <h1>Conheça alguns de nossos parceiros</h1>
                <Slider {...settings} className="custom-carousel">
                    <div className='container-logos'>
                        <img src={Logo1} alt="Imagem 1" className='logo-partners' />
                    </div>
                    <div className='container-logos'>
                        <img src={Logo2} alt="Imagem 2" className='logo-partners' />
                    </div>
                    <div className='container-logos'>
                        <img src={Logo3} alt="Imagem 3" className='logo-partners' />
                    </div>
                    <div className='container-logos'>
                        <img src={Logo4} alt="Imagem 4" className='logo-partners' />
                    </div>
                    <div className='container-logos'>
                        <img src={Logo5} alt="Imagem 5" className='logo-partners' />
                    </div>
                    <div className='container-logos'>
                        <img src={Logo6} alt="Imagem 6" className='logo-partners' />
                    </div>
                    <div className='container-logos'>
                        <img src={Logo7} alt="Imagem 7" className='logo-partners' />
                    </div>
                    <div className='container-logos'>
                        <img src={Logo8} alt="Imagem 8" className='logo-partners' />
                    </div>
                    <div className='container-logos'>
                        <img src={Logo9} alt="Imagem 9" className='logo-partners' />
                    </div>
                </Slider>
            </div>
        </div>
    );
}

export default Partners;