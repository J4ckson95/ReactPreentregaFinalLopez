import React from 'react';
import { Link } from 'react-router-dom';
import logoCart from "../../asset/carrito-de-compras.png"
import logoUser from "../../asset/usuario.png"
import Styled from "./cartuser.module.css"

const CartUser = () => {
    return (
        <div className={Styled.container}>
            <Link><img className={Styled.logo} src={logoUser}></img></Link>
            <div>
                <img className={Styled.logo} src={logoCart}></img>
                <p></p>
            </div>
        </div>
    );
}
export default CartUser;