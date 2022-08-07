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
        <Link to="/"><li><button>Home</button></li></Link>
        <Link to="/productos"><li><button>Products</button></li></Link>
        <Link to="/nosotros"><li><button>AboutUs</button></li></Link>
        <Link to="/locales"><li><button>Local</button></li></Link>
      </ul>
        <CartWidget  />
    </div>    
    )
}

export default NavBar
    
    