import React, { useState, useContext } from 'react'
import { Card, Button } from 'react-bootstrap'
import ItemCount from './ItemCount'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'

const ItemDetail = ({detail}) => {
    const {addItem} = useContext(CartContext)
    const [purchase, setPurchase]= useState(false)
    const onAdd = (cantidad)=>{
        addItem(detail,cantidad )
        setPurchase(true)
    }
    const precioFinal = Math.round(detail.precio - (detail.precio * detail.descuento / 100));

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
                            
                            <p className="text-muted mb-4 small">Stock disponible: <strong>{detail.stock}</strong> unidades.</p>
                            {purchase 
                            ? <div style={{display:'flex', justifyContent:'space-around', alignItems:'center', width:'80%'}}>
                                <Link className='btn btn-dark' to='/'>Seguir Comprando</Link>
                                <Link className='btn btn-dark' to='/cart'>Ir al carrito</Link>
                            </div> 
                                : <ItemCount stock={detail.stock} onAdd={onAdd}/>}
                        </div>
                    </div>
                </div>
            </div>    
        </div>
    )
}

export default ItemDetail
