import './App.scss';
import ItemContainer from './components/ItemContainer/ItemContainer';
import NavBar from './components/NavBar/NavBar';
import Modal from './components/Modal/Modal';
function App() {
  return (
    //jsx
    <div className="container">
      <NavBar />
      <div>  
        <ItemContainer section="Productos mas caros" />
        <ItemContainer section="Productos mas baratos"/>
        <ItemContainer section="Productos dulces"/>
      </div>
        <Modal title="MODAL DE REGISTRO">
        <ItemContainer section="Productos dulces"/>
        </Modal>
    </div>
  );
}

export default App;
