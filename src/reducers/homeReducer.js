import { types } from '../types/types';
/*
    {
        id: 1,
        qty: 10
    }

*/
export const homeReducer = ( state = {}, action ) => {

    switch ( action.type ) {
        case types.addCart:
            return {
                id: action.cart.id,
                qty: action.cart.qty
            }
    
        default:
            return state;
    }

}