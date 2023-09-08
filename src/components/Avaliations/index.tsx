import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Avaliation1 from "../../assets/avaliation-1.png";
import Avaliation2 from "../../assets/avaliation-2.png";
import Avaliation3 from "../../assets/avaliation-3.png";
import Avaliation4 from "../../assets/avaliation-4.png";
import Avaliation5 from "../../assets/avaliation-5.png";
import Avaliation6 from "../../assets/avaliation-6.png";
import "./index.css"

function Avaliations() {
    return (
        <div className="container-avaliations" id="avaliations">
            <div className='avaliations-background'>
                <h1 className='titulo-avaliations'>Depoimentos</h1>
            </div>
            <div className="carousel-container">
                <Carousel
                    autoPlay={true} interval={3000}
                    infiniteLoop={true}
                    stopOnHover={true}
                    showThumbs={false}
                >
                    <div className='container-carousel-img'>
                        <img src={Avaliation1} alt="Imagem 1" className='avaliation-img' />
                    </div>
                    <div>
                        <img src={Avaliation2} alt="Imagem 2" className='avaliation-img' />
                    </div>
                    <div>
                        <img src={Avaliation3} alt="Imagem 3" className='avaliation-img' />
                    </div>
                    <div>
                        <img src={Avaliation4} alt="Imagem 4" className='avaliation-img' />
                    </div>
                    <div>
                        <img src={Avaliation5} alt="Imagem 5" className='avaliation-img' />
                    </div>
                    <div>
                        <img src={Avaliation6} alt="Imagem 6" className='avaliation-img' />
                    </div>
                </Carousel>
            </div>
        </div>
    );
}

export default Avaliations;
