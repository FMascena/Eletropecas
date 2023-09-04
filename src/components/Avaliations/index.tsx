import React from 'react';
import ReactDOM from 'react-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './index.css';

function Avaliations() {
    const testimonialsData = [
        {
            name: 'Felipe Ferreira',
            company: 'Auto Peças Felipe',
            message:
                'Sou cliente há 3 anos, excelente atendimento, equipe fera. E sempre trazendo produtos de qualidade e com preço justo.',
        },
        {
            name: 'João Tomás',
            company: 'Cliente',
            message:
                "Atendimento de primeira, peças para motor de partida e alternador tem várias, você encontra tudo que precisa. Não precisei sair para nenhum outro local, pois tinha tudo que precisei."        
        },
        {
            name: 'Neto Oscár',
            company: 'Cliente',
            message:
                'Otimo, Atendimento, tudo em pecas para alternadores e Motor de Partida!!',
        },
        {
            name: 'Elisângela',
            company: 'Cliente',
            message:
                'Profissional e referência no mercado!',
        },
        {
            name: 'José Rodrigues',
            company: 'Boas Novas Remanufaturados',
            message:
                'Loja com uma equipe de atendimento top.',
        },
    ];

    return (
        <div className="container-avaliations">
            <div className='avaliations-background'>
                <h1 className='titulo-avaliations'>Depoimentos</h1>
            </div>
            <div className="testimonials-container">
                <Carousel showArrows={true} infiniteLoop={true} stopOnHover={false}>
                    {testimonialsData.map((testimonial, index) => (
                        <div key={index} className="testimonial">
                            <h3>{testimonial.name}</h3>
                            <p>{testimonial.company}</p>
                            <p>{testimonial.message}</p>
                        </div>
                    ))}
                </Carousel>
            </div>
        </div>
    );
}

export default Avaliations;