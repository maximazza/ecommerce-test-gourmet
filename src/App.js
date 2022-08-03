import './App.scss';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import Modal from './components/Modal/Modal';

function App() {
  return (
    //jsx
    <div className="container">
      <NavBar />
      <div>  
        <ItemListContainer section="Productos mas caros" />
        <ItemListContainer section="Productos mas baratos"/>
        <ItemListContainer section="Productos dulces"/>
      </div>
        <Modal title="MODAL DE REGISTRO">
        <ItemListContainer section="Productos dulces"/>
        </Modal>
    </div>
  )
};
    
   

export default App;
