import React, { useState, useContext } from 'react'
import { Card, Button } from 'react-bootstrap'
import ItemCount from './ItemCount'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'

const ItemDetail = ({detail}) => {
    const {addItem, cart} = useContext(CartContext)
    const [purchase, setPurchase]= useState(false)
    //Busca si este producto específico ya está en el carrito
    const productoEnCarrito = cart.find(prod => prod.id === detail.id)
    //Calcula la cantidad acumulada en el carrito (si no existe, es 0)
    const cantidadEnCarrito = productoEnCarrito ? productoEnCarrito.quantity : 0
    //Resta la cantidad del carrito al stock base
    const stockVisualDisponible = detail.stock - cantidadEnCarrito
    
    const onAdd = (cantidad)=>{
        addItem(detail,cantidad )
        setPurchase(true)
    }
    const descuentoValido = detail.descuento || 0
    const precioFinal = Math.round(detail.precio - (detail.precio * detail.descuento / 100))

    return (
        <div className="container mt-5">
            <div className="card shadow-sm border-0" style={{ backgroundColor: '#fff', borderRadius: '15px', overflow: 'hidden' }}>
                <div className="row g-0 align-items-center">
                    <div className="col-md-4" style={{ position: 'relative' }}>
                        {detail.descuento > 0 && (
                            <img 
                                src="/oferta.webp" 
                                alt="Oferta" 
                                style={{ 
                                    position: 'absolute', 
                                    top: '0', 
                                    right: '0', 
                                    width: '30%', 
                                    zIndex: '10' 
                                }}
                            />
                        )}
                        <img 
                            src={detail.imagen} 
                            alt={detail.nombre} 
                            className="img-fluid"
                            style={{ 
                                    width: '100%', 
                                    height: '100%', 
                                    objectFit: 'cover' 
                            }} 
                        />
                    </div>

                    <div className="col-md-8">
                        <div className="card-body p-5">
                            <h2 className="display-6 fw-bold mb-2">{detail.nombre}</h2>
                            <p className="text-muted h5 mb-4">{detail.autor}</p>
                            <p className="mt-4 mb-4 text-secondary" style={{ fontSize: '1.0rem' }}><strong>Descripción:</strong> {detail.descripcion || "Sin descripción disponible para este producto."}
                            </p>

                            <div className="mb-4">
                                {detail.descuento > 0 ? (
                                    <>
                                        <h3 className="text-danger fw-bold mb-0">
                                            Ahora: ${precioFinal.toLocaleString()}
                                        </h3>
                                        <p className="text-muted mb-0">
                                            Antes: <span className="text-decoration-line-through">${detail.precio.toLocaleString()}</span>
                                        </p>
                                    </>
                                ) : (
                                    <h3 className="text-dark fw-bold">${detail.precio.toLocaleString()}</h3>
                                )}
                            </div>
                            
                            {/* 5. MENSAJES DE STOCK Y CARRITO ACTUALIZADOS */}
                            <div className="mb-4 d-flex gap-4 flex-wrap">
                                <p className="text-muted mb-0 small">Stock disponible: <strong>{stockVisualDisponible}</strong> unidades.</p>
                                {cantidadEnCarrito > 0 && (
                                    <p className="text-danger mb-0 small">
                                        En el carrito: <strong>{cantidadEnCarrito}</strong> unidades.
                                    </p>
                                )}
                            </div>
                            {/* BOTONES DE FLUJO CONTINUO Y CONTADOR */}
                            <div className="mt-3">
                                {/* El contador se queda visible, pero adaptado al stock remanente */}
                                <ItemCount stock={stockVisualDisponible} onAdd={onAdd}/>
                            </div>
                            <div>
                                {/* Si ya tiene productos en el carrito muestra los siguiente*/}
                                {cantidadEnCarrito > 0 && (
                                    <div className="mt-4 d-flex gap-2" style={{ maxWidth: '320px' }}>
                                        <Link className='btn btn-outline-dark flex-fill text-center fw-bold' to='/'>Volver a Home</Link>
                                        <Link className='btn btn-dark flex-fill text-center fw-bold' to='/cart'>Ir al carrito 🛒</Link>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>    
        </div>
    )
}

export default ItemDetail
