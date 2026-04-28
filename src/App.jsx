import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import MarqueeReact from "./components/MarqueeReact";
import NavBarRB from "./components/NavbarReact";
import CarouselReact from "./components/CarouselReact";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Error from "./components/Error";
import { CartProvider } from './context/CartContext';
import CartContainer from './components/CartContainer';
import Checkout from './components/Checkout';
import Footer from './components/Footer'; 


function App() {

  return (
    <BrowserRouter>
      <CartProvider>
        <div id="root">
          {/* Barra marquesina superior*/} 
          <MarqueeReact/>
          {/* Barra de navegacion */}
          <NavBarRB/>
          <main>
            <Routes>
              {/* Productos */}
              <Route path='/' element={
                <>
                  <CarouselReact />
                  <ItemListContainer/>
                </>
              }/>
              <Route path='/categoria/:type' element={<ItemListContainer greeting='Estás en la categoría '/>}/>
              <Route path='/mundo/:type' element={<ItemListContainer />} />
              <Route path='/item/:id' element={<ItemDetailContainer/>}/>
              <Route path='/ofertas' element={<ItemListContainer greeting='Grandes Ofertas'/>}/>
              <Route path="/novedades" element={<ItemListContainer greeting="Novedades" />} />
              <Route path='/cart' element={<CartContainer/>}/>
              <Route path='/checkout' element={<Checkout/>}/>
              {/* En caso de error */}
              <Route path='*' element={<Error/>}/>
              {/* Ruta para búsquedas dinámicas */}
              <Route path='/search/:query' element={<ItemListContainer greeting='Resultados para: '/>}/>
            </Routes>
          </main>
          <Footer />
        </div>
      </CartProvider>
    </BrowserRouter>
  )
}
export default App