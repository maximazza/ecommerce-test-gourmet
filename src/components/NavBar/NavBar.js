import './NavBar.scss'
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return(
        <div className='navbar-primary'>
            <Link to="/"><img className='logo' src="/assets/icono de torta.webp" alt="icono de torta"/></Link>
            <ul>
                <Link to="/"><li><button>Inicio</button></li></Link>
                <Link to="/productos"><li><button>Productos</button></li></Link>
                <Link to="/aboutus"><li><button>About Us</button></li></Link>
                <Link to="/contacto"><li><button>Contacto</button></li></Link>
            </ul>
            <CartWidget />
        </div>
    )
}

export default NavBar
    
    