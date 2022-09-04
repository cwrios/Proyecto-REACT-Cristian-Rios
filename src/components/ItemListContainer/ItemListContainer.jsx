import React, {useEffect, useState} from 'react';
import { BiMessageRoundedDetail } from 'react-icons/bi';
import Item from '../Item/Item';
import Swal from 'sweetalert2'
import productos  from '../../data/productos';
import ItemList from '../ItemList/ItemList';



const ItemListContainer = () => {
const [productosList, setProductosList] = useState([])

    const getProductos = () => new Promise((resolve, reject)=> {
        setTimeout(()=>resolve(productos), 2000)
    })
    useEffect(()=>{
        getProductos()
        .then(productos =>setProductosList(productos))
        .catch(error => console.log(error))
    }, [])





    function onAdd(count){
        Swal.fire(`Se han Seleccionado ${count} productos`)

        }

    return (
        <div>
            <ItemList productosList={productosList}/>
            {/* <Item/> */}

        </div>
    );
    }

export default ItemListContainer;
