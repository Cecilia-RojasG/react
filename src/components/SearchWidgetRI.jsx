import { useState } from 'react';
import { BsSearch } from "react-icons/bs";
import { Offcanvas, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import "../css/SearchWidgetRI.css";

const SearchWidgetRI = ({ isMobile = false }) => {
    const [show, setShow] = useState(false)
    const [inputValue, setInputValue] = useState("")
    const navigate = useNavigate()
    const [error, setError] = useState(false) 

    const handleClose = () => {
        setShow(false)
        setError(false) 
    }
    const handleShow = () => setShow(true)
    
    const handleSearch = (e) => {
        e.preventDefault()
        if (inputValue.trim().length >= 3) {
            navigate(`/search/${inputValue}`) 
            setShow(false) 
            setInputValue("")
            setError(false)
        }else {
            setError(true)
        }
    }
    if (isMobile) {
        return (
            <div className="py-3 my-2 border-top border-bottom border-secondary">
                <Form className="d-flex flex-column gap-2" onSubmit={handleSearch}>
                    <Offcanvas.Title className="fw-bold search-title ">
                        BUSCAR PRODUCTO
                    </Offcanvas.Title>
                    <Form.Control
                        type="search"
                        placeholder="Buscar productos..."
                        className={`search-input bg-dark text-white shadow-none ${error ? 'is-invalid' : ''}`}
                        value={inputValue}
                        onChange={(e) => {
                            setInputValue(e.target.value);
                            if (e.target.value.trim().length >= 3) setError(false);
                        }}
                    />
                    {error && <p className="text-danger small mb-0">Mínimo 3 caracteres</p>}
                    <Button type="submit" variant="outline-info" className="w-100">BUSCAR</Button>
                </Form>
            </div>
        )
    }

    return (
        <>
            <div className="search-widget-container" onClick={handleShow} style={{ cursor: 'pointer' }}>
                <BsSearch className="search-icon" />
            </div>
            <Offcanvas show={show} onHide={handleClose} placement="end" data-bs-theme="dark">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title className="fw-bold search-title">
                        BUSCAR PRODUCTO
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Form className="d-flex flex-column gap-2" onSubmit={handleSearch}>
                        <Form.Control
                            type="search"
                            placeholder="Ej: Catan, Libros, Dungeons..."
                            // Si hay error, el borde se pone rojo 
                            className={`search-input shadow-none ${error ? 'is-invalid' : ''}`}
                            autoFocus
                            value={inputValue}
                            onChange={(e) => {
                                setInputValue(e.target.value)
                                if (e.target.value.trim().length >= 3) setError(false) 
                            }}
                        />
                        <div style={{ minHeight: '5px' }}> 
                            {error && (
                                <p className="text-danger small mt-1 mb-0">
                                    Debe ingresar al menos 3 caracteres.
                                </p>
                            )}
                        </div>
                        <Button type="submit" variant="outline-info" className="w-100 py-2 fw-bold">
                            BUSCAR
                        </Button>
                    </Form>
                    <div className="mt-4 text-muted small">
                        <p>Sugerencias:</p>
                        <ul>
                            <li>Novedades</li>
                            <li>Ofertas</li>
                        </ul>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
};

export default SearchWidgetRI;