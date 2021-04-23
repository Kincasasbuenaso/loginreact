import { products } from '../data/products';

export const getProductById = ( id ) => {

    return products.find( product => product.id === id );

}


export const getProductsRecommended = ( id ) => {

    return products.filter( product => product.id !== id );

}