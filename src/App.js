import './App.scss';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import Local from './pages/Local';
import Products from './pages/Products';
import AboutUs from './pages/AboutUs';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemProduct from './components/ItemProduct/ItemProduct';
function App() {

  return (
    //jsx
    <BrowserRouter>
      <NavBar />
      <Routes>
      <Route path='img' element={<ItemListContainer/>}/>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/products' element={<ItemProduct/>}/>
        <Route path='/products/:id' element={<ItemDetailContainer/>}/>
        <Route path='/category/:categoryId' element={<ItemDetailContainer
        />}/>
        <Route path='/cart' element={<ItemListContainer/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path="/local" element={<Local/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/aboutus" element={<AboutUs/>}/>
      </Routes>
    </BrowserRouter>
  )
};
    
export default App;
