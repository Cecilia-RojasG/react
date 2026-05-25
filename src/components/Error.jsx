import React from 'react'
import {Link} from 'react-router-dom'

const Error = () => {
    return (
        <div style={{
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
            gap:'20px'
        }}>
            <img alt='Error 404: Página no encontrada' src='/404.webp'
                style={{ 
                    width: '100%',      
                    maxWidth: '1300px',  
                    height: 'auto',     
                    objectFit: 'contain'
                }}
            />
            <Link to='/' className='btn btn-dark'>Volver a Home</Link>
        </div>
    )
}

export default Error
