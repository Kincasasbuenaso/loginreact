import React from 'react'
import { useDispatch } from 'react-redux';
import { useFormCustom } from '../../hooks/useFormCustom';
import { useForm } from "react-hook-form";
import { registered } from '../../actions/authAction';

export const RegisterScreen = () => {

    const dispatch = useDispatch();

    const [ formValues, handleInputChange ] = useFormCustom({
        name:'',
        lastname:'',
        email: '',
        password: '',
    });

    const { name, lastname, email, password } = formValues;


    const {  register: reg, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        console.log(data);
        dispatch(registered(true));
    };



    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} >

            <div className="mb-3">
                <label for="name" className="form-label">Nombre</label>
                <input type="text"
                        className={ errors.name  ? 'form-control input-custom error-input' : 'form-control input-custom'}
                        id="name" 
                        name="name"
                        placeholder="Kevin"
                        autoComplete="off"
                        ref={reg({  required: "nombre es requerido" })}
                        value={ name }
                        onChange={ handleInputChange }/>
                {errors.name && <p className="error-msg"><i className="ico-error"></i>{errors.name.message}</p>}
            </div>

            <div className="mb-3">
                <label for="lastname" className="form-label">Apellido</label>
                <input type="text"
                        className={ errors.lastname  ? 'form-control input-custom error-input' : 'form-control input-custom'}
                        id="lastname"
                        name="lastname"
                        placeholder="Casasbuenas"
                        autoComplete="off"
                        ref={reg({  required: "apellido es requerido" })}
                        value={ lastname }
                        onChange={ handleInputChange }/>
                {errors.lastname && <p className="error-msg"><i className="ico-error"></i>{errors.lastname.message}</p>}
            </div>


            <div className="mb-3">
                <label for="email" className="form-label">Email</label>
                <input type="text"
                        className={ errors.email  ? 'form-control input-custom error-input' : 'form-control input-custom'}
                        id="email_register"
                        name="email"
                        autoComplete="off"
                        placeholder="ejemplo@email.com"
                        ref={reg({
                            required: "email requerido",
                            pattern: {
                              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                              message: "email invalido",
                            },
                           })}
                        value={ email }
                        onChange={ handleInputChange }/>
                    {errors.email && <p className="error-msg"><i className="ico-error"></i>{errors.email.message}</p>}
            </div>

            <div className="mb-4">
                <label for="password" className="form-label">Contraseña</label>
                <input  type="password" 
                        className={ errors.password  ? 'form-control input-custom error-input' : 'form-control input-custom'}
                        id="password_register" 
                        name="password"
                        placeholder="******"
                        autoComplete="off"
                        ref={reg({  required: "contraseña requerida" })}
                        value={ password }
                        onChange={ handleInputChange }/>
                {errors.password && <p className="error-msg"><i className="ico-error"></i>{errors.password.message}</p>}
            </div>

            <div className="d-grid gap-2 col-12 mx-auto">
                <button className="btn btn-auth" type="submit">Registro</button>
            </div>

            </form>
        </div>
    )
}
