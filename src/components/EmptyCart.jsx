import React from 'react'
import { Link } from 'react-router-dom'

const EmptyCart = () => {
    return (
        <div className="container text-center py-5 mt-5">
            <h1 className="display-4 fw-bold text-white">Tu carrito está vacío! 😱</h1>
            <p className="lead text-white mb-4">Parece que aún no has elegido tu próxima aventura.</p>
            <Link to='/' className='btn btn-outline-info btn-lg px-5 shadow'>
                IR A LA TIENDA
            </Link>
        </div>
    )
}

export default EmptyCart