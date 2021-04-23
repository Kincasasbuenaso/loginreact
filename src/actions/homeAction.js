import { types } from '../types/types';


export const addCart = (id, qty) => ({
    type: types.addCart,
    cart: {
        id,
        qty
    }
});

