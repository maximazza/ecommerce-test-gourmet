import React from 'react';
import{useState} from 'react';
import './ItemCount.scss';
const ItemCount = ({initial,stock,onAdd}) =>{
    const [count,setCount] = useState(initial);
    const addProduct = (num) =>{
        setCount(count + num)   
    }
return(
    <div className='countProduct'>
        <div className='countProd'>
            <button
                className='count-button'
                onClick={()=> addProduct(-1)}
                disabled={count=== initial ? true : null}
                >
                    -
            </button>
            <span className="count-container__count">{count}</span>
      
            <button 
                className='count-button'
                onClick={()=> addProduct(+1)}
                disabled={count=== stock ? true : null}
                >
                    +
            </button>
        </div>  
            <button
                className="button-agregar"
                onClick={() => onAdd(count)}
                disabled={stock === 0 ? true : null}
            >
                Agregar
            </button>
    </div>
    );
};
export default ItemCount;