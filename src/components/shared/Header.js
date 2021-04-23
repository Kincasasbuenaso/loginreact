import React from 'react'
import { NavLink } from 'react-router-dom';
import { useSelector} from 'react-redux';

//import { addCart } from '../../actions/homeAction';

export const Header = () => {

    let cart = (localStorage.getItem('cart') !== null ) ? JSON.parse(localStorage.getItem('cart')) : {};

    
    let { qty }= useSelector( state => state.home );

    if(cart !== {}){
        qty = cart.qty;
    }

    

    const Badge = (props) =>{
        return (
            <>
            {
                ( qty > 0 )
                ? (<i className="badge-cart">{ qty}</i>)
                : null
            }
            </>
        )
    }


    return (
        <>
            <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-white">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#0">
                        <img src="./assets/logo-home.svg" alt="" className="d-inline-block align-top" />
                    </a>
                    <div className="d-flex mobile">
                    <ul className="nav-links d-inline-block">
                        <li>
                            <i className="icon icon-search"></i>
                        </li>
                        <li>
                            <i className="icon icon-heart"></i>
                        </li>
                        <li className="btn-cart-header">
                            <Badge cart={cart} />
                            <i className="icon icon-bag"></i>
                        </li>
                    </ul>
                    <button className="navbar-toggler d-inline-block" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    </div>
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <NavLink 
                            className="nav-link active" 
                            aria-current="page"
                            activeClassName="active"
                            exact
                            to="/auth"
                            >Login</NavLink>
                        </li>
                    </ul>
                    </div>

                    <div className="d-flex desktop">
                    <ul className="nav-links d-inline-block">
                        <li>
                            <i className="icon icon-search"></i>
                        </li>
                        <li>
                            <i className="icon icon-heart"></i>
                        </li>
                        <li className="btn-cart-header">
                            <Badge cart={cart} />
                            <i className="icon icon-bag"></i>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
