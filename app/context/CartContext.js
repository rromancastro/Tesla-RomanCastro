"use client";
import { createContext, useState} from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {

    const [cart, setCart] = useState([]);

    const addToCart = (item) => {
        const positionItem = cart.findIndex((cartItem) => cartItem.id === item.id);

        if (positionItem === -1) {
            setCart([...cart, { ...item, quantity: 1 }]);
        } else {
            const newCart = [...cart];
            newCart[positionItem].quantity += 1;
            setCart(newCart);
        }
        console.log(cart);
    }


    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
    const totalPrice = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);


    const clearCart = () => {
        setCart([]);
    }

    const removeItem = (id) => {
        const newCart = cart.filter((item) => item.id !== id);
        setCart(newCart);
        console.log(cart);
    }

    return (
        <CartContext.Provider value={{addToCart, cart, totalItems, totalPrice, clearCart, removeItem}}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;