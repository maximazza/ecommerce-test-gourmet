import './NavBar.scss'
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'
const NavBar = () => {
    return(
    <div className="navbar-primary">
      <div className="logo">
      <img src="/assets/icono de torta.webp" alt="icono de torta" />
      </div>
      <ul>
        <Link to="/"><li><button>Inicio</button></li></Link>
        <Link to="/productos"><li><button>Productos</button></li></Link>
        <Link to="/nosotros"><li><button>Nosotros</button></li></Link>
        <Link to="/locales"><li><button>Locales</button></li></Link>
      </ul>
        <CartWidget  />
    </div>    
    )
}

export default NavBar
    
    