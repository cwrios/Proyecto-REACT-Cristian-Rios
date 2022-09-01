import React, {useEffect, useState} from 'react';

const Item = () => {
    const [productos, setProductos] = useState([])
    useEffect(()=>{
        fetch("../productosjso/productos.json")
        .then((res)=> res.json())
        .then((response)=> console.log(response.results));        
        


    }, [])
}

export default Item;
