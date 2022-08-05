import './App.scss';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import Locales from './pages/Locales';
import Productos from './pages/Productos';
import Nosotros from './pages/Nosotros';
function App() {

  return (
    //jsx
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/locales" element={<Locales/>}/>
        <Route path="/productos" element={<Productos/>}/>
        <Route path="/nosotros" element={<Nosotros/>}/>
      </Routes>
    </BrowserRouter>
  )
};
    
export default App;
