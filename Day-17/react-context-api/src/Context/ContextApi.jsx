import { useContext, useState, createContext } from "react";

export const CartContext = createContext({
    cartItems : [],
    updateCarts : () => {},
    addCarts : () => {},
    removeCarts : () => {},
    incrementQuantity : () => {},
    decrementQuantity : () => {},
});


export const CartContextProvider = ({children}) => {

    const [cart, setCart] = useState([]);


    const addCarts = (items) => {
        let cartCopy = [...cart]
        cartCopy.push({...items, quantity : 1});
        setCart(cartCopy);
    }

    const removeCarts = (id) => {
        setCart(cart.filter((cart) => cart.id !== id))
    }

    const incrementQuantity = (id) => {
        const updateItems = cart.map((item) => 
            item.id === id ? { ...item, quantity : item.quantity + 1} : item
        )
        setCart(updateItems);
    }

    const decrementQuantity = (id) => {
        const updateItems = cart.map((item) => 
        item.id === id  && item.quantity > 1 ? { ...item, quantity : item.quantity - 1} : item);
        setCart(updateItems);
    }

    const cartContextValue = {
        cartItems : cart,
        updateCarts : setCart,
        addCarts,
        removeCarts,
        incrementQuantity,
        decrementQuantity,
    }


    return (
        <CartContext.Provider value={cartContextValue}>
          {children}
        </CartContext.Provider>
    );
}


