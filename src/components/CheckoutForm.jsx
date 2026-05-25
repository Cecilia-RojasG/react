import React, { useRef, useState, useEffect } from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import { BsBag } from "react-icons/bs";
import { Link } from 'react-router-dom';

const CheckoutForm = ({ 
    entrega, 
    setEntrega, 
    metodoPago, 
    setMetodoPago, 
    onSubmitCompra 
}) => {
    const emailRef = useRef(null)
    const confirmEmailRef = useRef(null)

     // Estado para controlar el país seleccionado (por defecto Chile 'CL')
    const [paisSeleccionado, setPaisSeleccionado] = useState('CL');
    // Fuerza a que si se elige retiro, el país sea Chile
    useEffect(() => {
        if (entrega === 'retiro') {
            setPaisSeleccionado('CL');
        }
    }, [entrega]);

    // Validación de correo ingresando dos veces
    const validarCorreos = () => {
        const email = emailRef.current.value
        const confirmEmail = confirmEmailRef.current.value
        
        if (email !== confirmEmail) {
            // Si no coinciden
            confirmEmailRef.current.setCustomValidity("Los correos electrónicos no coinciden.")
        } else {
            // Si coinciden, se limpia
            confirmEmailRef.current.setCustomValidity("")
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault()

        // Validación una ultima vez antes de procesar
        validarCorreos()
        if (!e.target.checkValidity()) {
            return
        }
        
        const formData = new FormData(e.target)
        const data = Object.fromEntries(formData.entries())
        
        // Opciones que maneja el componente mediante estados de botón
        data.tipoEntrega = entrega
        data.metodoPago = metodoPago

        onSubmitCompra(data)
    };

    // Configuración dinámica para el formato telefónico según el país
    const configuracionTelefono = {
        CL: {
            placeholder: "+56 9 1234 5678 o 912345678",
            pattern: "^(\\+56|56)?\\s?9\\s?\\d{4}\\s?\\d{4}$",
            title: "Formato de Chile válido: +569XXXXXXXX o 9XXXXXXXX (9 dígitos)."
        },
        AR: {
            placeholder: "+54 9 11 1234 5678",
            pattern: "^(\\+54|54)?\\s?9?\\s?\\d{2,4}\\s?\\d{6,8}$",
            title: "Formato de Argentina válido: +54 seguido del código de área y número."
        }
    };

    const infoTel = configuracionTelefono[paisSeleccionado] || configuracionTelefono['CL']

    // Configuración dinámica para reglas de validación para el Documento según el País
    const configuracionDocumento = {
        CL: {
            label: "RUT",
            placeholder: "12.345.678-k",
            pattern: "^(\\d{1,2}(\\.?\\d{3}){2}-[\\dkK])$",
            title: "Formato de RUT inválido. Ejemplos: 12.345.678-K o 12345678-k"
        },
        AR: {
            label: "DNI",
            placeholder: "12.345.678",
            pattern: "^\\d{1,2}\\.?\\d{3}\\.?\\d{3}$",
            title: "Formato de DNI inválido. Debe contener entre 7 y 8 números correlativos."
        }
    };

    const infoDoc = configuracionDocumento[paisSeleccionado] || configuracionDocumento['CL']

    return (
        <Form onSubmit={handleSubmit}>
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
                <Form.Control name="email" type="email" ref={emailRef} placeholder="Correo electrónico" onChange={validarCorreos} required className="bg-dark text-white border-secondary mb-2 py-2"/>
                <Form.Label className="small text-white-50 ms-1">Confirmar correo electrónico</Form.Label>
                <Form.Control 
                    name="confirmEmail" 
                    type="email" 
                    ref={confirmEmailRef}
                    onChange={validarCorreos} // Valida mientras escribe
                    placeholder="Reingresa tu correo electrónico" 
                    required 
                    className="bg-dark text-white border-secondary mb-2 py-2 shadow-none" 
                />
                <Form.Check name="recibirOfertas" type="checkbox" label="Enviarme novedades y ofertas por correo electrónico" className="small text-white-50" />
            </section>

            {/* SECCIÓN ENTREGA */}
            <section className="mb-5">
                <h4 className="mb-4 fw-bold">Entrega</h4>
                
                <div className="d-flex gap-2 mb-4 w-100">
                    <Button 
                        type="button"
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
                        type="button"
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
                            <Form.Control name="nombre" placeholder="Nombre" required minLength="2" pattern="^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]+$" title="El nombre debe tener al menos 2 letras y no puede contener números ni símbolos." className="bg-dark text-white border-secondary py-2 shadow-none" />
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group>
                            <Form.Label className="small text-white-50 ms-1">Apellidos</Form.Label>
                            <Form.Control name="apellidos" placeholder="Apellidos" required minLength="2" pattern="^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]+$" title="El nombre debe tener al menos 2 letras y no puede contener números ni símbolos." className="bg-dark text-white border-secondary py-2 shadow-none" />
                        </Form.Group>
                    </Col>
                </Row>

                <Row className="g-3 mb-3">
                    <Col md={12}>
                        <Form.Group>
                            <Form.Label className="small text-white-50 ms-1">País</Form.Label>
                            <Form.Select 
                                name="pais" 
                                value={paisSeleccionado}
                                onChange={(e) => setPaisSeleccionado(e.target.value)}
                                disabled={entrega === 'retiro'} // Bloqueado si es retiro (forzado a Chile)
                                className="bg-dark text-white border-secondary py-2 shadow-none"
                            >
                                <option value="CL">Chile</option>
                                {entrega === 'envio' && <option value="AR">Argentina</option>}
                            </Form.Select>
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Label className="small text-white-50 ms-1">Documento</Form.Label>
                        <Form.Select name="tipoDocumento" className="bg-dark text-white border-secondary py-2 shadow-none">
                            {/* Depende de la opción según el país activo */}
                            <option value={infoDoc.label}>{infoDoc.label}</option>
                            <option value="PASS">PASAPORTE</option>
                        </Form.Select>
                    </Col>
                    <Col md={6}>
                        <Form.Label className="small text-white-50 ms-1">Nº Documento</Form.Label>
                        {/* Cambia marcadores de posición, RegEx y mensajes de error según el país */}
                        <Form.Control 
                            name="numDocumento" 
                            placeholder={infoDoc.placeholder} 
                            required 
                            pattern={infoDoc.pattern}
                            title={infoDoc.title}
                            className="bg-dark text-white border-secondary py-2 shadow-none" 
                        />
                    </Col>
                </Row>

                {entrega === 'envio' && (
                    <div className="mt-3">
                        <Row className="g-3 mb-3">
                            <Col md={9}>
                                <Form.Group>
                                    <Form.Label className="small text-white-50 ms-1">Calle / Avenida</Form.Label>
                                    <Form.Control name="direccion" placeholder="Nombre de la calle o avenida sin número." required className="bg-dark text-white border-secondary py-2 shadow-none" />
                                </Form.Group>
                            </Col>
                            <Col md={3}>
                                <Form.Group>
                                    <Form.Label className="small text-white-50 ms-1">Número</Form.Label>
                                    <Form.Control name="numero" placeholder="Nombre de la calle o avenida sin número." required className="bg-dark text-white border-secondary py-2 shadow-none" /> 
                                </Form.Group>
                            </Col>
                            <Col md={12}>
                                <Form.Group>   
                                    <Form.Label className="small text-white-50 ms-1">Detalles de ubicación</Form.Label>
                                    <Form.Control name="detallesDireccion" placeholder="Casa, apartamento, villa, oficina (opcional)" className="bg-dark text-white border-secondary py-2 shadow-none" />
                                </Form.Group> 
                            </Col>
                            <Col md={6}>
                                <Form.Group> 
                                    <Form.Label className="small text-white-50 ms-1">Código Postal</Form.Label>
                                    <Form.Control name="codigoPostal" placeholder="Código Postal" required className="bg-dark text-white border-secondary py-2 shadow-none" />
                                </Form.Group> 
                            </Col>
                            <Col md={6}>
                                <Form.Group> 
                                    <Form.Label className="small text-white-50 ms-1">Comuna / Ciudad</Form.Label>
                                    <Form.Control name="ciudad" placeholder="Comuna o región" required className="bg-dark text-white border-secondary py-2 shadow-none" />
                                </Form.Group> 
                            </Col>
                            <Col md={12}>
                                <Form.Group className="mb-3">
                                    <Form.Label className="small text-white-50 ms-1">Región</Form.Label>
                                    <Form.Control name="region" placeholder="Ciudad" required className="bg-dark text-white border-secondary py-2 shadow-none" />
                                </Form.Group> 
                            </Col>
                        </Row>
                    </div>
                )}
                
                <Form.Group className="mb-3">
                    <Form.Label className="small text-white-50 ms-1">Teléfono</Form.Label>
                    {/* Vinculado al objeto superior */}
                    <Form.Control 
                        name="telefono" 
                        type="tel"
                        placeholder={infoTel.placeholder} 
                        pattern={infoTel.pattern}
                        title={infoTel.title}
                        required 
                        className="bg-dark text-white border-secondary py-2 shadow-none" 
                    />
                </Form.Group>
            </section>

            {/* SECCIÓN PAGO */}
            <section className="mb-5">
                <h4 className="mb-4 fw-bold">Pago</h4>
                
                <div className="d-flex flex-column gap-2 mb-4">
                    <Button 
                        type="button"
                        variant={metodoPago === 'tarjeta' ? "info" : "outline-secondary"} 
                        className={`w-100 text-start py-3 px-4 fw-bold ${metodoPago === 'tarjeta' ? 'text-black' : 'text-white'}`}
                        onClick={() => setMetodoPago('tarjeta')}
                    >
                        💳 Tarjeta de Crédito
                    </Button>
                    
                    <Button 
                        type="button"
                        variant={metodoPago === 'deposito' ? "info" : "outline-secondary"} 
                        className={`w-100 text-start py-3 px-4 fw-bold ${metodoPago === 'deposito' ? 'text-black' : 'text-white'}`}
                        onClick={() => setMetodoPago('deposito')}
                    >
                        🏦 Depósito o Transferencia Bancaria
                    </Button>

                    <Button 
                        type="button"
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

                {metodoPago === 'tarjeta' && (
                    <div className="p-4 rounded border border-secondary bg-dark bg-opacity-25 animate__animated animate__fadeIn">
                        <Form.Group className="mb-3">
                            <Form.Label className="small text-white-50 ms-1">Número de tarjeta</Form.Label>
                            <Form.Control name="tarjetaNumero" type="text" inputMode="numeric" placeholder="0000000000000000" required minLength="15" maxLength="16" pattern="\d{15,16}" title="El número de tarjeta debe contener entre 15 y 16 dígitos puramente numéricos, sin espacios ni caracteres especiales." className="bg-dark text-white border-secondary py-2 shadow-none" />
                        </Form.Group>
                        <Row className="g-3 mb-3">
                            <Col md={6}>
                                <Form.Label className="small text-white-50 ms-1">Vencimiento</Form.Label>
                                <Form.Control name="tarjetaVencimiento" type="text" placeholder="MM/YY" required maxLength="5" pattern="^(0[1-9]|1[0-2])\/([0-9]{2})$" title="Formato de fecha inválido. Utiliza el formato MM/YY (Ejemplo: 08/29). El mes debe ser de 01 a 12." className="bg-dark text-white border-secondary py-2 shadow-none" />
                            </Col>
                            <Col md={6}>
                                <Form.Label className="small text-white-50 ms-1">CVV</Form.Label>
                                <Form.Control name="tarjetaCvv" type="text" inputMode="numeric" placeholder="123" required minLength="3" maxLength="4" pattern="\d{3,4}" title="El CVV debe tener exactamente 3 o 4 dígitos numéricos." className="bg-dark text-white border-secondary py-2 shadow-none" />
                            </Col>
                        </Row>
                        <Form.Group className="mb-3">
                            <Form.Label className="small text-white-50 ms-1">Nombre del titular</Form.Label>
                            <Form.Control name="tarjetaTitular" placeholder="Como aparece en la tarjeta" required className="bg-dark text-white border-secondary py-2 shadow-none" />
                        </Form.Group>
                        <Row className="g-3">
                            <Col md={6}>
                                <Form.Label className="small text-white-50 ms-1">Documento</Form.Label>
                                <Form.Select name="tarjetaTipoDoc" className="bg-dark text-white border-secondary py-2 shadow-none docTarjeta">
                                    <option value={infoDoc.label}>{infoDoc.label}</option>
                                    <option value="PASS">PASAPORTE</option>
                                </Form.Select>
                            </Col>
                            <Col md={6}>
                                <Form.Label className="small text-white-50 ms-1">Nº Documento</Form.Label>
                                <Form.Control 
                                    name="tarjetaNumDoc" 
                                    placeholder={infoDoc.placeholder} 
                                    required 
                                    pattern={infoDoc.pattern}
                                    title={infoDoc.title}
                                    className="bg-dark text-white border-secondary py-2 shadow-none numDocTarjeta" 
                                />
                            </Col>
                        </Row>
                    </div>
                )}

                {metodoPago === 'deposito' && (
                    <div className="p-4 rounded border border-info border-opacity-50 bg-info bg-opacity-10 animate__animated animate__fadeIn">
                        <p className="mb-0 small text-info">
                            <strong>Instrucciones:</strong> Al finalizar la compra, recibirás los datos bancarios en tu correo para realizar la transferencia. Tu pedido será procesado una vez confirmado el pago.
                        </p>
                    </div>
                )}

                {metodoPago === 'tienda' && (
                    <div className="p-4 rounded border border-info border-opacity-50 bg-info bg-opacity-10 animate__animated animate__fadeIn">
                        <p className="mb-0 small text-info">
                            Reserva tu pedido online y paga directamente en nuestra sucursal al momento de retirar. Aceptamos efectivo, débito y crédito en local.
                        </p>
                    </div>
                )}
            </section>
            
            {/* Botón oculto nativo que reacciona al click externo del contenedor */}
            <button id="submit-hidden-btn" type="submit" style={{ display: 'none' }}></button>
        </Form>
    );
};

export default CheckoutForm;