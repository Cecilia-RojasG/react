import { useState, createContext} from "react";

export const CartContext = createContext()

export const CartProvider = ({children})=> {
    const [cart, setCart]= useState([])
    
    const addItem = (item, qty)=> {   
        const precioConDescuento = item.descuento > 0 
        ? Math.round(item.precio - (item.precio * item.descuento / 100))
        : item.precio
        
        const productoParaCarrito = {
            id: item.id,
            nombre: item.nombre,
            imagen: item.imagen,
            precioBase: item.precio,
            precio: precioConDescuento,
            descuento: item.descuento,
            stock: item.stock,
            quantity: qty 
        } 
        if (isInCart(item.id)) {
            setCart(cart.map((prod) => {
                if (prod.id === item.id) {
                const newQuantity = prod.quantity + qty;
                return { ...prod, quantity: newQuantity > prod.stock ? prod.stock : newQuantity };
                }
            return prod;
        }));
        } else {
            setCart([...cart, productoParaCarrito]);
        }
    }

    const addOne = (id) => {
        setCart(cart.map(prod => 
            prod.id === id && prod.quantity < prod.stock 
            ? { ...prod, quantity: prod.quantity + 1 } 
            : prod
        ));
    };

    const removeOne = (id) => {
        setCart(cart.map(prod => 
            prod.id === id && prod.quantity > 1 
            ? { ...prod, quantity: prod.quantity - 1 } 
            : prod
        ));
    };

    //borrar carrito
    const clear = ()=> {
        setCart([])
    }

    //eliminar un item del carrito
    const removeItem = (id)=> {
        setCart(cart.filter((prod)=> prod.id !== id))
    }

    //SI EXISTE EN EL CARRITO
    const isInCart = (id)=> {
        return cart.some((prod)=> prod.id === id)
    }


    //cart total
    const total = () => {
        return cart.reduce((acc, prod) => acc += (prod.quantity * prod.precio), 0)
    }

    const totalQuantity = ()=>{
        return cart.reduce((acc, prod)=> acc += prod.quantity, 0)
    }

    return (
    <CartContext.Provider value={{ 
        cart, clear, addItem, removeItem, total, totalQuantity, addOne, removeOne 
    }}>
        {children}
    </CartContext.Provider>
);
}