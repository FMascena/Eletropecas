import React from 'react';
import ReactDOM from 'react-dom';
import LogoBanner from '../../assets/logo principal-com-slogan-horizontal.png';
import './index.css';

function About() {
    return (
        <div className="container-about">
            <img src={LogoBanner} alt="Logo Banner" className="logo-banner" />
            <p className='about-text'>
              A Eletropeças Distribuidora é uma empresa dedicada ao segmento elétrico automotivo, que iniciou suas operações em 2016. <br />
              Nosso compromisso é atender de forma eficiente e com qualidade, acompanhando a crescente demanda desse setor em constante <br />
              expansão. Nosso objetivo principal é criar uma identidade positiva no mercado em que atuamos. Estamos constantemente em <br /> 
              busca de produtos e serviços que ofereçam a melhor relação custo-benefício para nossos clientes. Acreditamos firmemente <br />
              em nossa capacidade de fornecer um atendimento de qualidade e, assim, nos tornarmos o seu parceiro preferencial.
            </p>
            <a href="https://api.whatsapp.com/message/GQAS7KR2YX66E1?autoload=1&app_absent=0" className='about-button'>
                Fale com um consultor!
            </a>
        </div>
    );
}

export default About;
