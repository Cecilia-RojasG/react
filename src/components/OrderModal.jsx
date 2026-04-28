import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const OrderModal = ({ show, onHide, orderId, metodoPago, total, clearCart }) => {
    return (
        <Modal show={show} onHide={onHide} centered data-bs-theme="dark">
            <Modal.Body className="p-0 overflow-hidden rounded border border-info">
                {/* Encabezado Estilo Ticket */}
                <div className="bg-info p-4 text-black text-center">
                    <h2 className="fw-bold mb-0">¡ORDEN RECIBIDA!</h2>
                    <p className="mb-0 fw-semibold">Número de pedido: #{orderId}</p>
                </div>

                <div className="p-4 bg-dark text-white">
                    <p className="text-center mb-4">
                        Gracias por confiar en <strong>El Contemplador Feliz</strong>.<br/>
                        Te enviamos un correo con los detalles de tu aventura.
                    </p>

                    {/* Resumen del Ticket */}
                    <div className="border-top border-secondary pt-3 mb-4">
                        <div className="d-flex justify-content-between small mb-2">
                            <span>Estado del pago:</span>
                            <span className="text-info fw-bold text-uppercase">
                                {metodoPago === 'tienda' ? 'Pendiente (Pago en local)' : 'Aprobado'}
                            </span>
                        </div>
                        <div className="d-flex justify-content-between h5 fw-bold">
                            <span>Total:</span>
                            <span className="text-info">${total.toLocaleString()}</span>
                        </div>
                    </div>

                    <Button 
                        as={Link} 
                        to="/" 
                        variant="info" 
                        className="w-100 py-2 fw-bold text-black"
                        onClick={() => {
                            clearCart(); // Vaciamos el carrito al salir
                            onHide();
                        }}
                    >
                        VOLVER A LA TIENDA
                    </Button>
                </div>
                
                {/* Efecto decorativo de corte de ticket */}
                <div className="ticket-cut" style={{
                    height: '10px',
                    backgroundImage: 'linear-gradient(-45deg, #212529 5px, transparent 0), linear-gradient(45deg, #212529 5px, transparent 0)',
                    backgroundSize: '10px 10px',
                    backgroundRepeat: 'repeat-x',
                    backgroundColor: '#0dcaf0'
                }}></div>
            </Modal.Body>
        </Modal>
    );
};

export default OrderModal;