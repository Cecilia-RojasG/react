import { useState } from "react"

const ItemCount = ({stock, onAdd}) => {
    const [count, setCount]=useState(1)
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
                <button className="btn btn-light w-100 py-2 text-muted border" disabled>
                    Agotado
                </button>
            )}
        </div>
    )
}
export default ItemCount