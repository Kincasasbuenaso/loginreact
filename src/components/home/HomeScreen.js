import React from 'react'
import { getProductById, getProductsRecommended } from '../../selectors/getProductById'
import { Footer } from '../shared/Footer'
import { Header } from '../shared/Header'
import { Atributtes } from './Atributtes'
import { Description } from './Description'
import { Recommended } from './Recommended'


import Parser from 'html-react-parser';


export const HomeScreen = () => {

    const product = getProductById(1);

    const products = getProductsRecommended(1);

    let  stars="";

    for(let index = 1; index <= 5; index++) {

        if( (product.raiting !== 0)  && (index <= product.raiting ) ){
            
            stars += '<i class="fas fa-star"></i>'; 
        }
        else if(product.raiting === 0 || (index > product.raiting) ){
            
            stars += '<i class="far fa-star"></i>';
        }
    }   

    return (
        <>
            <Header/> 
            
            <div className="home home__container">
                <div className="row no-margin no-padding">
                    <div className="home__container-image col-xs-12 col-sm-12 col-md-6 col-lg-6 no-padding">
                        <img className="home__product-image" src={product.image} alt={product.name}/>
                    </div>
                    <div className="home__product-detail col-xs-12 col-sm-12 col-md-6 col-lg-6 no-padding">
                        <h1 className="home__product-title">
                            {product.name}
                        </h1>
                        <p className="home_reviews text-center">
                            <span className="home__stars">
                            {Parser(stars)}
                            </span>
                            <span className="home__raiting"> {product.raiting}-5 </span>
                        </p>
                        <p className="home__product-price text-center">
                            ${product.price}
                        </p>

                        <Atributtes id={product.id} sizes={product.sizes} kits={product.kits}/>

                        <Description description={product.description}/>

                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <Recommended recommended={products}/>
                    </div>
                </div>
            </div>

            <Footer/>
        </>
    )
}
