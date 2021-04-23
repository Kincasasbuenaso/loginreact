import React, {useState} from 'react'

import { useDispatch } from 'react-redux';

import { addCart } from '../../actions/homeAction';


export const Atributtes = ({id,sizes,kits}) => {

    const dispatch = useDispatch();

    const [state, setState] = useState({
        activeSize:'',
        activeKit:'',
        idProduct:id,
        qty:1,
        objSizes:sizes,
        objKits:kits});

    const {idProduct, qty, objSizes, objKits } = state;
     
     const handleAdd = () => {
        setState( {...state, qty: qty + 1});
     };

     const handleMinus = () => {
        if(qty <= 1){
            setState({...state, qty:1 });
        }else{
            setState( {...state, qty: qty - 1});
        }
    };

    const handleUpdate = () =>{
        setState({...state, qty });
    }

    function addToCart(idProduct, qty){
        localStorage.setItem('cart',JSON.stringify({idProduct,qty}));
        dispatch(addCart(idProduct,qty));
    }


    function toogleActiveSize(index){
        setState({...state, activeSize: state.objSizes[index]})
    }

    function toogleActiveKit(index){
        setState({...state, activeKit: state.objKits[index]})
    }

    function AddClassActive(index, option){

        if(option === 'sizes'){
            if(state.objSizes[index] === state.activeSize )
                return "atributte__list-item active";
            else
                return "atributte__list-item";
        }else if(option === 'kits'){
            if(state.objKits[index] === state.activeKit )
                return "atributte__list-item active";
            else
                return "atributte__list-item";
        }
        
    }


    return (
        <div className="atributtes__container container pt-2 pb-2">
            <form className="atributtes__form">
                <fieldset className="atributtes__group">
                    <label>Tamaño</label>
                    <ul className="atributte__list">
                        {
                            objSizes.map((size,index)=>{
                                return (<li className={AddClassActive(index,'sizes')} key={size} onClick={()=>{ toogleActiveSize(index)} }> 
                                            <a href="#"  className="color_pick have_image"> {size} </a>
                                        </li>);
                            })
                        }
                    </ul>
                </fieldset>
                <fieldset className="atributtes__group">
                    <label>Kit</label>
                    <ul className="atributte__list">
                        {
                            objKits.map((kit,index)=>{
                                return (<li className={AddClassActive(index,'kits')} key={kit} onClick={()=>{ toogleActiveKit(index)} }>
                                            <a  href="#"   className="color_pick have_image"> {kit} </a>
                                        </li>);
                            })
                        }
                    </ul>
                </fieldset>

                <fieldset className="atributtes__group">
                    <label>Cantidad</label>
                    <div className="atributtes__qty-container clearfix">
                        
                        <div  className="button-minus product_quantity_down" onClick={ handleMinus }>
                            <i className="fas fa-minus"></i>
                        </div>
                        
                        <input 
                            type="text" 
                            name="qty" 
                            id="quantity" 
                            className="text input-cant-custom"  
                            value={qty}
                            onChange={ handleUpdate }
                            />
                        
                        <div  className="button-plus product_quantity_up" onClick={ handleAdd }>
                            <i className="fas fa-plus"></i>
                        </div>

                    </div>
                </fieldset>

                <div className="text-center">
                    <button 
                        data-bs-toggle="modal" 
                        data-bs-target="#exampleModal"
                        type="button" className="btn btn-buy btn-lg" 
                        onClick={ ()=>addToCart(idProduct,qty) }>Añadir al Carrito</button>
                </div>

            </form>



            
                <div className="modal fade" id="exampleModal"  aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Product Add</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                         You added {qty} units of this product!!
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Close</button>
                        </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}
