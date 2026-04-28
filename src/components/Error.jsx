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
            padding: '10px',
            gap:'10px'
        }}>
            <img alt='Error' src='/404.webp'
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
