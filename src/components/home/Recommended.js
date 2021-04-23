import React from 'react';
import '../../styles/components/_recommended.scss';

import Carousel, { slidesToShowPlugin,slidesToScrollPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';


export const Recommended = ({recommended}) => {

    return (
        <div className="recommended__container container">
            <h4 className="recommended__title mb-3">También te podría gustar</h4>
            <div className="recommended__carousel">
            <Carousel

                plugins={[
                    'centered',
                    {
                    resolve: slidesToShowPlugin,
                    options: {
                    numberOfSlides: 2,
                    },
                    },
                    {
                    resolve: slidesToScrollPlugin,
                    options: {
                    numberOfSlides: 2,
                    },
                    },
                ]}

                itemWidth={150}
                offset={10}
                >
                    {
                        recommended.map( (p) =>{
                            return (
                                <div className="slide-item" key={p.id}>
                                    <img src={p.imageSlide} alt={p.name}/>
                                    <div className="slide-item-detail">
                                        <p className="slide-product-name">{p.name}</p>
                                        <p className="slide-product-price">${p.price}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                    
                </Carousel>
            </div>
        </div>
    )
}
