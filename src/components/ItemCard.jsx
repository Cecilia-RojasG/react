import React from 'react'
import { Card, Button, Badge } from 'react-bootstrap'
import '../css/ItemCard.css'
import {Link} from 'react-router-dom'

const ItemCard = ({producto}) => {
    const descuentoValido = producto.descuento || 0
    const precioBase = producto.precio || 0
    const precioFinal = Math.round(precioBase - (precioBase * descuentoValido / 100))
    return (
        <Card className="item-card">
            
            {producto.descuento > 0 && (
                <Badge 
                    bg="danger" 
                    style={{ position: 'absolute', top: '10px', left: '10px', zIndex: 1 }}
                >
                    {producto.descuento}% OFF
                </Badge>
            )}

            <Card.Img variant="top" src={producto.imagen} alt={producto.name} style={{height:'350px', objectFit:'cover', objectPosition:'top'}} />
            <Card.Body className="d-flex flex-column">
                <Card.Title style={{       
                    overflow: 'hidden', 
                    display: '-webkit-box',
                    WebkitLineClamp: '1', 
                    WebkitBoxOrient: 'vertical',
                    lineHeight: '1.5em',
                    height: '1.5em',
                    whiteSpace: 'normal'
                }}>
                    {producto.nombre}
                </Card.Title>

                <Card.Text className="text-muted mb-1">
                    {producto.autor}
                </Card.Text> 

                <div style={{ minHeight: '40px' }}>
                    {producto.descuento > 0 ? (
                        <>
                            <span className="fw-bold h5 text-danger">
                                Ahora: ${precioFinal.toLocaleString()}
                            </span>
                            <br/>
                            <span>Antes: </span>
                            <span className="text-decoration-line-through text-muted small">
                                ${precioBase.toLocaleString()}
                            </span>
                        </>
                    ):(
                        <>
                            <div className="fw-bold h5">
                                ${precioBase.toLocaleString()}
                            </div>
                            
                            <div className="small" style={{ visibility: 'hidden' }}>Antes: $0</div>
                        </>
                    )}
                </div>

                <Link className="btn btn-dark w-100 mt-auto" to={`/item/${producto.id}`}>Ver más</Link>
            </Card.Body>
        </Card>
    )
}

export default ItemCard


