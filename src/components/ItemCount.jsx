import { useState, useEffect } from "react"

const ItemCount = ({stock, onAdd}) => {
    // Inicializa en 0 si no hay stock, de lo contrario empieza en 1
    const [count, setCount] = useState(stock > 0 ? 1 : 0)
    useEffect(() => {
        if (stock === 0) {
            setCount(0)
        } else if (count === 0 && stock > 0) {
            setCount(1)
        } else if (count > stock) {
            setCount(stock) // Ajusta el número si el stock remanente es menor
        }
    }, [stock, count])

    const sumar = () => {
        if(count < stock){
            setCount(count + 1)
        } 
    }
    const restar = () => {
        if(count > 1){
            setCount(count - 1)
        }
    }
    const comprar = ()=> {
        onAdd(count)
    }
    return(
        <div className="d-flex flex-column gap-3" style={{ maxWidth: '150px' }}>
            {stock > 0 ? (
                <>
                    <div className="input-group border border-dark rounded" style={{ overflow: 'hidden' }}>
                        <button className="btn btn-outline-dark fw-bold shadow-none px-3" onClick={restar}>-</button>
                        <input 
                            type="text" 
                            className="form-control text-center bg-white fw-bold shadow-none" 
                            value={count} 
                            readOnly 
                        />
                        <button className="btn btn-outline-dark fw-bold shadow-none px-3" onClick={sumar}>+</button>
                    </div>
                    <button className="btn btn-dark w-100 py-2 fw-bold text-uppercase" style={{ letterSpacing: '1px' }} onClick={comprar}>Agregar al carrito</button>
                </>
            ) : (
                <>
                    <div className="input-group border text-muted rounded" style={{ overflow: 'hidden', opacity: 0.6 }}>
                        <button className="btn btn-light fw-bold px-3" disabled>-</button>
                        <input 
                            type="text" 
                            className="form-control text-center bg-light text-muted fw-bold shadow-none" 
                            value={0} 
                            readOnly 
                        />
                        <button className="btn btn-light fw-bold px-3" disabled>+</button>
                    </div>
                    <button className="btn btn-light w-100 py-2 fw-bold text-uppercase border" style={{ letterSpacing: '1px' }} disabled>
                        Sin Stock
                    </button>
                </>
            )}
        </div>
    )
}
export default ItemCount