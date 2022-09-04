import React from 'react';
import Item from '../Item/Item';
const ItemList = (productosList) => {

// const ejemplo = productosList.map(prod=>prod.nombre)
// console.log(ejemplo)

    return (
        <div>
            
            { productosList.map(prod => <Item key={prod.id} nombre={prod.nombre} precio={prod.precio} stock={prod.stock} imagen={prod.imagen}/>) }
            
        </div>
    );
}

export default ItemList;
