import React from 'react';
import Contador from '../Contador/Contador';

const Item = () => {
    // nombre= 'Producto test',
    // precio=200,
    // stock=20,
    // imagen="https://www.segutecnica.com/images/000000000000005874215guardapolvo-polyester-segutecnica.png"

    productosList.map(prod => prod.nombre)
    
    return (
        
    <div className='card-container'>
        <h4>{nombre}</h4>
        <div>
            <img classname='img' src={imagen} alt={`imagen del producto ${nombre}`} />
        </div>
        <p className='price'>{precio}</p>
        <p>Stock: {stock}</p>
        <Contador stock={10} />
    
    </div>
        
    )
    }

export default Item;
