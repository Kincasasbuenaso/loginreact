import { types } from '../types/types';


export const registered = (registered) => ({
    type: types.registered,
    auth: {
        registered
    }
});
