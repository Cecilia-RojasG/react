import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import OrderModal from './OrderModal';
import { BsQuestionCircle, BsTruck, BsShop, BsBag } from "react-icons/bs";
import { Badge, Container, Row, Col, Form, Button } from 'react-bootstrap'; 
import { Link } from 'react-router-dom';
import '../css/Checkout.css';

const Checkout = () => {
    const { cart, total, totalQuantity, clear } = useContext(CartContext)
    const [entrega, setEntrega] = useState('envio'); 
    const impuestoCalculado = total() * 0.19
    const [metodoPago, setMetodoPago] = useState('tarjeta')
    const [showTicket, setShowTicket] = useState(false);
    const [orderId, setOrderId] = useState(null);
    
    const handleFinalizarCompra = () => {
        const nuevoId = Math.floor(Math.random() * 90000) + 10000;
        setOrderId(nuevoId);
        setShowTicket(true);
    }

    if (cart.length === 0) {
        return (
            <Container className="mt-5 text-center text-white py-5">
                <h2>Tu carrito está vacío</h2>
                <p>No puedes realizar un pago sin productos.</p>
                <Link to="/" className="btn btn-info">Volver a la tienda</Link>
            </Container>
        )
    }
    return (
        <Container className="mt-5 pb-5 text-white">
            <Row className="gap-5">
                
                <Col lg={7} className="pe-lg-5">
                    <div className="d-flex justify-content-between align-items-center mb-5 border-bottom border-secondary pb-3">
                        <h2 className="fw-bold mb-0 text-uppercase" style={{ letterSpacing: '1px' }}>
                            Pago
                        </h2>
                        <Link to="/cart" className="text-info text-decoration-none d-flex align-items-center gap-2 back-to-cart">
                            <span className="small fw-bold">VOLVER AL CARRITO</span>
                            <BsBag style={{ fontSize: '1.4rem' }} />
                        </Link>
                    </div>
                    {/* SECCIÓN CONTACTO */}
                    <section className="mb-5">
                        <h4 className="fw-bold mb-3">Contacto</h4>
                        <Form.Label className="small text-white-50 ms-1">Correo electrónico</Form.Label>
                        <Form.Control type="email" placeholder="Correo electrónico" className="bg-dark text-white border-secondary mb-2 py-2" />
                        <Form.Check type="checkbox" label="Enviarme novedades y ofertas por correo electrónico" className="small text-white-50" />
                    </section>
                    {/* SECCIÓN ENTREGA */}
                    <section className="mb-5">
                        <h4 className="mb-4 fw-bold">Entrega</h4>
                        
                        <div className="d-flex gap-2 mb-4 w-100">
                            <Button 
                                variant={entrega === 'envio' ? "info" : "outline-secondary"} 
                                className="w-50 py-2 fw-bold text-uppercase shadow-none"
                                onClick={() => {
                                    setEntrega('envio');
                                    if(metodoPago === 'tienda') setMetodoPago('tarjeta')
                                }}
                                disabled={metodoPago === 'tienda'} 
                            >
                                Envío
                            </Button>
                            <Button 
                                variant={entrega === 'retiro' ? "info" : "outline-secondary"} 
                                className="w-50 py-2 fw-bold text-uppercase shadow-none"
                                onClick={() => setEntrega('retiro')}
                            >
                                Retiro
                            </Button>
                        </div>
                        <Row className="g-3 mb-3">
                            <Col md={6}>
                                <Form.Group>
                                    <Form.Label className="small text-white-50 ms-1">Nombre</Form.Label>
                                    <Form.Control placeholder="Tu nombre" className="bg-dark text-white border-secondary py-2 shadow-none" />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group>
                                    <Form.Label className="small text-white-50 ms-1">Apellidos</Form.Label>
                                    <Form.Control placeholder="Tus apellidos" className="bg-dark text-white border-secondary py-2 shadow-none" />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row className="g-3">
                            <Col md={6}>
                                <Form.Label className="small text-white-50 ms-1">Documento</Form.Label>
                                <Form.Select className="bg-dark text-white border-secondary py-2 shadow-none">
                                    <option value="RUT">RUT</option>
                                    <option value="PASS">PASAPORTE</option>
                                </Form.Select>
                            </Col>
                            <Col md={6}>
                                <Form.Label className="small text-white-50 ms-1">Nº Documento</Form.Label>
                                <Form.Control placeholder="12.345.678-k" className="bg-dark text-white border-secondary py-2 shadow-none" />
                            </Col>
                        </Row>
                        {/* Si es Retiro, ocultar */}
                        {entrega === 'envio' && (
                            <>
                                <Form.Label className="small text-white-50 ms-1">País / Región</Form.Label>
                                <Form.Select className="bg-dark text-white border-secondary mb-3 py-2">
                                    <option value="CL">Chile</option>
                                    <option value="AR">Argentina</option>
                                </Form.Select>
                                <Form.Group className="mb-3">
                                    <Form.Label className="small text-white-50 ms-1">Dirección completa</Form.Label>
                                    <Form.Control placeholder="Calle, número, comuna..." className="bg-dark text-white border-secondary py-2 shadow-none" />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label className="small text-white-50 ms-1">Casa, apartamento, etc.</Form.Label>
                                    <Form.Control placeholder="Casa, apartamento, oficina (opcional)" className="bg-dark text-white border-secondary py-2 shadow-none" />
                                </Form.Group>

                                <Row className="g-3 mb-3">
                                    <Col md={6}>
                                        <Form.Group className="mb-3">
                                            <Form.Label className="small text-white-50 ms-1">Codigo Postal</Form.Label>
                                            <Form.Control placeholder="Codigo Postal" className="bg-dark text-white border-secondary py-2 shadow-none" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group className="mb-3">
                                            <Form.Label className="small text-white-50 ms-1">Comuna</Form.Label>
                                            <Form.Control placeholder="Comuna" className="bg-dark text-white border-secondary py-2 shadow-none" />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Form.Group className="mb-3">
                                    <Form.Label className="small text-white-50 ms-1">Ciudad</Form.Label>
                                    <Form.Control placeholder="Ciudad" className="bg-dark text-white border-secondary py-2 shadow-none" />
                                </Form.Group>
                            </>
                            
                        )}
                        
                        <Form.Group className="mb-3">
                            <Form.Label className="small text-white-50 ms-1">Telefono</Form.Label>
                            <Form.Control placeholder="Telefono" className="bg-dark text-white border-secondary py-2 shadow-none" />
                        </Form.Group>
                    </section>

                    {/* SECCIÓN PAGO */}
                    <section className="mb-5">
                        <h4 className="mb-4 fw-bold">Pago</h4>
                        
                        {/* SELECTOR DE MÉTODO DE PAGO */}
                        <div className="d-flex flex-column gap-2 mb-4">
                            <Button 
                                variant={metodoPago === 'tarjeta' ? "info" : "outline-secondary"} 
                                className={`w-100 text-start py-3 px-4 fw-bold ${metodoPago === 'tarjeta' ? 'text-black' : 'text-white'}`}
                                onClick={() => setMetodoPago('tarjeta')}
                            >
                                💳 Tarjeta de Crédito
                            </Button>
                            
                            <Button 
                                variant={metodoPago === 'deposito' ? "info" : "outline-secondary"} 
                                className={`w-100 text-start py-3 px-4 fw-bold ${metodoPago === 'deposito' ? 'text-black' : 'text-white'}`}
                                onClick={() => setMetodoPago('deposito')}
                            >
                                🏦 Depósito o Transferencia Bancaria
                            </Button>

                            <Button 
                                variant={metodoPago === 'tienda' ? "info" : "outline-secondary"} 
                                className={`w-100 text-start py-3 px-4 fw-bold ${metodoPago === 'tienda' ? 'text-black' : 'text-white'}`}
                                onClick={() => {
                                    setMetodoPago('tienda')
                                    setEntrega('retiro')
                                }}
                            >
                                🏪 Pago en Tienda Física
                            </Button>
                        </div>  
                        {/* OPCIÓN: TARJETA */}
                        {metodoPago === 'tarjeta' && (
                            <div className="p-4 rounded border border-secondary bg-dark bg-opacity-25 animate__animated animate__fadeIn">
                                <Form.Group className="mb-3">
                                    <Form.Label className="small text-white-50 ms-1">Número de tarjeta</Form.Label>
                                    <Form.Control placeholder="0000 0000 0000 0000" className="bg-dark text-white border-secondary py-2 shadow-none" />
                                </Form.Group>
                                <Row className="g-3 mb-3">
                                    <Col md={6}>
                                        <Form.Label className="small text-white-50 ms-1">Vencimiento</Form.Label>
                                        <Form.Control placeholder="MM/YY" className="bg-dark text-white border-secondary py-2 shadow-none" />
                                    </Col>
                                    <Col md={6}>
                                        <Form.Label className="small text-white-50 ms-1">CVV</Form.Label>
                                        <Form.Control placeholder="123" className="bg-dark text-white border-secondary py-2 shadow-none" />
                                    </Col>
                                </Row>
                                <Form.Group className="mb-3">
                                    <Form.Label className="small text-white-50 ms-1">Nombre del titular</Form.Label>
                                    <Form.Control placeholder="Como aparece en la tarjeta" className="bg-dark text-white border-secondary py-2 shadow-none" />
                                </Form.Group>
                                <Row className="g-3">
                                    <Col md={6}>
                                        <Form.Label className="small text-white-50 ms-1">Documento</Form.Label>
                                        <Form.Select className="bg-dark text-white border-secondary py-2 shadow-none docTarjeta">
                                            <option value="RUT">RUT</option>
                                            <option value="PASS">PASAPORTE</option>
                                        </Form.Select>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Label className="small text-white-50 ms-1">Nº Documento</Form.Label>
                                        <Form.Control placeholder="12.345.678-k" className="bg-dark text-white border-secondary py-2 shadow-none numDocTarjeta" />
                                    </Col>
                                </Row>
                            </div>
                        )}

                        {/* --- OPCIÓN: DEPÓSITO --- */}
                        {metodoPago === 'deposito' && (
                            <div className="p-4 rounded border border-info border-opacity-50 bg-info bg-opacity-10 animate__animated animate__fadeIn">
                                <p className="mb-0 small text-info">
                                    <strong>Instrucciones:</strong> Al finalizar la compra, recibirás los datos bancarios en tu correo para realizar la transferencia. Tu pedido será procesado una vez confirmado el pago.
                                </p>
                            </div>
                        )}

                        {/* --- OPCIÓN: PAGO EN TIENDA --- */}
                        {metodoPago === 'tienda' && (
                            <div className="p-4 rounded border border-info border-opacity-50 bg-info bg-opacity-10 animate__animated animate__fadeIn">
                                <p className="mb-0 small text-info">
                                    Reserva tu pedido online y paga directamente en nuestra sucursal al momento de retirar. Aceptamos efectivo, débito y crédito en local.
                                </p>
                            </div>
                        )}
                    </section>
                </Col>

                {/* COLUMNA RESUMEN CARRITO (DERECHA) */}
                <Col lg={4} className="bg-black bg-opacity-25 p-4 rounded border border-secondary h-fit">
                    <div className="checkout-product-list mb-4">
                        {cart.map(item => (
                            <div key={item.id} className="d-flex align-items-center justify-content-between mb-3">
                                <div className="position-relative">
                                    <img src={item.imagen} alt={item.nombre} className="rounded border border-secondary" style={{width: '64px', height: '64px', objectFit: 'cover'}} />
                                    <Badge pill bg="secondary" className="position-absolute top-0 start-100 translate-middle" style={{fontSize: '0.6rem'}}>
                                        {item.quantity}
                                    </Badge>
                                </div>
                                <div className="flex-grow-1 ms-3">
                                    <p className="mb-0 small fw-bold">{item.nombre}</p>
                                </div>
                                <p className="mb-0 small">${(item.precio * item.quantity).toLocaleString()}</p>
                            </div>
                        ))}
                    </div>

                    <div className="d-flex gap-2 mb-4">
                        <Form.Control placeholder="Código de descuento" className="bg-dark text-white border-secondary shadow-none" />
                        <Button variant="secondary" className="fw-bold px-4">Aplicar</Button>
                    </div>

                    <div className="checkout-summary border-top border-secondary pt-3">
                        <div className="d-flex justify-content-between mb-2">
                            <span className="text-white-50">Subtotal de: {totalQuantity()} productos</span>
                            <span className="fw-bold">${total().toLocaleString()}</span>
                        </div>
                        <div className="d-flex justify-content-between align-items-center mb-2">
                            <span className="text-white-50">Envío <BsQuestionCircle className="ms-1" style={{fontSize: '0.8rem'}}/></span>
                            <span className="small text-white-50">{entrega === 'retiro' ? 'Gratis (Retiro)' : 'Por calcular'}</span>
                        </div>
                        <div className="d-flex justify-content-between align-items-center mt-3 border-top border-secondary pt-3">
                            <h4 className="fw-bold">Total</h4>
                            <h3 className="text-info fw-bold">${total().toLocaleString()}</h3>
                        </div>
                        <p className="text-white-50" style={{fontSize: '0.75rem'}}>
                            Incluye ${impuestoCalculado.toLocaleString()} de impuestos.
                        </p>
                    </div>
                    
                    <Button 
                        variant="info" 
                        className="w-100 fw-bold custom-btn-finish shadow-none text-uppercase"
                        onClick={handleFinalizarCompra}
                    >
                        {metodoPago === 'tienda' ? 'RESERVAR PEDIDO' : 'PAGAR AHORA'}
                    </Button>
                </Col>
            </Row>
            
            <OrderModal 
                show={showTicket} 
                onHide={() => setShowTicket(false)} 
                orderId={orderId}
                metodoPago={metodoPago}
                total={total()}
                clearCart={clear}
            />

        </Container>
    );
};

export default Checkout