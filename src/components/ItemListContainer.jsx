import { useState, useEffect } from "react"
import { getProducts } from "../mock/asyncData"
import ItemList from "./ItemList"
import Loader from "./Loader"
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

    // Lógica para generar un título dinámico
    const getTitle = () => {
        if (location.pathname === '/ofertas') return "🔥 ¡NUESTRAS OFERTAS! 🔥"
        if (location.pathname === '/novedades') return "✨ ÚLTIMAS NOVEDADES ✨"
        if (query) return `RESULTADOS PARA: "${query.toUpperCase()}"`
        
        if (type) {
            const nombreLimpio = titulosMundos[type.toLowerCase()] || type.toUpperCase()
            return `${greeting} de ${nombreLimpio}`
        }
        
        return "NUESTROS PRODUCTOS"
    }


    useEffect(()=>{
        setLoading(true)
        getProducts()
            .then((res) => {
                let productosFiltrados = res;
                
                if (location.pathname === '/ofertas') {
                    productosFiltrados = productosFiltrados.filter(p => p.descuento > 0);
                }
                else if (location.pathname === '/novedades') {
                    productosFiltrados = res.filter(p => p.novedad === 'si')
                }
                else if (type) {
                    productosFiltrados = productosFiltrados.filter(p => 
                        p.categoria?.toLowerCase() === type.toLowerCase() || 
                        p.mundo?.toLowerCase() === type.toLowerCase()
                    );
                }
                
                if (query) {
                    productosFiltrados = productosFiltrados.filter(p => 
                        p.nombre?.toLowerCase().includes(query.toLowerCase()) ||
                        p.autor?.toLowerCase().includes(query.toLowerCase()) ||
                        p.mundo?.toLowerCase().includes(query.toLowerCase()) ||
                        p.categoria?.toLowerCase().includes(query.toLowerCase())
                    );
                }
                setData(productosFiltrados);
            })
            .catch((err) => console.log(err))
            .finally(()=> setLoading(false))            
    }, [type, query, location.pathname]) 
    
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

