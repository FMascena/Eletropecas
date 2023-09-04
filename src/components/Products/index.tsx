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

function Products() {
    return (
        <div className="container-products" id="products">
            <div className='products-background'>
                <h1 className='titulo-produtos'>Categorias de Produtos</h1>
            </div>
            <div className='container-product'>
                <div className='product-box'>
                    <img src={Eletrica} alt="Alternadores" className='product' />
                </div>
                <div className='product-box'>
                    <img src={Quimicos} alt="Ventiladores" className='product' />
                </div>
                <div className='product-box'>
                    <img src={Suspensao} alt="Bobina de Campo" className='product' />
                </div>
                <div className='product-box'>
                    <img src={Fitas} alt="Kits Reparo" className='product' />
                </div>
                <div className='product-box'>
                    <img src={Interruptores} alt="Lâmpadas" className='product' />
                </div>
                <div className='product-box'>
                    <img src={Iluminacao} alt="Fusível Lâmina" className='product' />
                </div>
                <div className='product-box'>
                    <img src={Conectores} alt="Regulador de Voltagem" className='product' />
                </div>
                <div className='product-box'>
                    <img src={Cabos} alt="Porta Escovas" className='product' />
                </div>
                <div className='product-box'>
                    <img src={Fusíveis} alt="Conjunto Planetaria" className='product' />
                </div>
            </div>
        </div>
    );
}

export default Products;