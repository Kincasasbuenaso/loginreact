import { types } from '../types/types';
/*
    {
        register:false
    }

*/
export const authReducer = ( state = {}, action ) => {

    switch ( action.type ) {
        case types.registered:
            return {
                registered: action.auth.registered,
            }
    
        default:
            return state;
    }

}