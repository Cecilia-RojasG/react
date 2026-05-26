import { useState, useContext } from 'react';
import { CartContext } from "../context/CartContext";
import { BsCart4 } from "react-icons/bs";
import { Badge, Offcanvas, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "../css/CartWidgetRI.css";



const CartWidgetRI = () => {
    const { totalQuantity, cart, removeItem, total, addOne, removeOne } = useContext(CartContext)
    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    return(
        <>
            <div className="cart-container" onClick={handleShow} style={{ cursor: 'pointer' }}>
                <BsCart4 className="cart-icon" />
                {totalQuantity() > 0 && (
                    <Badge pill bg="info" className="cart-badge">
                        {totalQuantity()}
                    </Badge>
                )}
            </div>
            <Offcanvas show={show} onHide={handleClose} placement="end" data-bs-theme="dark" className="custom-cart-offcanvas">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title className="fw-bold cart-title">MI CARRITO <BsCart4/></Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className="d-flex flex-column">
                    {cart.length === 0 ? (
                        <div className="text-center mt-5">
                            <p className="h5 mb-4">Tu carrito está vacío.</p>
                            <p className="text-muted small">¿No sabes por dónde empezar? <br/> Prueba explorar estas colecciones:</p>
                            
                            <div className="d-grid gap-2 mt-4">
                                <Link to="/categoria/libros" className="btn btn-outline-info fw-bold " onClick={handleClose}>
                                    Libros
                                </Link>
                                <Link to="/categoria/mesa" className="btn btn-outline-info fw-bold" onClick={handleClose}>
                                    Juegos de Mesa
                                </Link>
                                <Link to="/categoria/rol" className="btn btn-outline-info fw-bold" onClick={handleClose}>
                                    Juegos de Rol
                                </Link>
                            </div>
                        </div>
                    ) : (
                        <>
                            <div className="flex-grow-1 overflow-auto">
                                {cart.map((item) => (
                                    <div key={item.id} className="item-carrito-container mb-4 pb-3 border-bottom border-secondary w-100">
                                        <div className="d-flex gap-3 w-100">
                                            <img src={item.imagen} alt={item.nombre} className="rounded me-3" style={{ width: '70px', height: '70px', objectFit: 'cover' }} />
                                        
                                            <div className="d-flex flex-column justify-content-between flex-grow-1">
                                                <div className="d-flex justify-content-between align-items-start">
                                                    <h6 className="fw-bold mb-0 text-white">{item.nombre}</h6>
                                                </div>
                                                <div className="d-flex justify-content-between align-items-center mt-2">
                                                    <div className="d-flex align-items-center border border-secondary rounded">
                                                        <button className="btn btn-sm text-info px-2" onClick={() => removeOne(item.id)}>-</button>
                                                        <span className="px-2 fw-bold" style={{minWidth: '30px', textAlign: 'center'}}>{item.quantity}</span>
                                                        <button className="btn btn-sm text-info px-2" onClick={() => addOne(item.id)}>+</button>
                                                    </div>
                                                    <span className="fw-bold text-info">${(item.precio * item.quantity).toLocaleString()}</span>
                                                </div>
                                                <button className="btn btn-link text-danger p-0 mt-2 small text-decoration-none" onClick={() => removeItem(item.id)}>
                                                    <small>Eliminar</small>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="border-top border-secondary pt-3 mt-auto">
                                <div className="d-flex justify-content-between align-items-end mb-3">
                                    <div className="text-muted" style={{ fontSize: '0.7rem', maxWidth: '60%' }}>
                                        Impuestos incluidos. Los gastos de envío se calculan en la pantalla de pago.
                                    </div>
                                    <div className="text-end">
                                        <div className="text-muted small" style={{ fontSize: '0.7rem' }}>SUBTOTAL</div>
                                        <div className="h4 fw-bold mb-0 text-info">${total().toLocaleString()}</div>
                                    </div>
                                </div>
                                <Button as={Link} to="/checkout" variant="outline-info" className="w-100 py-2 fw-bold text-uppercase" onClick={handleClose}>
                                    Finalizar Compra
                                </Button>
                            </div>
                        </>
                    )}
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}

export default CartWidgetRI