import ItemCount from './ItemCount'
import './ItemProduct.scss'
const ItemProduct= ({data,action}) => {
    const {title,price,image,stock} = data
return(
    <div>
        <img src={`/assets/${image}`} alt="Imagen producto" />
        <p>{title}</p>
        <span>${price}</span>
        <p>stock:{stock}</p>
        <ItemCount />
        <button onClick={action}>Comprar</button>
    </div>
)
}
export default ItemProduct