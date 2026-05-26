import { useState, useEffect } from "react"
import ItemList from "./ItemList"
import Loader from "./Loader"
import {collection, getDocs, where, query} from "firebase/firestore"
import {db} from "../service/firebase"
import { useParams, useLocation } from 'react-router-dom';
import '../css/ItemListContainer.css'

const ItemListContainer = ({greeting = "Catálogo"})=> {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const { type, query }= useParams()
    const location = useLocation()
    
    const titulosMundos = {
        'dnd': 'Dungeons & Dragons',
        'mdt': 'Mundo de Tinieblas',
        'cth': 'Cthulhu',
        'otro': 'Otros Juegos',
        'mesa': 'Juegos de Mesa',
        'rol': 'Juegos de Rol',
        'libros': 'Libros'
    }
    
    const cleanQuery = query?.toLowerCase().trim()
    const esBusquedaOferta = ['oferta', 'ofertas', 'descuento', 'descuentos'].includes(cleanQuery)
    const esBusquedaNovedad = ['novedad', 'novedades', 'nuevo', 'nuevos'].includes(cleanQuery)

    // Lógica para generar un título dinámico
    const getTitle = () => {
        if (location.pathname === '/ofertas'|| esBusquedaOferta) return "🔥 ¡NUESTRAS OFERTAS! 🔥"
        if (location.pathname === '/novedades'|| esBusquedaNovedad) return "✨ ÚLTIMAS NOVEDADES ✨"
        if (query) return `RESULTADOS PARA: "${query.toUpperCase()}"`
        
        if (type) {
            const nombreLimpio = titulosMundos[type.toLowerCase()] || type.toUpperCase()
            return `${greeting} de ${nombreLimpio}`
        }
        
        return "NUESTROS PRODUCTOS"
    }


    useEffect(()=>{
        setLoading(true)
        const productsCollection = collection(db, "items")
        // Ejecuta la consulta de Firebase y un temporizador en paralelo
        Promise.all([
            getDocs(productsCollection), new Promise(resolve => setTimeout(resolve, 1000)) 
        ])    
            .then(([res]) => {
                const list= res.docs.map((doc)=>{
                    return{
                        id:doc.id,
                        ...doc.data()
                    }
                })
                // Para evitar agregar productos que no tengan nombre válido
                const listaConNombresValidos = list.filter(p => p.nombre && p.nombre.trim() !== "");
                let productosFiltrados = listaConNombresValidos;
                
                if (location.pathname === '/ofertas' || esBusquedaOferta) {
                    productosFiltrados = productosFiltrados.filter(p => p.descuento > 0);
                }
                else if (location.pathname === '/novedades' || esBusquedaNovedad) {
                    productosFiltrados = productosFiltrados.filter(p => p.novedad === 'si')
                }
                else if (type) {
                    productosFiltrados = productosFiltrados.filter(p => 
                        p.categoria?.toLowerCase() === type.toLowerCase() || 
                        p.mundo?.toLowerCase() === type.toLowerCase()
                    );
                }
                
                if (query && !esBusquedaOferta && !esBusquedaNovedad) {
                    productosFiltrados = productosFiltrados.filter(p => 
                        p.nombre?.toLowerCase().includes(cleanQuery) ||
                        p.autor?.toLowerCase().includes(cleanQuery) ||
                        p.mundo?.toLowerCase().includes(cleanQuery) ||
                        p.categoria?.toLowerCase().includes(cleanQuery)
                    );
                }
                setData(productosFiltrados);
            })
            .catch((err) => console.log(err))
            .finally(()=> setLoading(false))            
    }, [type, query, location.pathname, esBusquedaOferta, esBusquedaNovedad, cleanQuery]) 
    
    if (loading) {
        return <Loader text={type ? `Cargando ${type}...` : 'Cargando productos...'} />
    }

    return(
        <main className="main-container">
            <h2 className="section-title">
                {getTitle()}
            </h2>
            <div className="contenedor-productos">
                {data.length > 0 ? (
                    <ItemList data={data}/> 
                ) : (
                    <div className="text-center mt-5 py-5">
                        <h3 className="text-white">Lo sentimos, no encontramos productos en esta sección.</h3>
                        <p className="text-white">Intenta con otra categoría o palabra clave.</p>
                    </div>
                )}
            </div>
        </main>
    )
}
export default ItemListContainer

