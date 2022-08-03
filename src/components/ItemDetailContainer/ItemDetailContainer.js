import ItemDetail from "../ItemDetail/ItemDetail"
import { useEffect } from "react"
import productList  from "../data/data"
import {useParams} from 'react-router-dom'

const ItemDetailContainer = () => {
   const[productList,setProductList] = useState({})
    const {id} = useParams()
    useEffect(() => {
        filterById()
    },[])

    const filterById = () => {
        productList.some((productList)=>{
            if(productList.id==id) {
                console.log('producto filtrado:',productList)
                setProductList(productList)
            }
        }
    )
    }

    return(
        <div className="container-item-detail">
            <h1>Detalle</h1>
            <ItemDetail data={productList} />
        </div>
    )
}
  
export default ItemDetailContainer