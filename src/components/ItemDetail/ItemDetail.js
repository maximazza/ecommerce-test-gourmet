const ItemDetail = ({data}) => {
    return(
        <> 
        <div className="item-detail-image">
            <img src={`/assets/${data.image}`} alt="image" />
        </div>
        <div className="item-detail-info">
            <span>tortas</span>
            <h2>{data.title}</h2>
            <p></p>
        </div>
        </>
    )
}

export default ItemDetail