import Eletrica from "../../assets/ELETRICA.png"
import Interruptores from "../../assets/Interruptores-1.png"
import Fitas from "../../assets/FITAS-1.png"
import Suspensao from "../../assets/SUSPENSAO.png"
import Quimicos from "../../assets/QUIMICOS.png"
import Iluminacao from "../../assets/ILUMINAÇÃO-1.png"
import Conectores from "../../assets/CONECTORES-1.png"
import Cabos from "../../assets/CABOS-1.png"
import Fusíveis from "../../assets/FUSIVEIS-1.png"
import './index.css';

const Products = () => {
    return (
        <div className="container-products" id="products">
            <div className='products-background'>
                <h1 className='titulo-produtos'>Categorias de Produtos</h1>
            </div>
            <div className='container-product'>
                <div className='product-box'>
                    <img src={Eletrica} alt="Eletrica" className='product' />
                </div>
                <div className='product-box'>
                    <img src={Quimicos} alt="Quimicos" className='product' />
                </div>
                <div className='product-box'>
                    <img src={Suspensao} alt="Suspensao" className='product' />
                </div>
                <div className='product-box'>
                    <img src={Fitas} alt="Fitas" className='product' />
                </div>
                <div className='product-box'>
                    <img src={Interruptores} alt="Interruptores" className='product' />
                </div>
                <div className='product-box'>
                    <img src={Iluminacao} alt="Iluminacao" className='product' />
                </div>
                <div className='product-box'>
                    <img src={Conectores} alt="Conectores" className='product' />
                </div>
                <div className='product-box'>
                    <img src={Cabos} alt="Cabos" className='product' />
                </div>
                <div className='product-box'>
                    <img src={Fusíveis} alt="Fusíveis" className='product' />
                </div>
            </div>
        </div>
    );
}

export default Products;