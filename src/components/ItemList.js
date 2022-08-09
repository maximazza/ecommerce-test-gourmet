import React, { useEffect, useState} from 'react';
//import {useParams} from 'react';
import ItemProduct from "./ItemProduct/ItemProduct";
import { productList } from '../data/data.js';

const ItemList = () => {
 //const{categoryId} = useParams();

  const [products, setProductsFromDB] = useState([]);

  //const filterByCategory = productList.filter((productList) => productList.category === categoryId);
  const getProducts= new Promise((resolve, reject) => {
    setTimeout(() => {
      if(true){
        resolve(productList);
        } else{
          reject();
        }
      }, 200);
    });

    const getProductsFromDB = async () => {
      try {
        const result = await getProducts;
        setProductsFromDB(result);
      } catch (error) {
        console.error(error);
        alert('No podemos mostrar los productos en este momento');
      }
    };
    useEffect(() => {
      getProductsFromDB();
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