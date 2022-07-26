import ItemCount from '../ItemCount/ItemCount';
import './ItemProduct.scss';
const ItemProduct= ({data}) => {
    const {title,price,image,stock,id} = data
    const onAdd = (count) => {
        alert(`Has agregado ${count} cervezas 🍺`);
    };
return(
    <div>
        <img src={`/assets/${image}`} alt="Imagen producto" />
        <p>{title}</p>
        <p>{id}</p>
        <span>${price}</span>
        <p>stock:{stock}</p>
        <ItemCount stock={stock} onAdd={onAdd} initial={1}/>
    </div>
)
}
export default ItemProduct;