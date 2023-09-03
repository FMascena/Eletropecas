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
            name: 'Jane Smith',
            company: 'XYZ Creative',
            message:
                'Pellentesque tincidunt libero id eros facilisis, in suscipit libero luctus. Nullam fringilla odio et elit malesuada dapibus.',
        },
        {
            name: 'Bob Johnson',
            company: '123 Tech',
            message:
                'Sed vestibulum elit eu libero fermentum, eget tincidunt urna fermentum. Nunc laoreet nibh vel lectus scelerisque tincidunt.',
        },
    ];

    return (
        <div className="container-avaliations">
            <div className='container-background'>
                <h1 className='titulo-avaliations'>Depoimentos</h1>
            </div>
            <div className="testimonials-container">
                <Carousel showArrows={true}>
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