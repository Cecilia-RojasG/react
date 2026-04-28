import { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import '../css/Carousel.css';

const BANNERS = [
    {
        id: 1,
        src: "/img/banners/banner1.png",
        alt: "Visita Nuestra Tienda",
        path: "/"
    },
    {
        id: 2,
        src: "/img/banners/banner2.png",
        alt: "Novedades",
        path: "/novedades"
    }
];


const CarrouselReact = () => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShow(true);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    if (!show) return <div style={{ height: '380px' }}></div>;

    return (
        
        <Carousel data-bs-theme="dark" fade className="mb-5 shadow custom-carousel">
            {BANNERS.map((banner) => (
                <Carousel.Item key={banner.id} interval={3000}>
                    <Link to={banner.path}>
                        <img
                            className="d-block w-100 carousel-img"
                            src={banner.src}
                            alt={banner.alt}
                            style={{ cursor: 'pointer' }}
                        />
                    </Link>
                </Carousel.Item>
            ))}
        </Carousel>
        
    );
}

export default CarrouselReact;