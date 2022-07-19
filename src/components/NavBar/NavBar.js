import './NavBar.scss'
import CartWidget from './CartWidget'
const NavBar = () => {
    return(
    <div className="navbar-primary">
      <div className="logo">
      <img src="/assets/icono de torta.webp" alt="icono de torta" />
      </div>
      <ul>
        <li><button>Inicio</button></li>
        <li><button>Productos</button></li>
        <li><button>Nosotros</button></li>
        <li><button>Locales</button></li>
      </ul>
      
        <CartWidget  />
    </div> 
       
    )
}
export default NavBar
    
    