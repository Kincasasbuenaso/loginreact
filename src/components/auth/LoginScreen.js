import React,{useState} from 'react'
import { useFormCustom } from '../../hooks/useFormCustom';
import { Redirect } from 'react-router-dom';
import { useForm } from "react-hook-form";

export const LoginScreen = () => {

    const [ formValues, handleInputChange ] = useFormCustom({
        email: '',
        password: '',
        newsletter:false
    });

    const [state, setState] = useState({
        showError:false,
        isLogin:false
        });

    const { showError, isLogin } = state;

    const { email, password, newsletter } = formValues;

    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {

        if( data.email === "kin@gmail.com" && data.password === "12345"){
            setState( {...state, showError:false, isLogin:true});
            handleInputChange(...state,newsletter)
        }else{
            setState( {...state, showError:true});
        }
    };


    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} >
            <div className="mb-3">
                <label for="email" className="form-label">Email</label>
                <input 
                    type="text" 
                    className={ errors.email  ? 'form-control input-custom error-input' : 'form-control input-custom'}
                    id="email" 
                    name="email" 
                    placeholder="ejemplo@email.com"
                    autoComplete="off"
                    value={ email }
                    ref={register({
                        required: "email requerido",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                          message: "email invalido",
                        },
                       })}
                    onChange={ handleInputChange }/>
                    {errors.email && <p className="error-msg"><i className="ico-error"></i>{errors.email.message}</p>}
            </div>

            <div className="mb-3">
                <label for="password" className="form-label">Contraseña</label>
                <input 
                    type="password" 
                    className={ errors.password  ? 'form-control input-custom error-input' : 'form-control input-custom'}
                    id="password" 
                    name="password" 
                    autoComplete="off"
                    placeholder="******"
                    ref={register({  required: "contraseña requerida" })}
                    value={ password }
                    onChange={ handleInputChange }/>
                    {errors.password && <p className="error-msg"><i className="ico-error"></i>{errors.password.message}</p>}
            </div>

            <div className="form-check form-switch mb-4 mt-4">
                <input 
                    className="form-check-input chk-newsletter" 
                    type="checkbox" 
                    id="flexSwitchCheckDefault"
                    name="newsletter"
                    ref={register}
                    value={newsletter}
                    onChange={ handleInputChange }/>
                <label className="form-check-label newsletter" for="flexSwitchCheckChecked">Suscribirse al Newsletter</label>
            </div>

            {
                (showError)
                    ?(
                        <div className="alert alert-danger alert-dismissible fade show" role="alert">
                        < strong>email or password invalid!</strong>
                            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>
                    )
                    : (<></>)
                

            }

            <div className="d-grid gap-2 col-12 mx-auto mb-3">
                <button className="btn btn-auth" type="submit" >Ingreso</button>
            </div>

            <div className="form-check text-center">
                <a href="#" className="recover-password">Olvide Contraseña</a>
            </div>

            </form>


            {
                isLogin &&
                (
                    <Redirect to="/home"></Redirect>
                )
                    
            }
        </div>
        )
}
