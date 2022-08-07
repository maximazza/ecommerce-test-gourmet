import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = (data) => {
    return(
        <> 
        <div className="item-detail-image">
        <img src={`/assets/${data.image}`} alt="Imagen producto" />
        </div>
        <div className="item-detail-info">
            <h2>{data.price}</h2>
            <h2>{data.title}</h2>
            <p>o 2 cuotas de $900 pagando con tarjeta de credito</p>
            <ItemCount initial={data.initial} stock={data.stock} />
            <spam>Envio Gratis</spam>
        </div>
        <div>
            <button>Comprar Ahora</button>
            <button>Añadir al Carrito</button>
        </div>
        </>
    )
}

export default ItemDetail;