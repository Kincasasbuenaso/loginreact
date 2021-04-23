import { useState } from "react"


export const useFormCustom = ( initialState = {} ) => {
    
    const [values, setValues] = useState(initialState);

    const handleInputChange = ({ target }) => {

        setValues({
            ...values,
            [ target.name ]: target.value
        });

    }

    return [ values, handleInputChange ];

}