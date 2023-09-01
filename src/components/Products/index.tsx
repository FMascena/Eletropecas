import React from 'react';
import ReactDOM from 'react-dom';
import Alternadores from "../../assets/alternadores.png"
import Ventiladores from "../../assets/ventiladores.png"
import BobinaDeCampo from "../../assets/bobina-de-campo.png"
import KitsReparo from "../../assets/kits-reparo.png"
import Lampadas from "../../assets/lampadas.png"
import FusivelLamina from "../../assets/fusivel-lamina.png"
import ReguladorVoltagem from "../../assets/regulador-voltagem.png"
import PortaEscovas from "../../assets/porta-escovas.png"
import ConjuntoPlanetaria from "../../assets/conjunto-planetaria.png"
import './index.css';

function Products() {
    return (
        <div className="container-products">
            <div className='container-background'>
                <h1 className='titulo-produtos'>Produtos</h1>
            </div>
            <div className='container-product'>
                <div className='product-box'>
                    <img src={Alternadores} alt="Alternadores" className='product' />
                </div>
                <div className='product-box'>
                    <img src={Ventiladores} alt="Ventiladores" className='product' />
                </div>
                <div className='product-box'>
                    <img src={BobinaDeCampo} alt="Bobina de Campo" className='product' />
                </div>
                <div className='product-box'>
                    <img src={KitsReparo} alt="Kits Reparo" className='product' />
                </div>
                <div className='product-box'>
                    <img src={Lampadas} alt="Lâmpadas" className='product' />
                </div>
                <div className='product-box'>
                    <img src={FusivelLamina} alt="Fusível Lâmina" className='product' />
                </div>
                <div className='product-box'>
                    <img src={ReguladorVoltagem} alt="Regulador de Voltagem" className='product' />
                </div>
                <div className='product-box'>
                    <img src={PortaEscovas} alt="Porta Escovas" className='product' />
                </div>
                <div className='product-box'>
                    <img src={ConjuntoPlanetaria} alt="Conjunto Planetaria" className='product' />
                </div>
            </div>
        </div>
    );
}

export default Products;