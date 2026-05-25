import React from 'react'
import { useState, useEffect } from 'react'
import ItemDetail from './ItemDetail'
import Loader from './Loader'
import Error from './Error'
import { useParams } from 'react-router-dom'
import { doc, getDoc } from 'firebase/firestore'
import { db } from "../service/firebase"
import { Spinner } from 'react-bootstrap'

const ItemDetailContainer = () => {
    const [detail, setDetail] = useState(null)
    const [loading, setLoading] = useState(true)
    const [invalid, setInvalid] = useState(false)
    const {id}= useParams()

    useEffect(()=>{
        setLoading(true) //Se resetea el estado
        setInvalid(false) //Se resetea el estado
        setDetail(null) //Se resetea el estado

        const docRef = doc(db, "items", id) //Referencia

        getDoc(docRef) //Trae el documento
            .then((res)=>{
                if (res.exists()){
                    setDetail({id:res.id, ...res.data()})
                }else{
                    setInvalid(true)
                }
            })
            .catch((error)=>console.log(error))
            .finally(()=>setLoading(false))
    },[id])
    // Si el producto no existe en la base de datos muestra error
    if (invalid){
        return <Error/>
    }
    if (loading || !detail) {
        return <Loader text="Cargando detalles del producto..." />
    }

    return (
        <div>
            <ItemDetail detail={detail}/>
        </div>
    )
}

export default ItemDetailContainer
