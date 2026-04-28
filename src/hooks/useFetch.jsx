import {useState, useEffect} from "react"
export const useFetch= (url)=> {
    const [data, setData]= useState(null)
    const [loading, setloading]= useState(true)
    const [error, setError]= useState(null)

    useEffect(()=>{
        setloading(true)
        fetch(url)
        .then((res)=> res.json())
        .then((info)=> setData(info))
        .catch((err)=> setError(err))
        .finally(()=> setloading(false))
    },[url]);
    return {data, loading, error}
}