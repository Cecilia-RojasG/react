import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link, NavLink } from 'react-router-dom';
import SearchWidgetRI from "./SearchWidgetRI";
import CartWidgetRI from "./CartWidgetRI";
import "../css/NavbarReact.css"

function NavbarReact() {
    const [showMenu, setShowMenu] = useState(false)

    const handleClose = () => setShowMenu(false)
    const handleToggle = () => setShowMenu(true)

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1200) { 
                handleClose()
            }
        };

        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])
    
    return (
        <>
        {['xl'].map((expand) => (
            <Navbar bg="dark" data-bs-theme="dark" key={expand} expand={expand} className="bg-body-tertiary mb-0">
            <Container fluid>
                <Navbar.Brand as={NavLink} to="/" className="d-flex align-items-center">
                    <img
                        id='navbar-img'
                        alt="Logo redondo del Contemplador Feliz con dados"
                        src="/beholderdondo100.webp"
                        width="60"
                        height="60"
                        className="d-inline-block align-center"
                    />{' '}
                    <strong id='title-navbar'>EL CONTEMPLADOR FELIZ</strong>
                </Navbar.Brand>

                <div className="d-flex align-items-center gap-1 order-xl-last">
                    {/* Visible en celulares y tablets */}
                    <div className="d-xl-none" style={{ transform: 'scale(0.80)', transformOrigin: 'right center' }}>
                        <CartWidgetRI />
                    </div>

                    <Navbar.Toggle
                        className="custom-toggler"
                        aria-controls={`offcanvasNavbar-expand-${expand}`} 
                        onClick={handleToggle} 
                    />
                </div>
                <Navbar.Offcanvas 
                    show={showMenu}       
                    onHide={handleClose}  
                    bg="dark" 
                    data-bs-theme="dark"
                    id={`offcanvasNavbar-expand-${expand}`}
                    placement="end"
                    className="custom-nav-offcanvas"
                >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title className= 'title-off'>
                            PRODUCTOS
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="justify-content-end flex-grow-1 pe-3">   
                            <Nav.Link className='nav-link-custom' as={NavLink} to="/ofertas">OFERTAS</Nav.Link>
                            <Nav.Link className='nav-link-custom' as={NavLink} to="/categoria/libros">LIBROS</Nav.Link>
                            <Nav.Link className='nav-link-custom' as={NavLink} to="/categoria/mesa">JUEGOS DE MESA</Nav.Link>
                            <NavDropdown
                                title ="JUEGOS DE ROL"
                                id={`offcanvasNavbarDropdown-expand-${expand}`}
                            >
                            <NavDropdown.Item className='nav-link-custom' as={NavLink} to="/categoria/rol">
                                Ver todo Rol
                            </NavDropdown.Item>
                            <NavDropdown.Divider /> 
                            <NavDropdown.Item className='nav-link-custom' as={NavLink} to="/mundo/dnd">
                                Dungeons & Dragons
                            </NavDropdown.Item>
                            <NavDropdown.Item className='nav-link-custom' as={NavLink} to="/mundo/mdt">
                                Mundo de Tinieblas
                            </NavDropdown.Item>
                            <NavDropdown.Item className='nav-link-custom' as={NavLink} to="/mundo/cth">
                                Cthulhu
                            </NavDropdown.Item>
                            <NavDropdown.Item className='nav-link-custom' as={NavLink} to="/mundo/otro">
                                Otros
                            </NavDropdown.Item>
                            </NavDropdown>
                            <div className="d-xl-none w-100">
                                <SearchWidgetRI isMobile={true} />
                            </div>      
                            <div className="d-none d-xl-block ms-3">
                                <SearchWidgetRI isMobile={false} />
                            </div>
                            <div className="d-none d-xl-block ms-3">
                                <CartWidgetRI compras={0}/>
                            </div>
                            
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
            </Navbar>
        ))}
        </>
    );
    }

    export default NavbarReact;