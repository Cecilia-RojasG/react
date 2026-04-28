import React from 'react'
import ItemCard from './ItemCard'

const ItemList = ({data}) => {
    return (
        <div style={{display:'flex', justifyContent: 'center', alignItems:'center', flexWrap:'wrap'}}>
            {data.map((producto)=> <ItemCard key={producto.id} producto={producto}/>)}
        </div>
    )
}

export default ItemList
