import ItemProduct from "../ItemProduct/ItemProduct"
const ItemListContainer = ({section}) => {
    const product1 = {
        title:"torta de durazno",
        price:1700,
         image:'img1.jpg',
         stock:20
     }
     const product2 = {
        title:"cheesecake",
         price:2000,
         image:'img2.jpg',
         stock:30
     }
    

    const handleSubmit = () => {console.log("Envio de info") }
    return(
        <div className="Item-Product">
            <h2>{section}</h2>
         <ItemProduct data={product1} action={handleSubmit}/>
         <ItemProduct data={product2} />
        </div>
    )
}
export default ItemListContainer