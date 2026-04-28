import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Footer.css';

const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="container-fluid d-flex justify-content-between align-items-center flex-wrap px-5">
                
                <div className="d-flex flex-column align-items-start">
                    <div className="footer-brand">
                        <p className="mb-1">© 2026 CECILIA ROJAS</p>
                    </div>
                    <div className="footer-links">
                        <Link to="/reembolso">Política de reembolso</Link>
                        <Link to="/privacidad">Política de privacidad</Link>
                        <Link to="/terminos">Términos del servicio</Link>
                        <Link to="/envio">Política de envío</Link>
                    </div>
                </div>

                <div className="footer-payments d-flex gap-3 mt-3 mt-md-0">
                    <img src="/img/tarjetas/visa.svg" alt="Visa" className="payment-icon" />
                    <img src="/img/tarjetas/mastercard.svg" alt="Mastercard" className="payment-icon" />
                    <img src="/img/tarjetas/diners.svg" alt="Diners Club" className="payment-icon" />
                    <img src="/img/tarjetas/american.svg" alt="American Express" className="payment-icon" />
                </div>

            </div>
        </footer>
    )
}

export default Footer;