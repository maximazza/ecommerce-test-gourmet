import './App.scss';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Logo from './pages/Logo';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Detail from './pages/Detail';
import Checkout from './pages/Checkout';
import CartProvider from './context/CartContext'
import ItemListContainer from './components/ItemListContainer/ItemContainer';
import AboutUs from './pages/AboutUs';
function App() {

  return (
    //jsx
    <CartProvider>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Logo/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/contacto' element={<Contact/>}/>
        <Route path='/aboutus' element={<AboutUs/>}/>
        <Route path='/productos' element={<ItemListContainer />}/>
        <Route path='/productos/:id' element={<Detail/>}/>
        <Route path='/cart' element={<Checkout/>}/>
        <Route path="*" element={<h1>ERROR 404 -  pagina no encontrada</h1>}/>
      </Routes>
    </BrowserRouter>
    </CartProvider>
  )
};
    
export default App;
