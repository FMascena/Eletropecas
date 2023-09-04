import IMGBanner from '../../assets/banner-3.png';
import './index.css';

function Banner() {
    return (
        <div className="container-banner">
            <img src={IMGBanner} alt="Banner" className="banner-img" />
        </div>
    );
}

export default Banner;