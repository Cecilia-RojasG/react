import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import OrderModal from './OrderModal';
import CheckoutForm from './CheckoutForm'; // Importación del formulario separado
import { BsQuestionCircle } from "react-icons/bs";
import { Badge, Container, Row, Col, Form, Button } from 'react-bootstrap'; 
import { Link } from 'react-router-dom';
import { collection, addDoc, doc, runTransaction, serverTimestamp } from 'firebase/firestore';
import { db } from "../service/firebase";
import EmptyCart from './EmptyCart';
import '../css/Checkout.css';

const Checkout = () => {
    const { cart, total, totalQuantity, clear } = useContext(CartContext)
    const [entrega, setEntrega] = useState('envio')
    const [metodoPago, setMetodoPago] = useState('tarjeta')
    const [showTicket, setShowTicket] = useState(false)
    const [orderId, setOrderId] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)
    const [buyer, setBuyer] = useState(null);
    
    // Cálculo simplificado: total() ya trae los precios netos con descuento aplicados desde el Context
    const impuestoCalculado = total() * 0.19;

    const buyerData = async (datosFormulario) => {
        setLoading(true)
        // Limpia errores previos si los hubiera
        setError(null) 

        // Evalua si el checkbox vino marcado para guardar un verdadero o falso
        const aceptaMarketing = datosFormulario.recibirOfertas === "on"

        const cliente = {
            nombre: datosFormulario.nombre,
            apellidos: datosFormulario.apellidos,
            email: datosFormulario.email,
            telefono: datosFormulario.telefono,
            documento: `${datosFormulario.tipoDocumento}: ${datosFormulario.numDocumento}`,
            tipoEntrega: datosFormulario.tipoEntrega,
            metodoPago: datosFormulario.metodoPago,
            suscritoBoletin: aceptaMarketing,
            // Se llenan los campos de dirección solo si fue modalidad envío
            ...(datosFormulario.tipoEntrega === 'envio' && {
                pais: datosFormulario.pais,
                direccion: `${datosFormulario.calle} #${datosFormulario.numero}`,
                detallesDireccion: datosFormulario.detallesDireccion || '',
                codigoPostal: datosFormulario.codigoPostal,
                comunaCiudad: datosFormulario.ciudad,
                region: datosFormulario.region
            })
        };

        // Guarda en el estado local de React
        setBuyer(cliente)

        // Lógica de envío de la orden completa a Firebase
        try {
            const ordenCompra = {
                buyer: cliente,
                items: cart.map(item => ({
                    id: item.id,
                    nombre: item.nombre,
                    precio: item.precio, // El precio con descuento calculado en Context
                    precioOriginal: item.precioBase, // Respaldo opcional del precio de lista
                    quantity: item.quantity
                })),
                total: total(),
                fecha: serverTimestamp() 
            }

            // Asegura el stock antes de guardar la orden
            const orderIdGenerado = await runTransaction(db, async (transaction) => {
                const registrosStockActualizado = [];

                // Verifica el stock de cada producto en el carrito
                for (const item of cart) {
                    const itemRef = doc(db, "items", item.id);
                    const itemDoc = await transaction.get(itemRef);

                    if (!itemDoc.exists()) {
                        throw new Error(`El producto "${item.nombre}" ya no existe en la tienda.`);
                    }

                    const stockActual = itemDoc.data().stock;

                    // Validación crítica de inventario
                    if (stockActual < item.quantity) {
                        throw new Error(`Stock insuficiente para "${item.nombre}". Unidades disponibles: ${stockActual}`);
                    }

                    // Prepara la referencia y el nuevo valor calculado
                    registrosStockActualizado.push({
                        ref: itemRef,
                        nuevoStock: stockActual - item.quantity
                    });
                }

                // Si todos tienen stock descuenta las unidades en Firestore
                registrosStockActualizado.forEach((item) => {
                    transaction.update(item.ref, { stock: item.nuevoStock });
                });

                // Crea el documento de la orden de compra en la misma transacción
                const newOrderRef = doc(collection(db, "orders"));
                transaction.set(newOrderRef, ordenCompra);

                return newOrderRef.id; // Retorna el ID autogenerado para el modal
            });

            // Éxito: Setea estados y abre el modal de ticket
            setOrderId(orderIdGenerado);
            setShowTicket(true);

        } catch (err) {
            console.error("Error al registrar la orden en Firebase:", err);
            // Guarda el mensaje en el estado 'error' para mostrarlo de forma segura en la interfaz
            setError(err.message || "Hubo un problema al procesar tu compra. Intenta nuevamente.");
        } finally {
            setLoading(false);
        }
    };


    // Disparador manual para activar la validación del formulario 
    const triggerSubmit = () => {
        document.getElementById('submit-hidden-btn')?.click()
    };

    if (cart.length === 0) {
        return <EmptyCart />
    }

    return (
        <Container className="mt-5 pb-5 text-white">
            {error && (
                <div className="alert alert-danger text-center fw-bold shadow-sm mb-4 animate__animated animate__fadeIn" role="alert">
                    ❌ {error}
                </div>
            )}
            <Row className="gap-5">    
                {/* COLUMNA FORMULARIO (IZQUIERDA) */}
                <Col lg={7} className="pe-lg-5">
                    <CheckoutForm 
                        entrega={entrega}
                        setEntrega={setEntrega}
                        metodoPago={metodoPago}
                        setMetodoPago={setMetodoPago}
                        onSubmitCompra={buyerData}
                    />
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
                                    {/* Si el producto fue adquirido en oferta, muestra un aviso */}
                                    {item.descuento > 0 && <span className="badge bg-danger" style={{fontSize: '0.55rem'}}>-{item.descuento}% OFF</span>}
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
                        onClick={triggerSubmit}
                        disabled={loading}
                    >
                        {loading ? 'PROCESANDO...' : (metodoPago === 'tienda' ? 'RESERVAR PEDIDO' : 'PAGAR AHORA')}
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

export default Checkout;