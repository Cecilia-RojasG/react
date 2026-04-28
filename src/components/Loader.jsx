import React from 'react'
import { Spinner } from 'react-bootstrap'

const Loader = ({text}) => {
    return (
        <div style={{ 
            display: 'flex', 
            flexDirection: 'column',
            justifyContent: 'flex-start', 
            alignItems: 'center', 
            height: '70vh',
            color: '#66ffd4', 
            paddingTop: '10vh'
        }}>
            <Spinner 
                animation="grow" 
                role="status" 
                style={{ width: '3.5rem', height: '3.5rem', color: '#66ffd4' }} 
            />
            <span className="mt-3 fw-bold text-uppercase" style={{ letterSpacing: '2px' }}>
                {text}
            </span>
        </div>
    )
}

export default Loader