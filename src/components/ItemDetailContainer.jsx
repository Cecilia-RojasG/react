import React from 'react'
import { useState, useEffect } from 'react'
import { getOneProduct } from '../mock/asyncData'
import ItemDetail from './ItemDetail'
import Loader from './Loader'
import { useParams } from 'react-router-dom'
import { Spinner } from 'react-bootstrap'

const ItemDetailContainer = () => {
    const [detail, setDetail] = useState(null)
    const {id}= useParams()

    useEffect(()=>{
        setDetail(null)
        getOneProduct(id)
            .then((res)=> setDetail(res))
            .catch((error)=>console.log(error))
    },[id])
    if (!detail) {
        return <Loader text="Cargando detalles del producto..." />
    }

    return (
        <div>
            <ItemDetail detail={detail}/>
        </div>
    )
}

export default ItemDetailContainer
