import React, { useEffect, useState , useParams } from 'react';
import ItemProduct from "./ItemProduct/ItemProduct";
import { productList } from '../data/data.js';

const ItemList = () => {
  const{categoryId} = useParams();

  const [products, setProductsFromDB] = useState([]);

  const filterByCategory = productList.filter((productList) => productList.category === categoryId);
  const getProductsFromDB = new Promise((resolve, reject) => {
    setTimeout(() => {
      if(categoryId){
        resolve(filterByCategory)
      }else{
        resolve(productList);
        }
      }, 200);
    });

  useEffect(() => {
    getProductsFromDB
    .then((res)=>{
      setProductsFromDB(res);
    })
    .catch((error)=>{
      console.log('fallo la llamada');
    })
    .finally(()=>{
    });

  }, []); 

  return (
    <div className="product-list-container">
      {
        products.length ? ( 
          <>
                <div>
                   {productList.map(product => <ItemProduct data={product}/>)}    
                  </div>
          </>
        ) : (
          <p>Cargando los Productos...</p>
        ) 
      }
    </div>
  );
};

export default ItemList;