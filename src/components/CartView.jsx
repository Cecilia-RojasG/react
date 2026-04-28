import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'
import { BsCart4 } from "react-icons/bs";
import "../css/CartView.css"

const CartView = () => {
    const { cart, clear, removeItem, total, addOne, removeOne } = useContext(CartContext)
    
    return (
        <div className="container mt-5 text-white pb-5">
            <h1 className="mb-4 text-center cart-title">MI CARRITO <BsCart4/></h1>
            
            <div className="bg-dark rounded shadow-lg p-4">
                {cart.map((compra) => (
                    <div key={compra.id} className="d-flex align-items-center justify-content-between border-bottom border-secondary py-3">
                        
                        <img src={compra.imagen} alt={compra.nombre} style={{ width: '8rem', height: '8rem', objectFit: 'cover' }} className="rounded" />
                        
                        <div style={{ flex: 1, marginLeft: '2rem' }}>
                            <h4 className="mb-1">{compra.nombre}</h4>
                            <div className="d-flex align-items-center gap-2">
                                {compra.descuento > 0 && (
                                    <span className="text-decoration-line-through text-white-50 small">
                                        ${compra.precioBase.toLocaleString()}
                                    </span>
                                )}
                                <span className="text-info fw-bold">
                                    ${compra.precio.toLocaleString()}
                                </span>
                                {compra.descuento > 0 && (
                                    <span className="badge bg-danger p-1" style={{fontSize: '0.6rem'}}>
                                        {compra.descuento}% OFF
                                    </span>
                                )}
                            </div>
                        </div>

                        <div className="d-flex align-items-center mx-4">
                            <button className="btn btn-sm btn-outline-info" onClick={() => removeOne(compra.id)}>-</button>
                            <span className="mx-3 fw-bold" style={{minWidth: '30px', textAlign: 'center'}}>{compra.quantity}</span>
                            <button className="btn btn-sm btn-outline-info fw-bold" onClick={() => addOne(compra.id)}>+</button>
                        </div>

                        <div className="text-end" style={{ minWidth: '150px' }}>
                            <span className="d-block fw-bold text-info">Subtotal: ${(compra.quantity * compra.precio).toLocaleString()}</span>
                            <button className="btn btn-sm btn-link text-danger p-0 mt-1 text-decoration-none" onClick={() => removeItem(compra.id)}>Eliminar</button>
                        </div>
                    </div>
                ))}

                <div className="mt-4 p-4 bg-black rounded border border-secondary shadow">
                    <div className="d-flex justify-content-between align-items-center mb-4">
                        
                        <p className="text-white-50 mb-0" style={{ maxWidth: '400px', fontSize: '0.9rem' }}>
                            Impuestos incluidos. Los gastos de envío se calculan en la pantalla de pago.
                        </p>
                
                        <div className="text-end">
                            <div className="text-white-50 small" style={{ letterSpacing: '1px' }}>TOTAL A PAGAR</div>
                            <h2 className="mb-0 fw-bold text-info">${total().toLocaleString()}</h2>
                        </div>
                    </div>

                    
                    <div className="d-flex flex-column flex-md-row justify-content-end gap-3 border-top border-secondary pt-4">
                        <button className="btn btn-outline-danger px-4" onClick={clear}>VACIAR CARRITO</button>
                        <Link to="/checkout" className="btn btn-lg px-5 fw-bold text-uppercase custom-btn-finish">
                            Finalizar compra
                        </Link>
                    </div>
                </div>
            </div>
            
            <div className="mt-5 text-center">
                <Link to="/" className="btn btn-outline-light btn-lg px-5 border-secondary text-uppercase fw-bold" style={{ letterSpacing: '2px' }}>
                    ← Continuar comprando
                </Link>
            </div>
        </div>
    )
}

export default CartView