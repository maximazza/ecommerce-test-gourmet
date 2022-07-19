import ItemProduct from "../ItemProduct/ItemProduct"
const ItemContainer = ({section}) => {
    return(
        <div className="Item-Product">
            <h2>{section}</h2>
         <ItemProduct title="torta de durazno" price={1700} image={'torta de durazno.jpg'}/>
         <ItemProduct title="cheesecake" price={2000} image={'chessecake.jpg'} />
        </div>
    )
}
export default ItemContainer